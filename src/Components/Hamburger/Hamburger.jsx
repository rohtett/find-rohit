import "./Hamburger.scss";
const Hamburger = ({toggleMenu, menuState}) => {
  return (
    <div id="hamburger-menu" >
      <input id="hamburger--toggle" className="hamburger" type="checkbox"
        checked={menuState}
        readOnly
        onClick={() => {
          toggleMenu(prevCheck => !prevCheck);;
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
  )
}

export default Hamburger;
