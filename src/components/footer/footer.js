/**
 * Navbar
 * Contains a header that can display: Brand logo and list of
 * linked items. Also is mobile-friendly
 *
 * author: George Gelinas <gelinas.george@gmail.com>
 */

import React from 'react'
import PropTypes from 'prop-types'
import './footer.css'

const Footer = ({ socialItems, navItems }) => {
  return (
    <footer className='footer'>
      <ul className='footer-socials'>
        {socialItems.map((item) => {
          return (
            <a key={item.name} href={item.url} rel='noreferrer' target='_blank'>
              <i className={item.icon} />
            </a>
          )
        })}
      </ul>
      <ul className='footer-navs'>
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
      <p>Designed and Developed by George Gelinas</p>
      <p>Los Angeles</p>
    </footer>
  )
}

Footer.propTypes = {
  socialItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      icon: PropTypes.string,
      name: PropTypes.string
    })
  ),
  isMobile: PropTypes.bool
}

Footer.defaultProps = {
  socialItems: [],
  isMobile: false
}

export default Footer
