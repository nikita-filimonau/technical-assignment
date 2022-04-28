export default {
  setQuotes(state, payload) {
    state.quotes = payload;
  },
  setCount(state, payload) {
    state.count = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  setStartLoad(state) {
    state.load = true;
  },
  setFinishLoad(state) {
    state.load = false;
  }
};
