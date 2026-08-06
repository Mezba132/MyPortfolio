export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: 'Enterprise' | 'AI' | 'CRM' | 'Healthcare' | 'Hotel Booking' | 'Real Estate' | 'E-Commerce' | 'Blog' | 'Portfolio' | 'Landing Page' | 'Dashboard' | 'SaaS' | 'Crypto / Web3' | 'WordPress / WooCommerce';
  image: string;
  gallery: string[];
  videoUrl?: string;
  techStack: string[];
  features: string[];
  timeline: string;
  challenges: string;
  solutions: string;
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  period: string;
  overview: string;
  problem: string;
  research: string[];
  architecture: string[];
  wireframes: string;
  developmentHighlights: string[];
  testingAndQa: string;
  performanceMetrics: { metric: string; value: string; change: string }[];
  results: string;
  techStack: string[];
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'AI & Web3' | 'Tools & Methods';
  skills: {
    name: string;
    level: number; // 0 to 100
    experienceYears: string;
    icon?: string;
    featured?: boolean;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  type: string;
  duration: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeImage: string;
  skillsCovered: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  startingPrice: string;
  estimatedDelivery: string;
  techUsed: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  comments: BlogComment[];
}

export interface BlogComment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  flagEmoji: string;
  avatar: string;
  rating: number;
  comment: string;
  projectRelation: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export type ContactSubmission = ContactMessage;

export interface AnalyticsData {
  pageVisits: number;
  resumeDownloads: number;
  contactSubmissions: number;
}

export interface AnalyticsStats {
  visitors: number;
  projectViews: number;
  resumeDownloads: number;
  messagesReceived: number;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    subtitles: string[];
    bio: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
    facebookUrl?: string;
    instagramUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    yearsExperience: number;
    websitesBuilt: number;
    happyClients: number;
    enterpriseProjects: number;
    aiIntegrations: number;
    avatarUrl: string;
    resumeUrl: string;
  };
  projects: Project[];
  caseStudies: CaseStudy[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  services: ServiceItem[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  stats: AnalyticsStats;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
