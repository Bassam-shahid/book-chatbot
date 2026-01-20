# Research: AI-Native Book Website

## Research Summary

This research document addresses all technical decisions and unknowns for the AI-Native Book Website implementation. The project will use Next.js 15 with App Router, Tailwind CSS, and MDX for content management, following the constitution requirements.

## Key Decisions

### 1. Framework Choice: Next.js 15 App Router vs Pages Router
- **Decision**: Next.js 15 App Router
- **Rationale**: App Router is the modern, recommended approach for new Next.js applications. It provides better performance, improved data fetching, and better component organization. It also aligns with the user's requirement to use Next.js 15.
- **Alternatives considered**:
  - Pages Router: Legacy approach, not recommended for new projects
  - Other frameworks (Remix, Gatsby): Would violate constitution principle of using standard web stack

### 2. Content Management: MDX vs Plain React
- **Decision**: MDX format
- **Rationale**: MDX allows for rich content with React components embedded, making it perfect for book content. It's easily updatable as required by the constitution. It provides the flexibility to include interactive elements while maintaining content in a readable format.
- **Alternatives considered**:
  - Plain React components: Less flexible for content updates
  - Static markdown: Would limit interactive capabilities
  - CMS solutions: Would violate constitution principle of avoiding external dependencies

### 3. Storage: localStorage vs Backend Solution
- **Decision**: localStorage for MVP
- **Rationale**: For the waitlist form, localStorage is sufficient for MVP requirements. It avoids complex backend infrastructure while still providing functionality. For production, a backend could be added later, but for initial implementation, localStorage meets the needs.
- **Alternatives considered**:
  - Backend with database: More complex, violates MVP approach
  - Third-party services (Firebase, etc.): Would violate constitution principle of avoiding external dependencies

### 4. UI Libraries: Tailwind + shadcn/ui vs Others
- **Decision**: Tailwind CSS and shadcn/ui components
- **Rationale**: These are specifically permitted by the constitution. Tailwind provides utility-first styling that's efficient and maintainable. shadcn/ui provides accessible, customizable components that match the premium design requirements.
- **Alternatives considered**:
  - Other UI libraries (Material UI, Chakra UI, etc.): Prohibited by constitution
  - Pure custom CSS: Would be more time-consuming without clear benefits

### 5. Theme Management: Dark/Light Mode Implementation
- **Decision**: Use next-themes library with Tailwind CSS
- **Rationale**: next-themes is lightweight, handles system preference detection, and works well with Next.js. Combined with Tailwind, it provides a clean implementation of the required dark/light mode functionality.
- **Alternatives considered**:
  - Custom theme solution: More complex to implement properly
  - CSS-only solution: Would not handle system preferences as well

### 6. MDX Integration with Next.js
- **Decision**: Use @next/mdx and @mdx-js/loader packages
- **Rationale**: These are the official packages for MDX integration with Next.js, providing the best compatibility and support. They allow for proper SSR/SSG of MDX content.
- **Alternatives considered**:
  - Custom MDX processing: More complex and error-prone
  - Alternative MDX libraries: Would not integrate as well with Next.js

### 7. Chapter Navigation and Progress Tracking
- **Decision**: Client-side progress tracking with scroll-based detection
- **Rationale**: This provides a smooth user experience without requiring backend storage of progress. It meets the requirements for chapter navigation and progress bar functionality.
- **Alternatives considered**:
  - Backend progress tracking: Overkill for MVP, requires authentication
  - URL-based progress: Less smooth user experience

## Architecture Considerations

### Performance Optimization
- Implement proper code splitting with Next.js dynamic imports
- Use image optimization features of Next.js
- Implement lazy loading for MDX content
- Minimize bundle size to meet <150KB requirement

### Accessibility
- Follow WCAG 2.1 AA guidelines
- Implement proper ARIA attributes
- Ensure keyboard navigation works throughout
- Support screen readers

### Mobile-First Design
- Implement responsive design with Tailwind's mobile-first approach
- Optimize touch interactions
- Ensure proper font sizing on mobile devices
- Optimize for various screen sizes (320px to 768px as specified)

## Technical Implementation Notes

### Project Structure
- Use Next.js App Router structure with clear separation of concerns
- Organize content in /content/chapters/ directory as required by constitution
- Create reusable components in /components/ directory
- Use TypeScript with strict mode as required by constitution

### Content Organization
- Each of the 5 chapters will have 2 topics as specified
- Content will be stored as individual MDX files
- Each MDX file will include proper metadata for navigation
- Implement content loader to dynamically load MDX files

### Deployment Strategy
- Deploy to Vercel as required by constitution
- Use Vercel's Next.js optimization features
- Implement proper caching strategies
- Set up custom domain if needed