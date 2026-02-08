// Mock data for Dra. Sofia Almeida - Clinical Psychology Practice

export const psychologistData = {
  name: "Dra. Sofia Almeida",
  title: "Psicóloga Clínica",
  crp: "CRP 06/123456",
  tagline: "Um espaço acolhedor para cuidar da sua saúde mental",
  phone: "(11) 98765-4321",
  email: "contato@sofiaalmeida.psi.br",
  whatsapp: "5511987654321",
  location: "São Paulo, SP",
  address: "Consultório localizado na Av. Paulista - atendimento presencial e online",
  
  about: {
    intro: "Olá, sou a Dra. Sofia Almeida, psicóloga clínica com mais de 10 anos de experiência no cuidado da saúde mental. Meu objetivo é criar um espaço seguro e acolhedor onde você possa se sentir à vontade para falar sobre seus desafios e descobrir novas formas de lidar com eles.",
    approach: "Utilizo a abordagem da Terapia Cognitivo-Comportamental (TCC), que é cientificamente comprovada e focada em soluções práticas para os desafios do dia a dia. Acredito que cada pessoa é única, por isso adapto o tratamento às suas necessidades específicas.",
    quote: "A terapia é uma jornada de autoconhecimento e crescimento. Estou aqui para caminhar ao seu lado.",
    education: [
      "Graduação em Psicologia - USP",
      "Especialização em TCC - Instituto de Terapia Cognitiva",
      "Mestrado em Psicologia Clínica - PUC-SP",
      "Formação em Terapia de Esquemas"
    ],
    experience: [
      "10+ anos de experiência clínica",
      "Atendimento de adultos e adolescentes",
      "Supervisora clínica de psicólogos",
      "Palestrante em eventos de saúde mental"
    ]
  },

  services: [
    {
      id: 1,
      name: "Terapia Individual",
      icon: "User",
      duration: "50 minutos",
      description: "Sessões personalizadas para trabalhar ansiedade, depressão, autoestima e outros desafios emocionais.",
      details: [
        "Atendimento adulto e adolescente",
        "Abordagem TCC",
        "Sessões semanais ou quinzenais",
        "Presencial ou online"
      ],
      color: "rose"
    },
    {
      id: 2,
      name: "Terapia para Ansiedade",
      icon: "Heart",
      duration: "50 minutos",
      description: "Tratamento especializado para transtornos de ansiedade, pânico e fobias.",
      details: [
        "Técnicas de relaxamento",
        "Reestruturação cognitiva",
        "Exposição gradual",
        "Estratégias de enfrentamento"
      ],
      color: "purple"
    },
    {
      id: 3,
      name: "Orientação Profissional",
      icon: "Briefcase",
      duration: "50 minutos",
      description: "Apoio psicológico para questões de carreira, burnout e transições profissionais.",
      details: [
        "Análise de perfil profissional",
        "Gestão de estresse no trabalho",
        "Tomada de decisões de carreira",
        "Prevenção de burnout"
      ],
      color: "peach"
    },
    {
      id: 4,
      name: "Atendimento Online",
      icon: "Video",
      duration: "50 minutos",
      description: "Terapia por videochamada com a mesma qualidade do atendimento presencial.",
      details: [
        "Plataforma segura e privada",
        "Horários flexíveis",
        "Conforto da sua casa",
        "Mesma eficácia terapêutica"
      ],
      color: "lavender"
    }
  ],

  specialties: [
    {
      name: "Ansiedade",
      description: "Tratamento de transtornos de ansiedade generalizada, pânico e fobias",
      icon: "Brain"
    },
    {
      name: "Depressão",
      description: "Apoio no tratamento de sintomas depressivos e recuperação emocional",
      icon: "Heart"
    },
    {
      name: "Autoestima",
      description: "Desenvolvimento de autoconfiança e aceitação pessoal",
      icon: "Sparkles"
    },
    {
      name: "Relacionamentos",
      description: "Orientação para melhorar vínculos afetivos e sociais",
      icon: "Users"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Ana Paula",
      age: "32 anos",
      comment: "A Dra. Sofia me ajudou a superar minha ansiedade de forma acolhedora e profissional. Sinto que finalmente tenho ferramentas para lidar com meus desafios.",
      rating: 5,
      service: "Terapia para Ansiedade"
    },
    {
      id: 2,
      name: "Ricardo M.",
      age: "28 anos",
      comment: "Comecei a terapia em um momento difícil e a Dra. Sofia foi essencial na minha recuperação. Ambiente acolhedor e tratamento eficaz.",
      rating: 5,
      service: "Terapia Individual"
    },
    {
      id: 3,
      name: "Juliana Santos",
      age: "35 anos",
      comment: "Profissional excepcional! Me ajudou a entender melhor minhas emoções e a desenvolver autoestima. Recomendo muito!",
      rating: 5,
      service: "Autoestima"
    }
  ],

  faqs: [
    {
      question: "Como funciona a primeira sessão?",
      answer: "Na primeira sessão, vamos conversar sobre o que te trouxe até aqui, seus objetivos para a terapia e como posso ajudar. É um momento de conhecer meu trabalho e tirar suas dúvidas."
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "A duração varia de acordo com cada pessoa e seus objetivos. Alguns casos podem ter melhora significativa em 3-6 meses, enquanto outros podem se beneficiar de acompanhamento mais longo. Avaliaremos juntos o progresso regularmente."
    },
    {
      question: "Você atende por convênio?",
      answer: "Atualmente trabalho apenas com atendimento particular. Forneço recibos que podem ser utilizados para reembolso em alguns planos de saúde."
    },
    {
      question: "Como funciona o atendimento online?",
      answer: "O atendimento online acontece por videochamada em plataforma segura e privada. Tem a mesma duração e eficácia do presencial, com a comodidade de você estar onde preferir."
    },
    {
      question: "Posso cancelar ou remarcar sessões?",
      answer: "Sim! Peço apenas que avise com pelo menos 24 horas de antecedência para que possamos remarcar sem custos adicionais."
    }
  ],

  cta: {
    title: "Pronta para dar o primeiro passo?",
    subtitle: "Agende sua primeira sessão e comece sua jornada de autoconhecimento e bem-estar",
    button: "Agendar Consulta"
  },

  socialMedia: {
    instagram: "@dra.sofiaalmeida.psi",
    linkedin: "sofia-almeida-psicologa",
    facebook: "drasofiaalmeida"
  }
};

