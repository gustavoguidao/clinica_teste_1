import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const CTA = ({ data, onNavigate }) => {
  return (
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {data.title}
        </h2>
        <p className="text-xl text-cyan-100 mb-8">
          {data.subtitle}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-cyan-600 hover:bg-gray-100 group"
          onClick={() => onNavigate('contato')}
        >
          {data.button}
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
