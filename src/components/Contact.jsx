import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = (e) => {
    e.preventDefault()
    const email = 'jayeshvhatkar3@gmail.com'
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
    window.open(gmailUrl, '_blank')
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 3000)
    }).catch(() => {
      window.location.href = `mailto:${email}`
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always excited to meet new people and discuss ideas. Feel free to reach out!</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Mobile</h4>
                  <a href="tel:+919137066968">+91 91370 66968</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:jayeshvhatkar3@gmail.com" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                    jayeshvhatkar3@gmail.com
                  </a>
                  {emailCopied && (
                    <span style={{ color: '#f39c12', fontSize: '0.9rem', marginLeft: '10px' }}>
                      ✓ Copied to clipboard!
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Instagram</h4>
                  <a href="https://instagram.com/jayesh_vhatkar_90" target="_blank" rel="noopener noreferrer">
                    @jayesh_vhatkar_90
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


