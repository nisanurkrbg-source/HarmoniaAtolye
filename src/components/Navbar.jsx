import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sihirli Bilgiler', href: '#sihirli-bilgiler' },
    { name: 'Ebeveyn Bilgiler', href: '#ebeveyn-bilgiler' },
    { name: 'Çocuğumu Nasıl Anlarım', href: '#cocugumu-nasil-anlarim' },
    { name: 'Etsy Mağazam', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-heading font-bold text-2xl text-brand-dark hover:text-brand-sage transition-colors duration-300">
              Nisa <span className="text-brand-sage font-medium text-xl">| Okul Öncesi Uzmanı</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-dark hover:text-brand-sage px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-sage focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-20 left-0 w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:text-brand-sage hover:bg-brand-beige/50 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
