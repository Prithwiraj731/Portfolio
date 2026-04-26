export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  label: 'Hi, I am Prithwiraj',
  title: ['FULL-STACK', 'DEVELOPER'],
  subtitle: 'I craft premium digital experiences through cutting-edge technology, intelligent design, and relentless innovation. Building the web of tomorrow, today.',
  stats: [
    { number: '47+', label: 'Projects Shipped' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
  ],
};

export const ABOUT = {
  label: 'About Me',
  title: 'PASSIONATE ABOUT PIXELS & CODE',
  desc: 'I specialize in building modern, performant web applications and AI-powered solutions. With a passion for clean code and pixel-perfect design, I transform complex ideas into elegant digital products that users love.',
  features: [
    {
      icon: 'Code2',
      title: 'Full-Stack Engineering',
      desc: 'Building robust architectures from database to frontend',
    },
    {
      icon: 'Brain',
      title: 'Creative Problem Solving',
      desc: 'Finding elegant solutions to complex technical challenges',
    },
    {
      icon: 'Palette',
      title: 'Design-Driven Approach',
      desc: 'Ensuring every interface is intuitive, accessible, and beautiful',
    },
  ],
  badge: '3+ YRS',
};

export const SERVICES = [
  {
    icon: 'Monitor',
    title: 'Frontend Development',
    desc: 'Crafting high-performance, responsive web applications using React, Next.js, and modern CSS frameworks. I focus on smooth animations and perfect layouts.',
  },
  {
    icon: 'Cpu',
    title: 'Backend Engineering',
    desc: 'Designing scalable APIs, robust databases, and secure server architectures using Node.js, Express, and PostgreSQL/Supabase.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Applications',
    desc: 'Building cross-platform mobile experiences that feel native, fast, and intuitive across both iOS and Android devices.',
  },
];

