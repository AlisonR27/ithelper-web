<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
  const { clearStore } = useIndexStore()
  clearStore()
  await navigateTo("/")
</script>
<style>

</style>