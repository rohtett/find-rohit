import { useState } from "react";

import "./styles.scss";

const Contact = () => {

  const [message, addMessage] = useState(false);
  return (
    <article id="contact" >
      <form>
        <div className="form-field">
          <label for="name">Name:</label><input id="name" />
        </div>
        <div className="form-field">
          <label for="number">Number:</label><input id="name" />
        </div>
        <div className="form-field">
          <label for="e-mail">e-mail:</label><input id="name" />
        </div>
        <div className="form-field checkbox">
          <input id="message" type="checkbox"
          checked={message? true: false}
          onChange= {() => {
            message? addMessage(false): addMessage(true);
          }}/>
          <label for="message">I would like to include a message</label>
        </div>
        <div className={message? "form-field textarea open": "form-field textarea"} >
          <textarea className={message? "open": ""} />
        </div>
        <div className="form-field submit">
          <button>Submit</button>
        </div>
      </form>
    </article>
  )
}

export default Contact
