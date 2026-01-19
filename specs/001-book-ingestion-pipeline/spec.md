# Feature Specification: Book Content Ingestion Pipeline and API

**Feature Branch**: `001-book-ingestion-pipeline`
**Created**: 2026-01-01
**Status**: Draft
**Input**: User description: "sp.specify

Feature: Book Content Ingestion Pipeline and API

Description:
Implement a complete, secure, and async ingestion system to load the published book's text content into the RAG backend. This is the foundational step that enables the chatbot to answer questions accurately using only the book's knowledge.

The system must connect to:
- Neon Serverless Postgres for storing document metadata and chunk mappings
- Qdrant Cloud (Free Tier) for storing vector embeddings

User Stories:
- ing and logging on failures (embedding, DB, vector store)

Technical Implementation Details:
- Async FastAPI endpoint
- Chunking: use recursive splitter (split on [\"\\n\\n\", \"\\n\", \" \", \"\"]) with chunk_size=1200, chunk_overlap=200 (token-aware if possible)
- Embedding client: OpenAI client (configurable model via settings)
- Qdrant client:
  - URL: https://4782149d-3ad2-4a8f-974e-36af38f52aef.europe-west3-0.gcp.cloud.qdrant.io
  - API Key from environment variable: QDRANT_API_KEY
  - Collection: \"book_chunks\" (create if not exists, vector size 1536 for text-embedding-3-small)
  - Payload: { \"text\": chunk_text, \"book_title\": title, \"chunk_index\": i }
- Postgres (Neon):
  - Connection string from env: NEON_DATABASE_URL
  - Tables to create:
    - documents (id UUID PK, title TEXT UNIQUE, ingested_at TIMESTAMP)
    - chunks (id UUID PK, document_id FK, chunk_index INT, chunk_text TEXT, qdrant_point_id UUID)
- Use SQLAlchemy 2.0 async + asyncpg
- All credentials loaded via Pydantic Settings (BaseSettings) from .env
- Service: IngestionService with methods: chunk_text(), embed_chunks(), store_in_qdrant(), store_metadata_in_postgres()

Environment Variables Required (to be set in .env):
- NEON_DATABASE_URL=postgresql+asyncpg://neondb_owner:...@ep-damp-heart-a4qy3h6y-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
- QDRANT_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.zTPcin5UZnoHhDIRy078vDzqvL3fxhIjiXGsqfUHeeA
- QDRANT_URL=https://4782149d-3ad2-4a8f-974e-36af38f52aef.europe-west3-0.gcp.cloud.qdrant.io
- OPENAI_API_KEY=your_openai_key_here (required for embeddings & later chat)
- COHERE_API_KEY=D8FK5324Jl2oG52lmWBDOBR4PF4Pxwg7tDHSJWHs (optional, for future alternative embeddings)

Security:
- Endpoint protected by API key (X-API-Key header, value from ADMIN_API_KEY env var)
- Rate limiting optional but recommended

Deliverables:
- routers/admin_router.py (or ingest_router.py)
- schemas/ingest.py (Pydantic models: IngestRequest, IngestResponse)
- services/ingestion_service.py
- repositories/postgres_chunk_repo.py
- repositories/qdrant_vector_repo.py
- config/settings.py (Pydantic BaseSettings)
- database/models.py + migration (Alembic recommended)
- tests/unit/test_ingestion_service.py
- tests/integration/test_ingest_endpoint.py

Out of Scope (for this feature):
- PDF file upload/extraction
- Multiple books
- Streaming progress updates
- Cohere embeddings (keep OpenAI as primary)

Acceptance Criteria:
-"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Book Content Ingestion (Priority: P1)

As an admin/developer, I want to upload the complete book text to the system so that the RAG chatbot can answer questions based on the book's content.

**Why this priority**: This is the foundational capability that enables the entire RAG system - without ingested content, the chatbot cannot function as intended.

**Independent Test**: Can be fully tested by uploading a sample book text file and verifying it appears in the system's content repository, delivering the ability to query against the ingested content.

**Acceptance Scenarios**:

1. **Given** an authenticated admin user with proper permissions, **When** they upload a complete book text file via the API endpoint, **Then** the system processes and stores the content for RAG retrieval
2. **Given** a book text file with valid content, **When** the ingestion API processes it, **Then** the content is properly chunked, embedded, and stored in both vector database and metadata store

---

### User Story 2 - Content Availability Verification (Priority: P2)

As an admin/developer, I want to verify that book content has been successfully ingested so that I can confirm the chatbot will have access to the correct information.

**Why this priority**: Critical for ensuring the system is properly configured and ready for user interactions.

**Independent Test**: Can be tested by ingesting content and then verifying its availability through system status checks or direct query of the stored content.

**Acceptance Scenarios**:

1. **Given** a successfully ingested book, **When** I check the system status, **Then** the book appears in the list of available content sources
2. **Given** a book that failed during ingestion, **When** I check the system status, **Then** appropriate error information is available for troubleshooting

---

### User Story 3 - Failure Handling and Logging (Priority: P3)

As an admin/developer, I want the system to properly handle and log failures during ingestion (embedding, database, vector store) so that I can diagnose and resolve issues.

**Why this priority**: Essential for maintaining system reliability and providing visibility into potential problems during the ingestion process.

**Independent Test**: Can be tested by simulating various failure scenarios during the ingestion process and verifying that appropriate logs are generated and errors are handled gracefully.

**Acceptance Scenarios**:

1. **Given** a failure during the embedding process, **When** the ingestion service encounters the error, **Then** the system logs the error and provides a clear error message
2. **Given** a failure during database storage, **When** the ingestion service attempts to store metadata, **Then** the system handles the error gracefully and provides diagnostic information

---

## Edge Cases

- What happens when a very large book (100MB+) is uploaded that exceeds typical processing limits?
- How does the system handle books with special characters, multiple languages, or unusual formatting?
- What occurs when the same book is uploaded multiple times - does it create duplicates or update existing content?
- How does the system handle corrupted or malformed text files?
- What happens if the Qdrant vector store is temporarily unavailable during ingestion?
- How does the system handle partial failures during the multi-step ingestion process?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a secure API endpoint for uploading book content in text format
- **FR-002**: System MUST process uploaded book content through chunking with recursive splitting on [\"\\n\\n\", \"\\n\", \" \", \"\"], chunk_size=1200, chunk_overlap=200
- **FR-003**: System MUST generate embeddings for each content chunk using OpenAI embedding models
- **FR-004**: System MUST store content chunks in Qdrant vector database for efficient similarity search
- **FR-005**: System MUST store document metadata and chunk mappings in Neon Postgres database
- **FR-006**: System MUST authenticate and authorize users via API key before allowing content ingestion
- **FR-007**: System MUST validate the format and size of uploaded content before processing
- **FR-008**: System MUST handle and log failures during embedding, database storage, and vector storage operations
- **FR-009**: System MUST create appropriate database tables (documents, chunks) if they don't exist
- **FR-010**: System MUST store document metadata including title, ingestion timestamp, and unique identifier

### Key Entities

- **Document**: The complete book that is being ingested, with metadata such as title, ingestion timestamp, and unique identifier
- **Content Chunk**: A segment of the book text that has been processed and embedded for vector storage, with relationships to its parent document
- **Embedding**: Vector representation of a content chunk used for semantic similarity search in the Qdrant vector store
- **Metadata**: Information about the document and its chunks stored in the PostgreSQL database, including relationships between documents and their chunks

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Admin users can successfully upload book content up to 50MB in size with 95% success rate
- **SC-002**: Content ingestion process completes within 15 minutes for a 500-page book (approximately 250KB of text)
- **SC-003**: 98% of ingestion attempts result in properly stored content with no data corruption
- **SC-004**: System provides clear error messages and logging for 100% of failed ingestion attempts
- **SC-005**: Content retrieval accuracy for relevant queries reaches 90% or higher based on similarity matching
- **SC-006**: Ingestion endpoint handles concurrent uploads from multiple admin users without conflicts