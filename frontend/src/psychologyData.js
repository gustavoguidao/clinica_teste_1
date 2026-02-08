// English version - Dr. Sofia Almeida - Clinical Psychology Practice

export const psychologistData = {
  name: "Dr. Sofia Almeida",
  title: "Clinical Psychologist",
  crp: "License #06/123456",
  tagline: "A welcoming space to care for your mental health",
  phone: "+1 (555) 123-4567",
  email: "contact@sofiaalmeida.com",
  whatsapp: "15551234567",
  location: "San Francisco, CA",
  address: "Office located in Downtown - in-person and online sessions available",
  
  about: {
    intro: "Hello, I'm Dr. Sofia Almeida, a clinical psychologist with over 10 years of experience in mental health care. My goal is to create a safe and welcoming space where you can feel comfortable discussing your challenges and discovering new ways to cope with them.",
    approach: "I use Cognitive Behavioral Therapy (CBT), which is scientifically proven and focused on practical solutions for everyday challenges. I believe each person is unique, so I adapt the treatment to your specific needs.",
    quote: "Therapy is a journey of self-discovery and growth. I'm here to walk alongside you.",
    education: [
      "Bachelor's Degree in Psychology - Stanford University",
      "Specialization in CBT - Beck Institute",
      "Master's in Clinical Psychology - UCLA",
      "Schema Therapy Training"
    ],
    experience: [
      "10+ years of clinical experience",
      "Adult and adolescent therapy",
      "Clinical supervisor for psychologists",
      "Speaker at mental health events"
    ]
  },

  services: [
    {
      id: 1,
      name: "Individual Therapy",
      icon: "User",
      duration: "50 minutes",
      description: "Personalized sessions to work through anxiety, depression, self-esteem, and other emotional challenges.",
      details: [
        "Adult and adolescent care",
        "CBT approach",
        "Weekly or biweekly sessions",
        "In-person or online"
      ],
      color: "rose"
    },
    {
      id: 2,
      name: "Anxiety Therapy",
      icon: "Heart",
      duration: "50 minutes",
      description: "Specialized treatment for anxiety disorders, panic attacks, and phobias.",
      details: [
        "Relaxation techniques",
        "Cognitive restructuring",
        "Gradual exposure",
        "Coping strategies"
      ],
      color: "purple"
    },
    {
      id: 3,
      name: "Career Counseling",
      icon: "Briefcase",
      duration: "50 minutes",
      description: "Psychological support for career issues, burnout, and professional transitions.",
      details: [
        "Professional profile analysis",
        "Workplace stress management",
        "Career decision-making",
        "Burnout prevention"
      ],
      color: "peach"
    },
    {
      id: 4,
      name: "Online Sessions",
      icon: "Video",
      duration: "50 minutes",
      description: "Therapy via video call with the same quality as in-person sessions.",
      details: [
        "Secure and private platform",
        "Flexible scheduling",
        "Comfort of your home",
        "Same therapeutic effectiveness"
      ],
      color: "lavender"
    }
  ],

  specialties: [
    {
      name: "Anxiety",
      description: "Treatment for generalized anxiety disorder, panic attacks, and phobias",
      icon: "Brain"
    },
    {
      name: "Depression",
      description: "Support in treating depressive symptoms and emotional recovery",
      icon: "Heart"
    },
    {
      name: "Self-Esteem",
      description: "Development of self-confidence and self-acceptance",
      icon: "Sparkles"
    },
    {
      name: "Relationships",
      description: "Guidance to improve emotional and social bonds",
      icon: "Users"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Anna P.",
      age: "32 years old",
      comment: "Dr. Sofia helped me overcome my anxiety in a welcoming and professional way. I finally have tools to deal with my challenges.",
      rating: 5,
      service: "Anxiety Therapy"
    },
    {
      id: 2,
      name: "Richard M.",
      age: "28 years old",
      comment: "I started therapy at a difficult time and Dr. Sofia was essential in my recovery. Welcoming environment and effective treatment.",
      rating: 5,
      service: "Individual Therapy"
    },
    {
      id: 3,
      name: "Julia Santos",
      age: "35 years old",
      comment: "Exceptional professional! Helped me better understand my emotions and develop self-esteem. Highly recommend!",
      rating: 5,
      service: "Self-Esteem"
    }
  ],

  faqs: [
    {
      question: "How does the first session work?",
      answer: "In the first session, we'll talk about what brought you here, your goals for therapy, and how I can help. It's a time to get to know my work and ask questions."
    },
    {
      question: "How long does treatment last?",
      answer: "Duration varies according to each person and their goals. Some cases may show significant improvement in 3-6 months, while others may benefit from longer-term care. We'll regularly assess progress together."
    },
    {
      question: "Do you accept insurance?",
      answer: "Currently I work on a private pay basis only. I provide receipts that can be used for reimbursement with some insurance plans."
    },
    {
      question: "How do online sessions work?",
      answer: "Online sessions happen via video call on a secure and private platform. They have the same duration and effectiveness as in-person sessions, with the convenience of being wherever you prefer."
    },
    {
      question: "Can I cancel or reschedule sessions?",
      answer: "Yes! I just ask that you notify me at least 24 hours in advance so we can reschedule at no additional cost."
    }
  ],

  cta: {
    title: "Ready to take the first step?",
    subtitle: "Schedule your first session and begin your journey of self-discovery and wellness",
    button: "Book Appointment"
  },

  socialMedia: {
    instagram: "@dr.sofiaalmeida.psy",
    linkedin: "sofia-almeida-psychologist",
    facebook: "drsofiaalmeida"
  }
};

