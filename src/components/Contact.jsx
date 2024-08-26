import React from 'react'
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <div className="heading">
        <h1 >Reach Out</h1>
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <form action="">
            <input
              className="in-name"
              type="text"
              placeholder="Name*"
              required
              autoComplete="on"
            />
            <input
              className="in-email"
              type="text"
              placeholder="Email*"
              required
              autoComplete="on"
            />
            <input
              className="in-subject"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              className="in-message"
              name="message"
              rows="10"
              cols="40"
              required
              placeholder="Message"
            />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        <div className="contact-right">
          <div className="name">
            <h1>Mathuseelan</h1>
            <p>Web developer</p>
          </div>

          <div className="phone">
            <h1>Phone</h1>
            <p>+91 9361278426</p>
          </div>

          <div className="email">
            <h1>Email</h1>
            <p>mathuseelanofficial@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact