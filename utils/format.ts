export function getBase64(file:File) : any {
    return new Promise((resolve,reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        var result = ""
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject;
        return result
    })
}