import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import '../styles/themeToggle.css'

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const devRun = useRef(false)

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  useEffect(() => {
    if (devRun.current) return

    const savedPreference = localStorage.getItem('DARK MODE')

    if (savedPreference === null) {
      setIsDarkMode(systemPrefersDark)
      localStorage.setItem('DARK MODE', systemPrefersDark.toString())
      document.body.classList.add('dark-mode')
    } else {
      setIsDarkMode(savedPreference === 'true')
    }

    return () => (devRun.current = true)
  }, [systemPrefersDark])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('DARK MODE', isDarkMode.toString())
  }, [isDarkMode])

  return (
    <div className='light-dark-toggle-cont'>
      <button
        className={`light-dark-toggle-button ${isDarkMode ? 'active' : null}`}
        onClick={() => setIsDarkMode(currentValue => !currentValue)}
      >
        <FontAwesomeIcon
          icon={faMoon}
          className='moon'
        />
        <FontAwesomeIcon
          icon={faSun}
          className='sun'
        />
      </button>
    </div>
  )
}
