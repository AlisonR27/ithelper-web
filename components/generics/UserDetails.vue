<template>
  <div class="pl-3 user-data">
    <div class="flex items-center justify-between row w-full">
        <UAvatar :src="user.avatar" :alt="user.name" size="md"/>
        <span class="mr-auto ml-3">
          {{ user.name }} <br>
          <b>{{ user.role }}</b>
        </span>
        <UButton class="place-self-end" variant="link" icon="heroicons:cog-6-tooth" color="secondary" @click="manageUser"/>
    </div>
    <UButton @click="newTicket" class="mt-4" block>Open Ticket</UButton>
    </div>
</template>

<script lang="ts" setup>
const { user } = useIndexStore()

async function newTicket() {
  await navigateTo('/dashboard/ticket/new')
}
async function manageUser() {
  await navigateTo('/user')
}
</script>

<style>

</style>