import '../styles/header.css'
import dotaLogoDark from '../assets/dota2-logo-dark.png'
import dotaLogoLight from '../assets/dota2-logo-light.png'

export function Header() {
  return (
    <header className='page-header'>
      <div className='inner'>
        <img
          src={dotaLogoDark}
          alt=''
          width='100'
          height='100'
          loading='eager'
          fetchPriority='high'
          className='logo'
        />
        <h1 className='page-title'>Dota Dossiers</h1>
      </div>
    </header>
  )
}
