import fetch from "@/utils/fetch";
import API from "@/constants/api";

export default {
  async loadQuotes(context, data) {
    context.commit('setStartLoad');
    fetch
      .fetch({
        urlPostfix: API.QUOTES,
        params: data,
      })
      .then(response => {
        context.commit('setCount', response?.count);
        context.commit('setQuotes', response?.results);
      })
      .catch(console.log)
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
};
