<template>
    <div class="w-screen h-screen bg-neutral-950 z-50 absolute top-0 left-0 pt-2 pb-10 px-8 flex flex-col gap-y-4">
      <UButton class="self-end text-3xl -mr-6" variant="ghost" @click="$emit('mobileToggle')"> &times </UButton>
      <GenericsUserDetails/>
      <nav class="mt-6 flex flex-col gap-4 text-xl">
        <GenericsMenuItem v-for="navItem of routes" :label="navItem.label" :to="navItem.to" :icon="navItem.icon" :expanded="true"/>
      </nav>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps(["routes"])

const emit = defineEmits(['mobileToggle'])

const route = useRoute()

watch(route, (from, to) => {
  console.log(to)
  emit('mobileToggle')
}, )

</script>

<style>
</style>