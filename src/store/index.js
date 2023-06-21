import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
  state: {
    drawer: false,
    loginDialog: false,
    registerDialog: false,
    formDialog: false,
  },
  getters: {},
  mutations: {
    toggleLoginDialog(state, value) {
      state.loginDialog = value;
    },
    toggleFormDialog(state, value) {
      state.formDialog = value;
    },
    toggleRegisterDialog(state, value) {
      state.registerDialog = value;
    },
    toggleDrawer(state, value) {
      state.drawer = value;
    },
  },
  actions: {},
  modules: { auth },
});
