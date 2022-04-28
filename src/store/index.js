import { createStore } from 'vuex';

import suppliersModule from './suppliers/index.js';
import usersModule from './users/index.js';
import quotesModule from './quotes/index.js';

const store = createStore({
  modules: {
    suppliers: suppliersModule,
    users: usersModule,
    quotes: quotesModule,
  },
  state() {
    return {};
  },
  getters: {}
});

export default store;
