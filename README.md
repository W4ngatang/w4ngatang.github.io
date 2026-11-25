# alexcwang.com

Personal site, built with [Astro](https://astro.build) and deployed to Cloudflare Workers on every push to `master`.

## Editing

- **Bio:** `src/pages/index.astro`
- **Papers:** `src/data/papers.ts` (set `selected: true` to show one on the home page)
- **Projects:** `src/data/projects.ts`
- **Sidebar name, role and links:** `src/data/site.ts`
- **Posts:** add a Markdown file to `src/content/writing/` with `title` and `date` in its front matter. Add `draft: true` to keep it unpublished.
- **PDFs and images:** `public/` (served from the site root, e.g. `public/static/CV.pdf` is `/static/CV.pdf`)
- **Old URLs:** `public/_redirects`

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Cloudflare's build command is `bash build.sh`, so the build steps live in the repo.
