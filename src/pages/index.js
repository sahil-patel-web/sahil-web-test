import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Sahil Patel'
  const siteDescription = 'Sahil Personal Webpage'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              I am a student and back-end development/AI enthusiast. I believe in data and work to make Data Science accessible, either from teaching or from developing solutions.
            </h2>
          </header>
          <p>
            I am currently working on . For my MSCS program, I also spend part of my 
            time at Columbia's Data Science Institute. 
            
            Prior to Columbia, I completed my bachelor's in Computer Science at
            TAMU with a minor in Statistics. My undergraduate thesis can be
            found here.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Skills</h2>
        </section>

        <section id="four">
          <h2>Projects</h2>
        </section>
        
        <section id="five">
          
          <h2>Resume</h2>

          <iframe src="https://drive.google.com/file/d/1TpLu8d1ihMkpYxg1EclgeQc4ivsvFe10/preview" width="770" height="990"></iframe>
        </section>

        <section id="six">
          <h2>Hobbies</h2>
        </section>

        <section id="seven">
          <center>
          <h2> <a href="mailto:spatel16300@gmail.com"> Sahil Patel </a> </h2>
          <ul className="copyright">
            &copy; Gatsby Starter Strata<br />
            
              <a href="https://www.gatsbyjs.com/starters/codebushi/gatsby-starter-strata">
                  Design  
              </a>
              <a href="http://html5up.net"> HTML5 UP</a>
            
          </ul>
          </center>
        </section>


      </div>
    </Layout>
  )
}

export default HomeIndex
