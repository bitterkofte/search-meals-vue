//TEMPLATE
<template>
<div class="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden hover:scale-105 transition-all duration-100">
  <img class="w-full h-52 object-cover shadow-md" :src="meal.strMealThumb" :alt="meal.strMeal"/>
  <div class='p-3'>
    <h3 class='font-semibold'>{{ meal.strMeal }}</h3>
    <div class="mt-3 text-sm flex justify-between items-center">
      <a class="px-2 py-1 rounded-md text-white bg-sky-500 hover:bg-sky-600 transition-colors" :href="meal.strYoutube" target="_blank">Youtube</a>
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="px-2 py-1 rounded-md text-white bg-slate-500 hover:bg-slate-600 transition-colors">Go</router-link>
    </div>
  </div>
</div>
</template>


//SCRIPT
<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>