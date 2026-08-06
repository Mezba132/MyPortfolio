import express from 'express';
import path from 'path';
import PDFDocument from 'pdfkit';
import { GoogleGenAI } from '@google/genai';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData, ContactMessage } from './types';

export const app = express();

app.use(express.json({ limit: '10mb' }));

// In-memory data store for live state
let portfolioState: PortfolioData = JSON.parse(JSON.stringify(initialPortfolioData));
let contactMessages: ContactMessage[] = [];

// Gemini AI SDK initialization
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

// Download official resume PDF document
app.get(['/api/resume/download', '/api/download-resume'], (req, res) => {
  resumeDownloadsCount += 1;
  portfolioState.stats.resumeDownloads += 1;

  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Nokibul_Amin_Mezba_Software_Engineer_Resume.pdf"');

    const doc = new PDFDocument({ margin: 36, size: 'A4' });
    doc.pipe(res);

    // Header Name & Title
    doc.fillColor('#0f172a').fontSize(22).font('Helvetica-Bold').text('Nokibul Amin Mezba');
    doc.fillColor('#4338ca').fontSize(11).font('Helvetica-Bold').text('Software Engineer (5 Years Professional Experience)');
    doc.fontSize(8.5).font('Helvetica').fillColor('#475569').text('Email: csmezba@gmail.com  |  Phone: 01752918411  |  Address: Boira, Khulna');
    doc.fontSize(8.5).font('Helvetica').fillColor('#475569').text('GitHub: github.com/mezba132');
    doc.moveDown(0.5);

    // Horizontal Line
    doc.strokeColor('#cbd5e1').lineWidth(0.8).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
    doc.moveDown(0.5);

    // Profile Section
    doc.fillColor('#1e1b4b').fontSize(10).font('Helvetica-Bold').text('PROFILE');
    doc.moveDown(0.2);
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica').text(
      'Dedicated and skilled Software Engineer with 5 years of professional experience delivering robust and highly scalable solutions. Core technical expertise centers on modern back-end development (Node.js/NestJS) and React.js/Next.js, complemented by proficiency in AWS cloud services and SQL/NoSQL databases. Skillfully manages the entire web development lifecycle from architecture to deployment.',
      { align: 'left', lineGap: 1.5 }
    );
    doc.moveDown(0.5);

    // Work Experience Section
    doc.fillColor('#1e1b4b').fontSize(10).font('Helvetica-Bold').text('WORK EXPERIENCE');
    doc.moveDown(0.3);

    // Job 1
    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Software Engineer (Mid Level) — Itech Soft Solutions', { continued: true });
    doc.fillColor('#4338ca').fontSize(8.5).font('Helvetica-Bold').text('   (Jan 2025 - Present)');
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica')
      .text('• Developed Decentralized Applications (dApps) and OpenAI/Gemini AI integrated projects.')
      .text('• Architected scalable full-stack web solutions with NestJS, PostgreSQL, GraphQL/REST APIs, Web3.js & Next.js.')
      .text('• Maintained rigorous code quality, testability, debugging, and cross-functional team execution.');
    doc.moveDown(0.4);

    // Job 2
    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Executive Software Engineer — Fanfare Bangladesh Ltd.', { continued: true });
    doc.fillColor('#4338ca').fontSize(8.5).font('Helvetica-Bold').text('   (Mar 2023 - Dec 2024)');
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica')
      .text('• Engineered enterprise CRM backend logic (API design, security) & frontend UI/UX.')
      .text('• Built robust microservices using NestJS, ReactJS, MongoDB, Docker, AWS & Robi Cloud.')
      .text('• Led end-to-end delivery, system design, and cross-team developer mentoring.');
    doc.moveDown(0.4);

    // Job 3
    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Software Engineer — Apsis Solution Ltd.', { continued: true });
    doc.fillColor('#4338ca').fontSize(8.5).font('Helvetica-Bold').text('   (May 2021 - Feb 2023)');
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica')
      .text('• Full-stack development for E-Commerce and EMS applications using NestJS, React.js (NextJS, Redux) & PostgreSQL.')
      .text('• Configured AWS deployment pipelines (EC2, S3) and agile project tracking using Git and Trello.');
    doc.moveDown(0.4);

    // Job 4
    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('WordPress Developer — Freelance', { continued: true });
    doc.fillColor('#4338ca').fontSize(8.5).font('Helvetica-Bold').text('   (Nov 2018 - Dec 2020)');
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica')
      .text('• Developed custom themes, plugins, and WooCommerce online storefronts for client requirements.');
    doc.moveDown(0.5);

    // Education Section
    doc.fillColor('#1e1b4b').fontSize(10).font('Helvetica-Bold').text('EDUCATION');
    doc.moveDown(0.3);
    doc.fillColor('#0f172a').fontSize(8.5).font('Helvetica-Bold').text('Bsc. in Computer Science and Software Engineering');
    doc.fillColor('#4338ca').fontSize(8).font('Helvetica').text('American International University – Bangladesh (2013 - 2018)');
    doc.moveDown(0.2);
    doc.fillColor('#0f172a').fontSize(8.5).font('Helvetica-Bold').text('Higher Secondary Certificate (H.S.C)');
    doc.fillColor('#4338ca').fontSize(8).font('Helvetica').text('Dr. Abdur Razzak Municipal College (2010 - 2012)');
    doc.moveDown(0.5);

    // Development Skills & Tools Section
    doc.fillColor('#1e1b4b').fontSize(10).font('Helvetica-Bold').text('DEVELOPMENT SKILLS & TOOLS');
    doc.moveDown(0.3);
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica')
      .text('• Tech Stack: Node.js (NestJS, Express.js), PHP (Laravel), React.js (Next.js, Redux, Zustand), REST/GraphQL, Docker, PostgreSQL, MongoDB, MySQL, Firebase, WebSockets, Web3.js, OpenAI, Gemini AI.')
      .text('• Cloud & DevOps: AWS (EC2, S3, RDS), Google Cloud Platform, DigitalOcean, Nginx, Linux/Ubuntu.')
      .text('• Tools & Agile: VSCode, Postman, Swagger, Git, Jira, Slack, Trello, ClickUp.');
    doc.moveDown(0.5);

    // References Section
    doc.fillColor('#1e1b4b').fontSize(10).font('Helvetica-Bold').text('REFERENCES');
    doc.moveDown(0.3);
    doc.fillColor('#0f172a').fontSize(8.5).font('Helvetica-Bold').text('Mahbubul Alam', { continued: true });
    doc.fillColor('#475569').fontSize(8.5).font('Helvetica').text(' — Itech Soft Solution (Phone: 01713335016)');
    doc.fillColor('#0f172a').fontSize(8.5).font('Helvetica-Bold').text('Musabbir Rahman', { continued: true });
    doc.fillColor('#475569').fontSize(8.5).font('Helvetica').text(' — Apsis Solution Ltd (Phone: 01726315133)');

    doc.end();
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).send('Failed to generate PDF resume');
  }
});

