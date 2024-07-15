
export default defineEventHandler(async (event) => {
    try {
      const data = readBody(event)
      const res = await $fetch("http://localhost:8080/users/"+ event.context.params!.id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: event.headers  
      })
      return res
    } catch (err) {
      console.log("Não chega a rodar", err)
      return err
    }
  })
  