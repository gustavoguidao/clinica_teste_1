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
  const spec = psychologistData.specialties;
  const serv = psychologistData.services;
  const test = psychologistData.testimonials;

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
                  ✨ Welcome to your care space
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Your journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">self-discovery</span> starts here
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
                  Book First Session
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/sobre')}
                  className="rounded-full px-8 py-6 text-lg border-2 border-rose-200 hover:bg-rose-50"
                >
                  Meet the Psychologist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-soft-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800" 
                  alt="Welcoming therapy"
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
              How can I help you?
            </h2>
            <p className="text-xl text-gray-600">
              I work with evidence-based approaches for various emotional challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-rose-200 hover:shadow-soft-lg transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">{spec[0].name}</h3>
                <p className="text-gray-600 text-sm">{spec[0].description}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-rose-200 hover:shadow-soft-lg transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">{spec[1].name}</h3>
                <p className="text-gray-600 text-sm">{spec[1].description}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-rose-200 hover:shadow-soft-lg transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-peach-100 to-peach-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">{spec[2].name}</h3>
                <p className="text-gray-600 text-sm">{spec[2].description}</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-rose-200 hover:shadow-soft-lg transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">{spec[3].name}</h3>
                <p className="text-gray-600 text-sm">{spec[3].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Services Offered
            </h2>
            <p className="text-xl text-gray-600">
              Personalized care for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-soft-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-rose-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">{serv[0].name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{serv[0].duration}</p>
                    <p className="text-gray-600 mb-4">{serv[0].description}</p>
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
            
            <Card className="hover:shadow-soft-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">{serv[1].name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{serv[1].duration}</p>
                    <p className="text-gray-600 mb-4">{serv[1].description}</p>
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
            
            <Card className="hover:shadow-soft-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">{serv[2].name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{serv[2].duration}</p>
                    <p className="text-gray-600 mb-4">{serv[2].description}</p>
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
            
            <Card className="hover:shadow-soft-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-2">{serv[3].name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{serv[3].duration}</p>
                    <p className="text-gray-600 mb-4">{serv[3].description}</p>
                    <Button 
                      variant="ghost" 
                      className="text-rose-500 hover:text-rose-600 p-0"
                      onClick={() => navigate('/servicos')}
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/servicos')}
              className="rounded-full px-8 border-2 border-rose-200 hover:bg-rose-50"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-600">
              What people who trust my work say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-soft-lg transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{test[0].comment}"</p>
                <div className="pt-4 border-t border-rose-100">
                  <p className="font-semibold text-gray-800">{test[0].name}</p>
                  <p className="text-sm text-gray-500">{test[0].age} • {test[0].service}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-soft-lg transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{test[1].comment}"</p>
                <div className="pt-4 border-t border-rose-100">
                  <p className="font-semibold text-gray-800">{test[1].name}</p>
                  <p className="text-sm text-gray-500">{test[1].age} • {test[1].service}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-soft-lg transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                  <Star className="h-5 w-5 fill-rose-400 text-rose-400" />
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{test[2].comment}"</p>
                <div className="pt-4 border-t border-rose-100">
                  <p className="font-semibold text-gray-800">{test[2].name}</p>
                  <p className="text-sm text-gray-500">{test[2].age} • {test[2].service}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400">
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
