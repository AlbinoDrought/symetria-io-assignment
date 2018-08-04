<template>
  <span :class="[ stateOfChange ]" class="value change atom">
    <span
      v-if="triangle"
      class="triangle"
    />
    {{ sign }}{{ changeText }}
  </span>
</template>

<script>
import formatsMoney from '@/mixins/formatsMoney';

const STATE_LESS = 'decreased';
const STATE_GREATER = 'increased';
const STATE_ZERO = 'stagnant';

const STATE_SIGN_MAP = {
  [STATE_LESS]: '-',
  [STATE_GREATER]: '+',
  [STATE_ZERO]: '',
};

export default {
  computed: {
    stateOfChange() {
      if (this.change < 0) {
        return STATE_LESS;
      }

      if (this.change > 0) {
        return STATE_GREATER;
      }

      return STATE_ZERO;
    },

    sign() {
      return STATE_SIGN_MAP[this.stateOfChange];
    },

    changeText() {
      return this.moneyText(Math.abs(this.change), { prefix: this.prefix });
    },
  },

  mixins: [
    formatsMoney,
  ],

  props: {
    prefix: {
      required: false,
      default: undefined,
    },

    triangle: {
      type: Boolean,
      required: false,
      default: true,
    },

    change: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.decreased.value.change.atom {
  color: #ED1C70;
}

.increased.value.change.atom {
  color: #4CBC5B;
}

.stagnant.value.change.atom {
  color: #736268;
}

.value.change.atom {
  font-weight: 600;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 0.55em solid transparent;
  border-right: 0.55em solid transparent;
  vertical-align: middle;
  display: inline-block;
}

.stagnant .triangle {
  display: none;
}

.increased .triangle {
  border-bottom: 0.75em solid #4CBC5B;
}

.decreased .triangle {
  border-top: 0.75em solid #ED1C70;
}
</style>
