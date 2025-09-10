import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Certificates />
      <Contact />
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Jayesh Duryodhan Vhatkar. Made with ❤️ using React.js</p>
            <div className="social-links">
              <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;