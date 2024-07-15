<script setup>


definePageMeta({
  layout: 'empty',
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ]
})

// Login boolean reactive
const isLoginOpen = ref(false)

function toggleModal() {
  isLoginOpen.value = !isLoginOpen.value
}

const header = ref(null)
const hero = ref(null)

const isHeaderFixed = ref(false)


</script>
<template class="">
  <div class="bg-stone-950">
    <!-- Header -->
    <header class="shadow-md py-4 	bg-stone-950	z-10 " ref="header">
      <div class="container mx-auto flex justify-between items-center px-3 md:px-5 ">
        <h1 class="text-3xl font-bold">ITHelper</h1>
        <nav>
          <ul class="flex space-x-4 align-center">
            <li><a href="#features" class="align-middle hidden sm:inline-block hover:text-gray-400">About us</a></li>
            <li><a href="#contact" class="align-middle hover:text-gray-400">Contact</a></li>
            <li>
              <UButton @click="toggleModal">Login</UButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Login Modal -->
    <UModal v-model="isLoginOpen" :ui="{'container': 'items-center', 'padding': 'px-4 py-32'}">
      <div class="px-8 py-16 md:p-20">
        <h2 class="mb-4 text-center">Sign in</h2>
        <AuthLogin></AuthLogin>
        <UDivider class="my-5" label="or" />
        <div class="items-center flex flex-column justify-center mt-3">
          <GenericsGoogleButton @click="console.log('Google Pressed')" />
        </div>
      </div>
    </UModal>

    <!-- Home Section -->
    <section id="home" ref="hero" class="sm:py-48 sm:pt-40 pt-36 pb-20 block overflow-hidden">
      <div class="container md:mx-auto md:text-center text-left px-5 md:pl-0 w-full">
        <h2 class="text-6xl font-bold mb-4">Use your time with what <br class="hidden md:block"> really matters</h2>
        <p class="mb-8">Optimize your team efforts with an hurry-based ticket manager, from our IT Team to yours.</p>
        <div class="flex flex-row justify-center mt-16 md:mt-3">
          <UButton class="">Contact our team</UButton>
          <UButton variant="soft" icon="i-heroicons-building-library" color="blue" class="ml-3">Use my college Instance
          </UButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-gray-100 text-gray-800 py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Features</h2>
        <div class="grid lg:w-8/12 justify-center mx-auto grid-cols-1 md:grid-cols-3 gap-8">
          <LandingFeatureCard title="Real-time" img="/img/notification.jpg">
            <template #content>
              <p>Optimize your workflow with real-time notification in all the connected devices</p>
            </template>
          </LandingFeatureCard>
          <LandingFeatureCard title="Prop Management" img="/img/board.jpg">
            <template #content>
              <p>Optimize your workflow with real-time notification in all the connected devices</p>
            </template>
          </LandingFeatureCard>
          <LandingFeatureCard title="Prop Management" img="/img/manutencao.jpg">
            <template #content>
              <p>Optimize your workflow with real-time notification in all the connected devices</p>
            </template>
          </LandingFeatureCard>
        </div>
      </div>
    </section>
    <section id="features" class="py-20 md:px-20">
      <article class="container text-center">
        <h2 class="text-xl font-bold mb-5">Why use a Ticket Helper?</h2>
        <p>
          Um gerenciamento preciso e em tempo real das tarefas e chamados do setor de TI é essencial para a eficiência
          operacional de qualquer empresa. Utilizar um sistema especializado permite que problemas sejam resolvidos
          rapidamente, minimizando o tempo de inatividade e aumentando a produtividade. A automatização de processos e a
          centralização das informações reduzem o retrabalho e a desorganização, resultando em uma economia
          significativa de tempo e recursos. Além disso, a clareza e a organização proporcionadas pelo sistema tornam o
          trabalho dos técnicos menos enfadonho e mais focado em suas competências essenciais, elevando a satisfação e o
          desempenho da equipe.


        </p>
      </article>

    </section>
    <!-- Footer -->
    <footer class="mt-4 bg-gray-900 py-4">
      <div class="container text-center">
        <p>&copy; 2024 IT Helper. No rights reserved :(</p>
      </div>
    </footer>
  </div>
</template>
<style scoped>
/* Adicione qualquer estilo específico aqui, se necessário */
:root {
  --px-5: 1.25rem;
}
header.fixed {
  position:fixed;
  width: 100%;
}
</style>