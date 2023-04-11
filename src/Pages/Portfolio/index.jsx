import { useState, useEffect } from "react"
import "./styles.scss";
import shadow from "../../Media/shadow.png"
import PageUp from "../../Components/PageUp"
import PageDown from "../../Components/PageDown"

const Portfolio = ({ view, menu, setView }) => {
  useEffect(() => {

  })

  const [project, setProject] = useState("shadow");
  return (
    <article id="portfolio">
      <PageUp view = { view } setView = { setView } />
      <div className="wrapper">

      </div>
      <PageDown view = { view } menu = { menu } setView = { setView } />
    </article>
  )
}

export default Portfolio
