import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const PremiumHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/sobre' },
    { name: 'Services', path: '/servicos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contato' }
  ];

  return (
    <header className="fixed top-0 w-full glass shadow-soft z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-200 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <p className="font-serif text-xl font-semibold text-gray-800">Dr. Sofia Almeida</p>
              <p className="text-xs text-gray-600">Clinical Psychologist</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-gray-700 hover:text-rose-500 font-medium rounded-full hover:bg-rose-50 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={() => navigate('/contato')}
              className="ml-4 bg-gradient-to-r from-rose-400 to-purple-400 hover:from-rose-500 hover:to-purple-500 text-white btn-premium rounded-full px-6"
            >
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-rose-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-rose-50 rounded-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/contato');
              }}
              className="w-full bg-gradient-to-r from-rose-400 to-purple-400 text-white rounded-full"
            >
              Book Appointment
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
