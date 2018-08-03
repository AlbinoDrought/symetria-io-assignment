<template>
  <div class="dashboard view">
    <your-portfolio />
  </div>
</template>

<script>
import YourPortfolio from '@/organisms/YourPortfolio';

export default {
  components: {
    YourPortfolio,
  },
};
</script>

<style scoped>
.dashboard.view > .organism {
  margin: auto;
}
</style>
