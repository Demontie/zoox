/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
});

api.interceptors.request.use(async conf => {
  if (localStorage.getItem('token')) {
    const { token } = JSON.parse(localStorage.getItem('token'));
    const tokenString = `Bearer ${token}`;
    // eslint-disable-next-line no-param-reassign
    conf.headers.Authorization = tokenString;
  }
  return conf;
});

export default api;
