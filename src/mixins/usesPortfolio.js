import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('wallets', {
      portfolio: 'portfolio',
      portfolioLoaded: 'portfolioLoaded',
      portfolioError: 'portfolioError',
    }),
  },

  methods: {
    ...mapActions('wallets', [
      'getPortfolio',
      'refreshPortfolio',
    ]),
  },

  mounted() {
    return this.getPortfolio(this.$api);
  },
};
