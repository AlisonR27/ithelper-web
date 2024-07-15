<template>
  <div>
    <div class="flex-1 md:p-6">
            <div class="grid grid-cols-4 gap-4 mb-6">
                <div class="border border-primary p-6 rounded-lg shadow text-center">
                    <p class="text-grey-500">Chamados Abertos</p>
                    <p class="text-2xl font-bold">15</p>
                </div>
                <div class="border border-neutral-400 p-6 rounded-lg shadow text-center">
                    <p class="text-grey-500">Unidades c/ Chamados</p>
                    <p class="text-2xl font-bold">4</p>
                </div>
                <div class="border border-red-600 p-6 rounded-lg shadow text-center">
                    <p class="text-grey-500">Chamados Concluídos</p>
                    <p class="text-2xl font-bold">6</p>
                </div>
                <div class="border border-indigo-500 p-6 rounded-lg shadow text-center">
                    <p class="text-grey-500">chamados congelados</p>
                    <p class="text-2xl font-bold">3</p>
                </div>
            </div>

            <div>
              <h2 class="text-xl mb-4">Últimos chamados</h2>
              <GenericsTicketCard v-for="ticket of tickets" :status="ticket.status" :title="ticket.label" :updated="ticket.updated" :user="ticket.user" />
            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>


const tickets = [
  {
    label: "Decoy Imploded at F22",
    status: "doing",
    updated: new Date().toLocaleString(),
    user: {
      name: "Lockheed Martin",
      photo: null,
      department: "Departamento de Eng. Aeroespacial"
    }
  },
  {
    label: "Decoy Imploded at F22",
    status: "doing",
    updated: new Date().toLocaleString(),
    user: {
      name: "Lockheed Martin",
      photo: null,
      department: "Departamento de Eng. Aeroespacial"
    }
  },
]

</script>

<style>

</style>