export default {
  setSuppliers(state, payload) {
    state.suppliers = payload;
  },
  setCount(state, payload) {
    state.count = payload;
  },
  setSupplier(state, payload) {
    state.supplier = payload;
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
