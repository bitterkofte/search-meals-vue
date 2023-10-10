//TEMPLATE
<template>
<div class='h-full bg-neutral-100'>
  <Navbar />
  <main>
    <router-view/>
  </main>
</div>
</template>


//SCRIPT
<script setup>
import Navbar from '../components/Navbar.vue'
</script>