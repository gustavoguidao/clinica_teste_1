import React from 'react';
import { Users, Clock, MapPin, Stethoscope } from 'lucide-react';

const iconMap = { Users, Clock, MapPin, Stethoscope };

export const Differentials = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-gray-600">
            O que nos torna a melhor escolha para seu cuidado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((diff, index) => {
            const Icon = iconMap[diff.icon];
            return (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:shadow-lg transition-shadow"
              >
                <Icon className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{diff.title}</h3>
                <p className="text-gray-600 text-sm">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
