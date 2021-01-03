import React from 'react'
import Navbar from '../components/navbar'
import gLogo from './assets/gLogo.svg'

const ITEMS = [
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
  title: 'Example/Header',
  component: Navbar
}

const Template = () => <Navbar logo={gLogo} items={ITEMS} />

export const LoggedIn = Template.bind()
