<template>
  <img
    class="crypto icon"
    :alt="alt"
    :title="alt"
    v-show="hasIcon"
    :src="icon"
  />
</template>

<script>
import iconBitcoin from '@/assets/btc.svg';
import iconEthereum from '@/assets/eth.svg';
import iconDoge from '@/assets/doge.svg';
import iconLitecoin from '@/assets/ltc.svg';
import iconMonero from '@/assets/xmr.svg';

const CRYPTO_ICON_MAP = {
  BTC: iconBitcoin,
  DOGE: iconDoge,
  ETH: iconEthereum,
  LTC: iconLitecoin,
  XMR: iconMonero,
};

export default {
  computed: {
    alt() {
      return `${this.currency} icon`;
    },
    
    icon() {
      return CRYPTO_ICON_MAP[this.currency];
    },

    hasIcon() {
      return this.icon !== undefined;
    },
  },

  props: {
    currency: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img.crypto.icon {
  max-width: 100%;
  height: auto;
}
</style>
