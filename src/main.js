import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./Home.vue";
import store from "./store";
import Buefy from "buefy";
import Revue from "./revue";
import AsyncComputed from "vue-async-computed";
import "buefy/dist/buefy.css";
import axios from "axios";
import locale from "./content/locales";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faEnvelope,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);
library.add(faEnvelope);
library.add(faGithubSquare);
library.add(faLinkedin);
library.add(faStar);

Vue.component("f-icon", FontAwesomeIcon);

Vue.use(VueRouter);
var routes = [
  { path: "/", name: "revue", component: App },
  { path: "/:template", name: "revue", component: App },
  {
    path: "/:template/:params",
    name: "revue",
    component: App
  }
];
const router = new VueRouter({ routes });

Vue.use(AsyncComputed);
Vue.use(Buefy);
Vue.use(Revue, {
  stores: {
    async locale(path) {
      return store.getters.locale[path];
    },
    async template(path) {
      return store.getters.templates[path];
    },
    async http(path) {
      var response = await axios.get(`http://${path}`);
      return response.data;
    },
    async https(path) {
      var response = await axios.get(`https://${path}`);
      return response.data;
    }
  },
  functions: {
    change_locale(l) {
      store.commit("locale", locale[l]);
    },
    reload() {
      store.commit("reload");
    }
  }
});
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(Home)
}).$mount("#app");
