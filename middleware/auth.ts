export default defineNuxtRouteMiddleware(async (to, from) => {

    const cookie = useCookie('jwt')
    if (cookie.value == null || typeof cookie.value === 'undefined') {
      return navigateTo("/")
    } 
})
