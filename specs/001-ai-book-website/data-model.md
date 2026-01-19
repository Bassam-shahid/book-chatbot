# Data Model: AI-Native Book Website

## Entities

### Book Content
- **Name**: Book Content
- **Description**: The main book content organized into chapters and topics
- **Fields**:
  - id: string (unique identifier for the chapter/topic)
  - title: string (title of the chapter or topic)
  - content: string (MDX formatted content)
  - chapterNumber: number (chapter sequence number 1-5)
  - topicNumber: number (topic sequence number 1-2 within chapter)
  - slug: string (URL-friendly identifier)
  - metadata: object (additional content metadata)
- **Relationships**: None
- **Validation**:
  - title and content must not be empty
  - chapterNumber must be between 1-5
  - topicNumber must be between 1-2
  - slug must be unique

### User Preferences
- **Name**: User Preferences
- **Description**: User's selected theme (light/dark mode) and reading progress
- **Fields**:
  - theme: string ('light' or 'dark')
  - readingProgress: object (progress tracking data)
  - lastReadChapter: number (last chapter number read)
  - lastReadTopic: number (last topic number read within chapter)
- **Relationships**: None
- **Validation**:
  - theme must be 'light' or 'dark'
  - readingProgress must be a valid progress object

### Waitlist Entry
- **Name**: Waitlist Entry
- **Description**: User's contact information submitted through the waitlist form
- **Fields**:
  - email: string (user's email address)
  - timestamp: Date (when the entry was created)
  - status: string ('pending', 'confirmed', 'removed')
- **Relationships**: None
- **Validation**:
  - email must be a valid email format
  - timestamp is automatically generated
  - status defaults to 'pending'

## State Transitions

### Waitlist Entry States
- **Initial**: 'pending' when form is submitted
- **Transition**: Can be changed to 'confirmed' or 'removed' (though in MVP implementation, it just gets saved to localStorage)

## Data Flow

### Content Loading
1. Book content is loaded from MDX files in /content/chapters/
2. Content is parsed and made available to the Book page
3. Progress tracking is updated based on user scrolling

### User Preference Management
1. Theme preference is loaded from localStorage or system preference
2. Theme is applied to the entire application
3. Reading progress is tracked and stored in localStorage

### Waitlist Submission
1. User submits form with email address
2. Entry is validated
3. Entry is stored in localStorage with timestamp