import api from '../../../services/api';

export default {
  async login({ commit }, form) {
    try {
      const response = await api.post(`/sessions`, form);
      const data = {
        user: response.data.user,
        token: response.data.token
      };
      localStorage.setItem('user', JSON.stringify({ user: data.user }));
      localStorage.setItem('token', JSON.stringify({ token: data.token }));
      commit('loginRequest', data);
    } catch (error) {
      throw error.message;
    }
  },
  async logout({ commit }) {
    commit('logoutRequest');
  }
};
