import { defineStore } from 'pinia'

/** Example of user
 * {
 * id: integer,
 * name: string,
 * role: string,
 * date: string,
 * }
 */

export const useIndexStore = defineStore('index', () => {
  const user = ref({} as any)

  const token = ref(null)

  function getUser() { return user.value }
  
  function setUser(userJSON : any) {
    const cookie = useCookie('jwt')
    cookie.value = userJSON
    user.value = userJSON
  }

  async function setUserData(data: any) {
    user.value.data = data
  }

  function getUserId() {
    return user.value.id
  }

  function clearStore() {
    user.value = {}
  }

  function setToken(tkn: any) {
    const cookie = useCookie('access_token')
    cookie.value = tkn
    token.value = tkn
  }

  function getToken() {
    return token.value
  }

  return {
    user,
    token,
    setToken,
    getUser,
    setUser,
    setUserData,
    getUserId,
    clearStore,
    getToken
  }
})