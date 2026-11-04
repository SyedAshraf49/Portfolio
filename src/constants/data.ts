import { Brain, Code2, LayoutGrid, Shield, Terminal } from 'lucide-react';

export const CONTACT_EMAIL = 'galladeashraf@gmail.com';

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/SyedAshraf49',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/syedashraf49',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/syedashraf49',
    icon: 'twitter',
  },
];

// Periodic Table Style Skills - Each skill with logo URL
export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'ml' | 'cloud' | 'tool' | 'concept';
  logo?: string; // Simple Icons slug or emoji
  color: string;
}

export const SKILLS_PERIODIC_TABLE: Skill[] = [
  // Languages
  { name: 'Python', category: 'language', logo: 'python', color: '#1d4ed8' },
  { name: 'JavaScript', category: 'language', logo: 'javascript', color: '#1d4ed8' },
  { name: 'TypeScript', category: 'language', logo: 'typescript', color: '#1d4ed8' },
  { name: 'Java', category: 'language', logo: 'openjdk', color: '#1d4ed8' },
  
  // Frontend
  { name: 'React', category: 'frontend', logo: 'react', color: '#2563eb' },
  { name: 'HTML5', category: 'frontend', logo: 'html5', color: '#2563eb' },
  { name: 'CSS3', category: 'frontend', logo: 'css3', color: '#2563eb' },
  
  // Backend
  { name: 'Flask', category: 'backend', logo: 'flask', color: '#3b82f6' },
  { name: 'Node.js', category: 'backend', logo: 'nodedotjs', color: '#3b82f6' },
  { name: 'REST API', category: 'backend', logo: 'fastapi', color: '#3b82f6' },
  
  // Databases
  { name: 'MySQL', category: 'database', logo: 'mysql', color: '#1e40af' },
  { name: 'PostgreSQL', category: 'database', logo: 'postgresql', color: '#1e40af' },
  
  // ML & Data
  { name: 'scikit-learn', category: 'ml', logo: 'scikitlearn', color: '#2f5f9e' },
  { name: 'TensorFlow', category: 'ml', logo: 'tensorflow', color: '#2f5f9e' },
  { name: 'PyTorch', category: 'ml', logo: 'pytorch', color: '#2f5f9e' },
  { name: 'Keras', category: 'ml', logo: 'keras', color: '#2f5f9e' },
  { name: 'Hugging Face', category: 'ml', logo: 'huggingface', color: '#2f5f9e' },
  { name: 'pandas', category: 'ml', logo: 'pandas', color: '#150458' },
  { name: 'NumPy', category: 'ml', logo: 'numpy', color: '#013243' },
  { name: 'NLP', category: 'ml', logo: 'NL', color: '#60A5FA' },
  
  // Cloud
  { name: 'AWS', category: 'cloud', logo: '/logos/aws.svg', color: '#1e3a8a' },
  { name: 'EC2', category: 'cloud', logo: 'amazonec2', color: '#1e3a8a' },
  { name: 'S3', category: 'cloud', logo: 'amazons3', color: '#1e3a8a' },
  { name: 'Lambda', category: 'cloud', logo: 'awslambda', color: '#1e3a8a' },
  { name: 'RDS', category: 'cloud', logo: 'amazonrds', color: '#1e3a8a' },
  { name: 'IAM', category: 'cloud', logo: 'amazoniam', color: '#1e3a8a' },
  
  // Tools
  { name: 'Git', category: 'tool', logo: 'git', color: '#4d8dff' },
  { name: 'GitHub', category: 'tool', logo: 'github', color: '#4d8dff' },
  { name: 'VS Code', category: 'tool', logo: 'visualstudiocode', color: '#4d8dff' },
  { name: 'Render', category: 'tool', logo: 'render', color: '#4d8dff' },
  { name: 'Vercel', category: 'tool', logo: 'vercel', color: '#4d8dff' },
  { name: 'Linux', category: 'tool', logo: 'linux', color: '#4d8dff' },
  { name: 'Copilot', category: 'tool', logo: 'githubcopilot', color: '#4d8dff' },
  { name: 'ChatGPT', category: 'tool', logo: 'openai', color: '#4d8dff' },
  { name: 'Claude', category: 'tool', logo: 'anthropic', color: '#4d8dff' },
  
  // Concepts
  { name: 'OOP', category: 'concept', logo: 'OP', color: '#60A5FA' },
  { name: 'DSA', category: 'concept', logo: 'DS', color: '#60A5FA' },
  { name: 'SDLC', category: 'concept', logo: 'SD', color: '#60A5FA' },
];

