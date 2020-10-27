import Vue from "vue";
import GRender from "./GRender.vue";

var components = {};
export default {
  methods: {
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
      // not found
      if (text === undefined)
        console.warn(
          `[FETCH] No key '${generator_path}' in generator store '${generator_store}' url=${url}`
        );

      return text;
    },
    get_data_from_url(url) {
      var data = this.get_text_from_url(url);
      data = data ? data : {};
      return data ? data : {};
    },
    async get_component_name(url) {
      var key = url.replace("@", "__");
      //vm.$options.components
      if (components[key] === undefined) {
        var template = this.get_text_from_url(url);
        components[key] = await Vue.component(key, resolve => {
          resolve({
            props: ["data"],
            template,
            components: { GRender }
          });
        });
      }
      return key;
    }
  }
};
