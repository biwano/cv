#!/usr/bin/env node
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { config, paths } from "./config.mjs";
import { ui } from "./i18n.mjs";
import { loadSkills } from "./load-skills.mjs";
import { renderHtml } from "./render.mjs";
import { writePdfs } from "./pdf.mjs";

const mode = process.argv[2] || "all"; // all | html | pdf

async function writeHtml() {
  if (!config.email?.trim()) {
    console.warn(
      "Warning: no CV email set. Set CV_EMAIL or scripts/cv/config.mjs → email for ATS contact parsing.",
    );
  }

  const skills = await loadSkills();
  for (const locale of ["en", "fr"]) {
    const html = renderHtml({ locale, skills });
    const file = ui[locale].htmlFile;
    const out = fileURLToPath(new URL(file, paths.publicDir));
    await fs.writeFile(out, html, "utf8");
    console.log(`wrote public/${file}`);
  }
}

async function writePdf() {
  await writePdfs([
    { htmlFile: ui.en.htmlFile, pdfFile: ui.en.pdfFile },
    { htmlFile: ui.fr.htmlFile, pdfFile: ui.fr.pdfFile },
  ]);
}

async function main() {
  if (mode === "html" || mode === "all") await writeHtml();
  if (mode === "pdf" || mode === "all") await writePdf();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
