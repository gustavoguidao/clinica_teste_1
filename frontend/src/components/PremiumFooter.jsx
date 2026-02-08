import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { psychologistData } from '../psychologyData';

export const PremiumFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-50 via-purple-50 to-peach-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-200 to-purple-200 flex items-center justify-center">
                <Heart className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-gray-800">{psychologistData.name}</p>
                <p className="text-sm text-gray-600">{psychologistData.title}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {psychologistData.tagline}
            </p>
            <p className="text-sm text-gray-500">{psychologistData.crp}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-rose-500 transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-gray-600 hover:text-rose-500 transition-colors">About Me</Link></li>
              <li><Link to="/servicos" className="text-gray-600 hover:text-rose-500 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-rose-500 transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-gray-600 hover:text-rose-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4 text-rose-400" />
                <span className="text-sm">{psychologistData.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4 text-rose-400" />
                <span className="text-sm">{psychologistData.email}</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href={`https://instagram.com/${psychologistData.socialMedia.instagram.replace('@', '')}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center hover:bg-rose-200 transition-colors">
                <Instagram className="h-5 w-5 text-rose-500" />
              </a>
              <a href={`https://linkedin.com/in/${psychologistData.socialMedia.linkedin}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors">
                <Linkedin className="h-5 w-5 text-purple-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-rose-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2024 {psychologistData.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacidade" className="text-gray-600 hover:text-rose-500 transition-colors">
                Privacy
              </Link>
              <Link to="/termos" className="text-gray-600 hover:text-rose-500 transition-colors">
                Terms
              </Link>
              <Link to="/aviso-legal" className="text-gray-600 hover:text-rose-500 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
