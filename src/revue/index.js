import GRender from "./GRender.vue";
import GRenderList from "./GRenderList.vue";
import GLink from "./GLink.vue";
import Gurl from "./gurl.js";
import md5 from "./md5";

export default {
  install: function(Vue, revue_options) {
    var g_components = {};
    Vue.mixin({
      components: { GRender, GRenderList, GLink },
      methods: {
        g_url(raw) {
          return Gurl(revue_options, raw);
        },
        g_exec(func, ...args) {
          console.debug(`[DEBUG] REVUE - calling function ${func}`);
          return revue_options["functions"][func].apply(this, args);
        },
        g_clear_cache() {
          g_components = {};
        },
        async g_component(url) {
          var name = "g" + md5(url);
          if (g_components[name] === undefined) {
            var gurl = Gurl(revue_options, url);
            var template = await gurl.fetch();
            if (template === undefined) {
              var parent =
                this.$parent.templateUrl || this.$parent.$options.name;
              console.error(
                `[ERROR] REVUE - Template not found at url ${url} in ${parent}`
              );
            } else {
              var component = await Vue.component(name, resolve => {
                resolve({
                  props: ["data"],
                  data() {
                    return { templateUrl: url };
                  },
                  template,
                  components: {
                    GRender: () => import("./GRender.vue"),
                    GRenderList: () => import("./GRenderList.vue"),
                    GLink: () => import("./GLink.vue")
                  }
                });
              });
              g_components[name] = {
                name,
                url,
                component
              };
            }
            console.debug(`[DEBUG] REVUE - component loaded: ${name}=${url}`);
          }
          return g_components[name];
        }
      }
    });
  }
};
