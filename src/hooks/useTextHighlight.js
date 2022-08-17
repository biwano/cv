import { jobs, projects, studies, skills, links } from "@/database";

export default function () {
  function highlightText(text) {
    [jobs, projects, studies, skills, links].forEach((category) => {
      for (const key in category) {
        text = text.replaceAll(
          `{${key}}`,
          `<a target="_blank" href="${category[key].link}">${category[key].title}</a>`
        );
      }
    });
    return text;
  }
  return {
    highlightText,
  };
}
