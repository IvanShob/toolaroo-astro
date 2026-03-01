import React, { useState } from 'react';

export default function MobileNav({ pathname = '/' }) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const linkClass = (href) => isActive(href)
    ? "block px-4 py-2 text-blue-600 bg-blue-50 rounded-lg font-semibold transition-colors"
    : "block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-colors";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="sm:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            // Close icon (X)
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Menu icon (hamburger)
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-40">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <a href="/" onClick={closeMenu} className={linkClass('/')}>Home</a>
            <a href="/category/" onClick={closeMenu} className={linkClass('/category/')}>Categories</a>
            <a href="/tools/" onClick={closeMenu} className={linkClass('/tools/')}>All Tools</a>
            <a href="/blog/" onClick={closeMenu} className={linkClass('/blog/')}>Blog</a>
          </nav>
        </div>
      )}
    </div>
  );
}
