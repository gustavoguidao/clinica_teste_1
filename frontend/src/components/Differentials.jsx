import React from 'react';
import { Users, Clock, MapPin, Stethoscope } from 'lucide-react';

export const Differentials = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Differentials
          </h2>
          <p className="text-lg text-gray-600">
            What makes us the best choice for your care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:shadow-lg transition-shadow">
            <Users className="h-10 w-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">{data[0].title}</h3>
            <p className="text-gray-600 text-sm">{data[0].description}</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:shadow-lg transition-shadow">
            <Clock className="h-10 w-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">{data[1].title}</h3>
            <p className="text-gray-600 text-sm">{data[1].description}</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:shadow-lg transition-shadow">
            <MapPin className="h-10 w-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">{data[2].title}</h3>
            <p className="text-gray-600 text-sm">{data[2].description}</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:shadow-lg transition-shadow">
            <Stethoscope className="h-10 w-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">{data[3].title}</h3>
            <p className="text-gray-600 text-sm">{data[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};