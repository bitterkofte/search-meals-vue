//TEMPLATE
<template>
<div class=''>
  <div class="flex flex-col p-8">
    <input
      class="w-full caret-blue-500 rounded-md border-2 border-gray-400"
      placeholder="Search for meals..."
      type="text"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <!-- <SearchBar :kw="keyword"/> -->
  <div class='text-xl text-center grayscale select-none' v-if="!keyword">Search first 😉</div>
  <div class='text-xl text-center grayscale select-none' v-if="keyword && meals === null">Meal not found 😟</div>
  <div class='p-8 grid grid-cols-1 md:grid-cols-4 gap-5'>
    <!-- <div v-for="meal of meals" :key="meal.idMeal" class="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden hover:scale-105 transition-all duration-100">
      <img class="w-full h-52 object-cover shadow-md" :src="meal.strMealThumb" :alt="meal.strMeal"/>
      <div class='p-3'>
        <h3 class='font-semibold'>{{ meal.strMeal }}</h3>
        <div class="mt-3 text-sm flex justify-between items-center">
          <a class="px-2 py-1 rounded-md text-white bg-sky-500 hover:bg-sky-600 transition-colors" :href="meal.strYoutube" target="_blank">Youtube</a>
          <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="px-2 py-1 rounded-md text-white bg-slate-500 hover:bg-slate-600 transition-colors">Go</router-link>
        </div>
      </div>
    </div> -->
    <MealItem :meal="meal" v-for="meal of meals" :key="meal.idMeal" />
  </div>
</div>
</template>


//SCRIPT
<script setup>
import { onMounted, ref } from 'vue';
import { computed } from '@vue/reactivity'
// import SearchBar from '../components/SearchBar.vue'
// import axiosClient from '../axiosClient';
import store from '../store';
import { useRoute, useRouter } from 'vue-router';
import MealItem from '../components/MealItem.vue'

const route = useRoute();
const router = useRouter();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
// console.log('meals: ', meals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
  // router.push({ path: `by-name/${keyword.value}`})
  // router.push({ path: `${keyword.value}`})
  // console.log('router: ', router)
}

onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value) searchMeals()
})
</script>