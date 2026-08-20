# Site audit — improvement backlog

Fresh review of the Vue CV site (`/opt/biwano/cv`) as of 2026-08-20 (evening). Prior wave (content fixes, sticky nav, meta tags, WebP images, contact modal, timeline, Vue/Vite upgrade, etc.) is done; this list is what remains.

## Content & accuracy (fix first)

1. ~~**`{web3}` placeholder is unresolved**~~ — Fixed: `web3` link entry → ethereum.org/developers.
2. ~~**Broken training URL**~~ — Fixed: course href → [kubernetes-avance](https://themanis.fr/formations/informatique/virtualisation/kubernetes-avance/) (dropped the old `-2` slug).
3. ~~**Nuxeo skill link dead**~~ — Fixed: skill URL → `https://doc.nuxeo.com/`.
4. ~~**Stale / weak skill URLs**~~ — Fixed: React → react.dev, Angular → angular.dev, JavaScript → MDN.
5. ~~**Career HTML inconsistency**~~ — Fixed: ISAE teaching line is “Since 2014”; Quadran appYuser has `target` + `rel`.
6. ~~**Copy polish**~~ — Fixed: JavaScript / TypeScript / GitHub / CentOS / Macroeconomics / Vert.x branding in About, skills, and links.

## Contact form & secrets

7. ~~**Web3Forms key hard-coded**~~ — Fixed: reads `VITE_WEB3FORMS_ACCESS_KEY`; `.env.example` added (local `.env` gitignored). Restrict the key to your domain in the Web3Forms dashboard.
8. ~~**Modal a11y gaps**~~ — Fixed: focus moves into dialog on open, Tab trap, restore focus on close, `body` scroll lock while open.

## SEO & sharing

9. ~~**Relative Open Graph image**~~ — Fixed: `og:image` / `twitter:image` / `og:url` use `%VITE_SITE_URL%` (set absolute origin at build time).
10. ~~**Static document title**~~ — Fixed: each route sets `meta.title`; `router.afterEach` updates `document.title`.
11. ~~**No `robots.txt` / sitemap**~~ — Fixed: Vite plugin emits `/robots.txt` and `/sitemap.xml` from `VITE_SITE_URL` (dev middleware + production assets).

## UX / polish

12. **Projects without logos** — Litiges, Mobile number portability, and Mobile number frequency licenses have no `img`; cards look uneven next to logo’d entries.
13. ~~**Unused assets**~~ — Fixed: removed unreferenced `cv.webp` and `metamask.webp` (CV download still uses `cv.pdf`).
14. **Skill level stars** — Star row is decorative only (no accessible name / numeric alternative). Screen readers get little from `★★★`.
15. ~~**Fixed footer overlap**~~ — Fixed: `--footer-space` (4.5rem + safe-area) on `body` / `scroll-padding-bottom`; footer gets safe-area padding and `z-index`.
16. **Mobile header density** — Absolute jumbotron + right-aligned title + sticky nav is busy on narrow screens; worth a quick pass for overlap and tap targets.

## Tech / deploy

17. **History-mode hosting** — `createWebHistory` needs a server fallback to `index.html` for deep links (`/skills`, etc.). Document the required rewrite for whatever hosts this site.
18. **README is still the Vue template** — Replace boilerplate with a short project README (dev/build, env vars, deploy notes).
19. **AIT Consulting employer link** — Points at a third-party directory (`listcompany.org`), not an official company site. Prefer a better source or no link.

## Nice-to-haves

20. ~~**Per-route meta description**~~ — Fixed: each route sets `meta.description`; `router.afterEach` updates `description` / `og:description` / `twitter:description` (and titles).
21. ~~**Contact success → auto-close**~~ — Won’t do: keep success visible until the user closes; see [AGENTS.md](../AGENTS.md).
22. ~~**Dead-code comments**~~ — Fixed: removed abandoned empty-star and tags markup from `CardComponent.vue` (and unused `tags` prop wiring).
23. **Lint in CI** — `npm run lint` exists locally; no CI config in-repo yet.

## Suggested quick wins

Items **1**, **2**, **3**, **5**, **7**, **9** done. Set `VITE_SITE_URL` in `.env` / CI before production builds so social previews resolve.
