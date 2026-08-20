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

7. ~~**Sticky nav**~~ — Fixed: single sticky `NavComponent` in `App.vue` (no duplicate + scroll JS).
8. ~~**Skills filters**~~ — Fixed: tag chips are `<button type="button">` with `aria-pressed` in `SkillsView.vue`.
9. ~~**Card images**~~ — Fixed: cards use title as `alt`; jumbotron alt is “Bruno Ilponse”.
10. ~~**External links**~~ — Fixed: `rel="noopener noreferrer"` on `target="_blank"` links (components + `useDatabase.js` + job/study HTML).
11. ~~**Active route**~~ — Fixed: nav uses `router-link-active` styling in `NavComponent.vue`.
12. ~~**About page**~~ — Fixed: “In short” (default) / “Full story” tabs in `HomeView.vue`; short view uses bullets.

## SEO & discoverability

13. ~~**Meta / social**~~ — Fixed: description, Open Graph, and Twitter card tags in `index.html`.
14. ~~**Invalid font canonicals**~~ — Fixed: removed mistaken `rel="canonical"` on font files.
15. ~~**Page title**~~ — Fixed: `Bruno Ilponse · Senior Fullstack Developer`.

## Performance & tech debt

16. **Legacy stack** — jQuery 1.10 + Modernizr 2.6 + full Groundwork (~700KB) for layout/nav that Vue could own.
17. ~~**Heavy images**~~ — Fixed: all card/skill logos resized (≤256px, minis ≤64px) and converted to WebP; site images ~2.8MB → ~0.45MB.
18. ~~Unused **Pinia counter** store~~ — Fixed: removed `src/stores/counter.js`, Pinia setup, and the `pinia` dependency.
19. Route fade uses absolute positioning (`min-height: 300px` band-aid in `App.vue`); can cause layout jump.

## Nice-to-haves

20. Contact CTA (email / Calendly) in the header.
21. Career as a simple timeline instead of alternating cards.
22. ~~**`prefers-reduced-motion`**~~ — Fixed: near-instant animations/transitions in `main.css` when the OS preference is set.
23. Vite 3 / Vue 3.2 are dated — upgrade when convenient (not urgent for a CV site).

## Suggested quick wins

Items 1–15 and #17 done. Next easy picks: legacy stack (#16) or route fade (#19).
