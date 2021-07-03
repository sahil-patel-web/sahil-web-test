import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Hey! I am Sahil.</strong> I am a MS
        <br />
        in Computer Science student
        <br />
        at Columbia University in NYC.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
