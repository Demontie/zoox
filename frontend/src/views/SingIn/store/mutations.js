export default {
  loginRequest(state, data) {
    state.status = { loggingIn: true };
    state.token = { token: data.token };
    state.user = { user: data.user };
  },
  logoutRequest(state) {
    state.status = { loggingIn: false };
    state.token = { token: {} };
    state.user = { user: {} };
  }
};
