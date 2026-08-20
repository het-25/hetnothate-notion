# hetnothate.com

Het's personal website. Astro + Markdown, deployed on Vercel.

Previously a fork of nextjs-notion-starter-kit rendering a Notion workspace;
rewritten as a plain static site in August 2026 (the old version lives in git
history).

## Writing

Pages are markdown files in `src/pages/`. Add frontmatter:

```yaml
---
layout: ../layouts/Page.astro
title: Page Title
description: One-liner for meta tags.
parents: # optional, for breadcrumbs
  - label: Pet Projects
    href: /pet-projects
---
```

Link new pages from `src/pages/index.astro`.

## Dev

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static build to dist/
```
