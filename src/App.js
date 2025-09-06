import './App.css';
import { useState } from 'react';

function App() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'jayeshvhatkar3@gmail.com';
    
    // Try to open Gmail directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Also copy email to clipboard as fallback
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    }).catch(() => {
      // Fallback: try the mailto link
      window.location.href = `mailto:${email}`;
    });
  };

  const handleCertificateClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>Jayesh Vhatkar</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
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
                <img
                  src="/jay.jpg"
                  alt="Jayesh Vhatkar"
                  className="avatar-image"
                />
              </div>
              <h3>Jayesh Vhatkar</h3>
              <p>Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated and curious 12th-grade student passionately exploring the vast world of technology and innovation. My journey began with a simple curiosity about how websites function, which has since evolved into a deep-seated interest in web development and programming.
              </p>
              <p>
                I am currently building my own digital presence and developing my skills by working on personal projects. I am a strong believer in the power of continuous learning and actively strive to stay updated with the latest trends and advancements in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates">
        <div className="container">
          <h2 className="section-title">My Certificates</h2>
          <div className="certificates-grid">
            <div className="certificate-card">
              <div className="certificate-image-container" onClick={() => handleCertificateClick('/Certificate1.jpeg')}>
                <img 
                  src="/Certificate1.jpeg" 
                  alt="10th Grade Certificate 1 - Academic Excellence" 
                  className="certificate-image"
                />
              </div>
              <h3>10th Grade Certificate 1</h3>
              <p>Academic Excellence in 10th Standard</p>
              <span className="certificate-year">2024</span>
            </div>
            <div className="certificate-card">
              <div className="certificate-image-container" onClick={() => handleCertificateClick('/Certificate2.jpeg')}>
                <img 
                  src="/Certificate2.jpeg" 
                  alt="10th Grade Certificate 2 - Outstanding Performance" 
                  className="certificate-image"
                />
              </div>
              <h3>10th Grade Certificate 2</h3>
              <p>Outstanding Performance in Studies</p>
              <span className="certificate-year">2023</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                    <a 
                      href="mailto:jayeshvhatkar3@gmail.com" 
                      onClick={handleEmailClick}
                      style={{ cursor: 'pointer' }}
                    >
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Jayesh Duryodhan Vhatkar. Made with ❤️ using React.js</p>
            <div className="social-links">
              <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate Full View" 
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
