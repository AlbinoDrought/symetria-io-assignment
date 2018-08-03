<template>
  <div class="wallet entry molecule">
    <crypto-icon 
      class="icon"
      v-bind="{ currency }"
    />

    <div class="description">
      <div>
        <strong>{{ currency }}</strong>
      </div>
      <div>
        <strong>{{ amount }} {{ currency }}</strong>
        / {{ formattedAmount }}
      </div>
    </div>

    <div class="change">
      <value-change v-bind="{ change: changeToday, currency }" />
      <sub-text>
        {{ formattedAmount }}
      </sub-text>
    </div>
  </div>
</template>

<script>
import CryptoIcon from '@/components/CryptoIcon';
import ValueChange from '@/components/ValueChange';
import SubText from '@/components/Text/SubText';
import convertsCurrencies from '@/mixins/convertsCurrencies';
import formatsMoney from '@/mixins/formatsMoney';

export default {
  components: {
    CryptoIcon,
    ValueChange,
    SubText,
  },

  computed: {
    convertedAmount() {
      return this.convertCurrency(
        this.currency,
        this.amount,
      );
    },

    formattedAmount() {
      return this.moneyText(
        this.convertedAmount,
      );
    },
  },

  mixins: [
    formatsMoney,
    convertsCurrencies,
  ],

  props: {
    currency: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    changeToday: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.wallet.entry.molecule {
  flex-wrap: wrap;
  border: 1px solid #E4E4E4;
  display: flex;
  flex-direction: row;
  
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 23px;
  padding-bottom: 23px;

  margin-top: 16px;
  margin-bottom: 16px;

  min-height: 56px;

  box-shadow: 0px 0px 5px 0px rgb(211, 210, 209);
}

.wallet.entry.molecule > .description {
  flex-grow: 1;
  min-height: 57px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 24px;
}

.wallet.entry.molecule > .change {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;
  padding-left: 10px;
}

.wallet.entry.molecule > .icon {
  height: 57px;
  width: 57px;
  margin-right: 12px;
}

.wallet.entry.molecule > .change > *:first-child {
  font-size: 30px;
}
</style>