// Blog posts mock data
export const blogPosts = [
  {
    id: 1,
    title: "5 Signs You Could Benefit from Therapy",
    slug: "5-signs-therapy",
    excerpt: "Discover how to identify when it's time to seek professional psychological support for your mental health.",
    content: "Many people wonder when the right time is to seek therapy...",
    category: "Mental Health",
    date: "2024-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800",
    author: "Dr. Sofia Almeida"
  },
  {
    id: 2,
    title: "Anxiety: How to Recognize and Manage Symptoms",
    slug: "anxiety-symptoms",
    excerpt: "Better understand anxiety and learn practical techniques to manage your symptoms daily.",
    content: "Anxiety is one of the most common complaints in psychology offices...",
    category: "Anxiety",
    date: "2024-01-10",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800",
    author: "Dr. Sofia Almeida"
  },
  {
    id: 3,
    title: "The Importance of Self-Care for Mental Health",
    slug: "self-care-mental-health",
    excerpt: "Discover simple self-care practices that can make a big difference in your emotional well-being.",
    content: "Self-care goes far beyond physical care...",
    category: "Wellness",
    date: "2024-01-05",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    author: "Dr. Sofia Almeida"
  }
];

export const legalTemplates = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2024",
    sections: [
      {
        title: "1. Information We Collect",
        content: "We collect only information necessary for scheduling and communication: name, email, phone, and information voluntarily provided during the therapy process."
      },
      {
        title: "2. How We Use Your Information",
        content: "Your information is used exclusively for: communication related to appointments, session scheduling, and maintaining therapeutic history as required by professional psychology standards."
      },
      {
        title: "3. Data Protection",
        content: "All data is stored securely and confidentially, following HIPAA guidelines and the Psychologist's Code of Ethics. We never share your information with third parties without your explicit consent."
      },
      {
        title: "4. Your Rights",
        content: "You have the right to access, correct, or request deletion of your personal data at any time. Contact us to exercise these rights."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "January 2024",
    sections: [
      {
        title: "1. About the Service",
        content: "This website provides information about clinical psychology services and allows for appointment scheduling. Psychological care follows professional psychology standards."
      },
      {
        title: "2. Scheduling and Cancellation",
        content: "Sessions must be scheduled in advance. Cancellations must be communicated at least 24 hours in advance. No-shows without prior notice will be charged."
      },
      {
        title: "3. Confidentiality",
        content: "All sessions are confidential according to the Psychologist's Code of Ethics. Information will only be shared with express authorization or in cases provided by law."
      },
      {
        title: "4. Payment",
        content: "Payment for sessions must be made at the time of service or as previously agreed. We accept various forms of payment."
      }
    ]
  },
  disclaimer: {
    title: "Disclaimer",
    lastUpdated: "January 2024",
    sections: [
      {
        title: "Nature of Service",
        content: "The services offered are clinical psychology services and do not replace psychiatric medical treatment when necessary. In case of emergency, seek immediate medical care."
      },
      {
        title: "Results",
        content: "Therapy results vary from person to person and depend on various factors, including commitment to the therapeutic process. There is no guarantee of specific results."
      },
      {
        title: "Website Content",
        content: "Information on this website is for educational purposes only and does not replace individualized professional consultation."
      },
      {
        title: "External Links",
        content: "This website may contain links to external sites. We are not responsible for the content or privacy practices of third-party sites."
      }
    ]
  }
};
