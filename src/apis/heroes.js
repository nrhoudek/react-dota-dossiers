export async function getHeroes(options) {
  try {
    const res = await fetch(`https://api.opendota.com/api/heroStats`, options)

    if (!res.ok) {
      throw new Error(`HTTP Error! status: ${res.status}`)
    }

    const data = await res.json()
    // console.log('Fetched Data', data)
    return data
  } catch (err) {
    console.error('Error Fetching Data:', err)
    return null
  }
}

export async function getHero(heroId, options) {
  try {
    const heroList = await getHeroes(options)

    if (!heroList) {
      throw new Error('Failed to fetch hero list')
    }

    const hero = await heroList.find(hero => hero.id === Number(heroId))

    if (!hero) {
      throw new Error(`Hero with id: ${heroId} not found`)
    }

    return hero
  } catch (err) {
    console.error('Error getting hero data:', err)
    return null
  }
}
