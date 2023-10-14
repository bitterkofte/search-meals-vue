//TEMPLATE
<template>
  <header class="h-12 flex justify-between items-stretch shadow-md bg-slate-300">
    <router-link :to="{name:'Home'}" class="inline-flex items-center px-5 h-full ">Home</router-link>
    <div class=''>
      <router-link :to="{name:'MBN'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-sky-400">Meals</router-link>
      <router-link :to="{name:'MBL'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-sky-400">Meals By Letter</router-link>
      <router-link :to="{name:'MBI'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-sky-400">Meals By Ingredients</router-link>
    </div>
  </header>
</template>


//SCRIPT
<script setup>
  
</script>