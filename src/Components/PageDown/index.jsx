import "./styles.scss";

const PageDown = ({ menu, view, setView }) => {
  return (
    <nav className="page-down"
      onMouseEnter = { (event) => {
        document.querySelectorAll(".arrowtext").forEach(arrow => {
          arrow.innerHTML=menu[view+1].at(0).toUpperCase()+menu[view+1].slice(1,menu[view+1].length)
        })
      }}
      onClick = {() => {
        setView(view => view +1)
      }}
      onMouseLeave = {(event) => {
        document.querySelectorAll(".arrowtext").forEach(arrow => {
          arrow.innerHTML=menu[view].at(0).toUpperCase()+menu[view].slice(1,menu[view].length)
        })
      }}
    >
    <div className="arrowtext">
      {menu[view].at(0).toUpperCase()+menu[view].slice(1,menu[view].length)}
    </div>
      <div className="arrow">
        <div />
        <div />
      </div>
    </nav>
  )
}

export default PageDown
