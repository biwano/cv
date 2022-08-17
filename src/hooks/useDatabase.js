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
  return {
    getCategoryTags,
    getCategoryItems,
  };
}
