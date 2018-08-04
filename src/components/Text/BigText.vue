<template>
  <span class="big text">
    <slot />
  </span>
</template>

<style scoped>
.big.text {
  font-weight: 700;
  /* scale text according to screen width */
  font-size: 10vw;
}

@media only screen and (min-width: 640px) {
  .big.text {
    /* max out font size at 64 px */
    font-size: 64px;
  }
}
</style>
