<template>
  <div class="mt-4 md:mt-0">
    <div class="flex-1 md:p-6">
            <div class="grid grid-cols-4 gap-4 mb-6">
                <UCard class="items-center border border-yellow-600 py-3 rounded-lg shadow text-center bg-orange-200">
                    <p class="text-xl text-grey-500">Chamados Abertos</p>
                    <p class="text-3xl font-bold">15</p>
                </UCard>
                <UCard class="items-center border border-neutral-400 py-3 rounded-lg shadow text-center bg">
                    <p class="text-xl text-grey-500">Unidades c/ Chamados</p>
                    <p class="text-3xl font-bold">4</p>
                </UCard>
                <UCard class="items-center border border-primary py-3 rounded-lg shadow text-center bg">
                    <p class="text-xl text-grey-500">Chamados Concluídos</p>
                    <p class="text-3xl font-bold">6</p>
                </UCard>
                <UCard class="items-center border border-indigo-500 py-3 rounded-lg shadow text-center bg">
                    <p class="text-xl text-grey-500">Chamados congelados</p>
                    <p class="text-3xl font-bold">3</p>
                </UCard>
            </div>

            <div>
              <h2 class="text-xl mb-4">Últimos chamados</h2>
              <GenericsTicketCard v-for="ticket of indexTickets" :status="ticket.status" :title="ticket.label" :updated="ticket.updated" :user="ticket.user" />
            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>

const { tickets } = useTicketStore()

const indexTickets = computed(() => {
  return tickets.splice(0,7)
})

</script>

<style>

</style>