export default {
  quotes(state) {
    return state.quotes;
  },
  hasQuotes(state) {
    return state.quotes && state.quotes.length > 0;
  },
  count(state) {
    return state.count;
  },
  isLoading(state){
    return state.load;
  }
};
