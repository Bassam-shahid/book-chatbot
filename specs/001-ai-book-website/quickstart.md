# Quickstart Guide: AI-Native Book Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Getting Started

### 1. Clone and Setup
```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install
# or
yarn install
```

### 2. Project Structure
The project follows Next.js App Router structure:
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions
├── types/               # TypeScript definitions
├── content/             # MDX content files
└── styles/              # Global styles
```

### 3. Development Server
```bash
# Start the development server
npm run dev
# or
yarn dev

# The application will be available at http://localhost:3000
```

## Key Features Setup

### MDX Content Integration
1. Add new MDX files to the `content/chapters/` directory
2. Each chapter should follow the naming convention: `chapter-{number}-topic-{number}.mdx`
3. The Book page will automatically load and display all content from this directory

### Theme Management
1. The application supports both light and dark themes
2. Theme preference is stored in localStorage
3. System preference is detected automatically
4. Use the theme toggle component to switch between themes

### Chapter Navigation
1. The Book page includes a table of contents with all 5 chapters and 2 topics each
2. Progress tracking shows reading progress
3. Smooth scrolling navigation between sections

## Adding Content

### Creating New Chapters
1. Create new MDX files in `content/chapters/`
2. Follow the naming pattern: `chapter-{1-5}-topic-{1-2}.mdx`
3. Add proper frontmatter with title and metadata
4. Example:
```mdx
---
title: "Chapter 1 Topic 1: Introduction to AI-Native Development"
chapter: 1
topic: 1
---

# Introduction to AI-Native Development

Your content here...
```

### Content Requirements
- Each chapter must have exactly 2 topics (10 total topics)
- Content should be in MDX format for rich interactivity
- Follow accessibility guidelines for all content

## Running Tests

```bash
# Run unit tests
npm test
# or
yarn test

# Run linting
npm run lint
# or
yarn lint

# Run type checking
npm run type-check
# or
yarn type-check
```

## Building for Production

```bash
# Build the application
npm run build
# or
yarn build

# The build will be optimized for performance
# Bundle size should remain under 150KB as per requirements
```

## Deployment

### Deploy to Vercel
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically detect and build your Next.js application
4. Configure environment variables if needed

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Public URL of the site
- `NEXT_PUBLIC_BASE_PATH` - Base path if deployed to subdirectory (optional)

## Performance Optimization

### Bundle Size Management
- Monitor bundle size with `npm run analyze` or `yarn analyze`
- Use code splitting for large components
- Optimize images with Next.js Image component
- Remove unused dependencies

### Performance Targets
- First Contentful Paint (FCP) < 1.5 seconds
- Bundle size < 150KB (excluding images)
- Good Core Web Vitals scores

## Troubleshooting

### Common Issues
- **MDX not rendering**: Ensure all MDX dependencies are installed
- **Theme not persisting**: Check localStorage permissions
- **Content not loading**: Verify file paths in content directory
- **Performance issues**: Use Next.js performance monitoring tools

### Development Tips
- Use `console.log` for debugging during development
- Enable React DevTools for component inspection
- Use Next.js development warnings to catch issues early
- Test on multiple devices for responsive design