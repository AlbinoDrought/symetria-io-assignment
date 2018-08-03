export default {
  namespaced: true,

  state: {
    realMoneyCurrency: 'CAD',

    wallets: [
      { currency: 'BTC', amount: 0.5001, changeToday: 1000.77 },
      { currency: 'ETH', amount: 1.2211, changeToday: -213.40 },
      { currency: 'LTC', amount: 105.3177, changeToday: 0 },
      { currency: 'XMR', amount: 1, changeToday: 0.48 },
    ],
    walletsLoaded: true,

    exchangeRates: [
      { currency: 'BTC', rate: 10100 },
      { currency: 'XMR', rate: 320.45 },
      { currency: 'LTC', rate: 241.4 },
      { currency: 'DOGE', rate: 0.00041 },
      { currency: 'ETH', rate: 500.12717 },
    ],
    exchangeRatesLoaded: true,
  },

  getters: {
    portfolio: (state) => {
      const portfolio = {
        value: 0,
        change: 0,
        currency: state.realMoneyCurrency,
      };

      state.wallets.forEach(({ currency, amount, changeToday }) => {
        const exchangeRate = state.exchangeRates.find(e => e.currency === currency);

        if (!exchangeRate) {
          // todo: throw
          return;
        }

        const value = amount * exchangeRate.rate;
        portfolio.value += value;
        portfolio.change += changeToday;
      });

      return portfolio;
    },
  },
};
