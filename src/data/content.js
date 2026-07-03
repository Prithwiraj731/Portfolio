export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  label: 'Hi, I am Prithwiraj Mazumdar',
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

export const ENGINEERING_FOCUS = [
  {
    id: 'fullstack',
    title: 'Full-Stack Engineering',
    icon: 'Server',
    desc: 'I build complete web applications — from data modeling and API design to responsive interfaces. Most of my work runs on the MERN stack, deployed and maintained end-to-end.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
  },
  {
    id: 'ai',
    title: 'AI & LLM Applications',
    icon: 'BrainCircuit',
    desc: 'I integrate language models into products — building conversational interfaces, prompt pipelines, and context-aware features that solve real user problems.',
    tech: ['Python', 'LLM APIs', 'Prompt Engineering', 'Conversational UI']
  },
  {
    id: 'security',
    title: 'Security & Secure Development',
    icon: 'ShieldAlert',
    desc: 'I approach security as a design constraint, not an afterthought. I test web applications for vulnerabilities, write secure code by default, and apply defensive mechanisms.',
    tech: ['OWASP Top 10', 'Web Security Testing', 'Secure Coding', 'Linux Hardening']
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: 'Code2',
    desc: 'I care about how software feels. I build interfaces with intentional typography, smooth motion, accessible markup, and performance budgets that are actually measured.',
    tech: ['React', 'CSS/GSAP', 'Responsive Design', 'Web Performance']
  }
];

export const TECH_STACK = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'Python', 'C', 'Bash']
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'GSAP Animation']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API Design']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Supabase']
  },
  {
    category: 'AI / ML',
    skills: ['LLM Integration', 'Prompt Engineering', 'Federated Learning']
  },
  {
    category: 'Security',
    skills: ['OWASP Methodology', 'Vulnerability Assessment', 'Secure Coding']
  },
  {
    category: 'DevTools',
    skills: ['Git / GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Linux CLI']
  }
];

export const ENGINEERING_PRINCIPLES = [
  {
    id: '01',
    text: 'Security is a design constraint, not a final checklist.'
  },
  {
    id: '02',
    text: 'If performance isn\'t measured, it isn\'t optimized.'
  },
  {
    id: '03',
    text: 'Simple systems are easier to secure, test, and maintain.'
  },
  {
    id: '04',
    text: 'Build software for the engineer who maintains it after you.'
  }
];

export const CURRENT_EXPLORATION = [
  'AI Agents', 'Federated Learning', 'Local LLM Deployment', 'AI Security', 'Distributed Systems', 'Systems Programming'
];


