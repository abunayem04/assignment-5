export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-grid">
          
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-badge">
                DS
              </div>
              <div className="navbar-logo-title">
                <span className="logo-text-dark">Dev</span>{' '}
                <span className="logo-text-highlight">Stack</span>
              </div>
            </div>
            
            <p className="footer-brand-desc">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="footer-social-links">
              <a href="https://github.com" target="_blank" className="footer-social-link">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" className="footer-social-link">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" className="footer-social-link">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-col-nav">
            <h4 className="footer-col-title">
              Product
            </h4>
            <ul className="footer-links-list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#technologies" className="footer-link">Technologies</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
            </ul>
          </div>

          <div className="footer-col-nav">
            <h4 className="footer-col-title">
              Company
            </h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col-nav-wide">
            <h4 className="footer-col-title">
              Legal
            </h4>
            <ul className="footer-links-list">
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-social-link">Privacy</a>
            <a href="#terms" className="footer-social-link">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
