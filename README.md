# My Portfolio

A personal portfolio built with **React**, **TypeScript**, and **Vite**, structured around a small custom **component system** and a **data-driven** content model.

This project is no longer the default Vite starter. It has been refactored into a reusable frontend foundation for a personal portfolio site, with attention to consistency, maintainability, responsiveness, accessibility, testing, and UI documentation.

## Features

- Custom shared UI components
- Data-driven portfolio content
- Clear source structure for scalability
- Responsive layout
- Baseline dark-mode-ready styling
- Component testing with **Vitest** and **Testing Library**
- Stories/playground with **Ladle**
- Linting and formatting with **ESLint**, **Prettier**, and **Husky**

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- Testing Library
- Ladle
- ESLint
- Prettier
- Husky

## Available Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm test
pnpm test:watch
pnpm lint
pnpm lint:fix
pnpm dev:ladle
pnpm build:ladle
```

## Project Structure

```text
src/
  components/
    shared/
      button/
      textbox/
    ui/
      Card.tsx
      Container.tsx
      Section.tsx
      Stack.tsx
      Tag.tsx
  data/
    portfolio.ts
  layouts/
    AppShell.tsx
  pages/
    PortfolioPage.tsx
  types/
    portfolio.ts
  utils/
    cn.ts
  App.tsx
  App.css
  index.css
  main.tsx
  setupTests.ts
```

## Architecture Overview

### Component System

The UI is built from small reusable primitives and shared components, including:

- `Button`
- `TextBox`
- `Container`
- `Section`
- `Card`
- `Tag`
- `Stack`

These components provide a lightweight system for composing larger page sections while keeping the UI consistent.

### Data-Driven Content

Portfolio content is centralized in:

- `src/data/portfolio.ts`

This makes it easier to:

- update content without changing layout logic
- render sections from structured data
- extend the site later with CMS, JSON, or external content sources

### Quality Workflow

The project keeps a simple but reliable frontend workflow:

- **Vitest + Testing Library** for component tests
- **Ladle** for isolated component stories
- **ESLint + Prettier** for code quality and formatting
- **Husky** for git hook automation

## Current Portfolio Sections

The current portfolio page includes:

- Hero
- About
- Skills
- Experience
- Projects
- Contact
- Footer

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

Start Ladle:

```bash
pnpm dev:ladle
```

## Future Improvements

Possible next steps for the project:

- add `hooks/` for theme switching or active section tracking
- split page sections into dedicated section components
- add more shared UI primitives such as `IconButton`, `Heading`, or `Text`
- improve page-level test coverage
- implement a real dark mode toggle
- add subtle motion with `prefers-reduced-motion` support

## Status

- `pnpm test` passing
- `pnpm build` passing