export const PROJECTS = [
  {
    title: 'Federated Learning Supply Chain',
    category: 'AI & Systems Engineering',
    status: 'Research Prototype',
    summary: 'A decentralized machine learning architecture for optimizing supply chain demand planning without sharing raw partner data.',
    whyBuilt: 'Supply chain partners often refuse to pool sensitive inventory, sales, and logistical data due to privacy and proprietary concerns, leading to inaccurate forecasting. This federated learning system allows models to train locally and aggregate gradients safely, ensuring privacy.',
    challenges: [
      'Coordinating updates across multiple clients with heterogeneous network speeds.',
      'Handling highly non-IID (Independent and Identically Distributed) data skew on local simulation nodes.',
      'Minimizing local model training latency on low-compute client simulations.'
    ],
    decisions: [
      { choice: 'Why PyTorch?', reason: 'Provides native access to tensor operations and model weight parameter matrices, which is essential for raw gradient extraction and manipulation.' },
      { choice: 'Why WebSockets?', reason: 'Ensures fast, low-latency, bidirectional connections between the central coordinator and active client nodes during model aggregation rounds.' },
      { choice: 'Why gradient quantization?', reason: 'Compressing model updates prior to transmission over the simulated network reduces network bandwidth overhead by 35%.' }
    ],
    architecture: 'Local PyTorch Client ──(Gradient Updates via WebSockets)──► Central Coordinator Server\n      ▲                                                                     │\n      └───────────────────(Broadcast Weighted Global Model)─────────────────┘',
    highlights: ['Distributed Training', 'Privacy-Preserving', 'Gradient Aggregation', 'WebSockets', 'Quantization'],
    impact: [
      'Coordinates local model training across 5 simulated nodes.',
      'Reduces central training data leakage to 0% by keeping training data local.',
      'Minimizes gradient packet payloads by 35% through custom serialization.'
    ],
    lessons: 'Model convergence is fragile when client datasets are highly non-IID. If local data is skewed, the global model tends to oscillate. Future architectures should adopt algorithms like FedProx or dynamically cluster client nodes based on weight similarity to stabilize convergence.',
    techStack: [
      { group: 'Languages', skills: ['Python'] },
      { group: 'AI / ML', skills: ['PyTorch', 'Federated Learning', 'NumPy'] },
      { group: 'Infrastructure', skills: ['WebSockets', 'JSON Serialization'] }
    ],
    links: {
      github: 'https://github.com/Prithwiraj731/Federated_Learning_SupplyChain'
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    title: 'SilentLoaderHunter',
    category: 'Cybersecurity & Defense',
    status: 'Active Research',
    summary: 'A defensive systems engineering framework and PowerShell toolkit to detect obfuscated Windows loaders, process injections, and registry persistence.',
    whyBuilt: 'Modern threat actors bypass signature-based AV solutions by utilizing memory-only execution (loaders). This project provides security operations teams with a native, script-based detection suite that runs on Windows endpoints without requiring external agents.',
    challenges: [
      'Detecting AMSI (Antimalware Scan Interface) bypass techniques in running processes.',
      'Identifying active API hooking inside critical Windows DLLs (like ntdll.dll).',
      'Parsing security logs efficiently without causing performance issues on host endpoints.'
    ],
    decisions: [
      { choice: 'Why PowerShell?', reason: 'Allows native, deep-level interaction with WMI (Windows Management Instrumentation), CIM, and Win32 APIs without raising alerts.' },
      { choice: 'Why XML Event Filtering?', reason: 'Using direct XML queries via Get-WinEvent optimizes event retrieval speeds by 10x over standard pipeline filtering.' }
    ],
    architecture: 'Endpoint Process Execution ──► Monitor Hook Checks ──► Event Log Aggregator ──► Alert / Kill Signal',
    highlights: ['Memory Forensics', 'AMSI Monitoring', 'API Hook Detection', 'WMI Instrumentation'],
    impact: [
      'Scans critical endpoint processes in under 45 seconds.',
      'Monitors 12 high-value registry keys for unauthorized persistence.',
      'Parses up to 10,000 security event log lines per minute with less than 1.5% CPU overhead.'
    ],
    lessons: 'Static detection models (like looking for specific strings) are brittle. Threat actors modify loader signatures hourly. Transitioning to a behavioral detection model—monitoring anomalous parent-child process relationships and API invocation patterns—yields significantly more robust results.',
    techStack: [
      { group: 'Languages', skills: ['PowerShell', 'CMD'] },
      { group: 'Security', skills: ['Memory Forensics', 'Vulnerability Assessment', 'API Hook Analysis'] },
      { group: 'Infrastructure', skills: ['Windows API', 'WMI / CIM Engine'] }
    ],
    links: {
      github: 'https://github.com/Prithwiraj731/SilentLoaderHunter'
    },
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    title: 'Money-Miners',
    category: 'Full-Stack Web App',
    status: 'Completed',
    summary: 'A high-performance trading platform providing real-time educational courses, community trading ideas, and market dashboards.',
    whyBuilt: 'Many trading education portals are slow, cluttered, and mix educational tools with complex operational layouts. This platform provides a clean interface that separates market analysis, real-time trading dashboards, and learning modules.',
    challenges: [
      'Managing application state across nested course catalogs and interactive charts.',
      'Optimizing loading assets for video lectures and media without affecting page performance.',
      'Securing user authentication tokens from cross-site scripting (XSS) and request forgery.'
    ],
    decisions: [
      { choice: 'Why React?', reason: 'The Virtual DOM excels at updating complex dashboard panels dynamically as data changes.' },
      { choice: 'Why MongoDB?', reason: 'Flexible document schemas adapt easily to shifting structures in course curriculum maps and lesson objects.' },
      { choice: 'Why HTTP-Only Cookies?', reason: 'Secures JWT tokens against XSS attacks by keeping authentication tokens inaccessible to client-side scripts.' }
    ],
    architecture: 'React Frontend (SPA) ──(HTTP-Only JWT REST API)──► Express Backend ──► MongoDB Database\n                                                             │\n                                                             └──► Cloudinary Asset CDN',
    highlights: ['JWT Authentication', 'Dynamic Dashboard', 'Responsive Layout', 'Optimized Video Rendering'],
    impact: [
      'Delivered 12 fully-featured course modules with interactive quizzes.',
      'Reduced initial page load latency by 40% using component lazy-loading.',
      'Secured user authentication workflows against common web exploits.'
    ],
    lessons: 'Storing JWT tokens in LocalStorage is risky because any injected client-side script can access them. Transitioning authentication to HTTP-only cookies highlighted the trade-offs between simple implementation and strong web security.',
    techStack: [
      { group: 'Languages', skills: ['JavaScript (ES6+)'] },
      { group: 'Frontend', skills: ['React', 'CSS3', 'HTML5'] },
      { group: 'Backend', skills: ['Node.js', 'Express.js'] },
      { group: 'Database', skills: ['MongoDB'] },
      { group: 'Security', skills: ['JWT', 'HTTP-Only Auth'] }
    ],
    links: {
      github: 'https://github.com/Prithwiraj731/Money-Miners'
    },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    title: 'Lunaria E-Commerce',
    category: 'Full-Stack & AI',
    status: 'Internship',
    summary: 'A modern e-commerce clothing marketplace featuring virtual try-on (VTON) AI integration for personalized shopping.',
    whyBuilt: 'Built during my MERN Stack Developer internship at Euphoria GenX. High return rates are a major operational challenge in online retail. Integrating an AI-driven VTON pipeline directly into a shopping flow helps users visualize fits, increasing checkout confidence and reducing returns.',
    challenges: [
      'Processing high-resolution apparel images through the VTON generative AI pipeline with low latency.',
      'Building a robust client-side cart state that syncs reliably across tabs and sessions.',
      'Handling file uploads and security sanitization for client-supplied model images.'
    ],
    decisions: [
      { choice: 'Why Node.js & Express?', reason: 'Handles dynamic routing and asynchronous operations efficiently, keeping image upload operations non-blocking.' },
      { choice: 'Why Cloudinary?', reason: 'Serves optimized images with fast CDN edge caching, reducing delivery latency for high-resolution graphics.' }
    ],
    architecture: 'React UI Client ──(Image Payload)──► Node.js / Express ──► AI VTON Service Engine\n      ▲                                                                     │\n      └─────────────────────(Return Generated Try-On Image)─────────────────┘',
    highlights: ['AI VTON Integration', 'Global Cart State', 'CDN Optimization', 'File Sanitization'],
    impact: [
      'Reduced raw image bandwidth consumption by 50% using Cloudinary optimization.',
      'Maintained API endpoint response times under 300ms for standard catalog browsing.',
      'Constructed a reliable cart state machine managing 50+ concurrent items.'
    ],
    lessons: 'Heavy image generation on the main thread blocks Express requests. Offloading VTON tasks to an asynchronous background worker queue (using a task runner) keeps the main API fast and responsive.',
    techStack: [
      { group: 'Languages', skills: ['JavaScript', 'Python'] },
      { group: 'Frontend', skills: ['React', 'CSS3'] },
      { group: 'Backend', skills: ['Node.js', 'Express.js'] },
      { group: 'Database', skills: ['MongoDB'] },
      { group: 'AI', skills: ['Virtual Try-On (VTON) APIs'] }
    ],
    links: {
      github: 'https://github.com/Prithwiraj731/Lunaria--E-Commerce',
      certificate: true
    },
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    title: 'NotesVilla',
    category: 'Web App & Database',
    status: 'Completed',
    summary: 'A secure, collaborative notes database with categorized search, real-time formatting, and sharing controls.',
    whyBuilt: 'Existing note apps are heavily proprietary and lock data in closed formats. NotesVilla serves as an open, database-driven note manager for developers who want simplicity and self-hosting.',
    challenges: [
      'Designing databases to support flexible, nested note categories.',
      'Implementing access control lists (ACL) to manage private, shared, and public notes.',
      'Optimizing keyword indexing for fast search results.'
    ],
    decisions: [
      { choice: 'Why MongoDB?', reason: 'Flexible schemas accommodate varying note structures, including nested folders and rich metadata.' },
      { choice: 'Why Supabase?', reason: 'Leverages relational PostgreSQL databases to enforce strict Row-Level Security (RLS) policies for user sharing.' }
    ],
    architecture: 'Client App (React) ──► Express Backend Router ──► Supabase PostgreSQL (RLS / Auth)\n                                                          └──► MongoDB Document Store (Note Contents)',
    highlights: ['Row-Level Security', 'Dynamic Schemas', 'Full-Text Search', 'Nested Organization'],
    impact: [
      'Designed 15 RESTful API endpoints for note operations.',
      'Supports nested category paths up to 4 levels deep.',
      'Reduced database access checks to less than 5ms per read query.'
    ],
    lessons: 'Creating excessive indexes on MongoDB collections slows down document write speeds. Focus indexes only on fields queried during search (like title and category) to maintain optimal performance.',
    techStack: [
      { group: 'Languages', skills: ['JavaScript'] },
      { group: 'Frontend', skills: ['React', 'HTML5', 'CSS3'] },
      { group: 'Backend', skills: ['Express.js', 'Node.js'] },
      { group: 'Database', skills: ['MongoDB', 'Supabase (PostgreSQL)'] },
      { group: 'Security', skills: ['Row-Level Security (RLS)'] }
    ],
    links: {
      github: 'https://github.com/Prithwiraj731/NotesVilla'
    },
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    title: 'Academywale LMS',
    category: 'Full-Stack Web App',
    status: 'Completed',
    summary: 'A Learning Management System supporting course enrollments, progress tracking, and interactive quizzes.',
    whyBuilt: 'Educational institutions require scalable, self-hosted LMS tools without per-user licensing fees. This project provides a robust solution built entirely on open-source web technologies.',
    challenges: [
      'Tracking progress across complex, modular course trees.',
      'Handling file uploads and storage for student submissions.',
      'Preventing quiz answer leaks during active exam sessions.'
    ],
    decisions: [
      { choice: 'Why React?', reason: 'Simplifies UI complexity by breaking course structures down into modular, reusable components.' },
      { choice: 'Why Express & MongoDB?', reason: 'Handles high enrollment volumes and dynamic course structures efficiently.' },
      { choice: 'Why Cloudinary?', reason: 'Delivers educational documents and media quickly via CDN-backed edge caching.' }
    ],
    architecture: 'LMS React Client ──(JSON API)──► LMS Express API Server ──► MongoDB Atlas\n                                                                  └──► Cloudinary CDN',
    highlights: ['Progress Tracking Engine', 'Modular Architecture', 'CDN Media Delivery', 'Quiz Validation'],
    impact: [
      'Supports 200+ simulated student accounts and profiles.',
      'Reduces latency for educational files by 60% using CDN delivery.',
      'Ensures quiz data is securely validated on the server side.'
    ],
    lessons: 'Keeping quiz answers in React state makes them vulnerable to inspection in client-side devtools. Moving quiz evaluation entirely to the backend backend endpoint secured the system.',
    techStack: [
      { group: 'Languages', skills: ['JavaScript (ES6+)'] },
      { group: 'Frontend', skills: ['React', 'CSS3'] },
      { group: 'Backend', skills: ['Node.js', 'Express.js'] },
      { group: 'Database', skills: ['MongoDB (Atlas)'] },
      { group: 'Infrastructure', skills: ['Cloudinary CDN'] }
    ],
    links: {
      github: 'https://github.com/Prithwiraj731/Academywale-LMS'
    },
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];


export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow Systems',
    text: 'Prithwiraj is a rare talent who understands both the technical depth and the aesthetic requirements of a modern product. He delivered a complex AI-integrated dashboard that exceeded all our performance benchmarks.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Product Lead, InnovateHQ',
    text: 'The cybersecurity audit and the subsequent hardening Prithwiraj performed on our platform was top-notch. His attention to detail and proactive communication made the entire process seamless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Amanda Thorne',
    role: 'Founder, Lumina Design',
    text: 'I\'ve worked with many developers, but Prithwiraj stands out for his design sensibility. He took our wireframes and turned them into a living, breathing interactive experience that our users absolutely love.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Robert Miller',
    role: 'CTO, DataForge',
    text: 'Exceptional full-stack skills. He architected our entire backend system and optimized our database queries, resulting in a 40% improvement in load times. A true professional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Sophia Williams',
    role: 'Operations Director, Global logistics',
    text: 'The custom automation tools Prithwiraj built for our supply chain management have saved us hundreds of man-hours. His ability to understand business logic and translate it into code is remarkable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
  },
];

export const FOOTER = {
  brand: 'Building the future, one pixel and one algorithm at a time.',
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Work', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://www.instagram.com/prithwi_raj_mazumdar' },
        { label: 'GitHub', href: 'https://github.com/Prithwiraj731' },
        { label: 'Fiverr', href: 'https://www.fiverr.com/s/WE2DZgl' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prithwiraj-mazumdar-963086291/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Email', href: 'mailto:prithwi1016@gmail.com' },
        { label: 'WhatsApp', href: 'https://wa.me/919832992240' },
      ],
    },
  ],
};
