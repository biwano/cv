# Site audit — improvement backlog

Fresh review as of **2026-08-20**. Only open work below. Won’t-dos: [AGENTS.md](../AGENTS.md).

---

## High

1. **`robots.txt` / `sitemap.xml` missing from source** — `public/` has neither; `vite.config.js` has no generator. Stale `dist/` copies still say `https://example.com`. Add `public/robots.txt` + `public/sitemap.xml` (or a build step using `VITE_SITE_URL`) covering `/`, `/projects`, `/skills`, `/career`, `/academic_studies`.

---

## Medium

2. **Deploy must set `VITE_SITE_URL`** — `index.html` substitutes `%VITE_SITE_URL%` for OG/canonical. Rebuild/deploy with `VITE_SITE_URL=https://cv.ilponse.com` so production never ships `example.com` placeholders (especially after #1).

---

## Low

3. **No SPA history fallback in repo** — History mode router; no `public/_redirects` (or equivalent). Optional: add `/* /index.html 200` for Netlify-style hosts. Do not document host rewrites in the README ([AGENTS.md](../AGENTS.md)).

4. **Contact control is a faux button** — `App.vue` Contact is `<a href="#contact" role="button">` without `aria-expanded` / dialog popup semantics; Space often won’t activate. Prefer `<button type="button">` (styled like `.social`) or add keyboard + ARIA wired to `contactOpen`.

---

## Suggested order

| Priority | Item | Why |
| --- | --- | --- |
| High | **#1** robots + sitemap | Nothing in source; SEO regression |
| Medium | **#2** rebuild with `VITE_SITE_URL` | Avoid bad OG/canonical in prod |
| Optional | **#3–#4** | Polish |
