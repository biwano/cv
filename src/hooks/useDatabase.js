import database from "@/database";

function highlightTextFromSource(text) {
  if (text) {
    for (const key in database) {
      var replace;
      if (database[key].link) {
        replace = `<a target="_blank" href="${database[key].link}">${database[key].title}</a>`;
      } else {
        replace = database[key].title;
        console.log(`key ${key} as no link`);
      }
      text = text.replaceAll(`{${key}}`, replace);
    }
  }
  return text;
}

for (const key in database) {
  const elem = database[key];
  elem.content = highlightTextFromSource(elem.content);
}

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
    for (var level = 5; level >= 1; level--) {
      for (const key in database) {
        const elem = database[key];
        if (elem.category == category && elem.level == level) {
          items[key] = elem;
        }
      }
    }
    return items;
  }
  function highlightText(text) {
    return highlightTextFromSource(text);
  }
  return {
    getCategoryTags,
    getCategoryItems,
    highlightText,
  };
}
