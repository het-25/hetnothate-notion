# hetnothate.com

Het's personal website. Astro + Markdown + YAML, deployed on Vercel.
Dark mode only. Previously a Notion pass-through (nextjs-notion-starter-kit);
rewritten as a plain static site in August 2026 — the old version lives in git
history.

## Updating content (the easy ways)

Everything editable is a plain file. Any commit to `main` auto-deploys.

| What | File |
| --- | --- |
| Homepage bio | `src/content/home-intro.md` |
| Homepage sections + Media/Art lists | `src/data/sections.yaml` |
| Individual pages | `src/pages/*.md` |

Three ways to edit, easiest first:

1. **Pages CMS** (recommended): go to <https://app.pagescms.org>, log in with
   GitHub, open this repo. You get a friendly editor for the intro, the
   media lists, and every page — save = commit = deploy. Config: `.pages.yml`.
2. **GitHub web/mobile**: open any file on github.com and press `.` or the
   pencil icon. Works from a phone.
3. **Locally with Claude/editor**: edit, commit, push.

### Adding a Media / Art item

Add two lines under the right category in `src/data/sections.yaml`:

```yaml
- title: Interstellar
  url: https://letterboxd.com/film/interstellar/
```

### Adding a new page

Create `src/pages/my-page.md`:

```yaml
---
layout: ../layouts/Page.astro
title: My Page
description: One-liner for meta tags.
updated: 2026-08-20
---

Words go here.
```

Then link it from a section in `src/data/sections.yaml` (`label` + `href`).

## Dev

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static build to dist/
```
