<script lang="ts" setup>
const x = defineProps({
  img: {
    type: String,
    required:true
  },
  title: String,
})
</script>

<template>
  <div class="feature grid bg-white rounded overflow-hidden shadow h-full">
    <img :src="img.toString()" alt="" srcset="" class="max-h-32 w-full object-cover object-top">
    <div class="body p-6">
      <i class="fas fa-check-circle text-blue-500 text-4xl mb-4"></i>
      <h3 class="text-2xl font-bold mb-2">{{title}}</h3>
      <slot name="content"></slot>
    </div>
  </div>
</template>



<style>

</style>