// AI Chat Assistant Route (Gemini Powered)
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
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
- Email: csmezba@gmail.com | Phone: +8801752918411 | GitHub: github.com/mezba132`;

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

  const lower = message.toLowerCase();
  let reply = "";

  if (lower.includes('experience') || lower.includes('background') || lower.includes('work') || lower.includes('job')) {
    reply = `Nokibul Amin Mezba has over 7 years of total development experience (5+ years at the senior enterprise level). He is currently a Mid-Level Software Engineer at Itech Soft Solutions building dApps and AI applications. Previously, he served as Executive Software Engineer at Fanfare Bangladesh Ltd., where he architected a CRM handling 100,000+ active leads, and at Apsis Solution Ltd. building e-commerce and corporate EMS systems on AWS. Would you like to view his full career timeline or download his resume?`;
  } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('react') || lower.includes('node') || lower.includes('nestjs')) {
    reply = `Mezba's primary technology stack includes:\n• Frontend: Next.js 15, React, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion\n• Backend: NestJS, Node.js, Express, GraphQL, REST APIs, WebSockets\n• Databases: PostgreSQL, Prisma ORM, MongoDB, Redis, MySQL\n• Cloud & AI: AWS (S3, EC2, RDS), Docker, Gemini AI, OpenAI API, Web3.js.`;
  } else if (lower.includes('hire') || lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
    reply = `You can get in touch with Mezba directly via:\n• Email: csmezba@gmail.com\n• Phone/WhatsApp: +8801752918411\n• GitHub: github.com/mezba132`;
  } else {
    reply = `Hello! I am Nokibul Amin Mezba's AI Assistant. Mezba is a Senior Full Stack Software Engineer & AI/Web3 Specialist with 7+ years of experience building Next.js, NestJS, and cloud-native applications. How can I assist you today?`;
  }

  return res.json({ text: reply });
});

// Serve assets folder
app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
