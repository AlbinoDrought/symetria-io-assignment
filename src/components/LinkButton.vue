<template>
  <a class="button">
    <slot />
  </a>
</template>

<style scoped>
.button {
  cursor: pointer;
  color: #7C6C72;
  text-decoration: underline;
}

.button:hover {
  opacity: 0.9;
}

.button:hover, .button:active {
  color: #7AB894;
}
</style>
