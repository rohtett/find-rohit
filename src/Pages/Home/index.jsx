import "./styles.scss";
import PageDown from "../../Components/PageDown"

const Home = ({ menu, view, setView }) => {
  return (
    <article id="home">
      <div />
      <div id="info">
          <div className="title">Rohit Naidu</div>
        <div id="socials">
          <a href="https://github.com/rohtett/" target="_blank">
            <div className="github" />
          </a>
          <a href="https://www.linkedin.com/in/rohtett/" target="_blank">
            <div className="linkedin" />
          </a>
        </div>
        <article>
          Front-end React developer with an interest in creating functional and responsive web apps with the latest practices and technologies. Looking to gain experience in Junior Web Development opportunities.
        </article>
        <div></div>
      </div>
      <PageDown view = { view } menu = { menu } setView = { setView } />
    </article>
  )
}

export default Home;
