import React from 'react'
import './Navbar.css'
import ThemeSwitcherPill from './ThemeSwitcherPill'

const Navbar = () => {
  return (
    <header className="header" role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-brand">
          <h1>
            <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Jayesh Vhatkar</a>
          </h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
          <li aria-label="Theme switcher"><ThemeSwitcherPill /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


