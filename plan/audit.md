# Site audit — improvement backlog

Fresh review of the Vue CV site (`/opt/biwano/cv`) as of **2026-08-20 (evening rerun)**. Prior wave (content URL fixes, Web3Forms env key wiring, modal a11y, SEO meta titles/descriptions, sticky nav / footer spacing, README, skill-star ARIA, dead CardComponent markup, unused `cv.webp`/`metamask.webp`, etc.) is done. This list is what remains, verified against current source.

**Prior open item still applies:** **#16** (mobile header density). **#11** (`robots.txt` / sitemap) was marked fixed in the prior audit but **regressed / never landed in source** — reopened below.

Won’t-dos (not recommended again): contact form auto-close after success; lint in CI; projects without logos; unused `links.js` entries; scrubbing the Web3Forms key in `.env.example`. See [AGENTS.md](../AGENTS.md).

---

## Content & accuracy

1. ~~**Projects without logos**~~ — Won’t do: leave Litiges / mobile-number cards without `img` (and keep the empty image column); see [AGENTS.md](../AGENTS.md).

2. ~~**Silicom employer URL rebranded**~~ — Fixed: card links to neverhack.com; blurb notes SILICOM is now Neverhack France.

3. **Providence High School link fragile** — `studies.js` `providence.link` points at an `education.gouv.fr` annuaire URL that returns **HTTP 403** (curl with a normal browser User-Agent). Prefer a stable school page or drop the link if none exists.

4. ~~**Copy / branding nits**~~ *(low)* — Fixed: React “in 2021” duplication; Viem TypeScript casing; Spring Boot wording; Vue.js / WordPress / GitLab / SonarQube / UTS Caraïbes brand spellings.

5. ~~**Unused `links.js` entries**~~ — Won’t do: leave `lingui`, `translationio`, `perl`, and `sentry` in `links.js` even if unused as `{…}` placeholders; see [AGENTS.md](../AGENTS.md).

---

## Contact form & secrets

6. ~~**Real Web3Forms key in `.env.example`**~~ — Won’t do: the access key is a public client-side key (fine in `.env.example`); restrict by domain in the Web3Forms dashboard if needed; see [AGENTS.md](../AGENTS.md).

*(Verified still good: no hard-coded key in components; missing-key error path; honeypot; success stays open until user closes.)*

---

## SEO & sharing

7. **`robots.txt` / sitemap missing from source** *(prior #11 — reopened)* — Prior audit claimed a Vite plugin emits these from `VITE_SITE_URL`. Current `vite.config.js` only loads `@vitejs/plugin-vue`. A clean `vite build` produces **neither** `robots.txt` nor `sitemap.xml`. Stale `dist/` copies (if present) used `https://example.com` and are not regenerated. Add static `public/robots.txt` + `public/sitemap.xml`, or restore a build step that substitutes `VITE_SITE_URL`.

8. *(Verified OK)* Route `meta.title` / `meta.description` + `router.afterEach` updates document title, description / OG / Twitter title+description, and (see **#15**) `og:url` + canonical. `index.html` `%VITE_SITE_URL%` substitutes correctly when `.env` is set (spot-checked build → `https://cv.ilponse.com/…`).

---

## UX / polish

9. **Mobile header density** *(prior #16 — still open)* — Absolute jumbotron (`JumbotronComponent.vue`, up to `min(1280px, 100vw)`), right-aligned title + social row (`App.vue`), and sticky nav (`NavComponent.vue`) have **no narrow-viewport layout pass** beyond global `.one.half` stacking. Busy on small screens; check overlap, wrap, and tap targets.

10. ~~**Decorative job mini-logos lack `alt`**~~ — Fixed: Carbonmark / KlimaDAO / OlympusDAO mini-logos use `alt=""`.

11. ~~**Home page heading hierarchy**~~ — Fixed: one `<h1>` (“About me”) per mode; other sections are `<h2>` (styled like former section titles).

12. ~~**Skill level stars are filled-only**~~ — Fixed: always render 5 stars; empty ones muted via opacity; existing `aria-label` unchanged.

---

## Tech / deploy

13. **No SPA fallback asset in repo** — README documents nginx / Apache / Netlify `_redirects` / host SPA mode, but there is **no** `public/_redirects` (or equivalent) checked in. Fine if the host is configured manually; easy miss on Netlify/Cloudflare-style deploys.

14. *(Verified OK)* Image inventory: all `public/images/*` are referenced; no missing refs. History-mode deploy notes and project README are present. Footer `--footer-space` / safe-area still in `main.css`.

---

## Nice-to-haves

15. ~~**Per-route `og:url` / canonical**~~ — Fixed: `index.html` ships `link[rel=canonical]`; router `afterEach` updates `og:url` and canonical from `VITE_SITE_URL` + route path.
16. Skip-to-content link; visible `:focus-visible` styles beyond color swaps on nav/social.
17. ~~Empty-state / reserved space for cards without `img`~~ — Won’t do (same as #1); see [AGENTS.md](../AGENTS.md).
18. ~~Drop unused `links.js` keys (#5)~~ — Won’t do; see [AGENTS.md](../AGENTS.md).

---

## Suggested quick wins

| Priority | Item | Why |
| --- | --- | --- |
| High | **#7** robots + sitemap in `public/` (or build plugin) | SEO regression; nothing in source today |
| Medium | **#9 / #16** mobile header pass | Real UX on phones |
| Low | **#3** | Fragile school URL |

Do **not** re-open: contact auto-close; lint in CI; projects without logos / collapsing empty image column; unused `links.js` keys (`lingui`, `translationio`, `perl`, `sentry`); Web3Forms key scrub/rotate in `.env.example` (public client key); resolved content URLs (web3, Nuxeo, Kubernetes course, React/Angular/JS, ISAE teaching line, appYuser `rel`); modal focus trap; unused WebP cleanup already done; mini-logo `alt`; home heading hierarchy; skill empty stars; per-route `og:url` / canonical.
