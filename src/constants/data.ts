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

export const CERTIFICATIONS_DATA = [
  {
    id: 'cert-ai-fluency-framework',
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    issuerMark: 'AI',
    issued: 'Jul 2026',
    credentialId: 'bzep7e7beniw',
    skills: ['AI Ethics', 'Prompt Tuning'],
    additionalSkills: 3,
  },
  {
    id: 'cert-ai-fluency-students',
    title: 'AI Fluency for students',
    issuer: 'Anthropic',
    issuerMark: 'AI',
    issued: 'Jul 2026',
    credentialId: 'juakz54fgeni',
    skills: ['AI Ethics', 'Generative AI'],
    additionalSkills: 1,
  },
  {
    id: 'cert-getting-started-ai',
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM',
    issuerMark: 'IBM',
    issued: 'Jul 2025',
    credentialId: '06a70b5e-7cad-4451-9e7f-3b79e6a66d25',
    skills: ['Data Structures', 'Unsupervised Learning'],
    additionalSkills: 4,
  },
  {
    id: 'cert-generative-ai-action',
    title: 'Generative AI in Action',
    issuer: 'IBM',
    issuerMark: 'IBM',
    issued: 'Aug 2025',
    credentialId: '20c14995-8606-4a25-be04-72e725a3328f',
    skills: ['AI Ethics', 'Prompt Engineering'],
    additionalSkills: 4,
  },
  {
    id: 'cert-code-generation-granite',
    title: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM',
    issuerMark: 'IBM',
    issued: 'Aug 2025',
    credentialId: 'cb3321b5-9814-45a9-b814-41b834107cf0',
    skills: ['Code Generation', 'Code Optimization'],
    additionalSkills: 1,
  },
  {
    id: 'cert-data-classification-granite',
    title: 'Data Classification and Summarization Using IBM Granite',
    issuer: 'IBM',
    issuerMark: 'IBM',
    issued: 'Aug 2025',
    credentialId: '2d6403e8-7b7c-49da-9280-14e2086ce464',
    skills: ['Problem Solving', 'Generative AI'],
    additionalSkills: 3,
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

export const EXPERIENCE_DATA = [
  {
    id: 'exp-2',
    title: 'Software Development Intern – IT Wing',
    company: 'Chennai Metro Rail Limited',
    location: 'Nandanam, Chennai',
    period: 'Jan 2026 to Feb 2026',
    techStack: ['Python', 'Flask', 'Flask-CORS', 'SQL', 'HTML5', 'CSS3'],
    projectUrl: 'https://github.com/Mukesh-sankaran/Reminder-dashboard-cmrl-itwing',
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
    period: 'June 2025 to July 2025',
    techStack: [
      'Python',
      'Flask',
      'scikit-learn (Random Forest)',
      'Joblib',
      'HTML5',
      'CSS3',
      'JavaScript',
      'CSV-based Datasets',
    ],
    projectUrl: 'https://github.com/SyedAshraf49/Career-Path-Predictor-V1',
    highlights: [
      'Led the complete development of a Career Path Prediction System using ML models to help and guide students and professionals in their career decisions.',
      'Managed four teams: Frontend, Data Collection & Preprocessing, Backend, and Testing & Debugging.',
      'Built a predictive model using RandomForest and advanced ML models, achieved optimal accuracy by fine-tuning the models iteratively.',
      'Applied machine learning algorithms such as regression and classification to solve real-world problems using Python.',
      'Arranged daily team meetings to ensure productivity and project advancement, communicating with team members to improve the project continuously.',
    ],
  },
];
