import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('wallets', {
      atomicWallets: 'wallets',
    }),

    wallets() {
      return this.atomicWallets.value;
    },

    walletsLoaded() {
      return this.atomicWallets.loaded;
    },

    walletsError() {
      return this.atomicWallets.error;
    },
  },

  methods: {
    ...mapActions('wallets', [
      'getWallets',
      'refreshWallets',
    ]),
  },

  mounted() {
    this.getWallets(this.$api);
  },
};
