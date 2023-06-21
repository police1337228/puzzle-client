export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    setToken(context, token) {
      context.commit("setToken", token);
    },
    setUser(context, user) {
      context.commit("setUser", user);
    },
  },
};
