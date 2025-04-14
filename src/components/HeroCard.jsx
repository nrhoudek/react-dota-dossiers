import { Link } from 'react-router'
import '../styles/heroCard.css'

const ICON_BASE_URL = `https://cdn.cloudflare.steamstatic.com`

export function HeroCard({ id, icon, name, primaryAttr }) {
  const iconPath = `${ICON_BASE_URL}${icon}`
  return (
    <article className={`hero-card ${primaryAttr}`}>
      <Link to={id.toString()}>
        <img
          src={iconPath}
          alt=''
          className='hero-icon'
          width='32'
          height='32'
          loading='lazy'
          fetchPriority='low'
        />
        <h4 className='hero-name'>{name}</h4>
      </Link>
    </article>
  )
}
