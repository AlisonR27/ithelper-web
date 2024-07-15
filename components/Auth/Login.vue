<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const { user, setUser, setToken } = useIndexStore();

const schema = object({
    login: string().required("Required"),
    password: string()
        .min(4, 'Must be at least 4 characters')
        .required("Required")
})

type Schema = InferType<typeof schema>

const state = reactive({
    login: "",
    password: ""
})

const toast = useToast()

function parseJwt (token : any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        isLoading.value = true
        const result = await $fetch("/api/login", {
            method: "POST",
            body: event
        })
        
        setToken(result)

        setUser(parseJwt(result))

        
        if (user) {
            navigateTo("/dashboard/")
        } 
    } catch (error) {
        /**
         * To-do: handle specific error msgs
         */
        // if (error.)
        toast.add({
            title: "Erro ao logar, tente novamente",
            color: 'red',
        })
        isLoading.value = false
    }
}

const isLoading = ref(false)
</script>
<template>
    <UForm :schema="schema" :state="state" class="space-y-4 flex flex-col justify-items-center" @submit="onSubmit">
        <UFormGroup label="Login" name="login">
            <UInput v-model="state.login" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
        </UFormGroup>
        <ULink to="/login/reset-password" active-class="text-primary"
            inactive-class="self-end text-gray-400 light:text-gray-600 hover:text-gray-200 !mt-2">Forgot password?
        </ULink>
        <UButton :loading="isLoading" class="!text-center w-8/12 mx-auto justify-center"  type="submit">
            Login
        </UButton>
    </UForm>
</template>