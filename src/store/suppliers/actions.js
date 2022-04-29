import SupplierService from './service';

const START_LOAD = 'setStartLoad';
const FINISH_LOAD = 'setFinishLoad';
const FETCH_TIMESTAMP = 'setFetchTimestamp';
const SET_SUPPLIERS = 'setSuppliers';
const SET_SUPPLIER = 'setSupplier';
const SET_COUNT = 'setCount';

export default {
  loadSuppliers(context, data) {
    context.commit(START_LOAD);
    SupplierService.loadSuppliers(data)
      .then(response => {
        context.commit(SET_COUNT, response?.count);
        context.commit(SET_SUPPLIERS, response?.results);
      })
      .catch(console.log)
      .finally(() => {
        context.commit(FETCH_TIMESTAMP)
        context.commit(FINISH_LOAD)
      });
  },
  loadSupplier(context, data) {
    const supplier = context.state.suppliers.find(item => item.id === data);
    if (supplier) {
      context.commit(SET_SUPPLIER, supplier);
    } else {
      context.commit(START_LOAD);
      SupplierService.loadSupplier(data)
          .then(response => context.commit(SET_SUPPLIER, response))
          .catch(console.log)
          .finally(() => {
            context.commit(FETCH_TIMESTAMP)
            context.commit(FINISH_LOAD)
          });
    }
  }
};
