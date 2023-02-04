import { useState, useEffect } from "react";
import "./styles.scss";
import shadow from "../../Media/shadow.png";

const Portfolio = () => {
  useEffect(() => {

  })

  const [project, setProject] = useState("shadow");

  return (
    <article id="portfolio">
      <div className="wrapper">
        <div className="sliderNav left">
          <div className="arrow">
            <div />
            <div />
          </div>
        </div>
        <div id="slider">
          <div className="project shadow">
            <a href="https://rohtett.github.io/cata-shadow/" target="_blank">
              <img src="https://rohtett.github.io/cata-shadow/favicon.ico" />
              <h2>Shadow</h2>
            </a>
            <div className="info">A guide for the Priest class in World of Warcraft for an earlier version of the game that I enjoy. Uses Google Cloud’s Firebase API for server calling.</div>
            <hr />
            <ul>
              <a href="https://rohtett.github.io/cata-shadow/" target="_blank" ><li>Deployment »</li></a>
              <a href="https://github.com/rohtett/cata-shadow/blob/master/README.md"><li>Scriptures »</li></a>
              <a href="https://github.com/rohtett/cata-shadow" target="_blank" ><li>Respository »</li></a>
            </ul>
          </div>
          <div className="project tussle">
            <a href="https://github.com/rohtett/tussle" target="_blank">
              <img src="" />
              <h2>tussle</h2>
            </a>
            <div className="info">A chrome extension built to replace the “new tab” window on Chrome. Presents the user with a command terminal to enter commands, record notes, and view bookmarks. </div>
            <hr />
            <ul>
              <a href="https://github.com/rohtett/tussle/blob/main/README.md" target="_blank" ><li>Scriptures »</li></a>
              <a href="https://github.com/rohtett/tussle" target="_blank" ><li>Respository »</li></a>
            </ul>
          </div>
          <div className="project" />
          <div className="project" />
          <div className="project" />
          <div className="project" />
          <div className="project" />
          <div className="project" />
        </div>
        <div className="sliderNav right">
          <div className="arrow">
            <div />
            <div />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Portfolio
