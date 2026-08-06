import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { initialPortfolioData } from './src/data/portfolioData';
import { PortfolioData, ContactMessage, ChatMessage } from './src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // In-memory data store for live updates
  let portfolioState: PortfolioData = JSON.parse(JSON.stringify(initialPortfolioData));
  let contactMessages: ContactMessage[] = [];
  const adminSecretToken = 'mezba-admin-token-2026-secret';

  // Initialize Gemini AI SDK server-side
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });
      console.log('Gemini AI SDK initialized successfully on server.');
    } catch (err) {
      console.error('Failed to initialize Gemini AI SDK:', err);
    }
  }

  // ----------------------------------------------------
  // API ROUTES
  // ----------------------------------------------------

  // Healthcheck
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Get portfolio data
  app.get(['/api/portfolio', '/api/portfolio-data'], (req, res) => {
    res.json(portfolioState);
  });

  // Submit contact message
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, budget, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      subject: subject || 'General Project Inquiry',
      budget: budget || 'Flexible',
      message,
      createdAt: new Date().toISOString(),
      read: false
    };

    contactMessages.unshift(newMessage);
    portfolioState.stats.messagesReceived += 1;

    res.json({
      success: true,
      message: 'Thank you for your message! Nokibul Amin Mezba will get back to you shortly.',
      data: newMessage
    });
  });

  // Analytics endpoints
  let pageVisitsCount = 1420;
  let resumeDownloadsCount = 340;

  app.get('/api/analytics', (req, res) => {
    res.json({
      pageVisits: pageVisitsCount,
      resumeDownloads: resumeDownloadsCount,
      contactSubmissions: contactMessages.length || portfolioState.stats.messagesReceived || 48
    });
  });

  app.post('/api/analytics/visit', (req, res) => {
    pageVisitsCount += 1;
    portfolioState.stats.visitors += 1;
    portfolioState.stats.projectViews += 1;
    res.json({
      success: true,
      analytics: {
        pageVisits: pageVisitsCount,
        resumeDownloads: resumeDownloadsCount,
        contactSubmissions: contactMessages.length || portfolioState.stats.messagesReceived || 48
      }
    });
  });

  app.post('/api/analytics/download-resume', (req, res) => {
    resumeDownloadsCount += 1;
    portfolioState.stats.resumeDownloads += 1;
    res.json({
      success: true,
      analytics: {
        pageVisits: pageVisitsCount,
        resumeDownloads: resumeDownloadsCount,
        contactSubmissions: contactMessages.length || portfolioState.stats.messagesReceived || 48
      }
    });
  });

  // AI Chat Assistant Route (Gemini Powered)
  app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = `You are the official AI Avatar and Assistant for Nokibul Amin Mezba, Senior Full Stack Software Engineer, AI & Web3 Developer.
Your goal is to answer questions from recruiters, CTOs, startup founders, and prospective enterprise clients with extreme professionalism, warmth, and technical clarity.

Key Info about Mezba:
- Full Name: Nokibul Amin Mezba
- Title: Senior Full Stack Software Engineer | AI & Web3 Developer | Next.js | NestJS | React | Node.js Specialist
- Total Tech Experience: 7+ years (5+ years enterprise level)
- Location: Boira, Khulna, Bangladesh (Open to Remote global roles & relocation)
- Primary Stack: Next.js 15, React, NestJS, Node.js, TypeScript, PostgreSQL, MongoDB, GraphQL, REST API, Redis, Docker, AWS (S3, EC2, RDS), GCP, Web3.js, Gemini AI, OpenAI API, PHP/Laravel, WordPress/WooCommerce.
- Career Highlights:
  - Software Engineer (Mid Level) @ Itech Soft Solutions (Jan 2025 - Present) -> Building dApps, Gemini AI projects, NestJS microservices.
  - Executive Software Engineer @ Fanfare Bangladesh Ltd. (Mar 2023 - Dec 2024) -> Scaled enterprise CRM handling 100k+ interactions with NestJS & MongoDB.
  - Software Engineer @ Apsis Solution Ltd. (May 2021 - Feb 2023) -> E-commerce & Employee Management Systems on AWS.
  - Freelance Full Stack & WordPress Developer (Nov 2018 - Dec 2020) -> 50+ websites built, 100% 5-star ratings.
- Education: B.Sc. in Computer Science & Software Engineering from AIUB (American International University - Bangladesh).
- Email: csmezba@gmail.com | Phone: +8801752918411 | GitHub: github.com/mezba132
- Certifications: AWS Certified Solutions Architect, Full Stack Microservices Masterclass, DeepLearning.AI Generative AI Engineering.

Guidelines for AI response:
- Speak in first-person plural or as Mezba's representative AI agent ("Mezba specializes in...", "Our core architecture focuses on...").
- Be engaging, concise, structured, and confident.
- Mention relevant projects (e.g. Enterprise AI CRM, NeuralOps AI Support, Luxury Hotel Booking, Crypto Launchpad) when asked about his experience.
- Include a call to action asking them if they'd like to schedule a call via Calendly or email csmezba@gmail.com when discussing opportunities.`;

    // Try Gemini API if available
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: message,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.7
          }
        });

        if (response.text) {
          return res.json({ text: response.text });
        }
      } catch (err) {
        console.error('Gemini API call failed, falling back to smart prompt rule handler:', err);
      }
    }

    // High quality intelligent fallback if GEMINI_API_KEY is pending or offline
    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes('experience') || lower.includes('background') || lower.includes('work') || lower.includes('job')) {
      reply = `Nokibul Amin Mezba has over 7 years of total development experience (5+ years at the senior enterprise level). He is currently a Mid-Level Software Engineer at Itech Soft Solutions building dApps and AI applications. Previously, he served as Executive Software Engineer at Fanfare Bangladesh Ltd., where he architected a CRM handling 100,000+ active leads, and at Apsis Solution Ltd. building e-commerce and corporate EMS systems on AWS. Would you like to view his full career timeline or download his resume?`;
    } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('react') || lower.includes('node') || lower.includes('nestjs')) {
      reply = `Mezba's primary technology stack includes:\n• Frontend: Next.js 15, React, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion\n• Backend: NestJS, Node.js, Express, GraphQL, REST APIs, WebSockets\n• Databases: PostgreSQL, Prisma ORM, MongoDB, Redis, MySQL\n• Cloud & AI: AWS (S3, EC2, RDS), Docker, Gemini AI, OpenAI API, Web3.js.\n\nHe is equally proficient in architecting new applications from scratch and optimizing existing microservices.`;
    } else if (lower.includes('hire') || lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('rate') || lower.includes('cost')) {
      reply = `You can get in touch with Mezba directly via:\n• Email: csmezba@gmail.com\n• Phone/WhatsApp: +8801752918411\n• GitHub: github.com/mezba132\n\nYou can also submit a project inquiry through the Contact section or book a consultation call via Calendly directly on this website!`;
    } else if (lower.includes('project') || lower.includes('crm') || lower.includes('ai') || lower.includes('portfolio') || lower.includes('hotel') || lower.includes('web3')) {
      reply = `Mezba has built over 50 websites and 20+ enterprise applications. Standout projects include:\n1. Enterprise AI CRM & Lead Automation Hub (NestJS + Gemini AI)\n2. NeuralOps AI Support Dashboard (RAG + OpenAI + WebSockets)\n3. Grandeur Haven Hotel Booking Engine (Next.js 15 + Stripe)\n4. CryptoLaunch Web3 Presale dApp (Web3.js + Smart Contracts)\n\nYou can click on any project card in the Projects section to see a deep-dive case study!`;
    } else {
      reply = `Hello! I am Nokibul Amin Mezba's AI Assistant. Mezba is a Senior Full Stack Software Engineer & AI/Web3 Specialist with 7+ years of experience building Next.js, NestJS, and cloud-native applications. How can I assist you today? You can ask about his projects, skills, enterprise experience, or how to hire him for your next project!`;
    }

    return res.json({ text: reply });
  });

  // ----------------------------------------------------
  // VITE DEV / PRODUCTION STATIC SERVER
  // ----------------------------------------------------

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

startServer();
