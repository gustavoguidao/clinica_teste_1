import React from 'react';
import { mockData } from '../mockData';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Differentials } from './Differentials';
import { Testimonials } from './Testimonials';
import { CTA } from './CTA';
import { Contact } from './Contact';
import { Footer } from './Footer';

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
      <Differentials data={mockData.differentials} />
      <Testimonials data={mockData.testimonials} />
      <CTA data={mockData.cta} onNavigate={scrollToSection} />
      <Contact clinicInfo={mockData.clinic} />
      <Footer clinicData={mockData.clinic} onNavigate={scrollToSection} />
    </div>
  );
};

export default Home;
