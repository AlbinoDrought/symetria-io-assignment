import usesExchangeRates from './usesExchangeRates';

export default {
  mixins: [
    usesExchangeRates,
  ],

  methods: {
    convertCurrency(currency, value) {
      const exchangeRate = this.exchangeRates.find(e => e.currency === currency);

      if (!exchangeRate) {
        return undefined;
      }

      return value * exchangeRate.rate;
    },
  },
};
