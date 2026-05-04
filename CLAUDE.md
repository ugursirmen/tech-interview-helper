# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a documentation-only repository — a comprehensive technical interview reference guide for software engineers. The entire content lives in `README.md` (1,200+ lines of Markdown).

There is no application code, build system, or package manager. The `.gitignore` anticipates a possible future Next.js app but nothing has been scaffolded yet.

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

## If Adding a Web App

The `.gitignore` is pre-configured for a Next.js project. If scaffolding one, the standard commands would be:

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm run lint     # ESLint
```
