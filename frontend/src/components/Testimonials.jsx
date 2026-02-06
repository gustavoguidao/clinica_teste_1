import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const Testimonials = ({ data }) => {
  const t1 = data[0];
  const t2 = data[1];
  const t3 = data[2];
  
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Pacientes
          </h2>
          <p className="text-lg text-gray-600">
            Histórias reais de quem confia na gente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex space-x-1 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-700 italic">"{t1.comment}"</p>
              <div className="flex items-center space-x-3 pt-4 border-t">
                <img 
                  src={t1.image} 
                  alt={t1.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{t1.name}</p>
                  <p className="text-sm text-gray-600">{t1.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex space-x-1 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-700 italic">"{t2.comment}"</p>
              <div className="flex items-center space-x-3 pt-4 border-t">
                <img 
                  src={t2.image} 
                  alt={t2.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{t2.name}</p>
                  <p className="text-sm text-gray-600">{t2.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="flex space-x-1 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-700 italic">"{t3.comment}"</p>
              <div className="flex items-center space-x-3 pt-4 border-t">
                <img 
                  src={t3.image} 
                  alt={t3.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{t3.name}</p>
                  <p className="text-sm text-gray-600">{t3.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
