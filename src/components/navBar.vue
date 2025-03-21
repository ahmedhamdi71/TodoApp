<template>
  <nav>
    <router-link v-for="ro in myroute" :to="ro.path" :key="ro.name"
      >{{ ro.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const myroute = router.options.routes;
</script>
<style scss scoped>
nav {
  padding: 30px;
  background-color: #42b983;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 5px;
    text-decoration: none;
    text-transform: capitalize;
    position: relative;
    &.router-link-exact-active {
      color: #fff;
      border: 2px solid #fff;
      padding: 0.5rem;
      border-radius: 0.3rem;
    }
  }
}
</style>
