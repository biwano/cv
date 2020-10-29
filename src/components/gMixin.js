import Vue from "vue";

var components = {};
export default {
  props: {
    templateUrl: String,
    dataUrl: String,
    data: Object
  },
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
    get_root_key(str) {
      if (str) {
        var i = str.indexOf(".");
        if (i >= 0) return str.slice(0, i);
        else return str;
      }
    },
    get_root_key_rest(str) {
      if (str) {
        var i = str.indexOf(".");
        if (i >= 0) return str.slice(i + 1);
      }
    },
    // path: root_key.root_key_rest
    traverse(data, path) {
      var key = this.get_root_key(path);
      var res = undefined;
      // path starved
      if (key === undefined) res = data;
      // Array: ignore
      else if (Array.isArray(data)) {
        res = undefined;
      }
      // Object: travers
      else if (typeof data === "object") {
        if (data[key]) {
          res = this.traverse(data[key], this.get_root_key_rest(key));
        }
        return res;
      } else res = data;
      // Other
      return res;
    },
    // url: generator_path@generator_store
    get_raw_data_from_url(url) {
      var pos = url.lastIndexOf("@");
      var generator_path = url.substring(0, pos);
      var generator_store = url.substring(pos + 1, url.length);
      var text;
      var func = this[`store_${generator_store}`];
      if (func) {
        var data = func(this.get_root_key(generator_path));
        if (data) {
          text = this.traverse(data, this.get_root_key_rest(generator_path));
        }
      } else {
        console.warn(`[WARN] FETCH - Generator store not found; url=${url}`);
        return;
      }
      // not found
      if (text === undefined)
        console.warn(
          `[WARN] FETCH - No path '${generator_path}' in generator store '${generator_store}' url=${url}`
        );
      else console.debug(`[DEBUG] FETCH - '${url}'`, text);
      return text;
    },
    resolve_data_dependencies(data) {
      if (data) {
        for (var i in data) {
          var item = data[i];
          // String
          if (
            (typeof item === "string" || item instanceof String) &&
            item.startsWith("url:")
          ) {
            item = this.get_data_from_url(item.slice(item.indexOf(":") + 1));
          }
          // Object
          if (typeof item === "object") {
            this.resolve_data_dependencies(item);
          }
          data[i] = item;
        }
      }
      return data;
    },
    get_data_from_url(url) {
      var data = this.get_raw_data_from_url(url);
      this.resolve_data_dependencies(data);
      return data ? data : {};
    },
    async get_component_name(url) {
      var key = url.replace("@", "__");
      if (components[key] === undefined) {
        var template = this.get_raw_data_from_url(url);
        components[key] = await Vue.component(key, resolve => {
          resolve({
            props: ["data"],
            template,
            components: {
              GRender: () => import("./GRender.vue"),
              GRenderList: () => import("./GRenderList.vue")
            }
          });
        });
      }
      return key;
    }
  },
  asyncComputed: {
    component() {
      var component = this.get_component_name(this.templateUrl);
      return component;
    },
    data_from_url() {
      var data = this.dataUrl ? this.get_data_from_url(this.dataUrl) : {};
      return data;
    },
    data_from_props() {
      return this.data ? this.data : {};
    }
  }
};
