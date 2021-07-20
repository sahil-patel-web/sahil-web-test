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
              My name is Sahil Patel. <br />
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

            <div class="housing">
              <div className="vertical">
                <div className="horizontal">
                  <div className="tile">
                    <img src={col} />
                    <h3>
                      Columbia University
                    </h3>
                    <p>
                      MS Thesis <br />
                      Present
                    </p>
                    <sub>
                      Investigating and improving Tensor Decomposition applications for high-dimensional data in noise normalizing, 
                      modelling and recovering corrected information. (May change a little in future)  
                    </sub>
                  </div>
                </div>

                <div className="horizontal">
                  <div className="tile">
                    <img src={tamu} />
                    <h3>Texas A&amp;M University 
                    </h3>
                    <p>
                      SMAC Tracker - Class Project<br />
                      01/20 - 05/20
                    </p>
                    <sub>
                      Developed (as a team) a Google Chrome extension that tracks user social media
                      using React-JS and Bootstrap-JS. Used Knockout UI and Chrome API for front-end to show analytics in real-time.
                    </sub>

                  </div>
                </div>

                <div className="horizontal">
                  <div className="tile">
                    <img src={iitgn} />
                    <h3>IIT GN</h3>
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

                <div className="horizontal">
                  <div className="tile">
                    <img src={tamu} />
                    <h3>Texas A&amp;M University</h3>
                    <p>
                      ARP (Software Engineering Team) <br />
                      01/18 - 06/18
                    </p>
                    <sub>
                      Empirically tested (as a team) practicality of 5 code documentation practices in C++.
                      Designed and Proctored the study for 20 participants.
                      Check out the news article on our work  
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
