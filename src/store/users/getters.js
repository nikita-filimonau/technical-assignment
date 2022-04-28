export default {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return !!state.user?.auth_token || !!state.user?.token;
  },
  error(state) {
    return state?.error;
  },
  isLoading(state) {
    return state.load;
  }
};
