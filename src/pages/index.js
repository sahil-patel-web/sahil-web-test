import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic_12 from '../assets/images/pic_12.jpg'

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
            I am currently a MSCS student at Columbia University under the ML track. For the thesis, I am working
            on high-dimensional data information retrieval for noisy data. 
          </p>
          <p>
            While I work on my MS thesis, check out my undergrad thesis on Bayesian Network 
            Identifiability <a href="https://drive.google.com/file/d/1TU7YuttlXNHp5jcboxy_kk83tj4ntfn2/preview">here.</a>
          </p>

          <br/>
          <ul className="actions">
            <li>
              <a href="#resume" className="button">
                Resume
              </a>
            </li>
          </ul>
          
        </section>

        <section id="two">
          <h2>About
          <right>              
                <img src={pic_12} alt="From trip to LA" width="210" height="173"></img>
          </right>
          </h2>
          <p>
            I am a proud American and a proud Immigrant. 
          </p>
          <p>
            I grew up in India but my family and I migrated to America 
            when I was 13. After 4 years, 3 states, 6 apartments and 5 high schools, we finally found financial/familial structure 
            after moving to the Greater Houston area. In 2017, I joined TAMU's College of Engineering to complete my Bachelor's in Computer Science
            and a minor in Statistics. Finally, I moved to NYC to join the MSCS program at Columbia University. 
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

        <section id="special">
          <h2>Hobbies</h2>
          <p>
            I enjoy running and cooking!
          </p>
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
