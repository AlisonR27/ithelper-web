import { navigateTo, useCookie } from "nuxt/app"

export default defineEventHandler(async (event) => {
  const {data} = await readBody(event)
  try {
    const res = await $fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },  
    })
    return res
  } catch (err) {
    console.log("Não chega a rodar", err)
    return err
  }
})
