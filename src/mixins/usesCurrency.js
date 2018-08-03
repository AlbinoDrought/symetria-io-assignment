import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('wallets', {
      realMoneyCurrency: 'realMoneyCurrency',
    }),
  },
};
