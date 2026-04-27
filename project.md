# Project Context

## Identity

- **Repo:** `riverxapp/neon-harbor-rju`
- **Branch:** `main`
- **Code Type:** `vite`
- **Action:** create

## Brand Context

- **Brand:** Neon Harbor
- **Positioning:** A fast React single-page product experience that keeps workflows intuitive and responsive.
- **Audience:** Primary product users

## Product Vision

Neon Harbor addresses the need to define and execute project scope with user-visible outcomes. The product roadmap ensures each step adds value and includes explicit acceptance criteria.

## Scope Foundations

### Core Problem

Define and execute the project scope with user-visible outcomes.

### Goals

- Maintain coherent requirements across requests.
- Ship user-visible value in small, completable iterations.

### Constraints

- Scope changes to requested surfaces only.
- Preserve existing architecture and functional flows.

### Non-Goals

- Avoid rebuilding unrelated modules from scratch.

### Success Metrics

- Each request has explicit acceptance criteria and clear "done" conditions.

### Roles

- Owner
- Member

### Core Entities

- Primary workspace entity
- User profile

### Integrations

- None

## Full Build Roadmap

1. **Request 1:** Brand alignment, SPA shell, and core route/page surfaces.
2. **Request 2:** Core entity CRUD depth, state handling, and validation.
3. **Request 3:** Collaboration workflows, role-aware behavior, and UX resilience.
4. **Request 4:** Reporting, automations, performance, and quality polish.

## Request 1: Branding & SPA Foundations

- **Brand:** Neon Harbor
- **Positioning:** Fast, responsive product experience aligned to intuitive workflows.
- **Scope:** Establish branding/content alignment and foundational user-visible surfaces only.

### Jobs

1. **App Shell & Entry:** Align `src/main.tsx` and `src/App.tsx` with brand positioning and global shell copy.
2. **Core Pages:** Create/update foundational pages and route-level structure for the request scope.
3. **Shared Components:** Establish reusable TSX primitives/sections for consistent UI patterns.
4. **Primary Workflows:** Implement baseline view-state handling (loading, empty, error, success) in the initial user journey.

## README Seed (Template Context)

**RiverX Base Vite Template**  
Production-ready base template for RiverX-generated apps using Vite, React, TypeScript, Tailwind, and shadcn/ui (default style).

### Commands

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
```