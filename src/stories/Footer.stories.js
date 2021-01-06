import React from 'react'
import Footer from '../components/footer'

const SOCIAL_ITEMS = [
  {
    url: 'https://www.facebook.com/george.anthony.gelinas',
    icon: 'fab fa-facebook-f fa-lg',
    name: 'Facebook'
  },
  {
    url: 'https://twitter.com/georgegelinas',
    icon: 'fab fa-twitter fa-lg',
    name: 'Twitter'
  },
  {
    url: 'https://www.instagram.com/georgegelinas/?hl=en',
    icon: 'fab fa-instagram fa-lg',
    name: 'Instagram'
  },
  {
    url: 'https://github.com/georgegelinas',
    icon: 'fab fa-github fa-lg',
    name: 'GitHub'
  },
  {
    url: 'https://www.linkedin.com/in/george-gelinas-67ba1195/',
    icon: 'fab fa-linkedin-in fa-lg',
    name: 'LinkedIn'
  }
]

const NAV_ITEMS = [
  {
    url: 'www.georgegelinas.com/about',
    name: 'About'
  },
  {
    url: 'www.georgegelinas.com/resume',
    name: 'R\xE9sum\xE9'
  },
  {
    url: 'www.georgegelinas.com/contact',
    name: 'Contact'
  }
]

export default {
  title: 'Example/Footer',
  component: Footer
}

const Template = () => (
  <Footer socialItems={SOCIAL_ITEMS} navItems={NAV_ITEMS} />
)

export const NormalFooter = Template.bind()
