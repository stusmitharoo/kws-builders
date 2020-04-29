import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={logo} alt="logo" />
      </a>
      <h1>
        <strong>KWS builders</strong>
        <br />
        The local family business
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
