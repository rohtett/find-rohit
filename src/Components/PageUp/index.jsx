import "./styles.scss";

const PageUp = ({ view, setView }) => {
  return (
    <nav className="page-up"
      onClick = {() => {
        setView(view => view -1)
      }}
    >
      <div className="arrow">
        <div />
        <div />
      </div>
    </nav>
  )
}

export default PageUp
