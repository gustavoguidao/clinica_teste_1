import React from 'react';
import { Apple, Brain, Activity, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const Services = ({ data }) => {
  return (
    <section id="serviços" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Atendimento especializado para cuidar de você de forma integral
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Nutrition */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={data[0].image} 
                alt={data[0].name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <Apple className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{data[0].name}</h3>
              </div>
              <p className="text-gray-600">{data[0].description}</p>
              <ul className="space-y-2">
                {data[0].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Psychology */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={data[1].image} 
                alt={data[1].name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{data[1].name}</h3>
              </div>
              <p className="text-gray-600">{data[1].description}</p>
              <ul className="space-y-2">
                {data[1].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Physiotherapy */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={data[2].image} 
                alt={data[2].name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{data[2].name}</h3>
              </div>
              <p className="text-gray-600">{data[2].description}</p>
              <ul className="space-y-2">
                {data[2].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
