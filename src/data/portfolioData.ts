import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: 'Nokibul Amin Mezba',
    title: 'Senior Full Stack Software Engineer',
    subtitles: [
      'AI & Web3 Developer',
      'Next.js | NestJS | React | Node.js Specialist',
      'Enterprise SaaS & CRM System Architect',
      'High-Performance Full-Stack Innovator'
    ],
    bio: 'Dedicated and skilled Senior Full Stack Software Engineer with 7+ years of total development & professional experience (5+ years enterprise level) delivering robust, highly scalable digital solutions. Specializing in NestJS, React/Next.js, Node.js, GraphQL/REST APIs, PostgreSQL, MongoDB, Web3.js, dApps, and Gemini/OpenAI integrations with cloud deployments across AWS and GCP.',
    email: 'csmezba@gmail.com',
    phone: '+8801752918411',
    address: 'Boira, Khulna, Bangladesh',
    github: 'https://github.com/csmezba',
    linkedin: 'https://www.linkedin.com/in/mezba132/',
    facebookUrl: 'https://www.facebook.com/people/Mira-Labs-BD/61591933573568/',
    instagramUrl: 'https://www.instagram.com/mira.labs29',
    githubUrl: 'https://github.com/csmezba',
    linkedinUrl: 'https://www.linkedin.com/in/mezba132/',
    yearsExperience: 7,
    websitesBuilt: 50,
    happyClients: 100,
    enterpriseProjects: 20,
    aiIntegrations: 15,
    avatarUrl: '/assets/photo.png',
    resumeUrl: '#resume'
  },

  experiences: [
    {
      id: 'exp-1',
      company: 'Itech Soft Solutions',
      location: 'Khulna, Bangladesh',
      role: 'Senior Software Engineer',
      type: 'Full-time',
      duration: 'Jan 2025 - Present',
      period: 'Jan 2025 - Present',
      current: true,
      responsibilities: [
        'Architecting and implementing decentralized applications (dApps) and smart contract integrations using Web3.js and Ethereum/EVM ecosystems.',
        'Building cutting-edge AI integrations leveraging Gemini AI and OpenAI APIs for automated workflow engines and intelligent user assistants.',
        'Designing scalable full-stack web architectures with NestJS, PostgreSQL, GraphQL/REST APIs, and high-performance Next.js frontends.',
        'Establishing strict automated test suites, debugging complex microservices, and leading peer code reviews to maintain high quality.'
      ],
      achievements: [
        'Reduced backend API latency by 42% through GraphQL query caching and Redis optimization.',
        'Successfully delivered 3 dApp & AI enterprise projects within tight client timelines.'
      ],
      technologies: ['NestJS', 'React', 'Next.js', 'PostgreSQL', 'GraphQL', 'REST API', 'Web3.js', 'OpenAI', 'Gemini AI', 'Docker']
    },
    {
      id: 'exp-2',
      company: 'Fanfare Bangladesh Ltd.',
      location: 'Dhaka, Bangladesh',
      role: 'Executive Software Engineer',
      type: 'Full-time',
      duration: '1 yr 10 mos',
      period: 'Mar 2023 - Dec 2024',
      current: false,
      responsibilities: [
        'Spearheaded full-stack development and security overhaul for enterprise CRM software used by thousand-user business networks.',
        'Built resilient microservices and RESTful API endpoints utilizing NestJS, MongoDB, Express, and React.',
        'Configured cloud deployment pipelines on AWS (EC2, S3, RDS) and Robi Cloud with Docker container orchestration.',
        'Collaborated directly with client product managers and executive cross-functional teams to translate complex business specs into scalable code.'
      ],
      achievements: [
        'Engineered an automated customer feedback & CRM lead pipeline handling over 100,000 monthly active customer interactions.',
        'Enhanced database transaction throughput by 35% with MongoDB indexing and Redis session caching.'
      ],
      technologies: ['NestJS', 'ReactJS', 'MongoDB', 'Express.js', 'Docker', 'AWS EC2', 'AWS S3', 'REST API', 'Robi Cloud']
    },
    {
      id: 'exp-3',
      company: 'Apsis Solution Ltd.',
      location: 'Dhaka, Bangladesh',
      role: 'Software Engineer',
      type: 'Full-time',
      duration: '1 yr 10 mos',
      period: 'May 2021 - Feb 2023',
      current: false,
      responsibilities: [
        'Delivered complete end-to-end full-stack applications including E-Commerce platforms and Employee Management Systems (EMS).',
        'Built modern UI design systems using React.js, Next.js, Redux, and Zustand backed by robust NestJS backend services and PostgreSQL.',
        'Managed AWS S3 asset delivery, EC2 server provisioning, and CI/CD pipelines with Git and Trello agile workflows.',
        'Proactively communicated with international client stakeholders to deliver feature updates on time and within budget.'
      ],
      achievements: [
        'Deployed EMS system serving over 5,000 concurrent corporate staff members.',
        'Optimized frontend asset bundles, cutting initial page load times by 55%.'
      ],
      technologies: ['NestJS', 'React.js', 'Next.js', 'Redux', 'PostgreSQL', 'AWS S3', 'AWS EC2', 'Git', 'Trello']
    },
    {
      id: 'exp-4',
      company: 'Freelance & Agency Contracting',
      location: 'Remote',
      role: 'Full Stack & WordPress Specialist',
      type: 'Freelance',
      duration: '2 yrs 2 mos',
      period: 'Nov 2018 - Dec 2020',
      current: false,
      responsibilities: [
        'Developed custom web applications, bespoke WordPress themes, and tailored plugins from scratch for global business clients.',
        'Executed complete WooCommerce customizations including payment gateways, inventory sync, and multi-currency support.',
        'Delivered responsive UI design, performance optimization, and SEO enhancements for 30+ international client sites.'
      ],
      achievements: [
        'Maintained 100% 5-star positive feedback rating across freelance market platforms.',
        'Built custom plugin suite for e-commerce client generating over $500k annual sales.'
      ],
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'Laravel', 'JavaScript', 'CSS3', 'MySQL', 'REST APIs']
    }
  ],

  education: [
    {
      id: 'edu-1',
      degree: 'B.Sc. in Computer Science & Software Engineering',
      institution: 'American International University – Bangladesh (AIUB)',
      period: '2013 - 2018',
      location: 'Dhaka, Bangladesh',
      highlights: [
        'Major in Software Engineering, Database Management Systems, and Distributed Systems.',
        'Capston project: Intelligent Automated Lead Management and Web Security Framework.',
        'Active member of AIUB Computer Club and Competitive Programming Society.'
      ]
    },
    {
      id: 'edu-2',
      degree: 'Higher Secondary Certificate (H.S.C)',
      institution: 'Dr. Abdur Razzak Municipal College',
      period: '2010 - 2012',
      location: 'Jessore, Bangladesh',
      highlights: ['Science Group - Distinction in Higher Mathematics & Physics.']
    },
    {
      id: 'edu-3',
      degree: 'Secondary School Certificate (S.S.C)',
      institution: 'Kalaroa G.K.M.K Pilot Secondary High School',
      period: '2008 - 2009',
      location: 'Satkhira, Bangladesh',
      highlights: ['Science Group - Top 1% merit list graduate.']
    }
  ],

  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js & Next.js 15', level: 96, experienceYears: '6+ yrs', featured: true, description: 'Server Components, SSR, ISR, App Router, Hooks, Context, Optimization' },
        { name: 'TypeScript', level: 94, experienceYears: '5+ yrs', featured: true, description: 'Strict typing, generics, AST utilities, clean architecture contracts' },
        { name: 'Tailwind CSS & Shadcn UI', level: 95, experienceYears: '5+ yrs', featured: true, description: 'Custom design systems, animations, glassmorphic themes, responsive layout' },
        { name: 'Redux Toolkit / Zustand / TanStack Query', level: 92, experienceYears: '5+ yrs', featured: false, description: 'Global state, async cache management, real-time optimistic updates' },
        { name: 'Framer Motion & GSAP', level: 88, experienceYears: '4+ yrs', featured: false, description: 'Smooth page transitions, layout morphing, parallax, interactive canvases' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js & Express', level: 95, experienceYears: '7+ yrs', featured: true, description: 'Asynchronous event-driven I/O, middleware pipelines, security hardening' },
        { name: 'NestJS', level: 92, experienceYears: '4+ yrs', featured: true, description: 'Enterprise modular architecture, Dependency Injection, Microservices, Guards' },
        { name: 'GraphQL & REST API', level: 90, experienceYears: '5+ yrs', featured: true, description: 'Apollo Server, Schema design, DataLoader batching, OpenAPI/Swagger docs' },
        { name: 'PHP & Laravel / Filament', level: 85, experienceYears: '4+ yrs', featured: false, description: 'MVC web architecture, custom admin portals, artisan scripts, Filament dashboards' },
        { name: 'WebSockets / Socket.io', level: 88, experienceYears: '4+ yrs', featured: false, description: 'Bi-directional live communication, instant notifications, real-time sync' }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'PostgreSQL & Prisma ORM', level: 93, experienceYears: '5+ yrs', featured: true, description: 'Complex relational schemas, migrations, indexing, spatial queries, Prisma client' },
        { name: 'MongoDB & Mongoose', level: 90, experienceYears: '5+ yrs', featured: true, description: 'Document stores, aggregation pipelines, replica sets, time-series indexing' },
        { name: 'Redis', level: 88, experienceYears: '4+ yrs', featured: false, description: 'In-memory key-value caching, pub-sub event distribution, rate limiting' },
        { name: 'MySQL', level: 91, experienceYears: '6+ yrs', featured: false, description: 'Relational database management, transaction safety, backup restoration' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (S3, EC2, RDS, Lambda)', level: 89, experienceYears: '4+ yrs', featured: true, description: 'IAM permissions, S3 asset buckets, EC2 deployment, RDS PostgreSQL setup' },
        { name: 'Docker & Containerization', level: 88, experienceYears: '4+ yrs', featured: true, description: 'Multi-stage Dockerfiles, Docker Compose clusters, lightweight runtime containers' },
        { name: 'Nginx & Reverse Proxies', level: 87, experienceYears: '5+ yrs', featured: false, description: 'SSL termination, load balancing, proxy passing, gzip compression' },
        { name: 'Google Cloud Platform (GCP)', level: 86, experienceYears: '3+ yrs', featured: false, description: 'Cloud Run, Firestore, App Engine, OAuth client integration' }
      ]
    },
    {
      category: 'AI & Web3',
      skills: [
        { name: 'Gemini AI & OpenAI API Integrations', level: 92, experienceYears: '3+ yrs', featured: true, description: 'Prompt engineering, function calling, multimodal inputs, streaming completions' },
        { name: 'Web3.js & dApp Architecture', level: 85, experienceYears: '2+ yrs', featured: true, description: 'EVM smart contract interaction, MetaMask wallet auth, token balance sync' },
        { name: 'LangChain & Vector DBs', level: 82, experienceYears: '2+ yrs', featured: false, description: 'RAG pipelines, semantic search, vector embeddings, pinecone/chroma' }
      ]
    },
    {
      category: 'Tools & Methods',
      skills: [
        { name: 'Git & GitHub Workflows', level: 95, experienceYears: '7+ yrs', featured: true, description: 'Gitflow branching, PR code reviews, GitHub Actions CI/CD automation' },
        { name: 'WordPress & WooCommerce', level: 92, experienceYears: '6+ yrs', featured: false, description: 'Custom theme & plugin development, hook lifecycle, payment gateway setup' },
        { name: 'Swagger / Postman / Insomnia', level: 94, experienceYears: '6+ yrs', featured: false, description: 'API contract testing, environment mocks, automated collection testing' },
        { name: 'Agile & Jira / Trello / Slack', level: 93, experienceYears: '6+ yrs', featured: false, description: 'Sprint planning, ticket tracking, cross-functional engineering leadership' }
      ]
    }
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Enterprise AI CRM & Lead Automation Hub',
      slug: 'enterprise-ai-crm',
      subtitle: 'Multi-tenant business CRM with automated lead scoring and Gemini AI follow-up workflows.',
      category: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80'
      ],
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      techStack: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Redis', 'Gemini AI', 'Tailwind CSS', 'Docker', 'AWS'],
      features: [
        'AI Lead Intent Scoring based on communication touchpoints',
        'Automated AI email sequence generation and multi-channel follow-ups',
        'Real-time kanban pipeline deal tracking with WebSockets',
        'Role-Based Access Control (RBAC) with audit trail logs',
        'Detailed sales performance analytics dashboard'
      ],
      timeline: '4 Months',
      challenges: 'Handling over 100k concurrent webhooks from lead acquisition forms while ensuring zero database write contention.',
      solutions: 'Designed a distributed Redis message queue with NestJS background consumer workers and batch PostgreSQL inserts.',
      results: 'Increased client sales conversion rate by 38% and reduced lead response time from 4 hours to 3 minutes.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://crm-demo.mezba.dev',
      featured: true
    },
    {
      id: 'proj-2',
      title: 'NeuralOps - AI Customer Support Automation Dashboard',
      slug: 'neuralops-ai-support',
      subtitle: 'Self-learning AI agent workspace with automated ticket triage, RAG search, and human handoff.',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['React', 'Node.js', 'Express', 'OpenAI', 'Gemini AI', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: [
        'RAG knowledge base querying across company PDFs, Docs, and FAQs',
        'Real-time streaming agent response view with confidence scores',
        'Seamless live human agent escalation trigger when sentiment drops',
        'Multilingual translation on the fly'
      ],
      timeline: '3 Months',
      challenges: 'Preventing hallucinated support answers for strict technical enterprise products.',
      solutions: 'Configured a strict grounded vector index query schema with fallback confidence thresholds.',
      results: 'Automated 68% of routine support tickets for a SaaS client.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://ai-support.mezba.dev',
      featured: true
    },
    {
      id: 'proj-3',
      title: 'Luxestay - Luxury Hotel & Resort Booking Platform',
      slug: 'grandeur-haven-hotel',
      subtitle: 'High-end hospitality booking engine with interactive 3D room preview and dynamic pricing.',
      category: 'Hotel Booking',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Interactive date availability calendar with instant pricing computation',
        'Room tier filtration, extra services add-ons, and coupon codes',
        'Instant PDF booking confirmation and QR code check-in',
        'Property manager dashboard with occupancy analytics'
      ],
      timeline: '2.5 Months',
      challenges: 'Preventing double-booking on peak seasonal dates across simultaneous online bookings.',
      solutions: 'Implemented database row-locking transactions during checkout checkout window.',
      results: 'Boosted direct resort online bookings by 45% compared to third-party OTA channels.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://grandeur-hotel.mezba.dev',
      featured: true
    },
    {
      id: 'proj-4',
      title: 'Luxe Estates - Luxury Real Estate Portal & Virtual Tours',
      slug: 'aura-estates',
      subtitle: 'Premier property marketplace featuring map search, mortgage calculator, and agent schedules.',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Google Maps API', 'Tailwind CSS'],
      features: [
        'Polygon map search area selector and neighborhood statistics',
        'Virtual 360 degree room tour viewer',
        'Interactive mortgage repayment calculator with dynamic amortization table',
        'Agent appointment booking calendar'
      ],
      timeline: '3 Months',
      challenges: 'Rendering thousands of map property markers smoothly without UI freeze.',
      solutions: 'Implemented geospatial index query clustering on the server and client-side marker bounds virtualization.',
      results: 'Loaded 10,000+ property listings in under 200ms.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://auraestates.mezba.dev',
      featured: true
    },
    {
      id: 'proj-5',
      title: 'Aethelgard Couture - High-Fashion E-Commerce & Inventory Sync',
      slug: 'voguemart-ecommerce',
      subtitle: 'Next-gen online fashion marketplace with multi-currency, cart persistence, and Stripe checkout.',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['Next.js 15', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS', 'Redux Toolkit'],
      features: [
        'Dynamic product size & color variant matrix selector',
        'Wishlist, persistent cart state, and express guest checkout',
        'Real-time warehouse stock sync with low inventory alerts',
        'Automated tax, shipping rate, and discount coupon engine'
      ],
      timeline: '3.5 Months',
      challenges: 'Delivering sub-second initial page load with rich high-resolution fashion gallery assets.',
      solutions: 'Integrated Cloudinary responsive image transformations and Next.js Image optimization.',
      results: 'Achieved 98+ Google Lighthouse Performance Score.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://voguemart.mezba.dev',
      featured: true
    },
    {
      id: 'proj-6',
      title: 'AuraCare - Healthcare & Medical Research Blog Portal',
      slug: 'medipulse-blog',
      subtitle: 'HIPAA-compliant content portal for medical practitioners, peer articles, and patient education.',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS', 'GraphQL', 'AWS S3'],
      features: [
        'Rich markdown medical paper editor with citation support',
        'Verified physician badge authorization system',
        'Category, disease type, and pharmacological search filters',
        'Interactive reader comments and bookmark collections'
      ],
      timeline: '2 Months',
      challenges: 'Ensuring rigorous access controls and verified author publishing credentials.',
      solutions: 'Constructed custom JWT role guards and two-factor admin approval workflows.',
      results: 'Grew active monthly readership to 80,000+ medical professionals.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://medipulse.mezba.dev',
      featured: false
    },
    {
      id: 'proj-7',
      title: 'CryptoLaunch - Web3 ICO Launchpad & Staking dApp',
      slug: 'cryptolaunch-web3-dapp',
      subtitle: 'Decentralized token presale launchpad with tier staking, KYC verification, and token claims.',
      category: 'Crypto / Web3',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['React', 'Web3.js', 'Ethers.js', 'Solidity', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'MetaMask, Coinbase Wallet, and WalletConnect integration',
        'Tier-based presale allocation calculator',
        'Real-time token vesting schedule and claiming portal',
        'On-chain transaction status monitoring modal'
      ],
      timeline: '3 Months',
      challenges: 'Handling wallet network switching and gas price estimation gracefully without failing user transactions.',
      solutions: 'Built custom React hook wrappers with fallback provider switching and pre-flight simulation.',
      results: 'Processed $2.4M in total decentralized presale token volume.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://cryptolaunch.mezba.dev',
      featured: true
    },
    {
      id: 'proj-8',
      title: 'EduTrack - Complete School & Campus Management System',
      slug: 'edutrack-school-management',
      subtitle: 'Unified campus portal for student enrollment, attendance, grades, and fee collection.',
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['NestJS', 'React', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker'],
      features: [
        'Separate portals for Administrators, Teachers, Students, and Parents',
        'Automated attendance tracking with biometric / QR check-in',
        'Exam result compilation and report card PDF generation',
        'Online fee payment gateway integration with SMS receipts'
      ],
      timeline: '4 Months',
      challenges: 'Compiling semester grade report cards for 3,000 students without server timeouts.',
      solutions: 'Designed an asynchronous PDF generation worker queue using Redis and PDFKit.',
      results: 'Adopted by 5 major educational institutions serving 12,000+ students.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://edutrack.mezba.dev',
      featured: false
    },
    {
      id: 'proj-9',
      title: 'Polaris Transport & Logistics - Premium logistics, warehousing, transportation management portal.',
      slug: 'apex-inventory-saas',
      subtitle: 'Real-time stock movement tracker with barcode scanner, reorder automation, and supplier POs.',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'AWS EC2'],
      features: [
        'Multi-warehouse inventory distribution and transfer orders',
        'Camera / Bluetooth barcode scanner interface',
        'Predictive stock runout forecasting based on historical sales speed',
        'Purchase Order generation and supplier workflow tracking'
      ],
      timeline: '3.5 Months',
      challenges: 'Keeping live stock counts accurate across physical retail registers and e-commerce stores.',
      solutions: 'Created distributed transaction locks and optimistic concurrency controls on inventory records.',
      results: 'Prevented stock-out incidents for retail clients by 64%.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://apexinventory.mezba.dev',
      featured: false
    },
    {
      id: 'proj-10',
      title: 'BistroDelight - Restaurant Ordering & Kitchen Display System',
      slug: 'bistrodelight-restaurant',
      subtitle: 'Digital QR table ordering, live kitchen ticket display, and online delivery engine.',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Contactless QR code menu ordering directly from dining tables',
        'Real-time Kitchen Display System (KDS) sound alerts for new orders',
        'Customizable item add-ons and dietary tags',
        'POS receipt printer integration'
      ],
      timeline: '2 Months',
      challenges: 'Ensuring instantaneous sound and visual notification to kitchen staff when an order is placed.',
      solutions: 'Implemented low-latency WebSocket rooms with automatic reconnection state reconciliation.',
      results: 'Reduced average table food preparation waiting time by 18 minutes.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://bistrodelight.mezba.dev',
      featured: false
    },
    {
      id: 'proj-11',
      title: 'Kazi Rahman - Premium Corporate Portfolio',
      slug: 'kazi-rahman-corporate-portfolio',
      subtitle: 'High-impact C-suite executive portfolio featuring board achievements, strategic leadership showcase, and corporate transformations.',
      category: 'Portfolio',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Executive summary & executive board milestone timeline',
        'Interactive case studies of enterprise corporate transformations',
        'Downloadable investor deck and official bio media kit',
        'Direct executive contact inquiry and speaking booking form'
      ],
      timeline: '1.5 Months',
      challenges: 'Designing a sophisticated, ultra-clean layout that communicates executive prestige while maintaining seamless responsiveness.',
      solutions: 'Utilized mathematical typographic hierarchy, refined dark/light themes, and smooth micro-animations.',
      results: 'Elevated executive brand presence and secured multiple strategic board advisory invitations.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://kazirahman.mezba.dev',
      featured: false
    },
    {
      id: 'proj-12',
      title: 'Custom WordPress & WooCommerce Enterprise Portals',
      slug: 'wordpress-woocommerce-portals',
      subtitle: 'Bespoke high-performance WordPress themes, custom plugin suites, and WooCommerce stores.',
      category: 'WordPress / WooCommerce',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      ],
      techStack: ['PHP', 'WordPress', 'WooCommerce', 'MySQL', 'JavaScript', 'Tailwind CSS', 'REST API'],
      features: [
        '100% Custom code themes built without bloated page builders',
        'Bespoke PHP plugins for custom post types and API integrations',
        'Optimized WooCommerce cart & checkout conversion flows',
        'Advanced security hardening and Redis object caching'
      ],
      timeline: 'Ongoing / Freelance Projects',
      challenges: 'Achieving fast page speeds on WordPress sites with heavy e-commerce inventories.',
      solutions: 'Removed unnecessary default scripts, implemented server object caching and image webp conversion.',
      results: 'Delivered 30+ custom sites with 95+ GTmetrix performance grades.',
      githubUrl: 'https://github.com/mezba132',
      liveUrl: 'https://wp-showcase.mezba.dev',
      featured: true
    }
  ],

  caseStudies: [
    {
      id: 'cs-1',
      title: 'Scaling an Enterprise CRM for 100,000+ Active Lead Interactions',
      client: 'Fanfare Bangladesh Ltd.',
      role: 'Lead Architect & Executive Software Engineer',
      period: 'Mar 2023 - Dec 2024',
      overview: 'Transforming a monolithic legacy customer portal into a high-performance, microservice-backed enterprise CRM capable of real-time lead ingestion and secure role-based team management.',
      problem: 'Legacy system suffered from frequent database locks, slow reporting queries (>12s load time), and security vulnerabilities during peak traffic marketing campaigns.',
      research: [
        'Analyzed SQL query execution plans identifying unindexed join bottlenecks.',
        'Audited user permissions revealing coarse access control risks.',
        'Evaluated Node.js framework options and selected NestJS for enterprise module isolation.'
      ],
      architecture: [
        'Decoupled frontend Next.js App Router from NestJS API backend.',
        'Introduced Redis for session cache and queue-based async event distribution.',
        'Configured AWS RDS PostgreSQL replica nodes for read query offloading.'
      ],
      wireframes: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
      developmentHighlights: [
        'Built custom RBAC middleware guards enforcing fine-grained endpoint authorization.',
        'Engineered real-time notification socket gateway broadcasting pipeline status changes.',
        'Automated multi-stage Docker builds deploying to AWS EC2 instances behind Nginx.'
      ],
      testingAndQa: 'Established Jest unit testing for core business logic and Postman automated contract tests.',
      performanceMetrics: [
        { metric: 'API Response Time', value: '110ms', change: '-82%' },
        { metric: 'Report Query Duration', value: '450ms', change: '-96%' },
        { metric: 'System Uptime', value: '99.98%', change: '+4.2%' }
      ],
      results: 'The upgraded platform successfully handled 100k+ monthly lead touchpoints without a single crash, driving client retention to record highs.',
      techStack: ['NestJS', 'React', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
    }
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: '2024',
      credentialId: 'AWS-ASA-894102',
      badgeImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=400&q=80',
      skillsCovered: ['Cloud Architecture', 'S3', 'EC2', 'RDS', 'IAM Security', 'VPC Networking', 'Load Balancing']
    },
    {
      id: 'cert-2',
      title: 'Full Stack Engineering & Microservices Masterclass',
      issuer: 'Udemy / Meta Certified Developer Program',
      issueDate: '2023',
      credentialId: 'UC-98124401-MEZBA',
      badgeImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      skillsCovered: ['NestJS', 'React.js', 'Next.js', 'Design Patterns', 'PostgreSQL', 'Docker Orchestration']
    },
    {
      id: 'cert-3',
      title: 'AI Engineering: Generative AI & LLM Application Development',
      issuer: 'DeepLearning.AI / OpenAI Specialization',
      issueDate: '2024',
      credentialId: 'DLAI-AI-77291',
      badgeImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
      skillsCovered: ['Gemini AI API', 'OpenAI API', 'Prompt Engineering', 'RAG Architecture', 'Vector Search', 'LangChain']
    }
  ],

  services: [
    {
      id: 'srv-1',
      title: 'Custom Full Stack Web Application',
      tagline: 'High-speed, scalable web applications tailored precisely to your business objectives.',
      description: 'End-to-end development of enterprise web applications using Next.js 15, React, NestJS, and PostgreSQL. Crafted with clean architecture, responsive UI, and secure API infrastructure.',
      iconName: 'Code',
      deliverables: [
        'Custom Next.js & NestJS codebase with TypeScript',
        'Database architecture design & Prisma ORM setup',
        'Authentication, authorization (RBAC) & security',
        'Docker containerization & Cloud deployment setup',
        '100% Responsive design & 95+ Lighthouse score'
      ],
      startingPrice: '$1,499',
      estimatedDelivery: '2-4 Weeks',
      techUsed: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Docker']
    },
    {
      id: 'srv-2',
      title: 'AI Feature & LLM Automation Integration',
      tagline: 'Empower your software with Gemini AI, OpenAI, smart assistants, and automated workflows.',
      description: 'Supercharge your platform with conversational AI, automated document processing, RAG search engines, AI lead scoring, and intelligent content creation pipelines.',
      iconName: 'Sparkles',
      deliverables: [
        'Gemini AI / OpenAI API server-side integration',
        'Custom RAG knowledge base setup with vector search',
        'AI Streaming Chatbot / Smart Assistant interface',
        'Prompt engineering & guardrail safety filters',
        'Cost-effective API token caching setup'
      ],
      startingPrice: '$999',
      estimatedDelivery: '1-2 Weeks',
      techUsed: ['Gemini AI', 'OpenAI API', 'Node.js', 'Vector DB', 'TypeScript']
    },
    {
      id: 'srv-3',
      title: 'Enterprise CRM & Custom SaaS Systems',
      tagline: 'Transform complex business workflows into seamless, automated software platforms.',
      description: 'Architecting multi-tenant SaaS products, customer relationship management (CRM) portals, inventory systems, and employee management tools.',
      iconName: 'LayoutDashboard',
      deliverables: [
        'Multi-tenant database schema & user isolation',
        'Real-time WebSocket notifications & dashboards',
        'Subscription billing & Stripe payment portal',
        'Role-Based Admin permissions & audit logging',
        'CSV/PDF export and analytics reporting'
      ],
      startingPrice: '$2,499',
      estimatedDelivery: '3-6 Weeks',
      techUsed: ['NestJS', 'React', 'MongoDB', 'Redis', 'Stripe']
    },
    {
      id: 'srv-4',
      title: 'API Engineering & Backend Microservices',
      tagline: 'Robust, battle-tested RESTful and GraphQL APIs engineered for enterprise workloads.',
      description: 'High-concurrency backend API architecture, database optimization, Redis caching layer setup, microservices decomposition, and OpenAPI/Swagger documentation.',
      iconName: 'Server',
      deliverables: [
        'RESTful / GraphQL API endpoint suite',
        'Interactive Swagger / Postman API documentation',
        'JWT / OAuth authentication & rate-limiting',
        'Database indexing & query performance tuning',
        'AWS / GCP deployment with Docker'
      ],
      startingPrice: '$899',
      estimatedDelivery: '1-3 Weeks',
      techUsed: ['Node.js', 'NestJS', 'GraphQL', 'PostgreSQL', 'Redis']
    },
    {
      id: 'srv-5',
      title: 'Web3 dApp & Smart Contract Integration',
      tagline: 'Bridge your product into the decentralized Web3 ecosystem.',
      description: 'Decentralized application frontend & backend development, wallet connections, smart contract interactions via Web3.js / Ethers.js, token presale portals, and NFT dashboards.',
      iconName: 'Cpu',
      deliverables: [
        'MetaMask, Coinbase, and WalletConnect integration',
        'On-chain data reading & smart contract execution',
        'Transaction history & live event monitoring',
        'Responsive Web3 glassmorphic user interface'
      ],
      startingPrice: '$1,299',
      estimatedDelivery: '2-3 Weeks',
      techUsed: ['Web3.js', 'Ethers.js', 'React', 'Next.js', 'Solidity']
    },
    {
      id: 'srv-6',
      title: 'WordPress & WooCommerce Custom Development',
      tagline: 'High-performance bespoke WordPress themes and custom PHP plugins built from scratch.',
      description: 'Custom, bloat-free WordPress and WooCommerce solutions engineered for speed, custom field flexibility, tailored payment gateways, and high conversion.',
      iconName: 'Globe',
      deliverables: [
        '100% Custom code theme (No bloated page builders)',
        'Tailored PHP plugins for specific business logic',
        'WooCommerce setup & payment gateway integration',
        'Speed optimization for 90+ mobile Lighthouse score'
      ],
      startingPrice: '$699',
      estimatedDelivery: '1-2 Weeks',
      techUsed: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript']
    }
  ],

  blogs: [
    {
      id: 'blog-1',
      title: 'Building High-Performance Next.js 15 Apps with NestJS Microservices & Redis',
      slug: 'nextjs15-nestjs-redis-architecture',
      summary: 'A deep dive into structuring production full-stack TypeScript applications for maximum throughput, sub-second latency, and zero downtime updates.',
      content: `In modern web development, speed and scalability are non-negotiable. Combining **Next.js 15** on the frontend with **NestJS** on the backend provides an unbeatable TypeScript ecosystem for building enterprise software.

### Why NestJS + Next.js 15?

1. **End-to-End Type Safety**: Share TypeScript interfaces and validation schemas across client and server.
2. **Server-Driven Architecture**: NestJS enforces clean dependency injection and modular boundaries.
3. **Optimized Asset Delivery**: Next.js 15 App Router renders components with Server Components and edge caching.

### Implementing Redis Caching

By placing Redis between your NestJS services and PostgreSQL database, you can cache frequently queried endpoints:

\`\`\`typescript
@Injectable()
export class ProductService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: Redis,
    private readonly prisma: PrismaService
  ) {}

  async getFeaturedProducts() {
    const cached = await this.redis.get('featured_products');
    if (cached) return JSON.parse(cached);

    const products = await this.prisma.product.findMany({ where: { featured: true } });
    await this.redis.set('featured_products', JSON.stringify(products), 'EX', 300);
    return products;
  }
}
\`\`\`

### Results & Performance
When applied to an enterprise e-commerce platform, API response times dropped from 320ms to under 18ms for cached endpoints!`,
      publishedAt: '2026-06-15',
      readTime: '6 min read',
      author: {
        name: 'Nokibul Amin Mezba',
        avatar: '/assets/photo.png'
      },
      category: 'Full Stack',
      tags: ['Next.js 15', 'NestJS', 'Redis', 'TypeScript', 'Performance'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      views: 1240,
      likes: 94,
      comments: [
        {
          id: 'c-1',
          author: 'Alex Rivera (CTO at TechLaunch)',
          content: 'Fantastic article, Mezba! The Redis caching pattern with NestJS is super clean.',
          date: '2026-06-18'
        }
      ]
    },
    {
      id: 'blog-2',
      title: 'Integrating Gemini AI into Enterprise Workflows: Practical Patterns & Safeguards',
      slug: 'integrating-gemini-ai-enterprise-patterns',
      summary: 'Learn how to leverage Google Gemini 3.6 Flash and Pro models server-side for automated customer support, document parsing, and RAG search.',
      content: `Generative AI is transforming enterprise applications from static software into active intelligence engines. In this guide, we explore how to integrate **@google/genai** cleanly into Node.js & NestJS servers.

### Core Architecture Rules

- **Keep API Keys Server-Side**: Never expose your \`GEMINI_API_KEY\` to browser bundles.
- **Use Structured JSON Schemas**: Require Gemini to output deterministic JSON schemas using \`responseSchema\`.
- **Implement Rate Limiting**: Guard against token quota exhaustion.

### Example Server Handler

\`\`\`typescript
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function summarizeLeadInteraction(interactionText: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: interactionText,
    config: {
      systemInstruction: "You are a CRM assistant. Extract action items and intent score.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          intentScore: { type: Type.NUMBER },
          summary: { type: Type.STRING },
          recommendedAction: { type: Type.STRING }
        }
      }
    }
  });

  return JSON.parse(response.text);
}
\`\`\`

### Summary
By pairing Gemini 3.6 Flash with typed JSON schemas, AI tasks become reliable, repeatable backend microservices!`,
      publishedAt: '2026-07-02',
      readTime: '8 min read',
      author: {
        name: 'Nokibul Amin Mezba',
        avatar: '/assets/photo.png'
      },
      category: 'AI & Machine Learning',
      tags: ['Gemini AI', 'OpenAI', 'Node.js', 'AI Engineering', 'RAG'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      views: 2150,
      likes: 182,
      comments: [
        {
          id: 'c-2',
          author: 'David Chen (SaaS Founder)',
          content: 'This schema enforcement snippet saved me hours of regex parsing on LLM output!',
          date: '2026-07-05'
        }
      ]
    },
    {
      id: 'blog-3',
      title: 'Mastering Full-Stack Security: JWT Refresh Tokens, RBAC & Helmet in Express / NestJS',
      slug: 'fullstack-security-jwt-rbac-express-nestjs',
      summary: 'Step-by-step security blueprint for defending web apps against XSS, CSRF, parameter pollution, and broken access control.',
      content: `Security should never be an afterthought in software engineering. When building full-stack applications, protecting user data and preventing unauthorized access requires a multi-layered defense strategy.

### Security Checklist

1. **Short-Lived Access Tokens (15m)** with **HttpOnly Refresh Tokens (7d)**.
2. **Role-Based Guards (RBAC)** on every sensitive endpoint.
3. **Helmet HTTP Header Hardening**.
4. **Input Sanitization & Zod Schema Validation**.

Stay tuned for part two where we cover Docker container vulnerability scanning!`,
      publishedAt: '2026-07-20',
      readTime: '5 min read',
      author: {
        name: 'Nokibul Amin Mezba',
        avatar: '/assets/photo.png'
      },
      category: 'Security',
      tags: ['Security', 'JWT', 'NestJS', 'Express', 'Auth'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      views: 980,
      likes: 76,
      comments: []
    }
  ],

  testimonials: [
    {
      id: 't-1',
      name: 'Michael Vance',
      role: 'Chief Technology Officer',
      company: 'Apex Global SaaS Solutions',
      country: 'United States',
      flagEmoji: '🇺🇸',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'Mezba is one of the most talented Senior Software Engineers I have worked with. He re-architected our enterprise CRM backend using NestJS and PostgreSQL, cutting API latency by over 80%. His technical clarity and execution speed are extraordinary.',
      projectRelation: 'Enterprise CRM System'
    },
    {
      id: 't-2',
      name: 'Sophie Laurent',
      role: 'Founder & Managing Director',
      company: 'Grandeur Hospitality Group',
      country: 'France',
      flagEmoji: '🇫🇷',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'Mezba built our hotel booking web application from scratch with Next.js 15 and Stripe. The design is breathtaking, loading is instant, and our online bookings surged by 45% in the first month alone!',
      projectRelation: 'Luxury Hotel Booking Platform'
    },
    {
      id: 't-3',
      name: 'Rahim Al-Mansoori',
      role: 'Lead Innovation Director',
      company: 'CryptoLaunch Capital',
      country: 'United Arab Emirates',
      flagEmoji: '🇦🇪',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'Extremely proficient in Web3 dApps and WebSockets. Mezba created our token presale launchpad with complex staking mechanics. Deliverables were flawless, on time, and completely secure.',
      projectRelation: 'Web3 ICO Launchpad'
    },
    {
      id: 't-4',
      name: 'Sarah Jenkins',
      role: 'VP of Product',
      company: 'HealthPulse Digital',
      country: 'United Kingdom',
      flagEmoji: '🇬🇧',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'Mezba seamlessly integrated Gemini AI into our research portal. His deep understanding of backend engineering, prompt schemas, and frontend UI design sets him apart from standard developers.',
      projectRelation: 'AI Medical Portal'
    }
  ],

  stats: {
    visitors: 14280,
    projectViews: 48920,
    resumeDownloads: 1850,
    messagesReceived: 142
  }
};
