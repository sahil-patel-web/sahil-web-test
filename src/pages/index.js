import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic_12 from '../assets/images/IMG_5094.jpg'
import tamu from '../assets/images/tamu.jpg'
import iitgn from '../assets/images/iitgn.jpg'
import col from '../assets/images/col.jpg'

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
            <div class="rounded--circle">
              <img src={pic_12} />
            </div> 
          </h2>
            
          <p>
            I am a proud American and a proud Immigrant. 
          </p>
          <p>
            I grew up in India but my family and I migrated to America when I was 13. After 4 years, 3 states and 5 high schools, we finally 
            found financial/familial stability in the Greater Houston area. In 2017, I joined TAMU for my Bachelor's in Computer Science
            and a minor in Statistics. Finally, I moved to NYC to join the MSCS program at Columbia University. 
          </p>
          
        </section>

        <section id="three">
          <h2>Skills</h2>
        </section>

        <section id="four">
          <h2>Projects</h2>


            <div class="maain">
              <div className="roow">
                <div className="coolumn">
                  <div className="content">
                    <img src={col} />
                    <h3>
                      Columbia University <br />
                    </h3>
                    <p>
                      Present
                    </p>
                    <sub>
                      High dimensional statistis
                    </sub>
                  </div>
                </div>

                <div className="coolumn">
                  <div className="content">
                    <img src={tamu} />
                    <h3>Texas A &amp; M University 
                    </h3>
                    <p>
                      SMAC Tracker <br />
                      01/20 - 05/20
                    </p>
                    <sub>
                      Developed (as a team) a Google Chrome extension that tracks/analyzes user's social media
                      using Knockout UI and Bootstrap-JS.
                    </sub>

                  </div>
                </div>

                <div className="coolumn">
                  <div className="content">
                    <img src={iitgn} />
                    <h3>IIT Gandhinagar</h3>
                    <p>
                      Summer Intern(CSCE) <br />
                      05/19 - 07/19
                    </p>
                    <sub>
                      Improved efficiency of raw MFCC vectors clustering by factorizing signals using
                      bi-directional-RNN and Tensor Decomposition (NTD) to create Music Recommendation System
                      with 62% accuracy.
                    </sub>
                  </div>
                </div>

                <div className="coolumn">
                  <div className="content">
                    <img src={tamu} />
                    <h3>Texas A &amp; M University</h3>
                    <p>
                      Aggie Research Scholars Program(Software Engineering Team) <br />
                      01/18 - 06/18
                    </p>
                    <sub>
                      Empirically tested practicality of 5 popular code documentation practices in C++ within a team.
                      Designed and Proctored the study for 20 participants.
                    </sub>
                    <sub>
                      Check out the news article that featured our work  
                      <a href="https://engineering.tamu.edu/news/2019/05/could-too-much-documentation-be-a-bad-thing-in-software-engineering.html"> here.</a>
                    </sub>
                  </div>
                </div>



              </div>
            </div>
          






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
