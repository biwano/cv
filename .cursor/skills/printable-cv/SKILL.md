---
name: printable-cv
description: >-
  Builds or regenerates the printable one-page CV at public/cv.html from the
  layout rules below and content in src/database/. Use when the user asks to
  create, update, refresh, or regenerate the printable CV / resume HTML, or
  when wiring the site CV button to that file.
---

# Printable CV

## Output

Write a single self-contained file:

**`public/cv.html`**

- Standalone HTML (no Vue, no build step).
- Opens in a new tab; designed for browser Print → PDF / paper.
- Relative asset paths from `/images/…` (served from `public/images/`).
- Site CV control must link to `/cv.html` with `target="_blank"` (not a downloadable PDF).

## Layout

Self-contained two-column resume on an A4-sized sheet. This section is the only layout source of truth.

### Page chrome

- `@page { size: A4; margin: 0 }`.
- On screen: sheet centered on a neutral gray page background, light drop shadow, width `210mm`, min-height `297mm`.
- Sticky on-screen **Print** toolbar (`window.print()`); hide toolbar and shadow under `@media print`.
- Prefer readable type and breathing room over forcing a single cramped page; one page is nice when it still looks open.

### Grid

| Region       | Width | Background            | Text               |
| ------------ | ----- | --------------------- | ------------------ |
| Left sidebar | ~32%  | Pale yellow `#f5f0d8` | Dark ink `#1a1a1a` |
| Main column  | ~68%  | White `#fff`          | Dark ink `#1a1a1a` |

Use CSS grid (or equivalent) so both columns share one full-height sheet.

### Typography

- Clean sans-serif (system UI / Helvetica / Arial stack).
- Body ~11.5–12pt; line-height ~1.45.
- Name: largest type (~1.7rem), bold, uppercase.
- Job title under name: bold, uppercase, ~0.95rem.
- Section titles: uppercase, bold, ~0.95rem, with a hairline rule under the title row.
- Meta / role bullets / skill lists: ~0.85–0.9rem (not micro-type).
- Employer / school names: bold, uppercase, ~0.95rem.
- Date prefixes in role/education lines: bold.

### Section title row

Each major section title is a single row: **outline SVG icon** (~16–18px, stroke, `currentColor`) + uppercase label. No filled/colorful icons.

### Left column (top → bottom)

1. **Header** — name, title, meta lines (clock / house / phone icons).
2. **EXPERTIZE** — tech logos in a horizontal wrap row (image + short label).
3. **OTHER SKILLS** — category subheadings + comma-separated or bulleted skill titles.
4. **HOBBIES** — only if a hobbies source exists in the repo; otherwise omit the section.

### Right column (top → bottom)

1. **CAREER** — employer heading, then dated role bullets.
2. **EDUCATION** — school heading + dated description.
3. **RECENT TRAINING** — one line per course.

### Spacing

- Sidebar and main: ~1.5–1.8rem padding.
- Comfortable gaps between meta lines (~0.4rem) and skill groups (~0.5rem).
- Clear separation between employers (~0.7rem); ~0.3–0.4rem between bullets under one employer.
- Section blocks: ~1.2rem top margin; first main section flush to the top padding.

## Fixed personal fields (only exceptions)

These are not in `src/database/`; use them as-is:

- Address: `6 Rue Jean Dabadie, 31600 Muret, France`
- Phone: `+33 6 76 58 13 48`

## Content sources

Do **not** hardcode career, education, training, skills, name, or title in this skill or invent copy. Read the repo and fill the HTML from:

| Need                 | Where to read                                                           |
| -------------------- | ----------------------------------------------------------------------- |
| Display name         | `src/App.vue` header (e.g. `.site-name`)                                |
| Professional title   | `src/App.vue` header (e.g. `.site-tagline`); render uppercase on the CV |
| Career               | `src/database/jobs.js`                                                  |
| Education + training | `src/database/studies.js`                                               |
| Skills / logos       | `src/database/skills.js` (+ `img` paths under `public/images/`)         |

### Header meta

- **Experience:** compute whole years from the earliest start year found in `jobs.js` `date` fields through the current year; show as `Experience: N Years`.
- **Age:** omit unless a clear age value exists elsewhere in the repo (do not invent).
- Address / phone: use the fixed fields above.

### EXPERTIZE

Always feature these three, in order: **ReactJS**, **VueJS**, **TypeScript**.

- Resolve **ReactJS** and **VueJS** from `skills.js` (`react`, `vuejs`): use each entry’s `title` and `img`.
- **TypeScript:** label `TypeScript`. Prefer a `typescript` (or similar) entry in `skills.js` if present; otherwise use `/images/typescript.svg` (create a simple official-style TS mark SVG in `public/images/` if missing).

### OTHER SKILLS

Build groups from every entry in `skills.js` **except** those already shown under EXPERTIZE. Use each skill’s `title`. Group by `tags`:

| Subheading  | Include if `tags` contains                                                              |
| ----------- | --------------------------------------------------------------------------------------- |
| Development | `languages`, `frameworks`, `javascript`, `java`, `php`, `python`, `ruby`, `cms`, `web3` |
| Databases   | `databases`                                                                             |
| Tools       | `tools`                                                                                 |
| Systems     | `system`                                                                                |

- Put each skill under the **first** matching group in the table order (avoid duplicates across groups).
- Within each group, sort by `level` (stars) **descending**; keep original `skills.js` order for ties.
- Skip empty groups.
- Soft skills / hobbies: only if present in database (or another dedicated data file); otherwise omit.

### CAREER

For each object in `jobs.js` (newest first by start year in `date`):

- Employer heading = `title`.
- Turn `content` into plain-text bullets: strip tags/images, keep link text, split on `<br>` / bold date prefixes into separate bullets when present.
- Prefer per-role date prefixes from the content (`Since YYYY`, `YYYY - YYYY`, etc.); if a block has no inner dates, prefix with the entry’s `date`.

### EDUCATION

Entries in `studies.js` with a `date` field and key other than `advanced-studies`:

- Heading = `title`.
- One bullet: **`date`:** + plain `content` (collapse whitespace).

### RECENT TRAINING

From `studies.js` → `advanced-studies.content`:

- Each `<p>` → one list item.
- Format roughly: `Title - hours - Provider` (use link text; include hours from the bold lead-in when present).

## Icons

Inline SVGs only (stroke, currentColor), ~16–18px:

| Section / meta                | Icon                  |
| ----------------------------- | --------------------- |
| Experience (and age if shown) | clock                 |
| Address                       | house                 |
| Phone                         | phone handset         |
| EXPERTIZE                     | flexed arm / strength |
| OTHER SKILLS                  | star                  |
| HOBBIES (if present)          | sailboat              |
| CAREER                        | gear                  |
| EDUCATION                     | graduation cap        |
| RECENT TRAINING               | globe                 |

## Workflow

1. Read this skill (layout + mapping only).
2. Read `src/App.vue`, `src/database/jobs.js`, `studies.js`, and `skills.js`.
3. Derive all CV copy from those sources (+ fixed address/phone).
4. Write or overwrite `public/cv.html`.
5. Ensure `src/App.vue` CV link is `href="/cv.html"` with `target="_blank"` and `rel="noopener noreferrer"`.

## Do not

- Do not embed a full CV transcript (jobs, schools, skill lists, etc.) inside this skill file.
- Do not invent employers, dates, skills, age, or hobbies.
- Do not link the site CV button to `cv.pdf`.
- Do not add SPA routes or Vue components for the printable CV.
