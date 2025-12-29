import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                alt="Photographer"
              />
            </div>
            <div className="about-decoration"></div>
          </div>

          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <div className="about-divider"></div>

            <p className="about-description">
              Passionate about photography for over 10 years, I specialize in
              capturing authentic and emotional moments. My approach focuses on
              natural light and genuine emotions.
            </p>

            <p className="about-description">
              I work on diverse projects ranging from intimate weddings to
              corporate portraits, nature photography and events. Each project
              is unique and deserves special attention.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfied clients</div>
              </div>
            </div>

            <div className="about-services">
              <h3 className="services-title">Services</h3>
              <ul className="services-list">
                <li>Professional and artistic portraits</li>
                <li>Wedding and event photography</li>
                <li>Outdoor and studio photo sessions</li>
                <li>Professional editing and post-production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
