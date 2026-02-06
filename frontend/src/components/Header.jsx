import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Header = ({ clinicName, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (section) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-cyan-600" />
            <span className="text-xl font-bold text-gray-900">{clinicName}</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
