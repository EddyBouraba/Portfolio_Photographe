import './Hero.css';

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Capturer<br />l'instant,<br />Révéler<br />l'émotion
          </h1>
          <p className="hero-subtitle">
            Photographe professionnelle / Portraits, Mariages, Événements
          </p>
          <button className="hero-cta" onClick={scrollToGallery}>
            Voir Portfolio
            <span className="cta-arrow">↓</span>
          </button>
        </div>
      </div>

      <div className="hero-image-zone">
        <div className="film-metadata">
          <div className="metadata-item">
            <span className="metadata-label">Format</span>
            <span className="metadata-value">35MM</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">ISO</span>
            <span className="metadata-value">400</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Exposure</span>
            <span className="metadata-value">1/125</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">F-Stop</span>
            <span className="metadata-value">f/2.8</span>
          </div>
        </div>
        <div className="hero-visual-text">PORTFOLIO</div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
