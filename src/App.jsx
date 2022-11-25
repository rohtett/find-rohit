import { useState, useEffect } from "react";

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

  const [view, setView] = useState(0);
  const [menuState, toggleMenu] = useState(false);

  const menu = ["home", "education", "portfolio", "contact"];

  const _handleScroll = e => {
    console.log("scroll");
    toggleMenu(false);
    setView(prev => updateView(prev, window.pageYOffset));
  }

  const updateView = (prev, offset) => {
    if (offset < offset) {
      //scroll down
      console.log("scroll down");
      if (prev < menu.length - 1) return view + 1;
      else return menu.length - 1;
    } else if (offset > offset) {
      //scroll up
      console.log("scroll up")
      if (prev - 1 < 0) return 0;
      else return prev - 1;
    }
  }

  useEffect(() => {
    document.querySelector(`article#${menu[view]}`).scrollIntoView({behavior:"smooth"})
  }, [view])

  return (
    <div className="App">
      <header>
        <Hamburger menuState={menuState} toggleMenu={toggleMenu} />
      </header>
      <Menu menu={menu} menuState={menuState} toggleMenu={toggleMenu} view={view} setView={setView} />
      <div id="background" />
      <div id="container">
        <Home />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
