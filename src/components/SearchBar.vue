//TEMPLATE
<template>
<div class="flex flex-col p-8">
  <input
    class="w-full caret-blue-500 rounded-md border-2 border-gray-400"
    placeholder="Search for meals..."
    type="text"
    @change="props.kw"
  />
</div>
<!-- a: {{ props.kw }} -->
</template>


//SCRIPT
<script setup>
// const [ kw ] = defineProps(['kw'])
const props = defineProps(['kw'])
</script>