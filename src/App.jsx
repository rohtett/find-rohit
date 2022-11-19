import {useState, useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";

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

  const [menuState, toggleMenu] = useState(false);

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash ==="") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0)
    }
  }, [pathname, hash, key])

  const _handleClick = e => {
    toggleMenu(false);
  }

  const _handleScroll = e => {
    toggleMenu(false);
    console.log("scrolling");
  }

  useEffect(() => {
    const container = document.getElementById("container");
    container.addEventListener("click", _handleClick);
    window.addEventListener("scrollDown", _handleScroll);

    return() => {
      container.removeEventListener("click", _handleClick);
      window.addEventListener("scroll", _handleScroll);
    }
  },[])

  return (
    <div className="App">
      <header>
        <Hamburger menuState={menuState} toggleMenu={toggleMenu} />
      </header>
      <Menu menuState={menuState} toggleMenu={toggleMenu} />
      <div id="container">
        <div id="background">
        </div>
        <div id="article-wrapper">
          <Home />
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
