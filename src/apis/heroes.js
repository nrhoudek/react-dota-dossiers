export async function getHeroes(options) {
  try {
    const res = await fetch(`https://api.opendota.com/api/heroStats`, options)

    if (!res.ok) {
      throw new Error(`HTTP Error! status: ${res.status}`)
    }

    const data = await res.json()
    console.log('Fetched Data', data)
    return data
  } catch (err) {
    console.error('Error Fetching Data:', err)
    return null
  }
}
