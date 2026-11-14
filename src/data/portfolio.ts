import type { LucideIcon } from 'lucide-react';
import { Bot, BrainCircuit, Cloud, Code2, Database, Layers } from 'lucide-react';

// Replace the social URLs below with your real profile links.
export const profile = {
  name: 'Abhishek Khale',
  title: 'AI/ML Engineer | Generative AI Developer',
  availability: 'Available for opportunities',
  intro:
    'Computer Engineering graduate passionate about building intelligent applications using Machine Learning, Large Language Models, Retrieval-Augmented Generation and Agentic AI. I enjoy turning complex ideas into practical, reliable AI solutions.',
  email: 'khaleabhishek351@gmail.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  leetcode: 'https://leetcode.com/your-username',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const aboutParagraphs = [
  'I hold a B.Tech in Computer Engineering from Ramrao Adik Institute of Technology, DY Patil University, graduating with a CGPA of 9.84. I was ranked 1st in Semester 5 and 3rd in Semester 7 among more than 100 students.',
  'My experience spans machine learning and generative AI, from billing automation at Tata Consultancy Services to a multilingual forced-alignment pipeline for text-to-speech at DaveAI. I focus on practical AI systems, including model integration and deployment, and I am especially interested in LLMs, RAG, AI agents and intelligent applications.',
];

export const highlights = [
  { label: 'CGPA', value: '9.84' },
  { label: 'Semester 5 rank', value: 'Rank 1' },
  { label: 'Semester 7 rank', value: 'Rank 3' },
];

export const heroStats = [
  { value: '9.84', label: 'B.Tech CGPA' },
  { value: '2', label: 'Internships' },
  { value: 'GenAI', label: 'Core Focus' },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Generative AI & Agentic Systems',
    icon: Bot,
    skills: [
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI',
      'Model Context Protocol (MCP)',
      'Tool Calling',
      'Prompt Engineering',
      'AI Guardrails',
      'OpenAI APIs',
    ],
  },
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
    skills: [
      'Supervised & Unsupervised Learning',
      'Classification & Regression',
      'Scikit-learn',
      'XGBoost',
      'Feature Engineering',
      'Model Evaluation',
      'Statistical Analysis',
    ],
  },
  {
    title: 'Deep Learning & NLP',
    icon: Layers,
    skills: [
      'Transformers',
      'LSTMs',
      'Neural Networks',
      'Natural Language Processing',
      'Text-to-Speech',
      'TensorFlow',
      'PyTorch',
      'Keras',
    ],
  },
  {
    title: 'AI Application Engineering',
    icon: Code2,
    skills: ['Python', 'FastAPI', 'Streamlit', 'LangChain', 'FAISS', 'REST APIs'],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'CI/CD', 'AWS EC2', 'AWS S3', 'AWS IAM', 'AWS CloudWatch', 'Git', 'GitHub'],
  },
  {
    title: 'Data Science',
    icon: Database,
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'SQL'],
  },
];

export type ProjectCategory = 'Generative AI' | 'Machine Learning' | 'Deep Learning';

export interface Project {
  title: string;
  category: ProjectCategory;
  points: string[];
  stack: string[];
  hackathon?: boolean;
  repoUrl?: string;
  demoUrl?: string;
}

export const projectCategories: ProjectCategory[] = ['Generative AI', 'Machine Learning', 'Deep Learning'];