export const SKILL_GROUPS = [
  {
    icon: Brain,
    title: 'Machine Learning & AI',
    items: [
      'scikit-learn',
      'Transformers',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'NLP',
      'pandas',
      'NumPy',
      'Computer Vision',
      'Fine-tuning',
      'Toxicity Detection',
      'Sentiment Analysis',
    ],
  },
  {
    icon: Code2,
    title: 'Backend Development',
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'Flask',
      'Flask-CORS',
      'Node.js',
      'REST API Design',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Frontend Development',
    items: [
      'React 18',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'API Integration',
    ],
  },
  {
    icon: Terminal,
    title: 'Systems & DevOps',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Linux',
      'Render',
      'GitHub Copilot',
      'ChatGPT',
      'OOP',
      'Data Structures',
      'Algorithms',
      'SDL',
    ],
  },
  {
    icon: Shield,
    title: 'Safety & Intelligence',
    items: [
      'Content Moderation',
      'Risk Assessment',
      'Quality Scoring',
      'Audience Analysis',
    ],
  },
];

export const NAVIGATION_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '/resume/Syed Ashraf S N Resume.pdf', isResume: true },
  { label: 'Contact', href: '#contact' },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  logo: string; // Simple Icons slug
  year?: string;
  featured?: boolean;
}

export const CERTIFICATIONS: Certification[] = [
  // Featured Top 3
  {
    id: 'cert-1',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    logo: '/logos/aws.svg',
    featured: true,
  },
  {
    id: 'cert-2',
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    logo: 'anthropic',
    featured: true,
  },
  {
    id: 'cert-3',
    title: 'Data Science Essentials With Python',
    issuer: 'Cisco',
    logo: 'cisco',
    featured: true,
  },
  // Rest of certifications
  {
    id: 'cert-4',
    title: 'AWS Security Fundamentals',
    issuer: 'Amazon Web Services (AWS)',
    logo: '/logos/aws.svg',
  },
  {
    id: 'cert-5',
    title: 'Object Oriented Programming using Python',
    issuer: 'Infosys Springboard',
    logo: 'infosys',
  },
  {
    id: 'cert-6',
    title: 'Connecting to a MongoDB Database',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-7',
    title: 'MongoDB Transactions',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-8',
    title: 'MongoDB Data Modeling Intro',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-9',
    title: 'MongoDB CRUD Operations: Modifying Query Results',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-10',
    title: 'MongoDB CRUD Operations: Replace and Delete Documents',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-11',
    title: 'MongoDB CRUD Operations: Insert and Find Documents',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-12',
    title: 'MongoDB Atlas Search',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-13',
    title: 'MongoDB Indexes',
    issuer: 'MongoDB',
    logo: 'mongodb',
  },
  {
    id: 'cert-14',
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    logo: 'anthropic',
  },
  {
    id: 'cert-15',
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM',
    logo: 'ibm',
  },
  {
    id: 'cert-16',
    title: 'Generative AI in Action',
    issuer: 'IBM',
    logo: 'ibm',
  },
  {
    id: 'cert-17',
    title: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM',
    logo: 'ibm',
  },
  {
    id: 'cert-18',
    title: 'Data Classification and Summarization Using IBM Granite',
    issuer: 'IBM',
    logo: 'ibm',
  },
];

// Skill Mapping to Projects and Certifications
export interface SkillMapping {
  skill: string;
  projects: string[]; // Project titles
  certifications: string[]; // Certification IDs
}

