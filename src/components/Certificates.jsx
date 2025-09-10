import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const img1 = '/Certificate1.jpg';
  const img2 = '/Certificate2.jpg';

  const openFromEvent = (e, imageSrc) => {
    e.preventDefault();
    e.stopPropagation();
    if (!imageSrc) {
      console.error('No image source provided');
      return;
    }
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCardKey = (e, imageSrc) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openFromEvent(e, imageSrc);
    }
  };

  const handleImgError = (e) => {
    const imgEl = e.currentTarget;
    const src = imgEl.getAttribute('src') || '';
    if (/\.jpeg$/i.test(src)) {
      imgEl.src = src.replace(/\.jpeg$/i, '.jpg');
      return;
    }
    // Hide broken image gracefully
    imgEl.style.display = 'none';
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSelectedImage('');
    }
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>
        <div className="certificates-grid">
          <div
            className="certificate-card"
            role="button"
            tabIndex={0}
            onClick={(e) => openFromEvent(e, img2)}
            onKeyDown={(e) => handleCardKey(e, img2)}
            style={{ cursor: 'pointer', touchAction: 'manipulation' }}
          >
            <div className="certificate-image-container">
              <img
                src={img2}
                onError={handleImgError}
                alt="10th Grade Certificate 2 - Outstanding Performance"
                className="certificate-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>10th Grade Certificate 2</h3>
            <p>Outstanding Performance in Studies</p>
            <span className="certificate-year">2024</span>
          </div>

          <div
            className="certificate-card"
            role="button"
            tabIndex={0}
            onClick={(e) => openFromEvent(e, img1)}
            onKeyDown={(e) => handleCardKey(e, img1)}
            style={{ cursor: 'pointer', touchAction: 'manipulation' }}
          >
            <div className="certificate-image-container">
              <img
                src={img1}
                onError={handleImgError}
                alt="10th Grade Certificate 1 - Academic Excellence"
                className="certificate-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3>10th Grade Certificate 1</h3>
            <p>Academic Excellence in 10th Standard</p>
            <span className="certificate-year">2023</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => {
                setIsModalOpen(false);
                setSelectedImage('');
              }}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="modal-image"
              onError={handleImgError}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;