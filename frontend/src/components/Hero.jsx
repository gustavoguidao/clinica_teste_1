import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = ({ data, onNavigate }) => {
  return (
    <section id="início" className="pt-16 bg-gradient-to-br from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600">
              {data.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white group"
              onClick={() => onNavigate('contato')}
            >
              {data.cta}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={data.images[0]} 
                alt="Clínica"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
