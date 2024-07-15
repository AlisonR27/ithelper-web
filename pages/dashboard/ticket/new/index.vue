<template>
  <div class="mt-10">
    <h2 class="font-bold text-2xl mb-8">Abrir novo chamado</h2>
    <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex flex-col gap-y-4">
        <UFormGroup label="Title" name="title">
            <UInput v-model="state.title" type="text"/>
        </UFormGroup>
        <UFormGroup label="Description" name="description">
            <UTextarea v-model="state.description"/>
        </UFormGroup>
        <UFormGroup label="Location" name="location">
          <UInputMenu v-model="selected" :options="departments" />
        </UFormGroup>
        <div class="flex flex-row gap-x-4">
            <UFormGroup label="Machine" name="code">
                <UInput v-model="state.x" type="text"/>
            </UFormGroup>
            <UFormGroup label="Urgência" name="birth">
              <UCheckbox label="" />
            </UFormGroup>
        </div>
        <UButton icon="i-heroicons-ticket" :loading="isLoading" class="mt-6 !text-center w-8/12 ml-auto justify-center "  type="submit">
            Create new Ticket
        </UButton>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup'

const state = reactive({
  title: "",
  description: "",
  department: "",
  x: "",
  y: false,
})

const schema = object({
    title: string().required("Title is required"),
    description: string().required("Insert a description"),
    department: string().required("Detail where are u"),
    x: string(),
    y: string(),
})

const departments = ['Department of Mathematics', 'Department of Biology', 'Department of History', 'Department of Computer Science', 'Department of Psychology', 'Department of Physics', 'Department of Chemistry', 'Department of Languages', 'Department of Economics', 'Department of Engineering', 'Department of Medicine', 'Department of Law', 'Department of Education', 'Department of Arts', 'Department of Sociology', 'Department of Philosophy']

const selected = ref(departments[0])

function onSubmit() {
  
}

const isLoading = ref(false)
</script>

<style>

</style>