<template>
  <NuxtLink :to="to" class="py-3 flex row px-2 items-center hover:shadow-md hover:bg-gray-200 hover:text-gray-800 rounded-md">
      <UIcon :name="icon"/>
      <span v-if="expandedHandler" class="ml-2"> {{ props.label }} </span>      
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps(["to", "label", "icon", "children", "expanded"])

const expandedHandler = ref(false)

onMounted(() => {
  expandedHandler.value = props.expanded
})

watch(
  () => props.expanded,
  (newValue, oldValue) => {
    if (newValue) {
      setTimeout(() => { expandedHandler.value = true }, 400)
    } else {
      expandedHandler.value = false
    }
  },
  { deep: true }
  )
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>