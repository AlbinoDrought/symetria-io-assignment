<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cabin:400,500,700');

html {
  color: #230913;
  background-color: #7AB894;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
}

.text {
  word-break: break-all;
}
</style>
