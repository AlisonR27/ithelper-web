<template>
    <header class="shadow-md py-4 bg-stone-900 w-full -mx-5 w-screen px-6 z-10 " ref="header">
      <nav class="container mx-auto flex justify-start items-center align-baseline">
        <UButton @click="toggleMobileMenu" variant="link" color="white" :padded="false" class="text-3xl mr-2 hover:bg-stone-800">
            <UIcon name="i-iconoir-menu"/>
        </UButton>
        <NuxtLink to="/dashboard" class="text-3xl font-bold"> ITHelper </NuxtLink>
      </nav>
    </header>
</template>

<script lang="ts" setup>
const emit = defineEmits(['mobileToggle']) 

function toggleMobileMenu(event:any) {
    emit("mobileToggle")
}

</script>

<style lang="scss">

</style>