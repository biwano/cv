import database from "@/database";

export default function () {
  function getCategoryTags(category) {
    const tags = [];
    const items = getCategoryItems(category);
    for (const key in items) {
      const elem = items[key];
      if (elem.tags) {
        elem.tags.forEach((tag) => {
          if (tags.indexOf(tag) < 0) tags.push(tag);
        });
      }
    }
    return tags;
  }
  function getCategoryItems(category) {
    const items = {};
    for (const key in database) {
      const elem = database[key];
      if (elem.category == category) {
        items[key] = elem;
      }
    }
    return items;
  }
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
    getCategoryTags,
    getCategoryItems,
    highlightText,
  };
}
