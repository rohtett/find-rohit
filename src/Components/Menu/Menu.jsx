import { useEffect } from "react";
import "./Menu.scss";

const Menu = ({toggleMenu, menuState, view, setView, menu}) => {

  const _handleClick = e => {
    toggleMenu(false);
  }

  useEffect(() => {
    const container = document.getElementById("container");

    container.addEventListener("click", _handleClick);

    return() => {
      container.removeEventListener("click", _handleClick);
    }
  },[menuState, _handleClick])

  return (
    <nav id="menu" className={menuState? "":"slideOut"}>
      <ul>
        { menu.map((item, id) => (
          <li key = {item}>
            <input type = "radio" readOnly
              className="menu" name = "menu"
              value = { item } id = { item }
              checked = { view === id }
              onChange = {() => {
                setView(id)
              }}
              onClick={() => {
                toggleMenu(false);
              }}
            />
            <label htmlFor = { item } >
              <div> { item.at(0).toUpperCase()+item.slice(1,item.length) }
              </div>
            </label>
          </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu;
