import React, { useEffect, useState } from 'react'

const THEME_KEY = 'preferred-theme'

const Switcher7 = () => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY)
    const effective = saved === 'dark' ? 'dark' : 'light'
    setIsChecked(effective === 'dark')
    document.body.classList.toggle('dark-mode', effective === 'dark')
    document.documentElement.setAttribute('data-theme', effective)
  }, [])

  useEffect(() => {
    const theme = isChecked ? 'dark' : 'light'
    document.body.classList.toggle('dark-mode', isChecked)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [isChecked])

  const toggle = () => setIsChecked(prev => !prev)

  // Palette from your snippet/screenshot
  const LIGHT_BORDER = '#BFCEFF'
  const LIGHT_BG = '#EAEEFB'
  const BLUE = '#5B7CFF' // dot color
  const BLUE_BORDER = '#9AB0FF'

  const trackStyle = {
    width: '56px',
    height: '32px',
    borderRadius: '9999px',
    border: `20px solid ${isChecked ? BLUE_BORDER : LIGHT_BORDER}`,
    background: isChecked ? '#DDE5FF' : LIGHT_BG,
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08)',
    position: 'relative',
    transition: 'background 0.2s ease, border-color 0.2s ease'
  }

  const thumbStyle = {
    position: 'absolute',
    top: '4px',
    left: isChecked ? '28px' : '4px',
    width: '24px',
    height: '24px',
    borderRadius: '9999px',
    background: BLUE,
    border: '2px solid #E4EBFF',
    transition: 'left 0.2s ease',
    boxShadow: '0 4px 12px rgba(91,124,255,0.4)'
  }

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isChecked}
      aria-label="Toggle dark mode"
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer'
      }}
    >
      <span style={trackStyle}>
        <span style={thumbStyle} />
      </span>
    </button>
  )
}

export default Switcher7
