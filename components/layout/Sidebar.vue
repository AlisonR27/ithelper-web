
<script lang="ts" setup>
const props = defineProps(["menuItems"])

const route = useRoute()

const isMenuExtended = ref(false)

function toggleMenu() {
  isMenuExtended.value = !isMenuExtended.value
}

function menuTogglerIcon()  {
  return isMenuExtended ? '' : 'i-heroicons-chevron-right-16-solid'
}


</script>
<template>
<div class="text-gray-400 min-h-screen flex overflow-hidden sidebar hidden md:flex" :class="isMenuExtended ? 'extended' : ''">
    <div class="menu w-11/12 bg-zinc-900" :class="isMenuExtended ? 'w-11/12 px-5' : 'w-6/12 px-2 items-center'">
      <GenericsUserDetails />
      <nav class="flex flex-col">
        <GenericsMenuItem v-for="navItem of menuItems" :label="navItem.label" :to="navItem.to" :icon="navItem.icon" :expanded="isMenuExtended"/>
      </nav>
    </div>
    <div class="toggler justify-center flex flex-col min-h-screen items-center" :class="isMenuExtended ? 'w-1/12' : 'w-6/12'">
      <UButton variant="link" color="gray" icon="i-heroicons-chevron-right-16-solid"  @click="toggleMenu" class="text-center"/>
    </div>
</div>
</template>
<style scoped>
div.sidebar {
  max-width: 290px;
  min-width: 1rem;
  width: 6rem;
  transition: all 0.6s;
}
.sidebar * {
  transition: all 0.6s;
}

.sidebar .user-data {
  overflow: hidden;
  height: 0;
  opacity: 0;
}

.sidebar nav {
  margin-top: 1rem;
}

.sidebar .menu {
  padding: 1rem 0.5rem;
  width: 3rem;
}

.sidebar .toggler {
  max-width:2rem;
}
.sidebar .toggler button {
  height: fit-content;
}


/** Extended style */
.extended .user-data {
  height: 7rem;
  opacity: 1; 
}

.sidebar nav {
  margin: 0;
}

.extended .menu {
  padding-top: 2.5rem;
  width: 80%;
}

.extended nav {

}


.sidebar.extended .user-data {
  
}

.sidebar.extended {
  min-width: 300px;
}

.extended .toggler {
  transform: rotate(180deg)
}
</style>