export const projects: Project[] = [
  {
    title: 'Agentic Financial Planning & Simulation Platform',
    category: 'Generative AI',
    points: [
      'Built an agentic financial planning assistant using GPT-5-mini and the Model Context Protocol.',
      'Implemented dynamic tool discovery, multi-turn interactions and structured function calling.',
      'Developed a financial simulation engine supporting recurring expenses, one-time events, income changes and 24-month scenario comparisons.',
      'Implemented a binary-search affordability algorithm to identify maximum affordable recurring expenses while maintaining savings goals and emergency buffers.',
    ],
    stack: ['Python', 'GPT-5-mini', 'MCP', 'Streamlit'],
  },
  {
    title: 'AI-Assisted KYC Verification System',
    category: 'Generative AI',
    points: [
      'Developed a KYC verification pipeline combining OCR, face verification, liveness detection and AI decision-making.',
      'Implemented policy-aware hybrid RAG with semantic and keyword retrieval.',
      'Added evidence-grounded PASS/REVIEW/FAIL decisions with LLM guardrails.',
      'Integrated AWS S3 and CloudWatch for storage, application logging, metrics and latency monitoring.',
    ],
    stack: ['Python', 'OpenAI', 'RAG', 'OCR', 'dlib', 'AWS', 'Streamlit'],
  },
  {
    title: 'Voice-Powered PDF Chatbot',
    category: 'Generative AI',
    points: [
      'Built a RAG-based chatbot for querying PDF documents through text and voice.',
      'Used LangChain and FAISS for document processing and retrieval.',
      'Integrated OpenAI embeddings for context-aware responses.',
      'Added speech recognition for voice-based interaction.',
    ],
    stack: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'OpenAI Embeddings', 'Google Speech Recognition'],
  },
  {
    title: 'Credit Risk Prediction',
    category: 'Machine Learning',
    points: ['Machine learning model for assessing credit risk and the likelihood of borrower default.'],
    stack: [],
  },
  {
    title: 'Term Deposit Forecasting',
    category: 'Machine Learning',
    points: ['Predictive model for forecasting term deposit subscription outcomes.'],
    stack: [],
  },
  {
    title: 'Loan Default Prediction',
    category: 'Machine Learning',
    points: ['Machine learning model for predicting loan default risk.'],
    stack: [],
  },
  {
    title: 'Customer Subscription Propensity Prediction',
    category: 'Machine Learning',
    hackathon: true,
    points: ['Predicts how likely each customer is to subscribe, to guide targeting decisions.'],
    stack: [],
  },
  {
    title: 'IMDb Movie Review Sentiment Analyzer',
    category: 'Deep Learning',
    points: [
      'Built a sentiment analysis system using BiLSTM, dropout and EarlyStopping.',
      'Achieved 89% accuracy through hyperparameter tuning.',
      'Deployed using FastAPI and Docker, with CI/CD integration.',
    ],
    stack: ['Python', 'BiLSTM', 'TensorFlow/Keras', 'FastAPI', 'Docker', 'CI/CD'],
  },
  {
    title: 'LanguageBuddy',
    category: 'Deep Learning',
    points: [
      'Created a multilingual language detection application supporting 19 languages.',
      'Achieved 97% accuracy.',
      'Developed custom datasets for Marathi, Gujarati and Hindi.',
      'Used CountVectorizer and Multinomial Naive Bayes, and integrated a translation API for English translation.',
    ],
    stack: ['Python', 'NLP', 'CountVectorizer', 'Multinomial Naive Bayes'],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  project: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'DaveAI',
    role: 'Machine Learning Intern',
    period: 'September 2024 – November 2024',
    project: 'Synthesis Pipeline',
    points: [
      'Developed a multilingual forced-alignment system for text-to-speech applications, aligning text with audio to generate precise timestamps for synchronized multimedia animations.',
      'Worked with Farasa, Epitran and Uroman for phoneme processing and Arabic/Hindi romanization.',
      'Evaluated 50 Arabic and 30+ Hindi sentences using WER/CER testing.',
      'Developed a gesture-selection algorithm for synchronized animation movements and integrated logging for traceability.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS), General Electric',
    role: 'Data Science Intern',
    period: 'January 2024 – May 2024',
    project: 'Billing Automation',
    points: [
      'Automated comparison of Excel files with PDF invoices using Python, PyPDF2, Tabula and Pandas.',
      'Handled 80% of complex invoices and reduced manual verification time.',
      'Developed a Streamlit interface to improve transparency and user interaction.',
      'Worked using Agile methodologies.',
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  achievements: string[];
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology — Computer Engineering',
    institution: 'Ramrao Adik Institute of Technology, DY Patil University',
    period: 'June 2020 – July 2024',
    score: 'CGPA: 9.84',
    achievements: ['Rank 1 in Semester 5', 'Rank 3 in Semester 7 among 100+ students'],
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  detail?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: 'Amazon ML Summer School 2023',
    issuer: 'Amazon',
    detail:
      'Covered supervised learning, deep neural networks, dimensionality reduction, unsupervised learning, probabilistic graphical models, sequential learning, causal inference and reinforcement learning.',
  },
  { title: 'Python for Data Science and Machine Learning Bootcamp', issuer: 'Udemy · 25 hours' },
  { title: 'Big Data in the Age of AI', issuer: 'LinkedIn Learning' },
  { title: 'Introduction to Prompt Engineering for Generative AI', issuer: 'LinkedIn Learning' },
  { title: 'Generative AI for Business Leaders', issuer: 'LinkedIn Learning' },
  { title: 'Introduction to Generative AI', issuer: 'AWS Training and Certification' },
  { title: 'Planning a Generative AI Project', issuer: 'AWS Training and Certification' },
];
