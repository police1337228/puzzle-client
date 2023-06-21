import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import Cookies from "js-cookie";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["auth"],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
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
