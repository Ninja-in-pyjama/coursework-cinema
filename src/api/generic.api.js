import request from "./axios";

export const genericApi = ({ url, name }) => ({
  async getItem(id) {
    try {
      const { data } = await request.get(`${url}/${id}`);
      return data;
    } catch (e) {
      throw {
        e,
        error: true,
        message: `${name} getItem fetch failed`,
      };
    }
  },
  async getItems() {
    try {
      const { data } = await request.get(`${url}`);
      return data;
    } catch (e) {
      throw {
        e,
        error: true,
        message: `${name} getItems fetch failed`,
      };
    }
  },
  async createItem(payload) {
    try {
      const { data } = await request.post(`${url}`, payload);
      return data;
    } catch (e) {
      throw {
        e,
        error: true,
        message: `${name} createItem fetch failed`,
      };
    }
  },
  async updateItem(id, payload) {
    try {
      const { data } = await request.put(`${url}/${id}`, payload);
      return data;
    } catch (e) {
      throw {
        e,
        error: true,
        message: `${name} updateItem fetch failed`,
      };
    }
  },
  async deleteItem(id) {
    try {
      const { data } = await request.delete(`${url}/${id}`);
      return data;
    } catch (e) {
      throw {
        e,
        error: true,
        message: `${name} deleteItem fetch failed`,
      };
    }
  },
});
