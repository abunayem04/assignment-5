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

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-inner">
          
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar-mobile-btn"
            >
              {mobileMenuOpen ? (
                <X className="menu-icon" />
              ) : (
                <Menu className="menu-icon" />
              )}
            </button>
          </div>

          <div className="navbar-brand">
            <div className="navbar-logo-badge">
              DS
            </div>
            <div className="navbar-logo-title">
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
            <button className="btn-navbar-signin">
              Sign In
            </button>
            <button className="btn-navbar-signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={link.active ? 'navbar-mobile-link-active' : 'navbar-mobile-link'}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
