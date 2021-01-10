import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/kwsLogo.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image logo">
        <img src={logo} alt="logo" />
      </a>
      <h1>
        The local family business
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
