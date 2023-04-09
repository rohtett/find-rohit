import "./styles.scss";
import PageDown from "../../Components/PageDown"
import PageUp from "../../Components/PageUp"

const Education= ({ view, menu, setView }) => {
  return (
    <article id="education">
    <PageUp view = { view } setView = { setView } />
      <div className="wrapper">
        <div id="ccp-badge" className="badge" />
        afa
      </div>
      <PageDown view = { view } menu = { menu } setView = { setView } />
    </article>
  )
}

export default Education
