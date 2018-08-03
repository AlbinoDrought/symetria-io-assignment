<template>
  <div class="your portfolio organism">
    <black-bar />
    <text-segment>
      <main-header>Your Portfolio</main-header>
    </text-segment>
    <horizontal-rule />
    <content-segment>
      <portfolio-value v-bind="portfolio" />
    </content-segment>
    <horizontal-rule />
    <horizontal-shadow-segment />
    <content-segment>
      <wallet-entry
        v-for="(wallet, i) in wallets"
        :key="i"
        v-bind="wallet"
      />
    </content-segment>
    <horizontal-rule />
  </div>
</template>

<script>
import BlackBar from '@/components/Segments/BlackBar';
import TextSegment from '@/components/Segments/TextSegment';
import ContentSegment from '@/components/Segments/ContentSegment';
import HorizontalRule from '@/components/Segments/HorizontalRule';
import HorizontalShadowSegment from '@/components/Segments/HorizontalShadowSegment';
import MainHeader from '@/components/Text/MainHeader';
import PortfolioValue from '@/molecules/PortfolioValue';
import WalletEntry from '@/molecules/WalletEntry';
import usesWallets from '@/mixins/usesWallets';
import usesPortfolio from '@/mixins/usesPortfolio';

export default {
  components: {
    BlackBar,
    TextSegment,
    ContentSegment,
    HorizontalRule,
    HorizontalShadowSegment,
    MainHeader,
    PortfolioValue,
    WalletEntry,
  },

  mixins: [
    usesWallets,
    usesPortfolio,
  ],
};
</script>

<style scoped>
.your.portfolio.organism {
  max-width: 952px;
}
</style>
