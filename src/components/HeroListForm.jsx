import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import '../styles/heroListForm.css'

export function HeroListForm({ heroQuery, setHeroQuery, attrFilter }) {
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
    <div className='hero-list-form'>
      <Form
        className='inner'
        onSubmit={e => e.preventDefault()}
      >
        <label
          htmlFor='query'
          name='query'
        >
          <input
            id='query'
            type='text'
            placeholder='Search Hero Name'
            value={heroQuery}
            onChange={e => setHeroQuery(e.target.value)}
          ></input>
        </label>
        <div className='primary-attr-container'>
          <button
            name='str'
            onClick={e => attrFilter(e)}
            className='attr-button str'
          >
            STR
          </button>
          <button
            name='agi'
            onClick={e => attrFilter(e)}
            className='attr-button agi'
          >
            AGI
          </button>
          <button
            name='int'
            onClick={e => attrFilter(e)}
            className='attr-button int'
          >
            INT
          </button>
          <button
            name='all'
            onClick={e => attrFilter(e)}
            className='attr-button uni'
          >
            UNI
          </button>
        </div>
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
      </Form>
    </div>
  )
}
