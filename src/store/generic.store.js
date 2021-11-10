import { genericApi } from "@/api/generic.api";

export default (url, keyName, name) => {
  const api = genericApi({ url, name });

  return {
    state() {
      return {
        [keyName]: {},
        [`${keyName}s`]: {},
        [`${keyName}Error`]: null,
      };
    },

    mutations: {
      updateSucces(state, item) {
        state[keyName] = item;
      },
      updateFail(state, error) {
        state[`${keyName}Error`] = error;
      },

      // todo: щось зробити з createSucces | createFail
      createSucces(state, item) {
        state[keyName] = item;
      },
      createFail(state, error) {
        state[`${keyName}Error`] = error;
      },

      fetchItemSucces(state, item) {
        state[keyName] = item;
      },
      fetchItemFail(state, error) {
        state[`${keyName}Error`] = error;
      },

      fetchItemsSucces(state, items) {
        state[`${keyName}s`] = items;
      },
      fetchItemsFail(state, error) {
        state[`${keyName}Error`] = error;
      },

      deleteSucces(state, item) {
        state[keyName] = item;
      },
      deleteFail(state, error) {
        state[`${keyName}Error`] = error;
      },
    },

    actions: {
      async fetchItem({ commit }, id) {
        try {
          const item = await api.getItem(id);
          commit("fetchItemSucces", item);
        } catch (e) {
          commit("fetchItemFail", {
            e,
            errType: `${name} store fetchItem failed`,
          });
        }
      },
      async fetchItems({ commit }) {
        try {
          const item = await api.getItems();
          commit("fetchItemsSucces", item);
        } catch (e) {
          commit("fetchItemsFail", {
            e,
            errType: `${name} store fetchItems failed`,
          });
        }
      },
      async create({ commit }, payload) {
        try {
          const item = await api.createItem(payload);
          commit("createSucces", item);
        } catch (e) {
          commit("createFail", {
            e,
            errType: `${name} store create failed`,
          });
        }
      },
      async update({ commit }, { payload, id }) {
        try {
          const item = await api.updateItem(id, payload);
          commit("updateSucces", item);
        } catch (e) {
          commit("updateFail", {
            e,
            errType: `${name} store update failed`,
          });
        }
      },
      async delete({ commit }, id) {
        try {
          const item = await api.deleteItem(id);
          commit("deleteSucces", item);
        } catch (e) {
          commit("deleteFail", {
            e,
            errType: `${name} store delete failed`,
          });
        }
      },
    },

    getters: {
      [keyName]: (state) => state[keyName],
      [`${keyName}s`]: (state) => state[`${keyName}s`],
      [`${keyName}Error`]: (state) => state[`${keyName}Error`],
    },
  };
};