export const SKILL_MAPPINGS: SkillMapping[] = [
  // Languages
  { skill: 'Python', projects: ['HateShieldAI', 'Career Path Predictor'], certifications: ['cert-3', 'cert-5'] },
  { skill: 'JavaScript', projects: ['Local Vendor'], certifications: [] },
  { skill: 'TypeScript', projects: ['Local Vendor'], certifications: [] },
  { skill: 'Java', projects: [], certifications: [] },
  
  // Frontend
  { skill: 'React', projects: ['Local Vendor'], certifications: [] },
  { skill: 'HTML5', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: [] },
  { skill: 'CSS3', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: [] },
  
  // Backend
  { skill: 'Flask', projects: ['HateShieldAI', 'Career Path Predictor'], certifications: [] },
  { skill: 'Node.js', projects: [], certifications: [] },
  { skill: 'REST API', projects: ['HateShieldAI', 'Career Path Predictor'], certifications: [] },
  
  // Databases
  { skill: 'MySQL', projects: [], certifications: [] },
  { skill: 'PostgreSQL', projects: [], certifications: [] },
  
  // ML & Data
  { skill: 'scikit-learn', projects: ['HateShieldAI', 'Career Path Predictor'], certifications: ['cert-3'] },
  { skill: 'TensorFlow', projects: [], certifications: ['cert-15', 'cert-16'] },
  { skill: 'PyTorch', projects: ['HateShieldAI'], certifications: ['cert-15', 'cert-16'] },
  { skill: 'Keras', projects: [], certifications: ['cert-15'] },
  { skill: 'Hugging Face', projects: ['HateShieldAI'], certifications: ['cert-2', 'cert-14'] },
  { skill: 'pandas', projects: ['Career Path Predictor'], certifications: ['cert-3'] },
  { skill: 'NumPy', projects: ['Career Path Predictor'], certifications: ['cert-3'] },
  { skill: 'NLP', projects: ['HateShieldAI'], certifications: ['cert-2', 'cert-14', 'cert-15'] },
  
  // Cloud
  { skill: 'AWS', projects: [], certifications: ['cert-1', 'cert-4'] },
  { skill: 'EC2', projects: [], certifications: ['cert-1'] },
  { skill: 'S3', projects: [], certifications: ['cert-1'] },
  { skill: 'Lambda', projects: [], certifications: ['cert-1'] },
  { skill: 'RDS', projects: [], certifications: ['cert-1'] },
  { skill: 'IAM', projects: [], certifications: ['cert-1', 'cert-4'] },
  
  // Tools
  { skill: 'Git', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: [] },
  { skill: 'GitHub', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: [] },
  { skill: 'VS Code', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: [] },
  { skill: 'Render', projects: ['HateShieldAI', 'Career Path Predictor'], certifications: [] },
  { skill: 'Vercel', projects: ['Local Vendor'], certifications: [] },
  { skill: 'Linux', projects: [], certifications: [] },
  { skill: 'Copilot', projects: ['HateShieldAI', 'Local Vendor'], certifications: [] },
  { skill: 'ChatGPT', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: ['cert-2', 'cert-14'] },
  { skill: 'Claude', projects: ['Local Vendor'], certifications: ['cert-2', 'cert-14'] },
  
  // Concepts
  { skill: 'OOP', projects: ['HateShieldAI', 'Career Path Predictor'], certifications: ['cert-5'] },
  { skill: 'DSA', projects: [], certifications: [] },
  { skill: 'SDLC', projects: ['HateShieldAI', 'Career Path Predictor', 'Local Vendor'], certifications: [] },
];

// Helper function to get skill mappings
export const getSkillMapping = (skillName: string): SkillMapping | undefined => {
  return SKILL_MAPPINGS.find(mapping => mapping.skill === skillName);
};

export const EXPERIENCE_DATA = [
  {
    id: 'exp-2',
    title: 'Software Development Intern – IT Wing',
    company: 'Chennai Metro Rail Limited',
    location: 'Nandanam, Chennai',
    period: 'Jan 2026 to Feb 2026',
    highlights: [
      'Designed and developed a staff management dashboard for the IT Wing serving 200+ employees, reducing manual data access time by ~30% through streamlined UI and optimized data retrieval.',
      'Implemented secure authentication with Role-Based Access Control (RBAC), improving access security by ~40% and enforcing department-level data segregation across the organization.',
      'Optimized backend validation logic and input sanitization, reducing unauthorized access attempts and data entry errors by ~25%.',
      'Gained hands-on exposure to enterprise-grade government IT infrastructure, security compliance protocols, and production deployment standards.',
    ],
  },
  {
    id: 'exp-1',
    title: 'Project Lead - Machine Learning & Deep Learning Intern',
    company: 'G-TEC Computer Education',
    location: 'Anna Nagar, Chennai',
    period: 'June 2025 to july 2025',
    highlights: [
      'Led the complete development of a Career Path Prediction System using ML models to help and guide students and professionals in their career decisions.',
      'Managed four teams: Frontend, Data Collection & Preprocessing, Backend, and Testing & Debugging.',
      'Built a predictive model using RandomForest and advanced ML models, achieved optimal accuracy by fine-tuning the models iteratively.',
      'Applied machine learning algorithms such as regression and classification to solve real-world problems using Python.',
      'Arranged daily team meetings to ensure productivity and project advancement, communicating with team members to improve the project continuously.',
    ],
  },
];
