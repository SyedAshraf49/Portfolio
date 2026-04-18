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

export const SKILL_GROUPS = [
  {
    icon: Brain,
    title: 'Machine Learning & AI',
    items: [
      'NLP',
      'Toxicity Detection',
      'Sentiment Analysis',
      'Computer Vision',
      'Fine-tuning',
      'PyTorch',
      'scikit-learn',
      'Transformers',
    ],
  },
  {
    icon: Code2,
    title: 'Backend Development',
    items: [
      'Python',
      'Flask',
      'RESTful APIs',
      'CORS',
      'Microservices',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Frontend Development',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Single Page Apps',
      'API Integration',
      'Responsive Design',
    ],
  },
  {
    icon: Terminal,
    title: 'Data, Systems & DevOps',
    items: [
      'CLI Design',
      'System Monitoring',
      'Windows Automation',
      'Deployment Automation',
      'Testing',
      'End-to-end Testing',
      'Production Deployment',
      'Documentation',
    ],
  },
  {
    icon: Shield,
    title: 'Safety & Product Intelligence',
    items: ['Content Moderation', 'Risk Assessment', 'Quality Scoring', 'Audience Analysis'],
  },
];

export const NAVIGATION_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '/resume/asher-resume.pdf', isResume: true },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA = [
  {
    id: 'exp-1',
    title: 'Project Lead - Machine Learning & Deep Learning Intern',
    company: 'G-TEC Computer Education',
    location: 'Anna Nagar, Chennai',
    period: '',
    highlights: [
      'Led the complete development of a Career Path Prediction System using ML models to help and guide students and professionals in their career decisions.',
      'Managed four teams: Frontend, Data Collection & Preprocessing, Backend, and Testing & Debugging.',
      'Built a predictive model using RandomForest and advanced ML models, achieved optimal accuracy by fine-tuning the models iteratively.',
      'Applied machine learning algorithms such as regression and classification to solve real-world problems using Python.',
      'Arranged daily team meetings to ensure productivity and project advancement, communicating with team members to improve the project continuously.',
    ],
  },
  {
    id: 'exp-2',
    title: 'Software Development Intern – IT Wing',
    company: 'Chennai Metro Rail Limited',
    location: 'Nandanam, Chennai',
    period: 'Jan 2026',
    highlights: [
      'Designed and developed a staff management dashboard for the IT Wing serving 200+ employees, reducing manual data access time by ~30% through streamlined UI and optimized data retrieval.',
      'Implemented secure authentication with Role-Based Access Control (RBAC), improving access security by ~40% and enforcing department-level data segregation across the organization.',
      'Optimized backend validation logic and input sanitization, reducing unauthorized access attempts and data entry errors by ~25%.',
      'Gained hands-on exposure to enterprise-grade government IT infrastructure, security compliance protocols, and production deployment standards.',
    ],
  },
];
