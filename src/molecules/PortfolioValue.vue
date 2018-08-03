<template>
  <div class="portfolio value molecule">
    <secondary-header>
      Portfolio Value
    </secondary-header>

    <big-text>
      {{ valueText }}
    </big-text>

    <secondary-header class="lower">
      <value-change v-bind="{ change, currency, prefix: false }" />
    </secondary-header>
  </div>
</template>

<script>
import SecondaryHeader from '@/components/Text/SecondaryHeader';
import BigText from '@/components/Text/BigText';
import ValueChange from '@/components/ValueChange';
import formatsMoney from '@/mixins/formatsMoney';

export default {
  components: {
    BigText,
    SecondaryHeader,
    ValueChange,
  },

  computed: {
    valueText() {
      return this.moneyText(this.value);
    },
  },

  mixins: [
    formatsMoney,
  ],

  props: {
    value: {
      type: Number,
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div.portfolio.value.molecule {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 38px;
  padding-bottom: 26px;
}

div.portfolio.value.molecule > .lower {
  padding-top: 12px;
}
</style>
