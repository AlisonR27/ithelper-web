export const useUserStore = defineStore('user', () => {
    const userDetails = ref({} as any)

    async function fetchUserDetails(id: any, token: any) {
        const { data, error } =  await useFetch("/api/users/"+id, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (!error) userDetails.value = data.value

    }

    return { userDetails, fetchUserDetails }
})
