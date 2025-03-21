<template>
  <MyNav />
  <router-view />
  <MyFooter />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
</style>
<script setup>
import MyNav from "@/components/navBar.vue";
import MyFooter from "./components/myFooter.vue";
</script>
