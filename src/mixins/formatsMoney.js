import usesCurrency from './usesCurrency';

const currencyFormatter = require('currency-formatter');

const CURRENCY_PREFIX_MAP = {
  CAD: 'C',
};

const makePrefix = currency => CURRENCY_PREFIX_MAP[currency] || '';

export default {
  mixins: [
    usesCurrency,
  ],

  methods: {
    moneyText(value, { currency, prefix } = {}) {
      const currencyToUse = currency || this.realMoneyCurrency;

      const asHumanString = currencyFormatter.format(value, {
        code: currencyToUse,
      });

      if (prefix === false) {
        // if prefix is false,
        // do _not_ add any.
        return asHumanString;
      }

      const prefixToUse = prefix === undefined
        ? makePrefix(currencyToUse)
        : prefix;

      return `${prefixToUse}${asHumanString}`;
    },
  },
};
