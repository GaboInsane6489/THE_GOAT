export interface ProjectItem {
  id: string;
  title: string;
  category: "Full Stack" | "AI & Systems" | "Frontend Architecture" | "Enterprise RBAC";
  description: string;
  longDescription?: string;
  impactMetrics: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Jornada completa" | "Jornada parcial" | "Contrato de prácticas";
  isCurrent: boolean;
  achievements: string[];
  technologies: string[];
}

export interface TechSkillCategory {
  category: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Expert";
    iconName?: string;
  }[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  highlightText?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  location: string;
  hours: number;
  description: string;
  skills: string[];
}
