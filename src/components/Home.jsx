import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hello, I'm <span className="highlight">Jayesh Duryodhan Vhatkar</span></h1>
          <p className="hero-subtitle">11th Grade Student | Aspiring Developer | Future Innovator</p>
          <p className="hero-description">
            Welcome to my personal space! I'm a passionate 11th-grade student with a keen interest in technology and web development.
            I believe in continuous learning and creating meaningful digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#certificates" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-avatar">
              <img src="/jay.jpg" alt="Jayesh Vhatkar" className="avatar-image" />
            </div>
            <h3>Jayesh Vhatkar</h3>
            <p>Student</p>
          </div>
        </div>
      </div>
      
    </section>
  
  )
}

export default Home


