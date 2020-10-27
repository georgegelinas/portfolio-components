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

const Navbar = ({ items }) => {
  return (
    <header className={cx('header')}>
      <h1 className='brand-logo'>
        <a href='/'>LOGO</a>
      </h1>
      <nav className='nav'>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
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
