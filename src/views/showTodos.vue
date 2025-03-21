<template>
  <h1 style="text-transform: capitalize; margin-top: 3rem">
    this is your mission list
  </h1>
  <div class="myflex">
    <ul class="card" v-for="li in mylists" :key="li.id">
      <li>
        mission number : <span>{{ li.id - 1 }}</span>
      </li>
      <li>
        mission is :<span>{{ li.mission }}</span>
      </li>
      <li>
        start date : <span>{{ li.fromdate }}</span>
      </li>
      <li>
        start date : <span>{{ li.todate }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const mylists = ref([]);
//get local
const getData = () => {
  if (localStorage.getItem("todos")) {
    mylists.value = JSON.parse(localStorage.getItem("todos"));
    console.log(mylists.value);
  }
};
onMounted(() => {
  getData();
});
</script>
<style scss scoped>
.myflex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  .card {
    border: 1px solid rgb(27, 184, 111);
    list-style: none;
    text-transform: capitalize;
    width: max-content;
    padding: 1rem;
    border-radius: 0.3rem;
    min-width: 27.333%;

    li {
      font-weight: 600;
      text-align: justify;
      margin: 1rem;
      span {
        color: rgb(27, 184, 111);
        margin-left: 1rem;
      }
    }
  }
}
</style>
