<template>
  <div class="mt-10 flex flex-col gap-10">
    <h2 class="text-gray-200 text-2xl font-bold"> Edit Profile</h2>
    <PictureInput :picture="state.profilePicture" @addImage="addImage"/>

    <UModal prevent-close v-model="isCropping" :ui="{'container': 'items-center', 'padding': 'px-4 py-32'}">
        <Cropper
            ref="cropper"
            class="h-96 z-50 overflow-hidden"
            :src="profilePicture.src"
            :stencil-component="CircleStencil"
            :stencil-props="{
		        handlers: {},
                aspectRatio: 1,
            }"
            image-restriction="stencil"
        />
        <UButton @click="saveCropped"> Save </UButton>
    </UModal>

    <UForm :schema="schema" :state="state" @submit="onSubmit" class="flex flex-col gap-y-4">
        <input type="file" @change="handleInputChange" class="hidden" name="profilePicture" ref="fileIpt" />
        <UFormGroup label="Name" name="name">
            <UInput v-model="state.nomeCompleto" name="name" type="text"/>
        </UFormGroup>
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" name="email" type="text"/>
        </UFormGroup>
        <div class="flex flex-row gap-x-4">
            <UFormGroup label="Birth Date" name="birth">
                <input name="birth" class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400" type="date" v-model="state.dataNascimento" />
            </UFormGroup>
            <UFormGroup label="Phone" name="phone">
                <UInput v-model="state.dataNascimento" type="number" placeholder="(84) 1111-6666" :disabled="true"/>
            </UFormGroup>
        </div>
        <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" :disabled="true"/>
        </UFormGroup>
        <UButton :loading="isLoading" class="mt-6 !text-center w-8/12 ml-auto justify-center " type="submit">
            Save
        </UButton>
    </UForm>
  </div>
</template>

<script lang="ts" setup> 
import { object, string, type InferType } from 'yup'
import PictureInput from './PictureInput.vue'
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import { getBase64 } from '../../utils/format';
import 'vue-advanced-cropper/dist/style.css'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
    nomeCompleto: string().required("Name is Required"),
    email: string().email(),
    dataNascimento: string().required("Date of Birth is Required"),
    // phone: string().matches(^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$, "Invalid phone"),
})

type Schema = InferType<typeof schema>

const state = reactive({
    nomeCompleto: "",
    email: "",
    nomeUsuario: "",
    dataNascimento:  "",
    password: "******",
    profilePicture: null,
})


const { user, getToken, getUserId } = useIndexStore()

const isLoading = ref(false);

const fileIpt = ref(null)

const profilePicture = ref({src: '' as string, type: null})

const isCropping = ref(false)

const cropper = ref(null)

function handleInputChange(ev: any){
    const file = fileIpt.value.files[0]
    getBase64(file).then((result: any) => {
        profilePicture.value.src  = result.toString()
    })
    profilePicture.value.type = file.type
    isCropping.value = true
}

function addImage() {
    if (process.client) {
        fileIpt.value.click();
    }
}

function saveCropped() {
    const { coordinates, canvas } = cropper.value.getResult()
    state.profilePicture = canvas.toDataURL(profilePicture.value.type)
    isCropping.value = false
    fileIpt.value.value = ""
}

async function onSubmit (event: FormSubmitEvent<Schema>) {
    console.log("Teste")
    try {
        const result = await $fetch('/api/users/save/'+ getUserId(), {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token.value}`
            }
        })
    } catch (exc) {
        console.log(exc)
    }
}

const headers = useRequestHeaders(["cookie"]);
const jwt = useCookie("jwt");
const token = useCookie("access_token");
const userData = await $fetch(`/api/users/${getUserId()}`,{
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token.value}`
    },
}) as any

if (userData) {
    state.email = userData.email
    state.nomeCompleto = userData.nomeCompleto
    state.nomeUsuario = userData.nomeUsuario
    state.dataNascimento = new Date(userData.dataNascimento).toISOString().substring(0,10)
}
</script>

<style>

</style>