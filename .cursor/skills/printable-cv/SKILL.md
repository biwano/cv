---
name: printable-cv
description: >-
  Updates printable CV content data and regenerates EN/FR HTML+PDF via
  npm run cv. Use when creating, updating, or regenerating the printable
  CV/resume, French CV, PDF exports, or wiring the site CV link.
---

# Printable CV

Generation is implemented by `scripts/cv/` (`npm run cv`). This skill tells the
agent **what content to edit** and **when to regenerate** — not how to render HTML/PDF.

## Workflow

1. Update content sources below (do not invent employers, dates, skills, email, or hobbies).
2. Run `npm run cv` (or `cv:html` / `cv:pdf`).
3. Confirm outputs: `public/cv.html`, `cv-fr.html`, `cv.pdf`, `cv-fr.pdf`.
4. Do **not** hand-edit those four files; change sources and regenerate.

Site CV control stays `href="/cv.html"` with `target="_blank"` `rel="noopener noreferrer"` (not a direct PDF link).

## Content the agent maintains

| Need | Edit |
| --- | --- |
| Experience, education, training (EN+FR, ATS-shaped) | `scripts/cv/roles.mjs` |
| Contact, name, professional titles | `scripts/cv/config.mjs` (`CV_EMAIL` overrides email) |
| UI chrome labels, hobbies (EN+FR) | `scripts/cv/i18n.mjs` |
| Skills / expertise logos | **reuse** `src/database/skills.js` (loaded by `scripts/cv/load-skills.mjs`) |
| EN display name / tagline check | `src/App.vue` |
| Hobbies on the site (keep in sync) | `src/views/HomeView.vue` |
| Portrait asset | `public/images/cv-photo.png` |

When `jobs.js` / `studies.js` change: sync facts into `roles.mjs`, then `npm run cv`.

### `roles.mjs` ATS content rules

- Job **title** = role name only (no stacks in parentheses).
- Line: **employer** · **dates** (`YYYY – YYYY` or `YYYY – Present` / `Présent`).
- Every experience entry has **exactly one** duty bullet in `details` (EN and FR arrays of length 1). Never omit `details`; never add a second bullet.
- Bullet content: what you did + client/product context when relevant. Avoid empty/generic lines (e.g. “Freelance front-end development”).
- **Tech in the bullet (ATS):** weave about **2–4** important tools into the sentence in prose — especially for recent roles. Example: “Built the carbon credit marketplace frontend and backend (Next.js, Node, blockchain infra).” Do **not** add a trailing `Skills: …` list, and do **not** dump the full stack under each job. Older roles may stay client/context-focused unless a specific tech still matters.
- Full skill inventory lives only in the Skills section (`skills.js`); role bullets prove *when* key tools were used.
- Do not invent roles, dates, or tech you did not use.

### Skills

Do **not** add a separate CV skills data file. Expertise trio + grouped lists are derived from `src/database/skills.js` by the generator. To change CV skills, update that database file (or `load-skills.mjs` grouping rules if needed), then regenerate. Do not duplicate that catalog into per-role skill lists.

### Contact

Email is required on the CV for ATS. Set in `config.mjs` or `CV_EMAIL`. Keep it off the Vue contact form. LinkedIn URL must match `src/App.vue`.

## Scripts (do not reimplement)

| Path | Role |
| --- | --- |
| `scripts/cv/generate.mjs` | CLI |
| `scripts/cv/render.mjs` | HTML |
| `scripts/cv/pdf.mjs` | PDF |
| `scripts/cv/load-skills.mjs` | Skills from `src/database/skills.js` |
| `scripts/cv/roles.mjs` | Experience / education / training |
| `scripts/cv/i18n.mjs` | Labels + hobbies |
| `scripts/cv/config.mjs` | Contact + identity |

Layout, ATS HTML structure, page break before Education, toolbar/PDF download links, and print CSS live in the scripts — change those files if the **presentation** must change; keep this skill focused on **content + regenerate**.

## Do not

- Invent email, employers, dates, skills, age, or hobbies.
- Duplicate `skills.js` into a second CV-only skills catalog.
- Hand-edit generated `public/cv*` outputs as the normal workflow.
- Link the site header CV button to `.pdf`.
- Add SPA routes/Vue components for the printable CV.
