<template>
  <div class="card w-100 shadow-sm bg-neutral-800 text-light hover:bg-gray-600 hover:shadow-md py-2 px-1 mb-5 h-24 rounded-md flex items-center cursor-pointer" :class="priority()">
    <bdi class="priority">{{ currentPriority }}</bdi>
    <div class="head w-8/12 md:w-6/12 flex flex-col">
      <sup class="">Updated at {{ updated }}</sup>
      <h4 class="font-bold text-xl max-w-fit text-ellipsis text-nowrap overflow-x-hidden">{{ title }}</h4>
      <div class="flex gap-2 mt-1">
        <UBadge size="sm" variant="outline" color="gray" label="computador"/>
        <UBadge size="sm" variant="outline" color="gray" label="#1255"/>
      </div>
    </div>
    <div class="body hidden md:flex md:w-4/12 flex-col">
        <div class="user flex flex-row items-center gap-2">
          <UAvatar :alt="user.name" size="sm" />
          <figcaption>{{ user.name }}</figcaption>
        </div>
        <span class="text-sm">{{ user.department.name }}</span>
    </div>
    <div class="status">
      <span class=" text-white px-4 py-1 rounded" :class="customColor()"> {{ status }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

/**
 * Last user: {
 *  name: String,
 *  photo: String,
 *  departament: String
 * }
 */
const props = defineProps(["status", "title", "updated", "user"])

function customColor() {
  switch(props.status) {
    case 'doing':
      return "bg-blue-600";
    case 'pending':
      return 'bg-orange-600';
    case 'completed':
      return 'bg-primary';
    default:
      return 'bg-neutral-400';
  }
}

const priorityOptions = ["low", "normal", "max"]

const currentPriority = ref('')

currentPriority.value = priorityOptions[Math.floor(Math.random() * 3)]

function priority() {
  return `priority-${currentPriority.value}`
}
</script>

<style>
.card {
  position: relative;
  overflow: hidden;
}

.card > .priority{
  writing-mode: vertical-lr;text-orientation: mixed;
  position: absolute;left: -2px;top: 0;
  z-index: 1;
  color: white;
  text-align: center;
  height: 100%;
  margin-top:5px;
  text-transform: uppercase;
}

.card > *:nth-child(2) {
  margin-left: 2rem;
}

.card::before {
  content: '';
  width: 1.5rem;
  height: 100%;
  position: absolute;
  margin:-8px;
  z-index: 0;
}
.card.priority-max::before {
  background-color: red;
}
.card.priority-normal::before {
  background-color: slategrey;
}
.card.priority-low::before {
  background-color: green;
}
</style>