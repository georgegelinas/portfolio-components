/**
 * Navbar
 * Contains a header that can display: Brand logo and list of
 * linked items. Also is mobile-friendly
 *
 * author: George Gelinas <gelinas.george@gmail.com>
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './navbar.css'

const Navbar = ({ logo, items }) => {
  return (
    <header className={cx('header')}>
      <nav className='nav'>
        <div className='brand-logo'>
          <a href='/'>
            <img src={logo} alt='Logo' />
          </a>
        </div>
        <div className='spacer' />
        <div className='nav-items'>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    })
  )
}

Navbar.defaultProps = {
  items: []
}

export default Navbar
