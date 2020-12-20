import api from '../../../services/api';

export default {
  async registerCity({ dispatch }, newCity) {
    try {
      await api.post(`/cities`, newCity);

      dispatch('loadCities');
    } catch (error) {
      throw error.message;
    }
  },
  async updateCity({ dispatch }, item) {
    try {
      const data = {
        name: item.name,
        state_id: item.state_id
      };
      await api.put(`/cities/${item.id}`, data);

      dispatch('loadCities');
    } catch (error) {
      throw error.message;
    }
  },
  async resetFormCity({ commit }) {
    const data = {
      id: null,
      name: null,
      state_id: null
    };
    commit('setFormCities', data);
  },
  async editFormCity({ commit }, item) {
    const { id, name, state } = item;

    const data = {
      id,
      name,
      state_id: state.id
    };
    commit('setFormCities', data);
  },
  async loadCities({ commit }) {
    try {
      const { data } = await api.get(`/cities`);

      if (data) {
        commit('setCities', data);
      }
      return data;
    } catch (error) {
      throw error.message;
    }
  },
  async removeCity({ dispatch }, idcity) {
    try {
      await api.delete(`/cities/${idcity}`);
      dispatch('loadCities');
    } catch (error) {
      throw error.message;
    }
  }
};
