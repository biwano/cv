---
name: printable-cv
description: >-
  Builds or regenerates the printable one-page CV at public/cv.html from the
  canonical layout and copy below. Use when the user asks to create, update,
  refresh, or regenerate the printable CV / resume HTML, or when wiring the
  site CV button to that file.
---

# Printable CV

## Output

Write a single self-contained file:

**`public/cv.html`**

- Standalone HTML (no Vue, no build step).
- Opens in a new tab; designed for browser Print → PDF / paper.
- Relative asset paths from `/images/…` (served from `public/images/`).
- Site CV control must link to `/cv.html` with `target="_blank"` (not the PDF).

## Layout (match the reference PDF)

Two columns, A4-ish page:

| Region | Width | Background |
| --- | --- | --- |
| Left sidebar | ~32% | Pale yellow `#f5f0d8` |
| Main column | ~68% | White `#fff` |

- Sans-serif throughout (system UI stack is fine).
- Section titles: uppercase, bold, with a small outline SVG icon to the left.
- Fit **one printed page** when possible (`@page { size: A4; margin: 0 }`, compact spacing, `@media print` hides on-screen chrome).
- On screen: full-page sheet centered with light page shadow; a **Print** control that calls `window.print()` (hidden when printing).

### Left column

1. **Header** — name, title, meta lines with icons:
   - Name: `BRUNO ILPONSE` (large)
   - Title: `FULLSTACK DEVELOPER`
   - Age / experience (clock icon)
   - Address (house icon)
   - Phone (phone icon)
2. **EXPERTIZE** — logos in a row: Django, Java, Python, Vue.js  
   Images: `/images/django.webp`, `/images/java.webp`, `/images/python.webp`, `/images/vuejs.webp`  
   Each logo: label underneath or `alt` text matching the tech name.
3. **OTHER SKILLS** — category headings + comma-separated or bulleted lists.
4. **HOBBIES** — bulleted list.

### Right column

1. **CAREER** — employer name uppercase/bold; under each, dated role bullets.
2. **EDUCATION** — school + dated description.
3. **RECENT TRAINING** — one line per course: title – hours – provider.

## Canonical copy

Use this content verbatim unless the user supplies updates:

### Personal

- Age: `40`
- Experience: `17 Years`
- Address: `6 Rue Jean Dabadie, 31600 Muret, France`
- Phone: `+33 6 76 58 13 48`

### Other skills

- **Development:** PHP, Drupal, ReactJS, NextJS, NodeJS, Bash, Web3.js
- **Databases:** Elasticsearch, PostgreSQL, Nginx, Apache
- **Continuous integration:** Git, Jenkins, Sonarqube
- **System:** Red hat, Apache, Nginx, Bash, Kubernetes
- **Soft skills:** Teaching

### Hobbies

Roller Hockey, Macro economy, Video games, Blockchain, Piano

### Career

**ISAE-SUPAERO**

- 2019 - Now: Fullstack developer. Design and development of Ed-tech platforms. Python, Django, JAVA, VueJS, Kubernetes.
- 2015 - 2019: Fullstack developer. Design and development of business applications. Python, AngularJS.
- 2014 - Now: Part-time teacher. 30 hours course on web development with Django.

**FREELANCE**

- 2020 - Now: Frontend developer. Development of dApps on Ethereum and Polygon. Web3.js, ReactJS, NextJS.

**QUANDRAN**

- 2012 - 2015: Web application performance expert. Design and development of a front-end performance monitoring tool. Angular.js, J2EE, Elasticsearch.

**SOPRA - STERIA**

- 2010 - 2012: Web developer. Development of a banking application for disputes management. J2EE, Spring, Hibernate.

**SILICOM**

- 2009 - 2010: IT and Telecom Consultant. Deployment of ITIL processes for SFR.

**FREELANCE**

- 2006 - 2009: IT and Telecom consultant. Deployment of a 3G Network in the French Antilles for UTS Caraïbes.

### Education

**TELECOM SUDPARIS**

- 2003 - 2006: Master's degree in IT and telecommunications.

**BAIMBRIDGE HIGH SCHOOL**

- 2000 - 2003: Intensive fondation degree in Mathematics and Physics. French classes préparatoires.

### Recent training

- Advanced Kubernetes Training - 14h - The Mantis
- Advanced English courses - 26h - Focalpoint
- Machine learning for data science - 28h - INSA Toulouse
- Management - 18h - Formeo
- Oracle 11G - 35h - iForm

## Icons

Inline SVGs (stroke, currentColor), ~16–18px. Suggested meanings:

| Section / meta | Icon idea |
| --- | --- |
| Age/experience | clock |
| Address | house |
| Phone | phone handset |
| EXPERTIZE | flexed arm / strength |
| OTHER SKILLS | star |
| HOBBIES | sailboat |
| CAREER | gear |
| EDUCATION | graduation cap |
| RECENT TRAINING | globe |

## Workflow

1. Read this skill (and the reference PDF screenshot if the user attached one).
2. Write or overwrite `public/cv.html` with the layout + copy above.
3. Ensure `src/App.vue` CV link is `href="/cv.html"` with `target="_blank"` and `rel="noopener noreferrer"` (remove PDF `download` if present).
4. Do not regenerate from `src/database/*` — printable CV copy is owned by this skill, not the site cards.

## Do not

- Do not replace the printable HTML with a link to `cv.pdf` for the CV button.
- Do not pull career/education text from `jobs.js` / `studies.js` unless the user asks to sync.
- Do not add SPA routes or Vue components for the printable CV.
