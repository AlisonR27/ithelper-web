
export default defineEventHandler(async (event) => {
  try {
    const res = await $fetch("http://localhost:8080/users/"+ event.context.params!.id, {
      method: "GET",
      // body: JSON.stringify(data),
      headers: event.headers  
    })
    return res
  } catch (err) {
    console.log("Não chega a rodar", err)
    return err
  }
})
