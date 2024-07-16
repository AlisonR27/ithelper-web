<template>
  <div class="w-full p-4">
    <h1 class="text-xl font-bold mt-5 mb-10"> Buscar patrimônio:</h1>
    <!-- Filtros -->
    <UForm class="flex row mb-4 gap-4">
      <UFormGroup>
          <UInput
          size="lg"
          class="h-full"
          v-model="searchQuery"
          name="searchQuery"
          placeholder="Código..."
          icon="i-heroicons-magnifying-glass-20-solid"
          autocomplete="off"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #trailing>
            <UButton
              v-show="searchQuery !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="searchQuery = ''"
            />
          </template>
        </UInput>
      </UFormGroup>
      <UFormGroup>
        <USelect size="lg" class="h-full" v-model="selectedCategory" :options="categories" option-attribute="name" />
      </UFormGroup>
      <UFormGroup>
        <USelect size="lg" class="h-full" v-model="selectedDepartment" :options="departments" option-attribute="name" />
      </UFormGroup>
      <UFormGroup>
        <USelect size="lg" class="h-full" v-model="sortBy" :options="sortOptions" option-attribute="name" />
      </UFormGroup>
    </UForm>

    <!-- Lista de Patrimônios -->
    <div class="grid md:grid-cols-3 gap-3" v-if="sortedPatrimonio.length > 0">
      <UCard v-for="item in sortedPatrimonio" :key="item.id" class="gap-4">
        <h2 class="font-bold text-md">{{ item.name }}</h2> <span class="float-right text-slate-400 font-bold">#{{ item.id }}</span>
        <div class="flex row items-center text-slate-400 mt-0 text-sm">
          <UIcon name="i-heroicons-map-pin-solid" class="mr-1" size="sm"/>
          <p class="">{{ item.department.name }}</p>
        </div>
        <div class="flex row items-center text-slate-400 mt-3 text-sm">
          <UBadge size="sm">
            <UIcon name="i-heroicons-tag-16-solid" class="mr-1" size="sm"/>
            {{ item.category.name }}
          </UBadge>
        </div>
        <!-- Adicione mais detalhes conforme necessário -->
      </UCard>
    </div>
    <div v-else>
      <p class="text-3xl font-bold mt-5">
        Nenhum Patrimônio encontrado.
      </p>
    </div>
  </div>
</template>

<script setup>
import { usePatrimonioStore } from '../../store/patrimonio'

const sortOptions = ref([
  { name: 'Ordenar por', value: 0  },
  { name: 'Nome (A-Z)', value: 'name_asc' },
  { name: 'Nome (Z-A)', value: 'name_desc' },
  { name: 'Categoria (A-Z)', value: 'category_asc' },
  { name: 'Categoria (Z-A)', value: 'category_desc' },
  { name: 'Departamento (A-Z)', value: 'department_asc' },
  { name: 'Departamento (Z-A)', value: 'department_desc' }
])

const sortBy =  ref(0)
const selectedCategory =  ref(0)
const selectedDepartment =  ref(0)
const searchQuery =  ref('')

const { patrimonio, departments, categories } = usePatrimonioStore();

const sortedPatrimonio = computed(() => {
  console.log("Updating...")

  let sorted = [...patrimonio]

  if (searchQuery.value != '') {
    sorted = sorted.filter((item) => {
      return item.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) >= 0
    })
  }

  if (selectedDepartment.value != 0) {
    sorted = sorted.filter((item) => {
      return item.department.id == selectedDepartment.value
    })
  }

  if (selectedCategory.value != 0) {
    sorted = sorted.filter((item) => {
      return item.category.id == selectedCategory.value
    })
  }

  if (sortBy.value === 'name_asc') {
    sorted.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'name_desc') {
    sorted.sort((a, b) => b.name.localeCompare(a.name))
  } else if (sortBy.value === 'category_asc') {
    sorted.sort((a, b) => a.category.name.localeCompare(b.category.name))
  } else if (sortBy.value === 'category_desc') {
    sorted.sort((a, b) => b.category.name.localeCompare(a.category.name))
  } else if (sortBy.value === 'department_asc') {
    sorted.sort((a, b) => a.department.name.localeCompare(b.department.name))
  } else if (sortBy.value === 'department_desc') {
    sorted.sort((a, b) => b.department.name.localeCompare(a.department.name))
  }

  return sorted
})

function getDepartment(id) {
  return departments.find((item) => item.value == id).name
}
function getCategory(id) {
  return categories.find((item) => item.value == id).name
}
</script>

<style>
/* Estilos opcionais do Tailwind CSS */
</style>