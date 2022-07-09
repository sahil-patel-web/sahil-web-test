import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic_12 from '../assets/images/IMG_5094.jpg'
import tamu from '../assets/images/tamu.jpg'
import iitgn from '../assets/images/iitgn.jpg'
import col from '../assets/images/col.jpg'
import flag from '../assets/images/flag.jpg'

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
            <h2>
              I am a homecook turned data nerd.
            </h2>

          <p>
            I excel in translating complex data into digestible business insights. In my studies, I have applied traditional analysis methods as well 
            as latest Machine Learning powered analysis methods to study elements such as Company Annual Reports and CEO Pitches. 
            Now, I look to help my teams/clients reform data streams and identify relevances from data all to make impactful decisions. 
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
            I grew up in India but my family and I migrated to America when I was 13. After 4 years, 3 states and 5 high schools, we finally 
            found financial/familial stability in the Greater Houston area. In 2017, I joined TAMU for my Bachelor's in Computer Science
            and a minor in Statistics. Finally, I moved to NYC to join the MSCS program at Columbia University under the Machine Learning Track. 
          </p>
          
        </section>

        <section id="three">
          <h2>Skills</h2>

          <div class="housing">
            <div className="vertical">
              <div className="horizontal2">
                <div className="tile2">
                  <h3>Languages: </h3>
                  <li>Python</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                </div>
              </div>
              <div className="horizontal2">
                <div className="tile2">
                  <h3>Data Handling: </h3>
                  <li>Python Libraries (scikit-learn, TensorFlow, Pandas)</li>
                  <li>RStudio/R Libraries (Dplyr, ggplot2)</li>
                  <li>Hadoop</li>
                  <li>PHP</li>
                </div>
              </div>
              <div className="horizontal2">
                <div className="tile2">
                  <h3>Data Modeling: </h3>
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>Svg - JavaScript</li>
                </div>
              </div>
              <div className="horizontal2">
                <div className="tile2">
                  <h3>Other: </h3>
                  <li>MS Office (Excel, PowerPoint)</li>
                  <li>Agile SDLC</li>
                  <li>React</li>
                  <li>AWS cloud</li>
                  <li>Matlab</li>
                </div>
              </div>
            </div>
          </div>


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
                      The Steve Jobs Impact (on CEO  Pitches) - Class Project<br />
                      Present
                    </p>
                    <sub>
                      Investigating plonology/language-use in consumer product showcase pitches by CEOs through automatic speech recoginition models. 
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
                    <h3>IIT Gandhinagar</h3>
                    <p>
                      Summer Research Intern <br />
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
            <p>
              Here is a short video I made in my undergrad AI course related to my project at IIT GN internship.
              <iframe width="770" height="440" src="https://www.youtube.com/embed/KgT-j_oFmT4" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </p>
            <p>
              Here is a NBA international player roster data visual I created in a course at Columbia University.
              <iframe width="769" height="900" frameborder="0"  src="https://observablehq.com/embed/@ecd594bc6d2b7e38/nba_web?cells=viewof+year_n%2Cnetwork_chart%2Ckey2"></iframe>
            </p>
            <p>
              Here is 
              <iframe width="769" height="900" frameborder="0"  src="https://observablehq.com/embed/@ecd594bc6d2b7e38/nba_web?cells=viewof+year_n%2Cnetwork_chart%2Ckey2"></iframe>
            </p>

        </section>
		
        <section id="links">
          <h2>Links</h2>
          <p>
			
            <a href="https://github.com/sahil-showcase/website"> Repo - Website</a>  <br />
            
      <a href="https://observablehq.com/@ecd594bc6d2b7e38/rise-of-international-players-in-the-nba"> NBA International Player Data Analysis Project</a>  <br />
			<a href="https://github.com/sahil-showcase/toonroom"> Repo - ToonRoom</a>  <br />
			<a href="https://engineering.tamu.edu/news/2019/05/could-too-much-documentation-be-a-bad-thing-in-software-engineering.html"> News Article on ARP Project</a>  <br />
			<a href="https://hdl.handle.net/1969.1/194322"> Undergraduate Thesis - TAMU Statistics Department</a>
          </p>
        </section>
        <section id="five">
        <div id="resume"></div>          
          <h2>Resume</h2>

          <iframe src="https://drive.google.com/file/d/1PFIbVWDsYPq-5AJol2rczyHAwKkN_mjT/preview" width="770" height="990"></iframe>
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
