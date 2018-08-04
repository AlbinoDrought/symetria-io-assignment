const atomic = ({ defaultValue, loaded = false, error = false }) => ({
  value: defaultValue,
  defaultValue,
  loaded,
  error,
  promise: null,
});

// state boilerplate for beginning loading
const makeAtomicLoader = ({ name }) => (state, promise) => {
  const atomicObject = state[name];

  atomicObject.loaded = false;
  atomicObject.error = false;
  atomicObject.value = atomicObject.defaultValue;
  atomicObject.promise = promise;
};

// state boilerplate for when an atomic object has stopped loading
const makeAtomicLoaded = ({ name }) => (state, { error = false, value }) => {
  const atomicObject = state[name];

  atomicObject.promise = null;
  atomicObject.error = error;

  if (error === false) {
    atomicObject.loaded = true;
    atomicObject.value = value;
  }
};

const atomicGetOr = ({ name, action }) => ({ state, dispatch }, $api) => {
  if (state[name].loaded) {
    return Promise.resolve(state[name].value);
  }

  if (state[name].promise !== null) {
    return state[name].promise;
  }

  return dispatch(action, $api);
};

export default {
  namespaced: true,

  state: {
    realMoneyCurrency: 'CAD',

    wallets: atomic({
      defaultValue: [],
    }),

    exchangeRates: atomic({
      defaultValue: [],
    }),
  },

  getters: {
    portfolio: (state) => {
      const portfolio = {
        value: 0,
        change: 0,
        currency: state.realMoneyCurrency,
      };

      state.wallets.value.forEach(({ currency, amount, changeToday }) => {
        const exchangeRate = state.exchangeRates.value.find(e => e.currency === currency);

        if (!exchangeRate) {
          // todo: somehow handle this?
          // not too sure what should happen here,
          // so for now skip it.
          return; // value and change are not added to total
        }

        const value = amount * exchangeRate.rate;
        portfolio.value += value;
        portfolio.change += changeToday;
      });

      return portfolio;
    },
    portfolioLoaded: state => state.wallets.loaded && state.exchangeRates.loaded,
    portfolioError: state => state.wallets.error || state.exchangeRates.error,
  },

  mutations: {
    loadWallets: makeAtomicLoader({
      name: 'wallets',
    }),

    loadedWallets: makeAtomicLoaded({
      name: 'wallets',
    }),

    loadExchangeRates: makeAtomicLoader({
      name: 'exchangeRates',
    }),

    loadedExchangeRates: makeAtomicLoaded({
      name: 'exchangeRates',
    }),
  },

  actions: {
    // fetch from API
    refreshWallets: ({ commit }, $api) => {
      const promise = $api.GetWallets()
        .then((value) => {
          commit('loadedWallets', {
            value,
          });
        })
        .catch((error) => {
          commit('loadedWallets', {
            error,
          });
        });

      commit('loadWallets', promise);

      return promise;
    },

    // return existing, or fetch from API
    getWallets: atomicGetOr({
      name: 'wallets',
      action: 'refreshWallets',
    }),

    // fetch from API
    refreshExchangeRates: ({ commit }, $api) => {
      const promise = $api.GetExchangeRates()
        .then((value) => {
          commit('loadedExchangeRates', {
            value,
          });
        })
        .catch((error) => {
          commit('loadedExchangeRates', {
            error,
          });
        });

      commit('loadExchangeRates', promise);

      return promise;
    },

    // return existing, or fetch from API
    getExchangeRates: atomicGetOr({
      name: 'exchangeRates',
      action: 'refreshExchangeRates',
    }),

    getPortfolio: ({ dispatch }, $api) => Promise.all([
      dispatch('getExchangeRates', $api),
      dispatch('getWallets', $api),
    ]),

    refreshPortfolio: ({ dispatch }, $api) => Promise.all([
      dispatch('refreshExchangeRates', $api),
      dispatch('refreshWallets', $api),
    ]),
  },
};