// Blog posts mock data
export const blogPosts = [
  {
    id: 1,
    title: "5 Sinais de que Você Pode se Beneficiar da Terapia",
    slug: "5-sinais-terapia",
    excerpt: "Descubra como identificar quando é hora de buscar apoio psicológico profissional para cuidar da sua saúde mental.",
    content: "Muitas pessoas se perguntam quando é o momento certo para buscar terapia...",
    category: "Saúde Mental",
    date: "2024-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800",
    author: "Dra. Sofia Almeida"
  },
  {
    id: 2,
    title: "Ansiedade: Como Reconhecer e Lidar com os Sintomas",
    slug: "ansiedade-sintomas",
    excerpt: "Entenda melhor a ansiedade e aprenda técnicas práticas para gerenciar seus sintomas no dia a dia.",
    content: "A ansiedade é uma das queixas mais comuns nos consultórios de psicologia...",
    category: "Ansiedade",
    date: "2024-01-10",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800",
    author: "Dra. Sofia Almeida"
  },
  {
    id: 3,
    title: "A Importância do Autocuidado para a Saúde Mental",
    slug: "autocuidado-saude-mental",
    excerpt: "Descubra práticas simples de autocuidado que podem fazer grande diferença no seu bem-estar emocional.",
    content: "O autocuidado vai muito além de cuidados físicos...",
    category: "Bem-estar",
    date: "2024-01-05",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    author: "Dra. Sofia Almeida"
  }
];

export const legalTemplates = {
  privacy: {
    title: "Política de Privacidade",
    lastUpdated: "Janeiro de 2024",
    sections: [
      {
        title: "1. Informações que Coletamos",
        content: "Coletamos apenas informações necessárias para o agendamento e comunicação: nome, email, telefone e informações fornecidas voluntariamente durante o processo de terapia."
      },
      {
        title: "2. Como Usamos suas Informações",
        content: "Suas informações são utilizadas exclusivamente para: comunicação relacionada aos atendimentos, agendamento de sessões, e manutenção do histórico terapêutico conforme exigido pelo Conselho Federal de Psicologia."
      },
      {
        title: "3. Proteção de Dados",
        content: "Todos os dados são armazenados de forma segura e confidencial, seguindo as diretrizes da LGPD (Lei Geral de Proteção de Dados) e do Código de Ética do Psicólogo. Nunca compartilhamos suas informações com terceiros sem seu consentimento explícito."
      },
      {
        title: "4. Seus Direitos",
        content: "Você tem direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Entre em contato conosco para exercer esses direitos."
      }
    ]
  },
  terms: {
    title: "Termos de Serviço",
    lastUpdated: "Janeiro de 2024",
    sections: [
      {
        title: "1. Sobre o Serviço",
        content: "Este site oferece informações sobre serviços de psicologia clínica e permite o agendamento de consultas. O atendimento psicológico segue as normas do Conselho Federal de Psicologia."
      },
      {
        title: "2. Agendamento e Cancelamento",
        content: "Sessões devem ser agendadas com antecedência. Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência. Faltas sem aviso prévio serão cobradas."
      },
      {
        title: "3. Confidencialidade",
        content: "Todas as sessões são confidenciais conforme o Código de Ética do Psicólogo. Informações só serão compartilhadas mediante autorização expressa ou em casos previstos em lei."
      },
      {
        title: "4. Pagamento",
        content: "O pagamento das sessões deve ser realizado no momento do atendimento ou conforme acordado previamente. Aceitamos diversas formas de pagamento."
      }
    ]
  },
  disclaimer: {
    title: "Aviso Legal",
    lastUpdated: "Janeiro de 2024",
    sections: [
      {
        title: "Natureza do Serviço",
        content: "Os serviços oferecidos são de psicologia clínica e não substituem tratamento médico psiquiátrico quando necessário. Em casos de emergência, procure atendimento médico imediato."
      },
      {
        title: "Resultados",
        content: "Os resultados da terapia variam de pessoa para pessoa e dependem de diversos fatores, incluindo comprometimento com o processo terapêutico. Não há garantia de resultados específicos."
      },
      {
        title: "Conteúdo do Site",
        content: "As informações neste site são apenas para fins educacionais e não substituem consulta profissional individualizada."
      },
      {
        title: "Links Externos",
        content: "Este site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade de sites de terceiros."
      }
    ]
  }
};
