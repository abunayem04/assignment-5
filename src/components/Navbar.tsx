import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technologies', href: '#technologies', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'About', href: '#about', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-inner">
          
          <div className="mobile-toggle">
            <button
              onClick={toggleMenu}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="menu-icon" />
              ) : (
                <Menu className="menu-icon" />
              )}
            </button>
          </div>

          <div className="navbar-brand">
            <div className="logo-badge">
              DS
            </div>
            <div className="logo-title">
              <span className="logo-text-dark">Dev</span>{' '}
              <span className="logo-text-highlight">Stack</span>
            </div>
          </div>

          <nav className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={link.active ? 'nav-link-active' : 'nav-link'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <button className="btn-signin">
              Sign In
            </button>
            <button className="btn-signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* mobile dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={link.active ? 'mobile-link-active' : 'mobile-link'}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
