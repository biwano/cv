import fs from "node:fs";
import process from "node:process";
import { fileURLToPath } from "node:url";

/** Load KEY=VAL from repo-root `.env` into process.env when unset (no dotenv dep). */
function loadDotEnv() {
  const envPath = fileURLToPath(new URL("../../.env", import.meta.url));
  let text;
  try {
    text = fs.readFileSync(envPath, "utf8");
  } catch {
    return;
  }
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadDotEnv();

/** Contact + paths for printable CV. Email: set CV_EMAIL or edit below — do not invent. */
export const config = {
  name: "Bruno Ilponse",
  address: "6 Rue Jean Dabadie, 31600 Muret, France",
  phone: "+33 6 76 58 13 48",
  /** ATS requires this on the CV; kept off the Vue contact form on purpose. */
  email: process.env.CV_EMAIL || "bruno.ilponse@gmail.com",
  linkedin: "https://www.linkedin.com/in/bruno-ilponse/",
  photo: "/images/cv-photo.png",
  title: {
    en: "Senior Fullstack Software Developer",
    fr: "Développeur logiciel fullstack senior",
  },
};

export const paths = {
  publicDir: new URL("../../public/", import.meta.url),
  skillsJs: new URL("../../src/database/skills.js", import.meta.url),
};