export const SKILLS_DATA = [
  {
    id: 'core',
    title: 'Core Expertise',
    icon: 'Terminal',
    skills: [
      'Full-Stack Web Development (MERN Stack)',
      'AI / LLM Application Development',
      'Cybersecurity & Bug Bounty Hunting',
      'Linux Systems Programming & Automation',
      'Advanced UI/UX Design & Interactive Interfaces',
      'Scalable System Architecture & Performance Optimization'
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Development',
    icon: 'Code2',
    skills: [
      'JavaScript (ES6+), Python, C, Bash / Shell',
      'React.js, HTML5, CSS3, JavaScript',
      'Node.js, Express.js, REST API Design',
      'MongoDB, Supabase, Cloudinary',
      'Animation Libraries (GSAP, CSS)',
      'Authentication & Authorization (JWT, OAuth)'
    ]
  },
  {
    id: 'ai',
    title: 'AI / LLM Engineering',
    icon: 'BrainCircuit',
    skills: [
      'Building AI-powered applications',
      'Prompt Engineering & LLM Integration',
      'Conversational Interfaces',
      'AI-driven UX systems',
      'Context-aware & privacy-focused AI design'
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity & Bug Hunting',
    icon: 'ShieldAlert',
    skills: [
      'Web Application Security Testing',
      'Vulnerability Assessment & Bug Bounty',
      'OWASP Top 10 Understanding',
      'Exploitation Techniques (XSS, SQLi, etc.)',
      'Secure Coding Practices'
    ]
  },
  {
    id: 'systems',
    title: 'Linux & Systems Programming',
    icon: 'Server',
    skills: [
      'Linux Environment Mastery',
      'Shell scripting & automation',
      'Process & memory-level understanding',
      'CLI tool development',
      'System optimization & debugging'
    ]
  },
  {
    id: 'design',
    title: 'UI/UX & Creative Design',
    icon: 'Palette',
    skills: [
      'Modern, futuristic interface design',
      'Dark theme & aesthetic-driven UI systems',
      'Micro-interactions & animations',
      'UX optimization & usability',
      'Design systems & wireframing'
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: 'Wrench',
    skills: [
      'Git & GitHub (Version Control)',
      'VS Code / Antigravity IDE',
      'Postman / API testing tools',
      'Chrome DevTools',
      'Figma (UI/UX design)'
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture & Engineering',
    icon: 'Workflow',
    skills: [
      'Scalable application design',
      'Modular code architecture',
      'Performance optimization',
      'Clean code & maintainability',
      'Security-first & API-first development'
    ]
  },
  {
    id: 'product',
    title: 'Project & Product Dev',
    icon: 'Rocket',
    skills: [
      'End-to-end product building',
      'Portfolio-grade UI systems',
      'Real-world application deployment',
      'Custom feature engineering',
      'Integration of multiple services'
    ]
  },
  {
    id: 'strengths',
    title: 'Additional Strengths',
    icon: 'Lightbulb',
    skills: [
      'Problem-solving mindset',
      'Rapid prototyping',
      'Research-driven development',
      'Attention to detail in UI + logic',
      'Building "futuristic" user experiences'
    ]
  }
];

export const PROJECTS = [
  {
    title: 'Federated_Learning_SupplyChain',
    category: 'AI / Machine Learning',
    desc: 'Federated learning platform for supply chain optimization.',
    tags: ['Python', 'Federated Learning'],
    github: 'https://github.com/Prithwiraj731/Federated_Learning_SupplyChain',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    title: 'SilentLoaderHunter',
    category: 'Cybersecurity',
    desc: 'A defensive toolkit and guide for identifying hidden PowerShell loaders, malicious scheduled tasks, and persistence-based attacks in Windows.',
    tags: ['PowerShell', 'Security'],
    github: 'https://github.com/Prithwiraj731/SilentLoaderHunter',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Money-Miners',
    category: 'Web Application',
    desc: 'A modern Trading Website where you will get many ideas and popular worthy courses.',
    tags: ['JavaScript', 'Trading'],
    github: 'https://github.com/Prithwiraj731/Money-Miners',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Lunaria--E-Commerce',
    category: 'Web Application',
    desc: 'A modern E-Commerce Clothing website with AI Integration - VTON.',
    tags: ['JavaScript', 'E-Commerce', 'AI'],
    github: 'https://github.com/Prithwiraj731/Lunaria--E-Commerce',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'NotesVilla',
    category: 'Web Application',
    desc: 'Your friendly neigbourhood notes databse.',
    tags: ['JavaScript', 'Database'],
    github: 'https://github.com/Prithwiraj731/NotesVilla',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Academywale-LMS',
    category: 'Web Application',
    desc: 'MERN stack based Learning Management System.',
    tags: ['JavaScript', 'MERN', 'LMS'],
    github: 'https://github.com/Prithwiraj731/Academywale-LMS',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Alex Morgan',
    role: 'CEO, TechVentures',
    text: 'Prithwiraj is an exceptional developer. His attention to detail and ability to deliver complex features on time was instrumental to our success.',
    rating: 5,
    avatar: null,
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager, InnovateCo',
    text: 'Working with Prithwiraj was a breeze. He brought our vision to life with a beautiful, high-performing application that users absolutely love.',
    rating: 5,
    avatar: null,
  },
];

export const FOOTER = {
  brand: 'Building the future, one pixel and one algorithm at a time.',
  columns: [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Expertise', href: '#services' },
        { label: 'Work', href: '#projects' },
      ],
    },
    {
      title: 'My Expertise',
      links: [
        { label: 'Frontend Dev', href: '#services' },
        { label: 'Backend Dev', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com/Prithwiraj731' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prithwiraj-mazumdar-963086291/' },
        { label: 'X', href: 'https://x.com/prithwi731' },
        { label: 'Email', href: 'mailto:[prithwi1016@gmail.com]' },
      ],
    },
  ],
};
