import { pathToFileURL } from "node:url";
import { paths } from "./config.mjs";

const EXPERTISE_KEYS = ["react", "vuejs"];
const EXPERTISE_EXTRA = {
  key: "typescript",
  title: "TypeScript",
  img: "/images/typescript.svg",
};

const GROUP_DEFS = [
  {
    id: "development",
    tags: [
      "languages",
      "frameworks",
      "javascript",
      "java",
      "php",
      "python",
      "ruby",
      "cms",
      "web3",
    ],
  },
  { id: "databases", tags: ["databases"] },
  { id: "tools", tags: ["tools"] },
  { id: "systems", tags: ["system"] },
];

export async function loadSkills() {
  const mod = await import(pathToFileURL(paths.skillsJs.pathname).href);
  const skills = mod.default;

  const expertise = [
    ...EXPERTISE_KEYS.map((key) => ({
      title: skills[key].title,
      img: skills[key].img,
    })),
    {
      title: skills.typescript?.title || EXPERTISE_EXTRA.title,
      img: skills.typescript?.img || EXPERTISE_EXTRA.img,
    },
  ];

  const exclude = new Set([...EXPERTISE_KEYS, "typescript"]);
  const entries = Object.entries(skills)
    .filter(([key]) => !exclude.has(key))
    .map(([key, value], index) => ({ key, ...value, index }));

  const used = new Set();
  const groups = [];

  for (const def of GROUP_DEFS) {
    const items = entries
      .filter(
        (e) =>
          !used.has(e.key) &&
          Array.isArray(e.tags) &&
          e.tags.some((t) => def.tags.includes(t)),
      )
      .sort((a, b) => {
        const levelDiff = (b.level || 0) - (a.level || 0);
        return levelDiff !== 0 ? levelDiff : a.index - b.index;
      });

    for (const item of items) used.add(item.key);
    if (items.length) {
      groups.push({ id: def.id, titles: items.map((i) => i.title) });
    }
  }

  return { expertise, groups };
}
