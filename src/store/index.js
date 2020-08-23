import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    generators: {}
  },
  mutations: {
    generators(state, generators) {
      state.generators = generators;
    }
  },
  actions: {},
  getters: {
    generators(state) {
      return state.generators;
    }
  },
  modules: {}
});
