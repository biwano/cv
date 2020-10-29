import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Buefy from "buefy";
import Revue from "./revue";
import AsyncComputed from "vue-async-computed";
import "buefy/dist/buefy.css";
import axios from "axios";

Vue.use(AsyncComputed);
Vue.use(Buefy);
Vue.use(Revue, {
  stores: {
    async locale(path) {
      return store.getters.locale[path];
    },
    async static(path) {
      return store.getters.templates[path];
    },
    async http(path) {
      var response = await axios.get(`http://${path}`)
  	  return response.data
  	},
    async https(path) {
      var response = await axios.get(`https://${path}`)
      return response.data
    }
  }
});
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
