import logo from './logo.svg';
import {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Education from "./Education/Education";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import "./App.scss";

const menu = ["home", "education", "portfolio", "contact"]

const App = () => {
  const navigate = useNavigate();
  const [menuState, toggleMenu] = useState(false);
  const [titleState, minimiseTitle] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      window.pageYOffset===0?
        minimiseTitle(true): minimiseTitle(false);
      toggleMenu(false);
    })
    return() => {
      window.removeEventListener("scroll",() => {
        window.pageYOffset===0?
          minimiseTitle(true): minimiseTitle(false);
        toggleMenu(false);
      })
    }
  },[])
  return (
    <div className="App">
      <header>
        <div id="hamburger-menu" >
          <input id="hamburger--toggle" className="hamburger" type="checkbox"
            checked={menuState}
            readOnly
            onClick={() => {
              menuState? toggleMenu(false): toggleMenu(true);
            }}
          />
          <label htmlFor="hamburger--toggle">
            <div>
              <div className="hamburger layers" />
              <div className="hamburger layers" />
              <div className="hamburger layers" />
            </div>
          </label>
        </div>
      </header>
      <nav id="menu" className={menuState? "":"slideOut"}>
        <ul>
          { menu.map((item) => (
            <label htmlFor = { item } key = { item } >
              <li>
                <input
                  className="menu"
                  name = "menu"
                  type = "radio"
                  value = { item }
                  id = { item }
                  checked = { item.index === item }
                  onChange = {() => {
                    item === "introduction" ?
                      navigate("")
                    : navigate("/" + item);
                    menuState? toggleMenu(false): toggleMenu(true);
                  }}
                /> { item.at(0).toUpperCase()+item.slice(1,item.length) }
              </li>
            </label>
            ))}
        </ul>
      </nav>
      <div id="container">
        <div id="background">
          <div id="title">
            <h1 className={titleState? "move": ""}>Herlast Photography</h1>
          </div>
        </div>
        <Routes>
          <Route path = "/education" element = { <Education /> } key = { document.location.href }  />
          <Route path = "/portfolio" element = { <Portfolio /> } key = { document.location.href }  />
          <Route path = "/contact" element = { <Contact /> } key = { document.location.href }  />
          <Route path ="*" element = { <Landing /> }
            key = { document.location.href }
          />
        </Routes>
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
