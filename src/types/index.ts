export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type?: 'screenshot' | 'chart' | 'diagram' | 'eda' | 'architecture';
}

export interface ProjectFile {
  name: string;
  type: 'PDF' | 'DOCX' | 'XLSX' | 'CSV' | 'PPTX' | 'IPYNB' | 'ZIP' | 'PNG' | 'JPG' | 'WEBP';
  description: string;
  size?: string;
  url: string;
  isExternal?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  bulletPoints?: string[];
  codeSnippet?: string;
}

export interface DetailedCaseStudy {
  problem: string;
  dataset: string;
  dataCleaning: string[];
  featureEngineering: string[];
  dimensionalityReduction: string[];
  clusteringApproach: string[];
  modelComparison: {
    algorithm: string;
    kOrEps?: string;
    silhouetteScore?: string;
    strengths: string;
    notes: string;
  }[];
  evaluation: string;
  results: string[];
  businessImplications: string[];
  limitations: string[];
  nextSteps: string[];
  workflowPipeline: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Unsupervised Machine Learning' | 'Classification' | 'Data Analysis' | 'EDA' | 'Data Analysis / EDA' | 'Machine Learning';
  featured: boolean;
  description: string;
  shortDescription: string;
  problem?: string;
  objective?: string;
  methodology?: string[];
  results?: string[];
  insights?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  kaggleUrl?: string;
  demoUrl?: string;
  notebookUrl?: string;
  datasetUrl?: string;
  documentationUrl?: string;
  caseStudyUrl?: string;
  presentationUrl?: string;
  videoUrl?: string;
  images: ProjectImage[];
  files: ProjectFile[];
  metrics: ProjectMetric[];
  tags: string[];
  date: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  caseStudy?: DetailedCaseStudy;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  note?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBadge?: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateImage?: string;
  certificatePdf?: string;
  grade?: string;
  assessments?: {
    name: string;
    score: string;
  }[];
  description: string;
  skillsCovered: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status: string;
  session?: string;
  gpa?: string;
  details?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  period: string;
  description: string[];
  transferableCapabilities: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  actions: string[];
  tools: string[];
}
