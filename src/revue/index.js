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
            var component = await Vue.component(name, resolve => {
              resolve({
                props: ["data"],
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
          console.log(g_components[name]);
          return g_components[name];
        }
      }
    });
  }
};
