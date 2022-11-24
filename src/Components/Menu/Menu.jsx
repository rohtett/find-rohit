import "./Menu.scss";

const Menu = ({toggleMenu, menuState, view, setView, menu}) => {

  return (
    <nav id="menu" className={menuState? "":"slideOut"}>
      <ul>
        { menu.map((item, id) => (
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
              onClick = {() => {setView(id)}
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
