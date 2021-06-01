<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="scss">
@import '@/assets/styles/normal';
#app{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
