import { useState, useMemo } from 'react'
import { useLoaderData } from 'react-router'
import { getHeroes } from '../apis/heroes'
import { HeroCard } from './HeroCard'
import { HeroListForm } from './HeroListForm'
import '../styles/heroList.css'

function HeroList() {
  const { heroes } = useLoaderData()
  const [heroQuery, setHeroQuery] = useState('')
  const [attrFilters, setAttrFilters] = useState([])

  const filteredHeroList = useMemo(() => {
    return heroes.filter(hero => {
      const matchesQuery = hero.localized_name.toLowerCase().includes(heroQuery.toLowerCase())
      const matchesAttrs = attrFilters.length === 0 || attrFilters.includes(hero.primary_attr)

      return matchesQuery && matchesAttrs
    })
  }, [heroes, heroQuery, attrFilters])

  function attrFilter(e) {
    e.target.classList.toggle('active')
    const attrName = e.target.name

    if (attrFilters.includes(attrName)) {
      setAttrFilters(currentAttrFilters => currentAttrFilters.filter(attr => attr != attrName))
    } else {
      setAttrFilters([...attrFilters, attrName])
    }
  }

  return (
    <main className='hero-list-layout'>
      <HeroListForm
        heroQuery={heroQuery}
        setHeroQuery={setHeroQuery}
        attrFilter={attrFilter}
      />
      <div className='hero-list-layout-grid'>
        {filteredHeroList.map(hero => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            icon={hero.icon}
            name={hero.localized_name}
            primaryAttr={hero.primary_attr}
          />
        ))}
      </div>
    </main>
  )
}

async function loader({ request: { signal } }) {
  const heroes = await getHeroes(signal)
  return { heroes: await heroes }
}

export const heroListRoute = {
  loader,
  element: <HeroList />,
}
