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

  useEffect(() => {
    document.querySelector(`article#${menu[view]}`).scrollIntoView({behavior:"smooth"})
  }, [view, menu])

  return (
    <div className="App">
      <header>
        <Hamburger menuState={menuState} toggleMenu={toggleMenu} />
      </header>
      <Menu menu={menu} menuState={menuState} toggleMenu={toggleMenu} view={view} setView={setView} />
      <div id="background" />
      <div id="container">
        <Home menu = { menu } view = { view } setView = { setView } />
        <Education menu = { menu } view = { view } setView = { setView } />
        <Portfolio menu = { menu } view = { view } setView = { setView } />
        <Contact menu = { menu } view = { view } setView = { setView } />
      </div>
    </div>
  );
}

export default App;
