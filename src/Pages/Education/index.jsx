import { useEffect } from "react"
import "./styles.scss";
import PageDown from "../../Components/PageDown"
import PageUp from "../../Components/PageUp"

const Education= ({ view, menu, setView }) => {
  useEffect(() => {

  }, [])

  return (
    <article id="education">
    <PageUp view = { view } setView = { setView } />
      <div className="wrapper">
        <section>
          <div id="title">
            <div id="brief" >
              I am a highly qualified Front-End Developer with extensive training in responsive design, HTML, CSS, and JavaScript. In addition, I recently passed my AWS Certified Cloud Practitioner exam, demonstrating my proficiency in cloud computing."
            </div>
            <div id="badges" className="inline" >
              <a href="https://www.credly.com/badges/73840c32-0df6-438d-aa6d-49b576c9b46f/public_url" target="_blank">
                <div id="awsrs" ></div>
              </a>
              <a href="https://www.credly.com/badges/73840c32-0df6-438d-aa6d-49b576c9b46f/public_url" target="_blank">
                <div id="ccp" ></div>
              </a>
            </div>
          </div>
          <div id="technologies">
            <div>
              <h2>Front End Development</h2>
              A course starting with the fundamentals of programming and moving through the vital areas of front-end development. Through the provision of soft skills training, hands on labs and real-world projects.
              <ul>
                <li>Produced responsive web apps using the latest HTML, CSS and JavaScript technologies</li>
                <li>Ensured various levels of browser-combability with a mobile-first ethic</li>
                <li>Made effective use of Git version control systems used to monitor my code and share with mentors</li>
              </ul>
            </div>
            <div>
              <p>
                <h2>Back-End</h2>
                Hands on experience working AWS as well as other key technology fundamentals such as Linux, Python, Networking, Security and Databases. Key services which were covered include Amazon EC2, S3, IAM and more. Covered various styles of deployment strategies which can be implemented with AWS as well as various workflows such as DevOps, Agile and Waterfall.
              </p>
              <p>
                A team-based project for a British multinational aerospace company where we explored a cloud-based solution to a problem that we were presented. This project was used as part of an on-going procedure to integrate their work into the cloud environment to easier facilitate collaborative working.
              </p>
              <div id="badges" className="side" >
                <a href="https://www.credly.com/badges/73840c32-0df6-438d-aa6d-49b576c9b46f/public_url" target="_blank">
                  <div id="awsrs" ></div>
                </a>
                <a href="https://www.credly.com/badges/73840c32-0df6-438d-aa6d-49b576c9b46f/public_url" target="_blank">
                  <div id="ccp" ></div>
                </a>
              </div>
            </div>
            <div>
              <h2>CSSBattle</h2>
              CSS Battle is an online platform that allows users to improve their CSS skills by competing in coding challenges. The challenges involve creating CSS code to replicate a given image or design, with the goal of achieving the highest score based on criteria such as accuracy, code efficiency, and creativity. CSS Battle is a great way for front-end developers to hone their CSS skills and learn from other developers around the world. You can find a link to my CSSBattle profile <a href="https://cssbattle.dev/player/raheet" target="_blank">here</a>.
            </div>
          </div>
        </section>
      </div>
      <PageDown view = { view } menu = { menu } setView = { setView } />
    </article>
  )
}

export default Education
