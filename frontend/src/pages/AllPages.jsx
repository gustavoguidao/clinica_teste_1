import React from 'react';
import { PremiumHeader } from '../components/PremiumHeader';
import { PremiumFooter } from '../components/PremiumFooter';
import { psychologistData } from '../psychologyData';

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8">Sobre Mim</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">{psychologistData.about.intro}</p>
            <p className="text-xl text-gray-600 leading-relaxed mt-6">{psychologistData.about.approach}</p>
            
            <h2 className="font-serif text-3xl font-bold text-gray-800 mt-12 mb-6">Formação</h2>
            <ul className="space-y-3">
              {psychologistData.about.education.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>

            <h2 className="font-serif text-3xl font-bold text-gray-800 mt-12 mb-6">Experiência</h2>
            <ul className="space-y-3">
              {psychologistData.about.experience.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-16 text-center">Serviços</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {psychologistData.services.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all">
                <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">{service.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.duration}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-rose-500 mt-1">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const BlogPage = () => {
  const { blogPosts } = require('../psychologyData');
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-16 text-center">Blog</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm text-rose-500 font-medium">{post.category}</span>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const BlogPostPage = () => {
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8">Post do Blog</h1>
          <p className="text-xl text-gray-600">Conteúdo do artigo...</p>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8 text-center">Contato</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Informações</h3>
              <div className="space-y-4">
                <p><strong>Telefone:</strong> {psychologistData.phone}</p>
                <p><strong>Email:</strong> {psychologistData.email}</p>
                <p><strong>WhatsApp:</strong> {psychologistData.whatsapp}</p>
                <p><strong>Localização:</strong> {psychologistData.address}</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Agendar Consulta</h3>
              <p className="text-gray-600 mb-6">Utilize o Calendly para agendar sua sessão de forma rápida e segura:</p>
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <p className="text-gray-600 mb-4">Integração Calendly será adicionada aqui</p>
                <p className="text-sm text-gray-500">Link: calendly.com/dra-sofia-almeida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const PrivacyPage = () => {
  const { legalTemplates } = require('../psychologyData');
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-4">{legalTemplates.privacy.title}</h1>
          <p className="text-gray-600 mb-12">Última atualização: {legalTemplates.privacy.lastUpdated}</p>
          {legalTemplates.privacy.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const TermsPage = () => {
  const { legalTemplates } = require('../psychologyData');
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-4">{legalTemplates.terms.title}</h1>
          <p className="text-gray-600 mb-12">Última atualização: {legalTemplates.terms.lastUpdated}</p>
          {legalTemplates.terms.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const DisclaimerPage = () => {
  const { legalTemplates } = require('../psychologyData');
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-4">{legalTemplates.disclaimer.title}</h1>
          <p className="text-gray-600 mb-12">Última atualização: {legalTemplates.disclaimer.lastUpdated}</p>
          {legalTemplates.disclaimer.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};
