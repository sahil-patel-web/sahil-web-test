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
]
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              I am a Back-end software, Data Science and ML enthusiast.
            </h2>
          </header>
          <p>
            I am currently working on . For my MSCS program, I also spend part of my 
            time at Columbia's Data Science Institute. 
            
            Prior to Columbia, I completed my bachelor's in Computer Science. My undergraduate thesis can be
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

        <section id="two">
          <h1>Bio</h1>
          <p>
            I am a proud American and a proud Immigrant. 
          </p>
          <p>
            I grew up in India but my family and I migrated to America 
            when I was 13. After 4 years, 3 states, 6 apartments and 5 high schools, we finally found financial/familial structure 
            after moving to the Greater Houston area. In 2017, I joined TAMU's College of Engineering to complete my Bachelor's in Computer Science
            and a minor in Statistics. Finally, I moved to NYC to join the MSCS program at Columbia University. 
          </p>
          <p>
            I enjoy running and cooking!
          </p>
        </section>

        <section id="three">
          <h1>Skills</h1>
        </section>

        <section id="four">
          <h1>Projects</h1>
        </section>
        
        <section id="five">
          
          <h1>Resume</h1>

          <iframe src="https://drive.google.com/file/d/1TpLu8d1ihMkpYxg1EclgeQc4ivsvFe10/preview" width="770" height="990"></iframe>
        </section>

        

        <section id="six">
          <center>
          <h2>Sahil Patel</h2>
          <p><a href="mailto:spatel16300@gmail.com"> spatel16300@gmail.com </a> </p>
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
