import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/sahil-patel-985744216/" className="icon-2x fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="mailto:sahil.patel@columbia.edu" className="icon-2x fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>  
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          <a href="https://www.gatsbyjs.com/starters/codebushi/gatsby-starter-strata">
          Design: 
          </a>
          <a href="http://html5up.net"> HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
