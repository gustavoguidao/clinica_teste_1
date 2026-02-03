import React from 'react';
import { Heart, Award, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = { Heart, Award, Shield };

export const About = ({ data }) => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <Card key={index} className="border-2 hover:border-cyan-600 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100">
                    <Icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
