export default {
  suppliers(state) {
    return state.suppliers;
  },
  supplier(state) {
    return state.supplier;
  },
  count(state) {
    return state.count;
  },
  hasSuppliers(state) {
    return state.suppliers && state.suppliers.length > 0;
  },
  isLoading(state){
    return state.load;
  }
};
