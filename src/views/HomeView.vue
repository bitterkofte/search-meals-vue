//TEMPLATE
<template>
  <SearchBar />
  <div class="mt-2 flex justify-center gap-1 font-semibold">
    <router-link
      class="p-2 hover:scale-125 hover:text-sky-400 transition-all duration-150"
      :to="{ name: 'MealList', params: { ltr: letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

//SCRIPT
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import SearchBar from "../components/SearchBar.vue";
const meals = computed(() => store.state.meals);

// prettier-ignore
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const ingredients = ref([]);
onMounted(async () => {
  const res = await axiosClient.get("list.php?i=list");
  // console.log("res.data: ", res.data);
  ingredients.value = res.data;
});
</script>
