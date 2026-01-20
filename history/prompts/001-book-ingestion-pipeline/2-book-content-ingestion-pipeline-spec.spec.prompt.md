---
id: 2
title: Book Content Ingestion Pipeline Spec
stage: spec
date: 2026-01-01
surface: agent
model: claude-sonnet-4-5-20250929
feature: book-ingestion-pipeline
branch: 001-book-ingestion-pipeline
user: dell
command: sp.specify
labels: ["spec", "ingestion", "rag", "api"]
links:
  spec: specs/001-book-ingestion-pipeline/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-book-ingestion-pipeline/spec.md
  - specs/001-book-ingestion-pipeline/checklists/requirements.md
tests:
  - none
---

## Prompt

```
sp.specify

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
- Chunking: use recursive splitter (split on ["\\n\\n", "\\n", " ", ""]) with chunk_size=1200, chunk_overlap=200 (token-aware if possible)
- Embedding client: OpenAI client (configurable model via settings)
- Qdrant client:
  - URL: https://4782149d-3ad2-4a8f-974e-36af38f52aef.europe-west3-0.gcp.cloud.qdrant.io
  - API Key from environment variable: QDRANT_API_KEY
  - Collection: "book_chunks" (create if not exists, vector size 1536 for text-embedding-3-small)
  - Payload: { "text": chunk_text, "book_title": title, "chunk_index": i }
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
```

## Response snapshot

Created a comprehensive specification for the Book Content Ingestion Pipeline and API feature. The specification includes:

- Three user stories with priorities (P1-P3) covering content ingestion, availability verification, and failure handling
- Detailed functional requirements (FR-001 through FR-010) covering the complete ingestion pipeline
- Key entities: Document, Content Chunk, Embedding, and Metadata
- Success criteria with measurable outcomes (SC-001 through SC-006)
- Edge cases for handling large files, special characters, duplicate uploads, and system failures

The specification follows the template structure and focuses on user value without implementation details. A quality checklist was also created to validate the specification.

## Outcome

- ✅ Impact: Created complete feature specification for book ingestion pipeline
- 🧪 Tests: No tests required for specification creation
- 📁 Files: Created spec.md and requirements.md checklists
- 🔁 Next prompts: Plan the implementation with /sp.plan
- 🧠 Reflection: Specification covers all aspects of the ingestion pipeline with clear acceptance criteria

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS - Specification meets all requirements
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin implementation planning