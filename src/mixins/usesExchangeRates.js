import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('wallets', {
      atomicExchangeRates: 'exchangeRates',
    }),

    exchangeRates() {
      return this.atomicExchangeRates.value;
    },

    exchangeRatesLoaded() {
      return this.atomicExchangeRates.loaded;
    },

    exchangeRatesError() {
      return this.atomicExchangeRates.error;
    },
  },

  methods: {
    ...mapActions('wallets', [
      'getExchangeRates',
      'refreshExchangeRates',
    ]),
  },

  mounted() {
    this.getExchangeRates(this.$api);
  },
};
