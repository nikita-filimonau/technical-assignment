export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  setStartLoad(state) {
    state.load = true;
  },
  setFinishLoad(state) {
    state.load = false;
  },
  setError(state, payload) {
    state.error = payload;
  },
};
