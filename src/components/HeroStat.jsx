export function HeroStat({ statName, statValue }) {
  return (
    <li className='stat'>
      <span className='stat-name'>{statName}</span>
      <span className='stat-value'>{statValue}</span>
    </li>
  )
}
