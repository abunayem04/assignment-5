import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/logo-icon.svg';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
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
          
          {/* hamburger for mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 -ml-2 text-slate-700 hover:text-slate-900 focus:outline-none rounded-lg"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>

          {/* logo */}
          <div className="navbar-brand">
            <img src={logoIcon} alt="DevStack Logo" className="w-10 h-10 rounded-xl shadow-sm" />
            <div className="logo-title">
              <span className="logo-text-dark">Dev</span>{' '}
              <span className="logo-text-highlight">Stack</span>
            </div>
          </div>

          {/* desktop nav links */}
          <nav className="navbar-links">
            {links.map((link) => (
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

      {/* mobile menu dropdown */}
      {menuOpen && (
        <div className="mobile-nav">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
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
