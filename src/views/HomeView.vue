//TEMPLATE
<template>
  <SearchBar />
  
</template>

//SCRIPT
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import SearchBar from "../components/SearchBar.vue";
const meals = computed(() => store.state.meals);

const ingredients = ref([]);
onMounted(async () => {
  const res = await axiosClient.get("list.php?i=list");
  // console.log("res.data: ", res.data);
  ingredients.value = res.data;
});
</script>
