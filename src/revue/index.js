import GRender from "./GRender.vue";
import GRenderList from "./GRenderList.vue";
import Gurl from "./gurl.js";
import md5 from "./md5";

export default {
  install: function(Vue, revue_options) {
    var g_components = {};
    Vue.mixin({
      components: { GRender, GRenderList },
      methods: {
        g_url(raw) {
          return Gurl(revue_options, raw);
        },
        async g_component(url) {
          var name = "g" + md5(url);
          if (g_components[name] === undefined) {
            var gurl = Gurl(revue_options, url);
            var template = await gurl.fetch();
            console.log();
            if (template === undefined) {
              var parent =
                this.$parent.templateUrl || this.$parent.$options.name;
              console.error(
                `[ERROR] REVUE - Template not found at url ${url} in ${parent}`
              );
            }
            else {
              var component = await Vue.component(name, resolve => {
                resolve({
                  props: ["data"],
                  data() {
                    return { templateUrl: url };
                  },
                  template,
                  components: {
                    GRender: () => import("./GRender.vue"),
                    GRenderList: () => import("./GRenderList.vue")
                  }
                });
              });
              g_components[name] = {
                name,
                url,
                component
              };
            }
            console.info(`[DEBUG] REVUE - component ${name}=${url}`);
          }
          return g_components[name];
        }
      }
    });
  }
};
