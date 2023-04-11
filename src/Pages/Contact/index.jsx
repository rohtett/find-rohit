import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import PageUp from "../../Components/PageUp"

import "./styles.scss";

const Contact = ({ view, setView }) => {

  const [savedMessage, setMessage] = useState();
  const [message, addMessage] = useState(false);

  const [state, handleSubmit] = useForm("myyvvwrl");

  return (
    <article id="contact" >
      <PageUp view = { view } setView = { setView } />
      <div className="wrapper">
        <div>
          <h1>Rohit Naidu</h1>
          <div id="socials">
            <a href="https://github.com/rohtett/" target="_blank">
              <div className="github" />
            </a>
            <a href="https://www.linkedin.com/in/rohtett/" target="_blank">
              <div className="linkedin" />
            </a>
          </div>
          <section id="details">
            <div>
              <a href="mailto:raheet@hotmail.co.uk">
                <div className="marker e-mail" />raheet@hotmail.co.uk
              </a>
            </div>
            <div>
              <a href="tel:+447796452144">
                <div className="marker phone" />07796 452 144
              </a>
            </div>
            <div>
              <a href="https://goo.gl/maps/cFgvDQvtEa1gssdi8" target="_blank" >
                <div className="marker location" />Wolverhampton, UK
              </a>
            </div>
          </section>
          <section id="blurb">
            Please feel free to contact me if you would like to
            <ul>
              <li>Discuss development and technology</li>
              <li>Work together to develop apps</li>
              <li>Commission the building of any sites or apps</li>
              <li>Permanent or contracted job opportunities</li>
            </ul>
          </section>
        </div>
        {state.succeeded? (
            <div>
              <h2>Message received!</h2>
              <p>Let's hope we can speak soon.</p>
            </div>
          ): (
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name" required>Name</label>
                <input name="name" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="e-mail">e-mail</label>
                <input name="email" type="email" required id="email"/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-field textarea"
                onClick = {() => {console.log("click");
                addMessage(true)}}
                >
                <textarea name="message" disabled={!message}
                  value = {message? savedMessage:
                    "Hi Rohit,\nI just checked out your website and would like to get into contact with you.\nPlease give me a message back."}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="form-field checkbox">
                <input id="message" type="checkbox"
                checked={message? true: false}
                onChange= {() => {
                  message? addMessage(false): addMessage(true);
                }}/>
                <label htmlFor="message">I would like to include a custom message</label>
              </div>
              <div className="form-field submit">
                <input type="submit"></input>
              </div>
            </form>
          )
        }
      </div>
      <div />
    </article>
  )
}

export default Contact
