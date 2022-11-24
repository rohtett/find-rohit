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

const _throttle = require("lodash.throttle");

const App = () => {

  const [view, setView] = useState(0);
  const [menuState, toggleMenu] = useState(false);
  const [lastScroll, setScroll] = useState(0);
  const [ticking, setTicking] = useState(false);

  const menu = ["home", "education", "portfolio", "contact"];

  const _handleClick = e => {
    toggleMenu(false);
  }

  const _handleScroll = _throttle(e => {
    toggleMenu(false);
    setScroll(window.pageYOffset);
    //scroll down
    setTicking(true);
    if (lastScroll < window.pageYOffset) {
      setView(view + 1);
    //scroll up
    } else if (lastScroll > window.pageYOffset) {
      console.log("scroll up")
    }
  }, 2000, {trailing: true, leading: true});



  useEffect(() => {
    console.log(`scrolling to article#${menu[view]}`)
    document.querySelector(`article#${menu[view]}`).scrollIntoView({behavior:"smooth"})

    window.addEventListener("scroll", _handleScroll);

    return() => {
      window.removeEventListener("scroll", _handleScroll);
    }
  }, [view])

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
      <Menu menu={menu} menuState={menuState} toggleMenu={toggleMenu} view={view} setView={setView} />
      <div id="container">
        <div id="background" />
        <Home lastScroll={lastScroll} view={view} />
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
