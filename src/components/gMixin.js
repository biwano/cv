import xml from "xml2js";
export default {
  props: {
    config: Object,
    data: Object
  },
  computed: {
    children() {
      var children = [];
      if (this.config && this.config.$$)
        return this.config.$$.map(child => {
          child["#name"] = child["#name"] == "__text__" ? "text" : child["#name"];
          return child;
        });
      return children;
    }
  },
  methods: {
    get_attr(attr) {
      return this.config.$[attr];
    },
    get_text() {
      return this.config._
    },
    store_static(path) {
      var templates = this.$store.getters.templates;
      return templates[path];
    },
    store_locale(path) {
      var locale = this.$store.getters.locale;
      return locale[path];
    },
    store_raw(path) {
      return path;
    },
    get_text_from_url(url) {
      var pos = url.lastIndexOf("@");
      var generator_path = url.substring(0, pos);
      var generator_store = url.substring(pos + 1, url.length);
      var text;
      var func = this[`store_${generator_store}`];
      if (func) {
        text = func(generator_path);
      } else {
        console.warn(`[FETCH] Generator store not found; url=${url}`);
        return;
      }
      // list
      /*
      if (typeof text !== "string") {
        text = text.join("");
      }*/
      // not found
      if (text === undefined)
        console.warn(
          `[FETCH] No key '${generator_path}' in generator store '${generator_store}' url=${url}`
        );

      return text;
    },
    get_data_from_url(url) {
      return this.get_text_from_url(url);
    },
    get_xml_from_url(url) {
      return new Promise((resolve, reject) => {
        var source = this.get_text_from_url(url);
        if (source) {
          return xml
            .parseStringPromise(source, {
              explicitRoot: false,
              explicitChildren: true,
              preserveChildrenOrder: true,
              charsAsChildren: true
            })
            .then(r => resolve(r))
            .catch(e => {
              console.warn(`[XML parser] Cannot parse <${source}>: ${e}`);
              reject();
            });
        }
        console.warn(`[XML parser] Cannot parse => no source`);
        reject();
      });
    }
  }
};
