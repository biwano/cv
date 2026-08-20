# Site audit — improvement backlog

Review of the Vue CV site (`/opt/biwano/cv`) as of 2026-08-20. Prioritized for impact; not an implementation order unless noted.

## Content & accuracy (fix first)

1. ~~**Wrong skill links**~~ — Fixed: Apache → httpd.apache.org, Nginx → nginx.org, Django → djangoproject.com.
2. ~~**Drupal ≠ Laravel**~~ — Fixed: removed incorrect Laravel claim from Drupal skill copy.
3. ~~**Stale “12 years”**~~ — Fixed: About now says 15 years (career from ~2010–2011).
4. ~~**Broken study URLs**~~ — Fixed: removed newlines inside INSA, FORMEO, and iForm `href`s.
5. ~~**Angular naming**~~ — Fixed: skill title is “Angular”; copy still distinguishes Angular 1 / 2.
6. ~~**`cv.pdf` exists but isn’t linked**~~ — Fixed: “Download CV” next to LinkedIn in `App.vue`.

## UX / polish

7. **Sticky nav** — Two `NavComponent` instances plus scroll JS in `App.vue`; `position: sticky` would be simpler and more reliable.
8. **Skills filters** — Tag chips are `<span @click>` in `SkillsView.vue`; use `<button>` for keyboard accessibility.
9. **Card images** — No meaningful `alt` text on cards (`CardComponent.vue`); jumbotron only has a generic alt.
10. **External links** — Add `rel="noopener noreferrer"` on `target="_blank"` links (components + generated content in `useDatabase.js`).
11. **Active route** — No clear “current page” style on nav links (`NavComponent.vue`).
12. **About page** — Long justified paragraphs; a shorter opening plus bullets would scan better for recruiters.

## SEO & discoverability

13. No **meta description**, Open Graph, or Twitter cards (`index.html`).
14. Invalid `<link rel="canonical">` on font files in `index.html` (canonical is for page URLs).
15. Page title is only the name — e.g. `Bruno Ilponse · Senior Fullstack Developer` would help search/share.

## Performance & tech debt

16. **Legacy stack** — jQuery 1.10 + Modernizr 2.6 + full Groundwork (~700KB) for layout/nav that Vue could own.
17. **Heavy images** — `background.png` (~670KB), `baimbridge.jpg` (~590KB); compress and/or use WebP.
18. Unused **Pinia counter** store (`src/stores/counter.js` — Vite template leftover).
19. Route fade uses absolute positioning (`min-height: 300px` band-aid in `App.vue`); can cause layout jump.

## Nice-to-haves

20. Contact CTA (email / Calendly) in the header.
21. Career as a simple timeline instead of alternating cards.
22. `prefers-reduced-motion` to tone down bounce animations.
23. Vite 3 / Vue 3.2 are dated — upgrade when convenient (not urgent for a CV site).

## Suggested quick wins

Items 1–6 done. Next easy picks: sticky nav (#7), skills filter buttons (#8), `rel="noopener"` (#10), meta/title (#13–15).
