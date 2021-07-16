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
            <h2>
              I am a Back-end software, Data Science and ML enthusiast.
            </h2>

          <p>
            I am a MSCS student at Columbia University under the ML/Thesis track. For this, I am currently working
            on high-dimensional data manipulation techniques (Tensor Decomps) for noisy data information retrieval.  
          </p>
          <p>
            While I work on the MS Thesis, you can check out my undergradute thesis on Bayesian Network Identifiability <a href="#resume">here.</a>
          </p>

          <h2>
          <ul className="actions">
            <li>
              <a href="#resume" className="button">
                Resume
              </a>
            </li>
          </ul>
          </h2>
        </section>

        <section id="two">
          <h2>About</h2>
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
          <h2>Skills</h2>
        </section>

        <section id="four">
          <h2>Projects</h2>
        </section>
        
        <section id="five">
        <div id="resume"></div>          
          <h2>Resume</h2>

          <iframe src="https://drive.google.com/file/d/1TpLu8d1ihMkpYxg1EclgeQc4ivsvFe10/preview" width="770" height="990"></iframe>
        </section>

        

        <section id="six">
          <center>
          <p>Sahil Patel  <br /> 
          <a href="mailto:spatel16300@gmail.com"> spatel16300@gmail.com </a>
          </p>
          <sub>
          <ul className="copyright">
            &copy; Gatsby Starter Strata<br />
            
              <a href="https://www.gatsbyjs.com/starters/codebushi/gatsby-starter-strata">
                  Design  
              </a>
              <a href="http://html5up.net"> HTML5 UP</a>
            
          </ul>
          </sub>
          </center>
        </section>


      </div>
    </Layout>
  )
}

export default HomeIndex
