// Mock data for Clínica Vida Plena website

export const mockData = {
  clinic: {
    name: "Clínica Vida Plena",
    tagline: "Cuidando de você com excelência e dedicação",
    phone: "(11) 98765-4321",
    email: "contato@vidaplena.com.br",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
  },

  hero: {
    title: "Sua Saúde e Bem-Estar em Primeiro Lugar",
    subtitle: "Atendimento humanizado com profissionais qualificados para cuidar de você e sua família",
    cta: "Agende sua Consulta",
    images: [
      "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753",
      "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
    ]
  },

  about: {
    title: "Sobre a Clínica Vida Plena",
    description: "Há mais de 10 anos oferecendo atendimento de excelência na área da saúde. Nossa missão é proporcionar cuidado integral e humanizado, com foco no bem-estar físico, mental e emocional de nossos pacientes.",
    values: [
      {
        icon: "Heart",
        title: "Humanização",
        description: "Atendimento acolhedor e empático"
      },
      {
        icon: "Award",
        title: "Excelência",
        description: "Profissionais altamente qualificados"
      },
      {
        icon: "Shield",
        title: "Confiança",
        description: "Ética e transparência em tudo"
      }
    ]
  },

  services: [
    {
      id: 1,
      name: "Nutrição",
      icon: "Apple",
      description: "Planejamento nutricional personalizado para uma vida mais saudável e equilibrada",
      details: [
        "Avaliação nutricional completa",
        "Planos alimentares personalizados",
        "Acompanhamento contínuo",
        "Reeducação alimentar"
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxudXRyaXRpb258ZW58MHx8fHwxNzcwMTYyMDIxfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "Psicologia",
      icon: "Brain",
      description: "Suporte emocional e terapias especializadas para seu bem-estar mental",
      details: [
        "Terapia individual e em grupo",
        "Atendimento de ansiedade e depressão",
        "Orientação familiar",
        "Desenvolvimento pessoal"
      ],
      image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHx0aGVyYXB5fGVufDB8fHx8MTc3MDE2MjAyOHww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      name: "Fisioterapia",
      icon: "Activity",
      description: "Reabilitação e tratamentos especializados para recuperação e prevenção",
      details: [
        "Reabilitação ortopédica",
        "Fisioterapia esportiva",
        "Tratamento de dores crônicas",
        "Prevenção de lesões"
      ],
      image: "https://images.unsplash.com/photo-1645005512968-0c1fe99f0093?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5fGVufDB8fHx8MTc3MDE2MjAzOHww&ixlib=rb-4.1.0&q=85"
    }
  ],

  differentials: [
    {
      icon: "Users",
      title: "Equipe Multidisciplinar",
      description: "Profissionais especializados trabalhando de forma integrada"
    },
    {
      icon: "Clock",
      title: "Horários Flexíveis",
      description: "Atendimento adaptado à sua rotina"
    },
    {
      icon: "MapPin",
      title: "Localização Privilegiada",
      description: "Fácil acesso no centro da cidade"
    },
    {
      icon: "Stethoscope",
      title: "Tecnologia Moderna",
      description: "Equipamentos de última geração"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Maria Silva",
      role: "Paciente há 2 anos",
      comment: "Atendimento excepcional! A equipe é muito atenciosa e os resultados superaram minhas expectativas. Me sinto acolhida e bem cuidada.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHBhdGllbnR8ZW58MHx8fHwxNzcwMTYyMDg1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Paciente há 1 ano",
      comment: "Profissionais extremamente competentes e humanos. A Clínica Vida Plena realmente se preocupa com o bem-estar dos pacientes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHBhdGllbnR8ZW58MHx8fHwxNzcwMTYyMDg1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      name: "Ana Paula",
      role: "Paciente há 3 anos",
      comment: "Mudou minha qualidade de vida! Recomendo de olhos fechados. Equipe dedicada e ambiente acolhedor.",
      rating: 5,
      image: "https://images.pexels.com/photos/5622269/pexels-photo-5622269.jpeg"
    }
  ],

  cta: {
    title: "Pronto para Cuidar da Sua Saúde?",
    subtitle: "Agende sua consulta agora e dê o primeiro passo para uma vida mais saudável",
    button: "Agendar Consulta"
  }
};
