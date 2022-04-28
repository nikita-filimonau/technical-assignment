import fetch from "@/utils/fetch";
import API from "@/constants/api";

export default {
  async loadSuppliers(context, data) {
    context.commit('setStartLoad');
    fetch
      .fetch({
        urlPostfix: API.SUPPLIERS,
        params: data,
      })
      .then(response => {
        context.commit('setCount', response?.count);
        context.commit('setSuppliers', response?.results);
      })
      .catch(console.log)
      .finally(() => {
        context.commit('setFetchTimestamp')
        context.commit('setFinishLoad')
      });
  },
  async loadSupplier(context, data) {
    const supplier = context.state.suppliers.find(item => item.id === data);
    if (supplier) {
      context.commit('setSupplier', supplier);
    } else {
      context.commit('setStartLoad');
      fetch
          .fetch({
            urlPostfix: `${API.SUPPLIERS}${data}/`,
          })
          .then(response => context.commit('setSupplier', response))
          .catch(console.log)
          .finally(() => {
            context.commit('setFetchTimestamp')
            context.commit('setFinishLoad')
          });
    }
  }
};
