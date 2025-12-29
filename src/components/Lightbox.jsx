import { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Film strip animation on the left */}
        <div className="film-strip-left">
          <div className="film-perforations">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="perforation"></div>
            ))}
          </div>
          <div className="film-edge"></div>
        </div>

        {/* Main image */}
        <div className="lightbox-image-container">
          <img src={image.image} alt={image.title} className="lightbox-image" />
          <div className="lightbox-caption">
            <h3>{image.title}</h3>
          </div>
        </div>

        {/* EXIF data panel on the right */}
        <div className="exif-panel">
          <div className="exif-item">
            <span className="exif-label">FORMAT</span>
            <span className="exif-value">35MM</span>
          </div>
          <div className="exif-item">
            <span className="exif-label">ISO</span>
            <span className="exif-value">400</span>
          </div>
          <div className="exif-item">
            <span className="exif-label">EXPOSURE</span>
            <span className="exif-value">1/125</span>
          </div>
          <div className="exif-item">
            <span className="exif-label">F-STOP</span>
            <span className="exif-value">f/2.8</span>
          </div>

          {/* Decorative camera icon */}
          <div className="camera-icon">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="35" width="60" height="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <circle cx="50" cy="55" r="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <circle cx="50" cy="55" r="10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
              <rect x="40" y="30" width="20" height="5" fill="rgba(255,255,255,0.2)"/>
              <circle cx="70" cy="42" r="2" fill="rgba(255,255,255,0.3)"/>
            </svg>
          </div>
        </div>

        {/* Film strip animation on the right edge */}
        <div className="film-strip-right">
          <div className="film-edge"></div>
          <div className="film-perforations">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="perforation"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
