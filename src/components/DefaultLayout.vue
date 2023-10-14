//TEMPLATE
<template>
<div class='h-full bg-neutral-100'>
  <Navbar />
  <main class="min-h-screen">
    <router-view/>
  </main>
</div>
</template>


//SCRIPT
<script setup>
import Navbar from './Navbar.vue'
</script>