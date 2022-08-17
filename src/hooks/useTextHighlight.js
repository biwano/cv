import database from "@/database";

export default function () {
  function highlightText(text) {
    if (text) {
      for (const key in database) {
        text = text.replaceAll(
          `{${key}}`,
          `<a target="_blank" href="${database[key].link}">${database[key].title}</a>`
        );
      }
    }
    return text;
  }
  return {
    highlightText,
  };
}
