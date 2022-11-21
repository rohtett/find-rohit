import "./Menu.scss";

const Menu = ({toggleMenu, menuState, view, setView}) => {

  const menu = ["home", "education", "portfolio", "contact"];

  return (
    <nav id="menu" className={menuState? "":"slideOut"}>
      <ul>
        { menu.map((item) => (
          <li key = {item}>
            <input type = "radio" readOnly
              className="menu" name = "menu"
              value = { item } id = { item }
              checked = { view === item }
              onClick={() => {
                toggleMenu(false);
              }}
            />
            <label htmlFor = { item }
              onClick = {() => {setView(item)}
            }>
              <div>{item.at(0).toUpperCase()+item.slice(1,item.length) }
              </div>
            </label>
          </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu;
