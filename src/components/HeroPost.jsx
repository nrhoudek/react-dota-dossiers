import { Link, useLoaderData } from 'react-router'
import { getHero } from '../apis/heroes'
import { HeroStat } from './HeroStat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeToggle } from './ThemeToggle'
import '../styles/heroPost.css'

const IMAGE_BASE_URL = `https://cdn.cloudflare.steamstatic.com`

function HeroPost() {
  const hero = useLoaderData()
  const {
    localized_name,
    img,
    attack_type,
    attack_range,
    attack_rate,
    base_attack_max,
    base_attack_min,
    base_attack_time,
    base_armor,
    base_health,
    base_health_regen,
    base_mana,
    base_mana_regen,
    legs,
    move_speed,
    day_vision,
    night_vision,
    roles,
    primary_attr,
    base_str,
    str_gain,
    base_agi,
    agi_gain,
    base_int,
    int_gain,
  } = hero
  const heroImagePath = `${IMAGE_BASE_URL}${img}`
  return (
    <main className={`${primary_attr} hero-post-container`}>
      <div className='back-theme-container'>
        <Link
          to='..'
          className='back-btn'
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </Link>
        <ThemeToggle />
      </div>
      <div className='hero-intro'>
        <h2 className='hero-name'>{localized_name}</h2>
        <span className='roles'>{roles.join(' | ')}</span>
        <img
          src={heroImagePath}
          height='320'
          width='180'
          loading='lazy'
          fetchPriority='low'
          className='hero-portrait'
        />
        <div className='base-attr-container'>
          <div className='str attr'>
            <FontAwesomeIcon icon={faCircle} />
            <span>
              {base_str} (+{str_gain})
            </span>
          </div>
          <div className='agi attr'>
            <FontAwesomeIcon icon={faCircle} />
            <span>
              {base_agi} (+{agi_gain})
            </span>
          </div>
          <div className='int attr'>
            <FontAwesomeIcon icon={faCircle} />
            <span>
              {base_int} (+{int_gain})
            </span>
          </div>
        </div>
      </div>
      <div className='detailed-stats-container'>
        <ul className='stats'>
          <HeroStat
            statName={'Primary Attribute: '}
            statValue={primary_attr.toUpperCase()}
          />
          <HeroStat
            statName={'Base Health: '}
            statValue={`${base_health} (+${base_health_regen})`}
          />
          <HeroStat
            statName={'Base Mana: '}
            statValue={`${base_mana} (+${base_mana_regen})`}
          />
          <HeroStat
            statName={'Base Armor: '}
            statValue={base_armor}
          />
          <HeroStat
            statName={'Attack Type: '}
            statValue={attack_type}
          />
          <HeroStat
            statName={'Base Attack Damage: '}
            statValue={`${base_attack_min} - ${base_attack_max}`}
          />
          <HeroStat
            statName={'Attack Range: '}
            statValue={attack_range}
          />
          <HeroStat
            statName={'Attack Time: '}
            statValue={base_attack_time}
          />
          <HeroStat
            statName={'Attack Rate: '}
            statValue={attack_rate}
          />
          <HeroStat
            statName={'Move Speed: '}
            statValue={move_speed}
          />
          <HeroStat
            statName={'Day Vision: '}
            statValue={day_vision}
          />
          <HeroStat
            statName={'Night Vision: '}
            statValue={night_vision}
          />
          <HeroStat
            statName={'Legs: '}
            statValue={legs}
          />
        </ul>
      </div>
    </main>
  )
}

async function loader({ params: { heroId }, request: { signal } }) {
  const hero = await getHero(heroId, signal)
  return hero
}

export const heroPostRoute = {
  loader,
  element: <HeroPost />,
}
