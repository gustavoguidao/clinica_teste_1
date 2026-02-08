import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PremiumHeader } from '../components/PremiumHeader';
import { PremiumFooter } from '../components/PremiumFooter';
import { psychologistData } from '../psychologyData';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles, Heart, Brain, User, ArrowRight, Star, Calendar } from 'lucide-react';

export const PsychologyHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <PremiumHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-rose-50 via-purple-50 to-peach-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-white shadow-soft text-rose-500 text-sm font-medium">
                  ✨ Bem-vindo ao seu espaço de cuidado
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Sua jornada de <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">autoconhecimento</span> começa aqui
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {psychologistData.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/contato')}
                  className="bg-gradient-to-r from-rose-400 to-purple-400 hover:from-rose-500 hover:to-purple-500 text-white btn-premium rounded-full px-8 py-6 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Primeira Sessão
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/sobre')}
                  className="rounded-full px-8 py-6 text-lg border-2 border-rose-200 hover:bg-rose-50"
                >
                  Conhecer a Psicóloga
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-soft-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800" 
                  alt="Terapia acolhedora"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-br from-peach-200 to-rose-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Como posso te ajudar?
            </h2>
            <p className="text-xl text-gray-600">
              Trabalho com abordagens baseadas em evidências para diversos desafios emocionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {psychologistData.specialties.map((specialty, index) => {
              const icons = { Brain, Heart, Sparkles, User };
              const Icon = icons[specialty.icon] || Brain;
              const colors = ['rose', 'purple', 'peach', 'lavender'];
              const color = colors[index % 4];
              
              return (
                <Card key={index} className="border-2 hover:border-rose-200 hover:shadow-soft-lg transition-all group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-${color}-100 to-${color}-200 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-8 w-8 text-${color}-500`} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-800">{specialty.name}</h3>
                    <p className="text-gray-600 text-sm">{specialty.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Serviços Oferecidos
            </h2>
            <p className="text-xl text-gray-600">
              Atendimento personalizado para suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {psychologistData.services.slice(0, 4).map((service) => (
              <Card key={service.id} className="hover:shadow-soft-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 flex items-center justify-center`}>
                      <Heart className={`h-7 w-7 text-${service.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{service.duration}</p>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button 
                        variant="ghost" 
                        className="text-rose-500 hover:text-rose-600 p-0"
                        onClick={() => navigate('/servicos')}
                      >
                        Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/servicos')}
              className="rounded-full px-8 border-2 border-rose-200 hover:bg-rose-50"
            >
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Histórias de Transformação
            </h2>
            <p className="text-xl text-gray-600">
              O que dizem as pessoas que confiam no meu trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {psychologistData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white hover:shadow-soft-lg transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-rose-400 text-rose-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.comment}"</p>
                  <div className="pt-4 border-t border-rose-100">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-400 via-purple-400 to-peach-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            {psychologistData.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {psychologistData.cta.subtitle}
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/contato')}
            className="bg-white text-rose-500 hover:bg-gray-50 rounded-full px-10 py-6 text-lg font-semibold"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {psychologistData.cta.button}
          </Button>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
};
