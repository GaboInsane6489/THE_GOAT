import {
  ExperienceItem,
  ProjectItem,
  TechSkillCategory,
  MetricItem,
  CertificationItem,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Gabriel Alexander González García",
  shortName: "Gabriel González",
  role: "Junior Software Engineer",
  tagline: "Building High-Performance, Scalable & Role-Protected Web Architectures",
  summary:
    "Desarrollador Full Stack e Ingeniero de Software Junior enfocado en la construcción de plataformas web estructuradas, altamente escalables, protegidas por roles (RBAC) e integradas con flujos de Inteligencia Artificial (Gemini API, n8n). Experiencia probada en entornos de producción con más de 20.000 usuarios activos diarios.",
  location: "Caracas, Venezuela",
  education: "Computer Engineering Student @ IUJO (Instituto Universitario Jesús Obrero Fe y Alegría)",
  email: "gabogonzalez.dev@gmail.com", // Puedes actualizar a tu correo exacto
  github: "https://github.com/GaboInsane6489",
  linkedin: "https://www.linkedin.com/in/gabriel-gonzalez-fullstack",
  availableForHire: true,
  statusMessage: "Disponible para desafíos de alto impacto",
};

export const METRICS_DATA: MetricItem[] = [
  {
    id: "metric-1",
    value: "+20,000",
    label: "DAU en Producción",
    sublabel: "Usuarios activos diarios gestionados con alta estabilidad",
    highlightText: "High Concurrency",
  },
  {
    id: "metric-2",
    value: "O(n) → O(1)",
    label: "Optimización SQL",
    sublabel: "Refactorización de base de datos para inserciones masivas atómicas",
    highlightText: "High Efficiency",
  },
  {
    id: "metric-3",
    value: "100%",
    label: "RBAC Security",
    sublabel: "Matrices de permisos granulares y rutas protegidas por JWT",
    highlightText: "Enterprise Ready",
  },
  {
    id: "metric-4",
    value: "100/100",
    label: "Lighthouse Score",
    sublabel: "Cero saltos de diseño (CLS = 0) y velocidad de carga instantánea",
    highlightText: "Ultra Performance",
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "exp-obeltech",
    role: "Computer Engineering | Software Developer",
    company: "Obeltech C.A.",
    period: "Ago 2026 — Presente",
    location: "Caracas, Venezuela (Híbrido)",
    type: "Jornada completa",
    isCurrent: true,
    achievements: [
      "Diseño e implementación de Control de Acceso Basado en Roles (RBAC) con matrices de permisos granulares y validación de tokens JWT para perfiles Admin, Corporativo y Auditor.",
      "Desarrollo de interfaces reactivas con navegación split-view y visores interactivos de documentos/datos financieros usando Next.js, TypeScript y Tailwind CSS.",
      "Integración de flujos de trabajo inteligentes con agentes IA (Gemini API) y pipelines n8n para extracción automatizada de documentos y conciliación contable.",
      "Optimización de algoritmos de fallback criptográficos en cliente (SHA-256) con buffers desacoplados para garantizar compatibilidad entre entornos locales y producción.",
      "Conexión de componentes frontend con servicios backend a través de endpoints FastAPI, PostgreSQL y GraphQL.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "GraphQL",
      "Gemini API",
      "n8n",
      "RBAC",
      "JWT",
    ],
  },
  {
    id: "exp-hph",
    role: "Full Stack Developer",
    company: "HarryPotterHead",
    period: "Nov 2025 — Mar 2026",
    location: "Remoto — Suiza",
    type: "Jornada parcial",
    isCurrent: false,
    achievements: [
      "Desarrollo y estabilidad técnica en una comunidad internacional de alto tráfico con más de 20.000 usuarios activos diarios (DAU).",
      "Refactorización del sistema dinámico de trading utilizando SQL Atómico para prevenir condiciones de carrera (Race Conditions) y optimizar inserciones de $O(n)$ a $O(1)$.",
      "Construcción del motor de gamificación impulsado por eventos para logros de usuario y alertas de notificación en tiempo real.",
      "Implementación de arquitectura UX avanzada con sistema de tooltips interactivos vía AJAX para perfiles e ítems, maximizando rendimiento en servidor.",
      "Manejo de migraciones complejas bajo flujo Git estricto (revisiones de PR, squash merging y releases controlados).",
    ],
    technologies: [
      "Full Stack",
      "Atomic SQL",
      "Event-Driven Architecture",
      "AJAX Tooltips",
      "High Traffic (+20k DAU)",
      "Git Flow",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-edtecnica",
    title: "Certificación Programador Full Stack (Aval Universitario)",
    issuer: "EDtecnica",
    period: "Ene 2025 — Dic 2025",
    location: "Caracas, Venezuela",
    hours: 240,
    description:
      "Formación integral de más de 240 horas académicas dominando el ciclo de vida completo de aplicaciones web modernas, arquitecturas Frontend avanzadas, lógica Backend escalable y administración de bases de datos relacionales y no relacionales bajo estándares de producción.",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Clean Architecture",
      "Diseño de Software",
    ],
  },
];

export const TECH_RADAR: TechSkillCategory[] = [
  {
    category: "Frontend & UI Engineering",
    skills: [
      { name: "Next.js (App Router)", level: "Expert" },
      { name: "React 19", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS v4", level: "Expert" },
      { name: "Astro", level: "Advanced" },
      { name: "Responsive & Modern UX", level: "Expert" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "PostgreSQL & Supabase", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "GraphQL & RESTful APIs", level: "Advanced" },
      { name: "RBAC & JWT Security", level: "Expert" },
    ],
  },
  {
    category: "AI, Automation & Workflows",
    skills: [
      { name: "Gemini API (AI Agents)", level: "Advanced" },
      { name: "n8n Automation Pipelines", level: "Advanced" },
      { name: "Document Parsing & AI Logic", level: "Advanced" },
      { name: "Client-Side Cryptography (SHA-256)", level: "Advanced" },
    ],
  },
  {
    category: "Architecture & DevOps",
    skills: [
      { name: "Clean Architecture", level: "Advanced" },
      { name: "High Concurrency ($+20k$ DAU)", level: "Expert" },
      { name: "Git Flow & PR Reviews", level: "Expert" },
      { name: "Vercel CI/CD & Deployments", level: "Expert" },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-enterprise-rbac",
    title: "Enterprise RBAC & AI Workflow Engine",
    category: "Enterprise RBAC",
    description:
      "Plataforma empresarial con matriz de control de acceso basada en roles, split-view navigation y agentes de inteligencia artificial para validación y conciliación de balances.",
    impactMetrics: [
      "Protección estricta de rutas con JWT y RBAC granular",
      "Integración de agentes Gemini API y n8n para análisis documental",
      "Arquitectura de alto rendimiento con Next.js y Tailwind CSS",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Gemini API", "n8n", "PostgreSQL"],
    featured: true,
  },
  {
    id: "proj-trading-engine",
    title: "High-Traffic Trading & Gamification Engine",
    category: "Full Stack",
    description:
      "Motor de intercambio de coleccionables y sistema de logros en tiempo real para comunidad de más de 20.000 usuarios activos diarios sin race conditions.",
    impactMetrics: [
      "Reducción de complejidad en operaciones de base de datos de O(n) a O(1)",
      "Arquitectura basada en eventos para notificaciones en vivo",
      "Tooltips AJAX de alta eficiencia y cero overhead de servidor",
    ],
    technologies: ["Next.js", "TypeScript", "Atomic SQL", "Event Architecture", "AJAX"],
    featured: true,
  },
];
