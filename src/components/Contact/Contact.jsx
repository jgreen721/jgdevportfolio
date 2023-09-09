import React, {useRef} from 'react'
import "./Contact.css"

const Contact = () => {
  const formRef = useRef();
  return (
    <div className="contact-section">
      <div className="contact-overlay"></div>
      <div className="contact-card">
        <form className="contact-form" ref={formRef}>
        <div className="contact-col">
          <div className="form-div">
            <input type="text" name="email" placeholder="Email" className="form-control" />
          </div>
          <div className="form-div">
            <input type="text" name="subject" placeholder="Subject" className="form-control" />
          </div>
        </div>
        <div className="contact-col">
          <textarea className="contact-textarea" placeholder="Whats on your mind..."></textarea>
          <button className="contact-btn">Send</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Contact