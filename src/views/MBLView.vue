//TEMPLATE
<template>
  <div class="mt-2 flex justify-center gap-1 font-semibold">
    <router-link
      class="p-2 hover:scale-125 hover:text-sky-400 transition-all duration-150"
      :to="{ name: 'MBL', params: { letter: letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class='p-8 grid grid-cols-1 md:grid-cols-4 gap-5'>
    <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" />
  </div>
</template>

//SCRIPT
<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue'

const route = useRoute();

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

const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>
