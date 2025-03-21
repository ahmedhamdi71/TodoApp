<template>
  <div class="add-mission">
    <h1>This is an home page</h1>
    <h2>fill input to add mission</h2>
    <form action="" @submit.prevent="handleMission">
      <input
        class="mission"
        type="text"
        placeholder="your mission"
        v-model="myData.mission"
      />
      <div class="date">
        <label>from</label>
        <input
          type="date"
          name="from"
          id="datefrom"
          v-model="myData.fromdate"
        />
        <label>To</label>
        <input type="date" name="to" id="tofrom" v-model="myData.todate" />
      </div>
      <div class="action">
        <input type="submit" value="add" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// const agen = ref("po");
// provide("agen", agen.value);
const myData = ref({
  id: "",
  mission: "",
  todate: "",
  fromdate: "",
});
const lists = ref([]);
const handleMission = () => {
  lists.value.push(myData.value);
  myData.value.id = lists.value.length + 1;
  addLocalSct();
  myData.value = {
    id: "",
    mission: "",
    todate: "",
    fromdate: "",
  };
};

const addLocalSct = () => {
  localStorage.setItem("todos", JSON.stringify(lists.value));
};
const updateLocal = () => {
  if (localStorage.getItem("todos")) {
    lists.value = JSON.parse(localStorage.getItem("todos"));
  }
};
onMounted(() => {
  updateLocal();
});
</script>

<style scss scoped>
.add-mission {
  margin-top: 4rem;
  form {
    .mission {
      width: 23rem;
      height: 2rem;
      padding: 0 1rem;
    }
    .date {
      margin: 1.5rem 0;
      input {
        margin-right: 10px;
        height: 2rem;
        width: 3rem;
        width: 13rem;
      }
      label {
        margin-right: 10px;
      }
    }
    .action {
      input {
        padding: 0.3rem 1rem;
        background-color: #42b983;
        border-radius: 0.3rem;
        border: transparent;
        outline: transparent;
        font-size: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.5 all;
        box-shadow: 2px 2px 2px transparent;
        width: 9rem;
        height: 2.3rem;
        &:active {
          box-shadow: 2px 2px 2px #13060696;
        }
      }
    }
  }
}
</style>
