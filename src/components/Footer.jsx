import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Your Name</h3>
            <p className="footer-description">
              Professional photographer specializing in portraits, weddings, and events.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#gallery">Galerie</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>Portraits</li>
              <li>Mariages</li>
              <li>Événements</li>
              <li>Photographie Nature</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>contact@yourphotography.com</li>
              <li>+33 X XX XX XX XX</li>
              <li>Your City, Country</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Your Photography. All rights reserved.
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
