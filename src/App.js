import logo from './logo.svg';
import {useState} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";

const menu = ["home", "education", "portfolio", "contact"]

const App = () => {
  const [page,loadPage] = useState();
  const [menuState, toggleMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <div id="hamburger-menu">
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
        <div id="logo">Rohit Naidu</div>
      </header>
      <div id="container">
      <nav id="menu" className={menuState? "":"slideOut"}>
        <ul>
          { menu.map((item) => (
            <label htmlFor = { item }>
              <li key = { item } >
                <input
                  className="menu"
                  name = "menu"
                  type = "radio"
                  value = { item }
                  id = { item }
                  checked = { page === item }
                  onChange = {() => {
                    loadPage(item)
                    (item === "introduction") ? navigate(""):navigate("/" + item)
                  }}
                /> { item.at(0).toUpperCase()+item.slice(1,item.length) }
              </li>
            </label>
            ))}
        </ul>
      </nav>
        <Routes>
          <Route path ="*" element = { <Landing /> }
            key = { document.location.href }
          />
        </Routes>
        {page}
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
