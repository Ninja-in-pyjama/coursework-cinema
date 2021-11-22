export default {
  state() {
    return {
      auth: false,
      admin: false,
    };
  },

  mutations: {
    setAuth(state, flag) {
      state.auth = flag;
    },
    setAdmin(state, flag) {
      state.admin = flag;
    },
  },

  getters: {
    isAuth({ auth }) {
      return auth;
    },
    isAdmin({ admin }) {
      return admin;
    },
  },
  namespaced: true,
};
