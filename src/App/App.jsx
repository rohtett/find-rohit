import logo from './logo.svg';
import {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home/Home";
import Education from "./Education/Education";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import "./App.scss";

const menu = ["home", "education", "portfolio", "contact"];
const backgrounds = ["flowers", "leaves", "mountain", "pond"]

const App = () => {
  const navigate = useNavigate();
  const [menuState, toggleMenu] = useState(false);
  const [background, nextBackground] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleClick = ev => {
    toggleMenu(false);
  }
  useEffect(() => {
    setTimeout(()=> {
      if (timer===1000) {
        setTimer(0)
        nextBackground(background+1>backgrounds.length-1? 0: background+1)
      } else {
        setTimer(timer+1);
      }
    },10)
  }, [timer])
  useEffect(()=> {
    const container = document.getElementById("container");

    container.addEventListener("click", handleClick);

    return() => {
      container.removeEventListener("click", handleClick);

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
        <div id="background" className={backgrounds[background]}>
        </div>
        <div id="article-wrapper">
          <div id="bio">
            <button onClick={() => {
              setTimer(0);
              nextBackground(background-1<0? backgrounds.length-1: background-1);
            }}
            ><div /><div /></button>
              <div id="info">
                <div className="title">Herlast Photography</div>
                <progress id="timer" value={timer} max="1000" ></progress>
                <div id="socials">
                  <div className="twitter" />
                  <div className="instagram" />
                  <div className="patreon" />
                  <div className="facebook" />
                </div>
              </div>
            <button onClick={() => {
              nextBackground(background+1>backgrounds.length-1? 0: background+1);
            }}
            ><div /><div /></button>
          </div>
          <Routes>
          <Route path = "/home" element = { <Home /> } key = { document.location.href }  />
            <Route path = "/education" element = { <Education /> } key = { document.location.href }  />
            <Route path = "/portfolio" element = { <Portfolio /> } key = { document.location.href }  />
            <Route path = "/contact" element = { <Contact /> } key = { document.location.href }  />
            <Route path ="*" element = { <Landing /> }
              key = { document.location.href }
            />
          </Routes>
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
