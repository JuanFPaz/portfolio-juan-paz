export default async function fetchApi (formData, callbackData, callbackError) {
  const OPTIONS = { method: 'POST', body: JSON.stringify(formData) }
  let data
  try {
    const response = await fetch('http://localhost:3000/api/jpaz/sendmail', OPTIONS)
    data = await response.json()
    if (!response.ok) throw data
  } catch (error) {
    console.log(error)
    callbackError(error)
    return
  }

  try {
    callbackData(data)
  } catch (error) {
    console.error(error)
    const err = { message: 'Ocurrio un error.' }
    callbackError(err)
  }
}
