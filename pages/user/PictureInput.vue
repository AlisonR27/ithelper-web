<template>
  <div class="justify-center flex flex-col gap-4">
    <UAlert v-if="picture == null" title="You don't have a profile picture, click below to add" variant="soft" color="red" />
    <UChip v-if="picture == null" class="mx-auto" position="bottom-right">
        <UAvatar
            icon="i-heroicons-photo"
            size="3xl"
            alt="Você ainda não possui foto, adicionar?"
            class="self-center"
        />
        <template #content>
            <UButton class="text-lg p-0 p-2 -m-2 -mt-6 -ml-6 rounded-full" @click="$emit('addImage')">
                <UIcon name="i-heroicons-plus-solid" />
            </UButton>
        </template>
    </UChip>
    <div v-else class="mx-auto">
        <figure>
            <UAvatar
                :src="picture"
                size="4xl"
                alt="Avatar do usuário"
                class="self-center"
                :ui="{size: {
                    '4xl': 'h-28 w-28 text-4xl'
                } }"
            />
        <UButton class="text-lg p-0 p-2 -m-2 -mt-6 -ml-6 rounded-full" @click="$emit('addImage')">
            <UIcon name="i-heroicons-pencil" />
        </UButton>
        </figure>
    </div>

    
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['picture'])

</script>

<style scoped>
figure {
    position:relative;
}
figure button {
    position: absolute;
    bottom: 10px;
    right: 5px  ;
}
</style>