import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Technologies', href: '#technologies', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'About', href: '#about', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-slate-700 hover:text-slate-900 focus:outline-none rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2.5 cursor-pointer select-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5E3A] via-[#FF2A6D] to-[#9B51E0] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm">
              DS
            </div>
            <div className="text-xl font-bold tracking-tight">
              <span className="text-slate-900 font-extrabold">Dev</span>{' '}
              <span className="text-[#FF2A6D] font-extrabold">Stack</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? 'text-[#FF2A6D] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-gradient-to-r from-[#FF5E3A] via-[#FF2A6D] to-[#9B51E0] hover:opacity-95 px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 active:scale-95">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                link.active
                  ? 'bg-rose-50 text-[#FF2A6D] font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
