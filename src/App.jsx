import {useState, useEffect} from "react";

import "./App.scss";

//components
import Hamburger from "./Components/Hamburger/Hamburger";
import Menu from "./Components/Menu/Menu";

//pages
import Home from "./Pages/Home/index";
import Education from "./Pages/Education/index";
import Portfolio from "./Pages/Portfolio/index";
import Contact from "./Pages/Contact/index";

const App = () => {

  const [view, setView] = useState("home");
  const [menuState, toggleMenu] = useState(false);

  const _handleClick = e => {
    toggleMenu(false);
  }

  const _handleScroll = e => {
    toggleMenu(false);
    console.log("scrolling");
  }

  useEffect(() => {
    document.querySelector(`article#${view}`).scrollIntoView({behavior:"smooth"})
  }, [view])
  useEffect(() => {
    window.addEventListener("scrollDown", _handleScroll);
    return() => {
      window.addEventListener("scroll", _handleScroll);
    }
  })

  useEffect(() => {
    const container = document.getElementById("container");
    container.addEventListener("click", _handleClick);
    return() => {
      container.removeEventListener("click", _handleClick);
    }
  },[menuState])

  return (
    <div className="App">
      <header>
        <Hamburger menuState={menuState} toggleMenu={toggleMenu} />
      </header>
      <Menu menuState={menuState} toggleMenu={toggleMenu} view={view} setView={setView} />
      <div id="container">
        <div id="background" />
        <Home />
        <div id="article-wrapper">
          <Education />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
  );
}

const Landing = () => {
  return (
    <article>
      <h3>Error 404: Page not Found</h3>
      <p> Please use the navigation bar to locate to another page.</p>
    </article>
  )
}


export default App;
