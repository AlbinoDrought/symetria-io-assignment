<template>
  <div class="your portfolio organism">
    <black-bar />
    <text-segment>
      <main-header>Your Portfolio</main-header>
    </text-segment>
    <horizontal-rule />

    <text-segment>
      <transition name="fade" mode="out-in">
        <soft-error
          v-if="portfolioError"
          @retry="refreshPortfolio($api)"
        />
        <spinner v-else-if="!portfolioLoaded" />
        <div v-else>
          <portfolio-value v-bind="portfolio" />
          <expand-segment
            v-if="portfolioLoaded && !showWallets"
            @click.native.prevent="clickedToShowWallets = true">
            Details
          </expand-segment>
        </div>
      </transition>
    </text-segment>
    <horizontal-rule />

    <transition appear name="fade">
      <div v-if="showWallets">
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
    </transition>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner';
import BlackBar from '@/components/Segments/BlackBar';
import TextSegment from '@/components/Segments/TextSegment';
import ContentSegment from '@/components/Segments/ContentSegment';
import HorizontalRule from '@/components/Segments/HorizontalRule';
import HorizontalShadowSegment from '@/components/Segments/HorizontalShadowSegment';
import ExpandSegment from '@/components/Segments/ExpandSegment';
import MainHeader from '@/components/Text/MainHeader';
import SoftError from '@/molecules/SoftError';
import PortfolioValue from '@/molecules/PortfolioValue';
import WalletEntry from '@/molecules/WalletEntry';
import usesWallets from '@/mixins/usesWallets';
import usesPortfolio from '@/mixins/usesPortfolio';

export default {
  components: {
    Spinner,
    BlackBar,
    TextSegment,
    ContentSegment,
    HorizontalRule,
    HorizontalShadowSegment,
    ExpandSegment,
    MainHeader,
    PortfolioValue,
    SoftError,
    WalletEntry,
  },

  computed: {
    showWallets() {
      return this.walletsLoaded && this.clickedToShowWallets;
    },
  },

  data() {
    return {
      clickedToShowWallets: false,
    };
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
  background-color: #FFF;
}
</style>
