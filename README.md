# My Portfolio

A personal portfolio built with **React**, **TypeScript**, and **Vite**, structured around a small custom **component system** and a **data-driven** content model.

This project is no longer the default Vite starter. It has been refactored into a reusable frontend foundation for a personal portfolio site, with attention to consistency, maintainability, responsiveness, accessibility, testing, and UI documentation.

## Features

- Custom shared UI components
- Data-driven portfolio content
- Clear source structure for scalability
- Responsive layout
- Light, dark, and system themes with a saved browser preference
- Project search and technology filtering with reset and empty states
- Mobile navigation with keyboard support
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

Use Node 22 (the version is pinned in `.nvmrc`).

Install dependencies:

```bash
nvm use
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

- add active section tracking
- split page sections into dedicated section components
- add more shared UI primitives such as `IconButton`, `Heading`, or `Text`
- expand browser-level accessibility and responsive checks
- replace sample contact details and experience with verified personal content

## Status

- `pnpm test` passing
- `pnpm build` passing

## Content setup

Edit `src/data/portfolio.ts` to update the profile, experience, projects, and contact links.
Project `href` and `repositoryHref` are optional: buttons appear only when a URL is provided.
Contact actions use `contact.items`; footer links use `socialLinks`, so update both lists.
The document title and description live in `index.html`.

## Verification

Run `pnpm test`, `pnpm lint`, and `pnpm build` with Node 22.
Tests cover project filtering/reset, theme persistence and blocked storage, mobile menu behavior,
and unique accessible text fields. Browser layout testing remains a separate check.

The pre-commit hook loads nvm from `NVM_DIR` (or `~/.nvm`) and selects `.nvmrc`
before running tests, including commits from an IDE. Run `nvm install` once if
that version is missing. With another Node manager, ensure the IDE's Git process
has a compatible Node on its PATH; the hook reports incompatible versions before testing.

## Languages

The header language selector switches the entire portfolio between English and Vietnamese.
The initial language follows the browser (`vi` uses Vietnamese; other languages use English),
with an explicit choice saved under `portfolio-language` in local storage. Switching also updates
the document language, title, and description. Theme and project filters remain selected.

- `src/data/portfolio.ts`: English content and shared names, links, and technology tags.
- `src/data/portfolio.vi.ts`: Vietnamese content. When adding or renaming a project, update its
  entry in `projectDescriptions`; an untranslated project falls back to its English description.
- `src/i18n/messages.ts`: UI labels and metadata for both languages, checked for matching keys by TypeScript.

This is client-side language switching on one URL, not separate indexed locale routes.
