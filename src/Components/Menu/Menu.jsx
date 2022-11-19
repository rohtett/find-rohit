import { Link } from "react-router-dom";

import "./Menu.scss";

const Menu = ({toggleMenu, menuState}) => {

  const menu = ["home", "education", "portfolio", "contact"];

  return (
    <nav id="menu" className={menuState? "":"slideOut"}>
      <ul onClick={() => {
        toggleMenu(false);
      }}>
        { menu.map((item) => (
          <label
          htmlFor = { item } key = { item } >
            <li>
              <Link to={"#"+item}>
                <input type = "radio" readOnly
                  className="menu" name = "menu"
                  value = { item } id = { item }
                  checked = { item.index === item }
                />
                { item.at(0).toUpperCase()+item.slice(1,item.length) }
              </Link>
            </li>
          </label>
          ))}
      </ul>
    </nav>
  )
}

export default Menu;
