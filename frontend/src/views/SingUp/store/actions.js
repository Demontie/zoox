/* eslint-disable no-unused-vars */
import api from '../../../services/api';

export default {
  async register({ commit }, form) {
    try {
      await api.post(`/users`, form);
    } catch (error) {
      console.log(error);
      throw error.message;
    }
  }
};
