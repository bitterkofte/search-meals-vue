//TEMPLATE
<template>
<div class="max-w-[800px] mx-auto p-8">
  <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
  <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl mx-auto">
  <div class="flex justify-between text-lg my-5">
    <div>
      <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
    </div>
    <div>
      <strong class="font-bold">Area:</strong> {{ meal.strArea }}
    </div>
    <div>
      <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
    </div>
  </div>

  <div class="my-3 text-justify">
    {{ meal.strInstructions }}
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2">
    <div>
      <h2 class="text-2xl font-semibold mb-2 mt-4 sm:mt-0">Ingredients</h2>
      <ul>
        <template v-for="(el, ind) of new Array(20)">
          <li v-if="meal[`strIngredient${ind + 1}`]">
          {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2 mt-4 sm:mt-0">Measures</h2>
      <ul>
        <template v-for="(el, ind) of new Array(20)">
          <li v-if="meal[`strMeasure${ind + 1}`]">
          {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div class="col-span-2 mt-4 p-4 flex justify-between items-center bg-neutral-300 text-white rounded-lg shadow-md">
      <a class="px-2 py-1 rounded-md bg-sky-500 hover:bg-sky-600 transition-colors" :href="meal.strYoutube" target="_blank">Youtube</a>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-2 py-1 rounded-md bg-green-500 hover:bg-green-600 transition-colors"
      >
        Source
      </a>
    </div>
  </div>


</div>
</template>


//SCRIPT
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const meal = ref({})

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
      console.log('meal.value: ', meal.value)
    })
})
</script>