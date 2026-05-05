# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a technical interview reference guide for software engineers. Content lives in `README.md` (1,200+ lines of Markdown). A Next.js web app is scaffolded at the repo root, rendering the README as a browsable single-page app.

## Content Structure

`README.md` is organized into 10 sections:

1. **Complexity Fundamentals** — Big O notation, growth comparisons
2. **Data Structures** — Hash maps, trees, tries, union-find, bloom filters
3. **Algorithms** — Binary search, sliding window, BFS/DFS, Dijkstra, DP, backtracking
4. **Design Patterns** — GoF patterns with fintech real-world examples
5. **Microservices Patterns** — Saga, CQRS, outbox, circuit breaker, bulkhead
6. **Backend with Node.js** — Event loop, Express middleware, auth, caching, N+1 queries
7. **DB Concepts** — PostgreSQL (window functions, indexes), Redis patterns, CAP theorem
8. **React/Next.js Basics** — Hooks, state management, SSR/SSG/ISR
9. **AI Basics** — LLMs, RAG pipelines, vector databases, agents, MCP, prompt engineering
10. **System Design** — Scalability, load balancing, message queues, latency budgets

## Conventions

- All diagrams use Mermaid (` ```mermaid ` blocks) — renders natively on GitHub.
- Real-world examples throughout use a **fintech/payments domain** (transactions, balances, settlements).
- Decision trees and Markdown tables are preferred for comparison/selection guidance.

## Project Structure

```
/                        # repo root = Next.js project root
├── README.md            # source content (parsed at build/runtime)
├── app/                 # Next.js app directory
│   ├── page.tsx         # parses README.md via fs, renders sections
│   ├── layout.tsx
│   ├── globals.css
│   └── components/
│       ├── Sidebar.tsx
│       ├── MarkdownContent.tsx
│       └── MermaidDiagram.tsx
├── public/
├── out/                 # static export output
├── next.config.ts
└── package.json
```

`app/page.tsx` reads `README.md` from `process.cwd()` (repo root) and splits it into sections by `##` headings.

## Web App Commands

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run lint     # ESLint
```
