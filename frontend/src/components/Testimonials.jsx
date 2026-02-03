import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const Testimonials = ({ data }) => {
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
          {data.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
