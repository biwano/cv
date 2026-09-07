import { config } from "./config.mjs";
import { ui, hobbies } from "./i18n.mjs";
import { experience, education, training, careerStartYear } from "./roles.mjs";

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function linkedInLabel(url) {
  return url.replace(/^https?:\/\//, "");
}

const ICONS = {
  clock: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  house: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"/></svg>`,
  phone: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 3.5h3.2l1.1 4.2-2 1.2a12.5 12.5 0 0 0 5.8 5.8l1.2-2 4.2 1.1V17a2.5 2.5 0 0 1-2.5 2.5A14.5 14.5 0 0 1 4.5 6 2.5 2.5 0 0 1 7 3.5z"/></svg>`,
  mail: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 7 8 6 8-6"/></svg>`,
  link: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7.4l2-2a4 4 0 0 0-5.6-5.6l-1.1 1.1"/><path d="M14 10a4 4 0 0 0-5.7-.4l-2 2a4 4 0 0 0 5.6 5.6l1.1-1.1"/></svg>`,
  gear: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>`,
  grad: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m3 10 9-5 9 5-9 5-9-5z"/><path d="M7 12.2v4.3c0 .2 2.2 2 5 2s5-1.8 5-2v-4.3"/><path d="M21 10v6"/></svg>`,
  arm: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8.5 14.5c-2 .2-3.5 1.2-3.5 3.2V20h6v-2.3c0-1.6-1-2.7-2.5-3.2z"/><path d="M10 14.2V9.5a2.5 2.5 0 0 1 5 0v1"/><path d="M15 11.2c1.8.3 3 1.4 3 3.2V20h-5"/><path d="M8.2 9.2c-.8-1.6.1-3.4 1.8-3.7"/></svg>`,
  star: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m12 3 2.2 4.6 5 .7-3.6 3.5.9 5.1L12 14.8 7.5 16.9l.9-5.1L4.8 8.3l5-.7L12 3z"/></svg>`,
  globe: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z"/></svg>`,
  boat: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 18h18"/><path d="M5 18c2.5-3 5.5-4.5 9-4.5 1.8 0 3.4.4 4.8 1.1"/><path d="M12 13.5V6.8L18 9"/><path d="M12 6.8 7.5 9"/></svg>`,
};

function sectionTitle(id, icon, label) {
  return `<h2 id="${id}" class="section-title">${icon}${esc(label)}</h2>`;
}

function pick(obj, lang) {
  return typeof obj === "string" ? obj : obj[lang];
}

export function renderHtml({ locale, skills }) {
  const t = ui[locale];
  const years = new Date().getFullYear() - careerStartYear;
  const email = config.email?.trim();

  const metaItems = [
    `${ICONS.clock}<span>${esc(t.experienceYears(years))}</span>`,
    email
      ? `${ICONS.mail}<a href="mailto:${esc(email)}">${esc(email)}</a>`
      : null,
    `${ICONS.phone}<a href="${telHref(config.phone)}">${esc(config.phone)}</a>`,
    `${ICONS.house}<span>${esc(config.address)}</span>`,
    `${ICONS.link}<a href="${esc(config.linkedin)}" target="_blank" rel="noopener noreferrer">${esc(linkedInLabel(config.linkedin))}</a>`,
  ]
    .filter(Boolean)
    .map((inner) => `<li>${inner}</li>`)
    .join("\n");

  const rolesHtml = experience
    .map((role) => {
      const details = role.details?.[locale] || [];
      const detailList = details.length
        ? `<ul class="duties">${details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>`
        : "";
      return `<article class="job">
  <h3 class="job-title">${esc(pick(role.title, locale))}</h3>
  <p class="job-meta"><span class="company">${esc(role.company)}</span><span class="sep" aria-hidden="true"> · </span><span class="dates">${esc(pick(role.dates, locale))}</span></p>
  ${detailList}
</article>`;
    })
    .join("\n");

  const educationHtml = education
    .map(
      (ed) => `<article class="job">
  <h3 class="job-title">${esc(pick(ed.school, locale))}</h3>
  <p class="job-meta"><span class="dates">${esc(ed.dates)}</span></p>
  <p class="edu-desc">${esc(pick(ed.description, locale))}</p>
</article>`,
    )
    .join("\n");

  const expertiseHtml = skills.expertise
    .map(
      (item) => `<div class="logo">
  <img src="${esc(item.img)}" alt="" width="42" height="42" />
  <span>${esc(item.title)}</span>
</div>`,
    )
    .join("\n");

  const skillGroupsHtml = skills.groups
    .map((g) => {
      const label = t.skillGroups[g.id];
      return `<div class="skill-group">
  <h3>${esc(label)}</h3>
  <p>${esc(g.titles.join(", "))}</p>
</div>`;
    })
    .join("\n");

  const trainingHtml = training
    .map((item) => `<li>${esc(pick(item, locale))}</li>`)
    .join("\n");

  const hobbiesHtml = hobbies[locale]
    .map((h) => `<li>${esc(h)}</li>`)
    .join("\n");

  return `<!doctype html>
<html lang="${t.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(t.documentTitle)}</title>
    <style>
${CSS}
    </style>
  </head>
  <body>
    <div class="toolbar">
      <button type="button" onclick="window.print()">${esc(t.print)}</button>
      <a class="toolbar-link" href="/${t.pdfFile}" download>${esc(t.downloadPdf)}</a>
      <a class="toolbar-link" href="/${t.otherHtml}">${esc(t.otherLabel)}</a>
    </div>

    <article class="sheet" aria-label="${esc(t.ariaLabel)}">
      <header class="header">
        <div class="header-text">
          <h1>${esc(config.name)}</h1>
          <p class="role">${esc(config.title[locale])}</p>
          <ul class="meta">
            ${metaItems}
          </ul>
        </div>
        <img
          class="portrait"
          src="${esc(config.photo)}"
          width="96"
          height="96"
          alt="${esc(config.name)}"
        />
      </header>

      <section class="section" aria-labelledby="experience-title">
        ${sectionTitle("experience-title", ICONS.gear, t.sections.experience)}
        ${rolesHtml}
      </section>

      <section class="section section-page-break" aria-labelledby="education-title">
        ${sectionTitle("education-title", ICONS.grad, t.sections.education)}
        ${educationHtml}
      </section>

      <section class="section" aria-labelledby="expertise-title">
        ${sectionTitle("expertise-title", ICONS.arm, t.sections.expertise)}
        <div class="logos">${expertiseHtml}</div>
      </section>

      <section class="section" aria-labelledby="skills-title">
        ${sectionTitle("skills-title", ICONS.star, t.sections.skills)}
        ${skillGroupsHtml}
      </section>

      <section class="section" aria-labelledby="training-title">
        ${sectionTitle("training-title", ICONS.globe, t.sections.training)}
        <ul class="training">${trainingHtml}</ul>
      </section>

      <section class="section" aria-labelledby="hobbies-title">
        ${sectionTitle("hobbies-title", ICONS.boat, t.sections.hobbies)}
        <ul class="hobbies">${hobbiesHtml}</ul>
      </section>
    </article>
  </body>
</html>
`;
}

const CSS = `
      :root {
        --accent: #f5f0d8;
        --ink: #1a1a1a;
        --muted: #333;
        --rule: #c9c3a8;
        --page-w: 210mm;
        --page-h: 297mm;
      }

      * { box-sizing: border-box; }

      html, body {
        margin: 0;
        padding: 0;
        color: var(--ink);
        font-family: "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 10.5pt;
        line-height: 1.35;
        background: #e8e8e8;
      }

      .toolbar {
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.92);
        border-bottom: 1px solid #ddd;
      }

      .toolbar button,
      .toolbar-link {
        appearance: none;
        border: 1px solid #333;
        background: #fff;
        color: #111;
        font: inherit;
        font-weight: 600;
        padding: 0.45rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
      }

      .toolbar button:hover,
      .toolbar-link:hover {
        background: #111;
        color: #fff;
      }

      .sheet {
        width: var(--page-w);
        min-height: var(--page-h);
        margin: 1.25rem auto 2rem;
        background: #fff;
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
        padding: 0 0 1.5rem;
      }

      .header {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        justify-content: space-between;
        background: var(--accent);
        padding: 1.1rem 1.5rem 0.9rem;
      }

      .header-text { flex: 1; min-width: 0; }

      h1 {
        margin: 0;
        font-size: 1.55rem;
        letter-spacing: 0.02em;
        line-height: 1.15;
        text-transform: uppercase;
      }

      .role {
        margin: 0.25rem 0 0.55rem;
        font-size: 0.92rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      .portrait {
        flex: 0 0 auto;
        width: 84px;
        height: 84px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center top;
      }

      .meta {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.85rem;
        color: var(--muted);
      }

      .meta li {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        margin-bottom: 0.2rem;
      }

      .meta a {
        color: inherit;
        text-decoration: none;
      }

      .meta a:hover { text-decoration: underline; }

      .icon {
        flex: 0 0 auto;
        width: 1.1rem;
        height: 1.1rem;
      }

      .section {
        margin: 0.85rem 1.5rem 0;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin: 0 0 0.4rem;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        border-bottom: 1px solid var(--rule);
        padding-bottom: 0.2rem;
      }

      .job { margin: 0 0 0.4rem; }

      .job-title {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 700;
      }

      .job-meta {
        margin: 0.05rem 0 0.1rem;
        font-size: 0.84rem;
        color: var(--muted);
      }

      .company { font-weight: 700; color: var(--ink); }
      .dates { font-weight: 700; }

      .edu-desc,
      .duties {
        margin: 0.05rem 0 0;
        padding-left: 1.05rem;
        font-size: 0.84rem;
      }

      .duties { list-style: disc; }
      .duties li { margin-bottom: 0.05rem; }

      .logos {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem 1.1rem;
        margin: 0.35rem 0 0.15rem;
      }

      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 3.6rem;
        text-align: center;
        font-size: 0.72rem;
        font-weight: 600;
        color: var(--muted);
      }

      .logo img {
        width: 2.4rem;
        height: 2.4rem;
        object-fit: contain;
        margin-bottom: 0.15rem;
      }

      .skill-group { margin: 0.3rem 0 0.35rem; }
      .skill-group h3 {
        margin: 0 0 0.1rem;
        font-size: 0.84rem;
        font-weight: 700;
      }
      .skill-group p {
        margin: 0;
        font-size: 0.8rem;
        line-height: 1.35;
      }

      .training,
      .hobbies {
        margin: 0;
        padding-left: 1.1rem;
        font-size: 0.84rem;
      }

      .training li,
      .hobbies li { margin-bottom: 0.15rem; }

      @page {
        size: A4;
        margin: 10mm;
      }

      @media print {
        html, body { background: #fff; }
        .toolbar { display: none !important; }
        .sheet {
          margin: 0;
          box-shadow: none;
          width: auto;
          min-height: auto;
        }
        .section-page-break {
          break-before: page;
          page-break-before: always;
        }
      }
`;
