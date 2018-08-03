import Vue from 'vue';
import Vuex from 'vuex';

import wallets from './wallets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wallets,
  },
});
