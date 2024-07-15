<script async setup lang="ts">
definePageMeta({
    middleware: [
        'auth'
    ]
})
useHead({
  bodyAttrs: {
    class: 'dark:bg-stone-950 px-5 md:p-0'
  }
})

const indexStore = useIndexStore()
const userStore = useUserStore()

if (indexStore.token == null || Object.keys(indexStore.user).length < 1) {
  const cookie = useCookie('jwt')
  if (cookie.value != null) indexStore.setUser(cookie.value)
  else navigateTo("/")
} 

const isMenuOpen = ref(false)

const menuItems = [
  {
    to:"/dashboard",
    label:"Inicio",
    icon:"i-heroicons-home",
    children:null,
  },
  {
    to:"/dashboard/ticket",
    label:"Chamados",
    icon:"i-heroicons-ticket-20-solid",
    children:null,
  },
  {
    to:"/patrimonio",
    label:"Patrimônio",
    icon:"i-heroicons-computer-desktop-20-solid",
    children:null,
  },
  {
    to:"/dashboard/admin",
    label:"Dashboard",
    icon:"i-heroicons-presentation-chart-line-20-solid",
    children:null,
  },
  {
    to:"/logout",
    label:"Sair",
    icon:"i-heroicons-arrow-left-end-on-rectangle-16-solid",
    children:null,
  },
]

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

const { $isMobile } = useNuxtApp()

const isMobile = computed(() => $isMobile())
</script>
<template>
<main class="md:flex">
    <Transition name="slide">
      <LayoutMobileSidebar v-if="isMobile && isMenuOpen" class="md:hidden" @mobileToggle="toggleMenu" :routes="menuItems" />
    </Transition>
    <LayoutMobileHeader v-if="isMobile" class="md:hidden" @mobileToggle="toggleMenu"/>
    <LayoutSidebar v-else :menuItems="menuItems" />
    <NuxtPage/>  
</main>
</template>
<style>
.slide-leave-active,
.slide-enter-active {
  transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-enter-from {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.slide-leave-from {
  transform: translate(100%,0);
}

</style>
