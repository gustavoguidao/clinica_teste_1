import React from 'react';
import { PremiumHeader } from '../components/PremiumHeader';
import { PremiumFooter } from '../components/PremiumFooter';
import { psychologistData, blogPosts, legalTemplates } from '../psychologyData';

export const AboutPage = () => {
  const about = psychologistData.about;
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8">Sobre Mim</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">{about.intro}</p>
            <p className="text-xl text-gray-600 leading-relaxed">{about.approach}</p>
            
            <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-3xl p-8 my-8">
              <p className="text-2xl text-gray-700 italic font-serif">"{about.quote}"</p>
            </div>
            
            <h2 className="font-serif text-3xl font-bold text-gray-800 mt-12 mb-6">Formação</h2>
            <ul className="space-y-3">
              <li className="text-gray-700">{about.education[0]}</li>
              <li className="text-gray-700">{about.education[1]}</li>
              <li className="text-gray-700">{about.education[2]}</li>
              <li className="text-gray-700">{about.education[3]}</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-gray-800 mt-12 mb-6">Experiência</h2>
            <ul className="space-y-3">
              <li className="text-gray-700">{about.experience[0]}</li>
              <li className="text-gray-700">{about.experience[1]}</li>
              <li className="text-gray-700">{about.experience[2]}</li>
              <li className="text-gray-700">{about.experience[3]}</li>
            </ul>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const ServicesPage = () => {
  const serv = psychologistData.services;
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-16 text-center">Serviços</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all">
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">{serv[0].name}</h3>
              <p className="text-sm text-gray-500 mb-4">{serv[0].duration}</p>
              <p className="text-gray-600 mb-6">{serv[0].description}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[0].details[0]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[0].details[1]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[0].details[2]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[0].details[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all">
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">{serv[1].name}</h3>
              <p className="text-sm text-gray-500 mb-4">{serv[1].duration}</p>
              <p className="text-gray-600 mb-6">{serv[1].description}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[1].details[0]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[1].details[1]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[1].details[2]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[1].details[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all">
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">{serv[2].name}</h3>
              <p className="text-sm text-gray-500 mb-4">{serv[2].duration}</p>
              <p className="text-gray-600 mb-6">{serv[2].description}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[2].details[0]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[2].details[1]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[2].details[2]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[2].details[3]}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all">
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">{serv[3].name}</h3>
              <p className="text-sm text-gray-500 mb-4">{serv[3].duration}</p>
              <p className="text-gray-600 mb-6">{serv[3].description}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[3].details[0]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[3].details[1]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[3].details[2]}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 mt-1">✓</span>
                  <span className="text-gray-700">{serv[3].details[3]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const BlogPage = () => {
  const posts = blogPosts;
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-16 text-center">Blog</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
              <img src={posts[0].image} alt={posts[0].title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-rose-500 font-medium">{posts[0].category}</span>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-3">{posts[0].title}</h3>
                <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{posts[0].date}</span>
                  <span>{posts[0].readTime} de leitura</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
              <img src={posts[1].image} alt={posts[1].title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-rose-500 font-medium">{posts[1].category}</span>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-3">{posts[1].title}</h3>
                <p className="text-gray-600 mb-4">{posts[1].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{posts[1].date}</span>
                  <span>{posts[1].readTime} de leitura</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all">
              <img src={posts[2].image} alt={posts[2].title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-rose-500 font-medium">{posts[2].category}</span>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mt-2 mb-3">{posts[2].title}</h3>
                <p className="text-gray-600 mb-4">{posts[2].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{posts[2].date}</span>
                  <span>{posts[2].readTime} de leitura</span>
                </div>
              </div>
            </div>
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
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8">Blog Post</h1>
          <p className="text-xl text-gray-600">Article content will be displayed here...</p>
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
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-8 text-center">Contact</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Information</h3>
              <div className="space-y-4">
                <p><strong>Phone:</strong> {psychologistData.phone}</p>
                <p><strong>Email:</strong> {psychologistData.email}</p>
                <p><strong>WhatsApp:</strong> {psychologistData.whatsapp}</p>
                <p><strong>Location:</strong> {psychologistData.address}</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Book Appointment</h3>
              <p className="text-gray-600 mb-6">Use Calendly to schedule your session quickly and securely:</p>
              <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-8 text-center">
                <p className="text-gray-600 mb-4">📅 Calendly Integration</p>
                <p className="text-sm text-gray-500">Link: calendly.com/dr-sofia-almeida</p>
                <p className="text-xs text-gray-400 mt-4">Widget will be integrated here</p>
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
  const privacy = legalTemplates.privacy;
  const s = privacy.sections;
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-4">{privacy.title}</h1>
          <p className="text-gray-600 mb-12">Última atualização: {privacy.lastUpdated}</p>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[0].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[0].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[1].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[1].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[2].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[2].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[3].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[3].content}</p>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const TermsPage = () => {
  const terms = legalTemplates.terms;
  const s = terms.sections;
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-4">{terms.title}</h1>
          <p className="text-gray-600 mb-12">Última atualização: {terms.lastUpdated}</p>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[0].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[0].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[1].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[1].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[2].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[2].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[3].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[3].content}</p>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};

export const DisclaimerPage = () => {
  const disclaimer = legalTemplates.disclaimer;
  const s = disclaimer.sections;
  
  return (
    <div className="min-h-screen">
      <PremiumHeader />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-gray-800 mb-4">{disclaimer.title}</h1>
          <p className="text-gray-600 mb-12">Última atualização: {disclaimer.lastUpdated}</p>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[0].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[0].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[1].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[1].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[2].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[2].content}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">{s[3].title}</h2>
            <p className="text-gray-700 leading-relaxed">{s[3].content}</p>
          </div>
        </div>
      </div>
      <PremiumFooter />
    </div>
  );
};
