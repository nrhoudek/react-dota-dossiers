import '../styles/heroCard.css'

const ICON_BASE_URL = `https://cdn.cloudflare.steamstatic.com`

export function HeroCard({ icon, name, primaryAttr }) {
  const iconPath = `${ICON_BASE_URL}${icon}`
  return (
    <article className={`hero-card ${primaryAttr}`}>
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
    </article>
  )
}
