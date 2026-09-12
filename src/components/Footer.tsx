export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-grid">
          
          <div className="footer-about">
            <div className="footer-logo-row">
              <div className="footer-badge">
                DS
              </div>
              <div className="logo-title">
                <span className="logo-text-dark">Dev</span>{' '}
                <span className="logo-text-highlight">Stack</span>
              </div>
            </div>
            
            <p className="footer-tagline">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="social-row">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-heading">
              Product
            </h4>
            <ul className="col-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#technologies" className="footer-link">Technologies</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="col-heading">
              Company
            </h4>
            <ul className="col-links">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col-wide">
            <h4 className="col-heading">
              Legal
            </h4>
            <ul className="col-links">
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bar">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacy" className="social-link">Privacy</a>
            <a href="#terms" className="social-link">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
