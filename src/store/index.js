import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: {}
  },
  mutations: {
    templates(state, templates) {
      state.templates = templates;
    },
    locale(state, locale) {
      state.locale = locale;
    }
  },
  actions: {},
  getters: {
    templates(state) {
      return state.templates;
    },
    locale(state) {
      return state.locale;
    }
  },
  modules: {}
});
