# Site audit — improvement backlog

Fresh review of the Vue CV site (`/opt/biwano/cv`) as of **2026-08-20 (evening rerun)**. Prior wave (content URL fixes, Web3Forms env key wiring, modal a11y, SEO meta titles/descriptions, sticky nav / footer spacing, README, skill-star ARIA, dead CardComponent markup, unused `cv.webp`/`metamask.webp`, etc.) is done. This list is what remains, verified against current source.

**Prior open item still applies:** **#16** (mobile header density). **#11** (`robots.txt` / sitemap) was marked fixed in the prior audit but **regressed / never landed in source** — reopened below.

Won’t-dos (not recommended again): contact form auto-close after success; lint in CI; projects without logos. See [AGENTS.md](../AGENTS.md).

---

## Content & accuracy

1. ~~**Projects without logos**~~ — Won’t do: leave Litiges / mobile-number cards without `img` (and keep the empty image column); see [AGENTS.md](../AGENTS.md).

2. ~~**Silicom employer URL rebranded**~~ — Fixed: card links to neverhack.com; blurb notes SILICOM is now Neverhack France.

3. **Providence High School link fragile** — `studies.js` `providence.link` points at an `education.gouv.fr` annuaire URL that returns **HTTP 403** (curl with a normal browser User-Agent). Prefer a stable school page or drop the link if none exists.

4. **Copy / branding nits** *(low)* —
   - `skills.js` React: duplicated “in 2021” (“…with the {web3} projects in 2021”).
   - `skills.js` Viem: “A typescript library” → TypeScript.
   - `skills.js` Spring: “Spring express” is unclear (Boot? MVC?).
   - Mixed brand spellings: **VueJS** (`skills.js` title, footer) vs **Vue.js** (`HomeView.vue`); **Wordpress** vs WordPress; **Gitlab** / **Sonarqube** / **UTS Caraibes** title casing in `links.js`.

5. **Unused `links.js` entries** — `lingui`, `translationio`, `perl`, and `sentry` are never referenced as `{…}` placeholders anywhere in content. Dead data only (harmless, but clutter).

---

## Contact form & secrets

6. **Real Web3Forms key in `.env.example`** — `.env.example` ships `VITE_WEB3FORMS_ACCESS_KEY=0c53b7f4-…` (full UUID). Example files should use a placeholder; rotate the key if this file is shared or ever committed, and keep domain restriction in the Web3Forms dashboard. Runtime wiring via `import.meta.env` in `ContactFormComponent.vue` is fine.

*(Verified still good: no hard-coded key in components; missing-key error path; honeypot; success stays open until user closes.)*

---

## SEO & sharing

7. **`robots.txt` / sitemap missing from source** *(prior #11 — reopened)* — Prior audit claimed a Vite plugin emits these from `VITE_SITE_URL`. Current `vite.config.js` only loads `@vitejs/plugin-vue`. A clean `vite build` produces **neither** `robots.txt` nor `sitemap.xml`. Stale `dist/` copies (if present) used `https://example.com` and are not regenerated. Add static `public/robots.txt` + `public/sitemap.xml`, or restore a build step that substitutes `VITE_SITE_URL`.

8. *(Verified OK)* Route `meta.title` / `meta.description` + `router.afterEach` updates document title and description / OG / Twitter description+title. `index.html` `%VITE_SITE_URL%` substitutes correctly when `.env` is set (spot-checked build → `https://cv.ilponse.com/…`).

---

## UX / polish

9. **Mobile header density** *(prior #16 — still open)* — Absolute jumbotron (`JumbotronComponent.vue`, up to `min(1280px, 100vw)`), right-aligned title + social row (`App.vue`), and sticky nav (`NavComponent.vue`) have **no narrow-viewport layout pass** beyond global `.one.half` stacking. Busy on small screens; check overlap, wrap, and tap targets.

10. **Decorative job mini-logos lack `alt`** — Inline `<img class="miniImage">` in `jobs.js` (Carbonmark / KlimaDAO / OlympusDAO) have no `alt` (should be `alt=""` if decorative beside the text link, or a short label).

11. **Home page heading hierarchy** — `HomeView.vue` uses multiple `<h1>`s per view (“About me”, “Software”, “System administration”, …). Prefer one page `<h1>` and `<h2>` for sections.

12. **Skill level stars are filled-only** — `CardComponent.vue` renders `level` filled stars with `aria-label` “Skill level: N out of 5” (good) but no empty stars, so the “of 5” scale is less obvious visually.

---

## Tech / deploy

13. **No SPA fallback asset in repo** — README documents nginx / Apache / Netlify `_redirects` / host SPA mode, but there is **no** `public/_redirects` (or equivalent) checked in. Fine if the host is configured manually; easy miss on Netlify/Cloudflare-style deploys.

14. *(Verified OK)* Image inventory: all `public/images/*` are referenced; no missing refs. History-mode deploy notes and project README are present. Footer `--footer-space` / safe-area still in `main.css`.

---

## Nice-to-haves

15. Per-route `og:url` / canonical (router currently updates titles/descriptions only; crawlers mainly see `index.html` anyway).
16. Skip-to-content link; visible `:focus-visible` styles beyond color swaps on nav/social.
17. ~~Empty-state / reserved space for cards without `img`~~ — Won’t do (same as #1); see [AGENTS.md](../AGENTS.md).
18. Drop unused `links.js` keys (#5) when touching that file.

---

## Suggested quick wins

| Priority | Item | Why |
| --- | --- | --- |
| High | **#7** robots + sitemap in `public/` (or build plugin) | SEO regression; nothing in source today |
| High | **#6** scrub/rotate key in `.env.example` | Accidental secret distribution |
| Medium | **#9 / #16** mobile header pass | Real UX on phones |
| Low | **#3**, **#4**, **#10**, **#11** | Accuracy / a11y polish |

Do **not** re-open: contact auto-close; lint in CI; projects without logos / collapsing empty image column; resolved content URLs (web3, Nuxeo, Kubernetes course, React/Angular/JS, ISAE teaching line, appYuser `rel`); modal focus trap; unused WebP cleanup already done.
