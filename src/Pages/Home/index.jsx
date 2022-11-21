import "./styles.scss";

const Home = () => {
  return (
    <article id="home" title = "home">
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
    </article>
  )
}

export default Home;
