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
        <strong>Hey! I am Sahil.</strong> I am a MS <br />
         Computer Science student at <br />
         Columbia University.
      </h1>
      <li>
      <a href="https://www.linkedin.com/in/sahil-patel-985744216/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
      </a>
      </li>
      <li>
      <a href="mailto:spatel16300@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
      </a>
      </li>
    </div>
    <Footer />
  </header>
)

export default Header
