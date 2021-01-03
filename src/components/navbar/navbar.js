/**
 * Navbar
 * Contains a header that can display: Brand logo and list of
 * linked items. Also is mobile-friendly
 *
 * author: George Gelinas <gelinas.george@gmail.com>
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

const Navbar = ({ logo, items, isMobile }) => {
  const [isDrawerOpen, setDrawerToggle] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='brand-logo'>
          <a href='#'>
            <img src={logo} alt='Logo' />
          </a>
        </div>
      </header>
      {isMobile && (
        <div className='hamburger-menu'>
          <button
            onChange={() => setDrawerToggle(!isDrawerOpen)}
            className='hamburger-menu-cta'
          >
            {/* save the svg as its own file */}
            <svg viewBox='0 0 100 80' width='40' height='40'>
              <rect width='100' height='20' />
              <rect y='30' width='100' height='20' />
              <rect y='60' width='100' height='20' />
            </svg>
          </button>
        </div>
      )}
      <nav className={isMobile ? 'side-drawer' : 'nav'}>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    })
  ),
  isMobile: PropTypes.bool
}

Navbar.defaultProps = {
  logo: '',
  items: [],
  isMobile: false
}

export default Navbar
