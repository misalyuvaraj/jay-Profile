import React, { useEffect, useState } from 'react'

const THEME_KEY = 'preferred-theme'

const ThemeSwitcherPill = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY) || 'light'
    const dark = saved === 'dark'
    setIsDark(dark)
    document.body.classList.toggle('dark-mode', dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    document.body.classList.toggle('dark-mode', isDark)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  const trackStyle = {
    position: 'relative',
    width: '44px',
    height: '22px',
    borderRadius: '9999px',
    padding: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: '#E9DFFC',
    border: '2px solid #D6BBFB',
    display: 'inline-flex',
    alignItems: 'center'
  }

  const thumbStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '9999px',
    backgroundColor: '#6941C6',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
    transform: isDark ? 'translateX(22px)' : 'translateX(0)',
    transition: 'transform 0.3s ease'
  }

  return (
    <div onClick={toggleTheme} style={trackStyle} role="switch" aria-checked={isDark} aria-label="Toggle dark mode">
      <div style={thumbStyle} />
    </div>
  )
}

export default ThemeSwitcherPill
