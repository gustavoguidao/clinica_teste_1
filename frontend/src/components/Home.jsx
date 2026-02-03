import React from 'react';
import { mockData } from '../mockData';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { ChevronRight, Users, Clock, MapPin, Stethoscope } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = { Users, Clock, MapPin, Stethoscope };

export const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header clinicName={mockData.clinic.name} onNavigate={scrollToSection} />
      <Hero data={mockData.hero} onNavigate={scrollToSection} />
      <About data={mockData.about} />
      <Services data={mockData.services} />

      {/* Differentials Section */}
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
            {mockData.differentials.map((diff, index) => {
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

      <Testimonials data={mockData.testimonials} />

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {mockData.cta.title}
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            {mockData.cta.subtitle}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-cyan-600 hover:bg-gray-100 group"
            onClick={() => scrollToSection('contato')}
          >
            {mockData.cta.button}
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Contact clinicInfo={mockData.clinic} />
      <Footer clinicData={mockData.clinic} onNavigate={scrollToSection} />
    </div>
  );
};

export default Home;
