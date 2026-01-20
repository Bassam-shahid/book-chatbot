# Implementation Plan: AI-Native Book Website

**Branch**: `001-ai-book-website` | **Date**: 2025-12-29 | **Spec**: [link to spec](./spec.md)
**Input**: Feature specification from `/specs/001-ai-book-website/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implementation of a premium Next.js 15 (App Router) + Tailwind + MDX book website featuring 5 chapters with 2 topics each. The site will include Home, Book, About, and Contact pages with mobile-first design, dark/light mode, and smooth scrolling experience. Content will be managed in MDX format for easy updates, with localStorage for waitlist functionality.

## Technical Context

**Language/Version**: TypeScript 5.3+ with Next.js 15 App Router
**Primary Dependencies**: Next.js 15, React 18, Tailwind CSS, shadcn/ui, MDX, @mdx-js/react
**Storage**: Browser localStorage for waitlist form (MVP approach)
**Testing**: Jest, React Testing Library for unit/integration tests
**Target Platform**: Web application (SSR/SSG with Next.js) targeting modern browsers
**Project Type**: Single web application with 4 pages (Home, Book, About, Contact)
**Performance Goals**: First Contentful Paint under 1.5 seconds, bundle size under 150KB
**Constraints**: Mobile-first responsive design, accessible components, MDX content management
**Scale/Scope**: Static content site with 5 chapters, each with 2 topics (10 total topics)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on constitution principles:
- ✅ Zero External UI Libraries: Will use only Tailwind CSS and shadcn/ui as permitted
- ✅ Mobile-First Glassmorphism Design: Will implement mobile-first responsive approach with glassmorphism/gradient design
- ✅ MDX Content Management: Will use MDX format for all book content as required
- ✅ Dark/Light Mode Toggle: Will implement theme switching with preference persistence
- ✅ Lightning Fast Performance: Target FCP <1.5s and bundle size <150KB as required
- ✅ Full Accessibility Compliance: Will ensure ARIA attributes and keyboard navigation support
- ✅ Technical Standards: TypeScript strict mode, reusable components, content in /content/chapters/
- ✅ Page Structure Limitation: Will implement exactly 4 pages (Home, Book, About, Contact)
- ✅ Content Structure: Will create 5 chapters with 2 topics each as required
- ✅ Deployment Requirement: Will deploy on Vercel platform as required

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

public/
├── favicon.ico
└── robots.txt

src/
├── app/                 # Next.js App Router structure
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Home page
│   ├── book/
│   │   ├── page.tsx     # Book page with MDX loader
│   │   └── components/  # Book-specific components (progress bar, TOC)
│   ├── about/
│   │   └── page.tsx     # About page
│   ├── contact/
│   │   └── page.tsx     # Contact page with waitlist form
│   └── globals.css      # Global styles with Tailwind
├── components/          # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── theme-provider/  # Theme toggle functionality
│   ├── navigation/      # Navigation components
│   └── layout/          # Layout components
├── lib/                 # Utility functions
│   ├── mdx.ts           # MDX processing utilities
│   └── utils.ts         # General utilities
├── types/               # TypeScript type definitions
├── content/             # Content files
│   └── chapters/        # MDX chapter files (5 chapters, 2 topics each)
└── styles/              # CSS modules and theme files
```

**Structure Decision**: Single web application using Next.js App Router structure with proper component organization, content in dedicated directory, and clear separation of concerns between UI components, business logic, and content.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations identified - all implementation approaches align with constitution principles.
