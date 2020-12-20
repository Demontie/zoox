import api from '../../../services/api';

export default {
  async registerState({ dispatch }, newState) {
    try {
      await api.post(`/states`, newState);

      dispatch('loadStates');
    } catch (error) {
      throw error.message;
    }
  },
  async updateState({ dispatch }, item) {
    try {
      await api.put(`/states/${item.id}`, item);

      dispatch('loadStates');
    } catch (error) {
      throw error.message;
    }
  },
  async resetFormState({ commit }) {
    const data = {
      id: null,
      name: null,
      shortname: null
    };
    commit('setFormStates', data);
  },
  async editFormState({ commit }, item) {
    const { id, name, shortname } = item;
    const data = {
      id,
      name,
      shortname
    };
    commit('setFormStates', data);
  },
  async loadStates({ commit }) {
    try {
      const { data } = await api.get(`/states`);

      if (data) {
        commit('setStates', data);
      }
      return data;
    } catch (error) {
      throw error.message;
    }
  },
  async removeState({ dispatch }, idstate) {
    try {
      await api.delete(`/states/${idstate}`);
      dispatch('loadStates');
    } catch (error) {
      throw error.message;
    }
  }
};
