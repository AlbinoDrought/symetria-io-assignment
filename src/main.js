// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { GetWallets, GetExchangeRates } from '@/api/ApiMock.original';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const pseudoApi = {
  GetWallets,
  GetExchangeRates,
};

Object.defineProperties(
  Vue.prototype,
  {
    $api: {
      get() {
        return pseudoApi;
      },
    },
  },
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
