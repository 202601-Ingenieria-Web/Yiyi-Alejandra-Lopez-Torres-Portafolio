// Archivo central con toda la información del portafolio

export const personalInfo = {
  name: "Yiyi Alejandra Lopez Torres",
  title: "Estudiante de Ingeniería de Sistemas",
  subtitle: "Datos · Automatización · Sistemas",
  photo: "/images/profile.png",
  description:
    "Estudiante de Ingeniería de Sistemas con más de 4 años de experiencia en manejo de datos, desarrollo de dashboards y gestión operacional. Construí dashboards en Power BI para seguimiento de KPIs, automaticé generación de informes con Python y realicé validación de datos entre sistemas. Inglés C1.",
  contact: {
    city: "Medellín, Colombia",
    phone: "+57 300 864 0244",
    email: "yiyilopez030@gmail.com",
    linkedin: "linkedin.com/in/yiyi-lopez",
  },
};

export const languages = [
  { name: "Español", percentage: 100, level: "Nativo" },
  { name: "Inglés", percentage: 80, level: "C1" },
];

export const programmingSkills = [
  { name: "Excel / Google Sheets", percentage: 90 },
  { name: "Power BI (DAX, M)", percentage: 85 },
  { name: "SQL", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "Git", percentage: 70 },
];

export const extraSkills = [
  "Validación de Datos",
  "Informes de KPI",
  "REST APIs",
  "SharePoint",
  "Looker Studio",
  "Trabajo Remoto",
  "Teams",
  "Agile",
];

export const knowledge = [
  {
    id: 1,
    title: "Business Intelligence",
    description:
      "Dashboards en Power BI con transformaciones DAX y M para seguimiento de KPIs e informes operacionales.",
    icon: "chart",
  },
  {
    id: 2,
    title: "Automatización con Python",
    description:
      "Pipelines de informes y scripts para automatizar flujos de datos recurrentes y reducir trabajo manual.",
    icon: "code",
  },
  {
    id: 3,
    title: "SQL y Consultas de Datos",
    description:
      "SELECT, JOIN, WHERE, GROUP BY para extracción estructurada y análisis entre sistemas.",
    icon: "database",
  },
  {
    id: 4,
    title: "Calidad de Datos",
    description:
      "Validación entre sistemas, detección de inconsistencias y mantenimiento de integridad en reportes.",
    icon: "check",
  },
  {
    id: 5,
    title: "Informes y Visualización",
    description:
      "Excel, Google Sheets, Looker Studio — herramientas para crear visualizaciones y análisis claros a partir de datos.",
    icon: "bar",
  },
  {
    id: 6,
    title: "Ingeniería de Sistemas",
    description:
      "Estudiante en la Universidad de Antioquia. Enfoque en sistemas de datos, desarrollo de software e ingeniería.",
    icon: "cpu",
  },
];

export const experience = [
  {
    id: 1,
    company: "Bridge Showroom",
    role: "Especialista en Automatización",
    dates: "Ene 2026 – Presente",
    location: "Remoto",
    description:
      "Automatización de flujos de datos y procesos de generación de informes para operaciones remotas. Mantenimiento de sistemas de seguimiento estructurados para gestión de tareas.",
  },
  {
    id: 2,
    company: "Package Squad LLC (Amazon DSP)",
    role: "Directora de Operaciones",
    dates: "Mar 2022 – Ene 2026",
    location: "Colombia, Remoto",
    description:
      "Construí dashboards en Power BI (DAX, M) para seguimiento de KPIs. Realicé extracción y reconciliación de datos entre sistemas. Automaticé flujos de informes con Python.",
  },
  {
    id: 3,
    company: "Fujitsu",
    role: "Especialista de Soporte Técnico",
    dates: "Mar 2021 – Ago 2021",
    location: "Costa Rica, Remoto",
    description:
      "Documenté incidentes en bases de conocimiento internas. Verifiqué integridad de datos entre sistemas. Comuniqué avances y bloqueos bajo SLAs definidos.",
  },
];

export const education = [
  {
    id: 1,
    institution: "Universidad de Antioquia",
    dates: "2022 – Esperado 2026",
    title: "Ing. de Sistemas y Computación",
    description:
      "Desarrollo de software, sistemas de datos y principios de ingeniería. Enfoque en soluciones basadas en datos y sistemas operacionales.",
  },
  {
    id: 2,
    institution: "University of Michigan — Coursera",
    dates: "2024",
    title: "Fundamentos de Ciberseguridad",
    description:
      "Conceptos de seguridad, análisis de amenazas y mejores prácticas para la protección de sistemas de información.",
  },
  {
    id: 3,
    institution: "Google — Coursera",
    dates: "2024",
    title: "Certificado en Gestión de Proyectos",
    description:
      "Planificación de proyectos, gestión de riesgos, comunicación con stakeholders y metodologías ágiles.",
  },
  {
    id: 4,
    institution: "Coursera",
    dates: "2024",
    title: "Python para Ciencia de Datos",
    description:
      "Manipulación de datos con pandas, visualización con matplotlib y scripting para automatización.",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Sistema de Logística",
    description:
      "Aplicación web para gestión y seguimiento de operaciones logísticas, desarrollada en equipo.",
    image: "/images/project1.jpg",
    details:
      "Sistema web de gestión logística desarrollado en equipo. Permite el seguimiento y administración de operaciones, rutas y recursos. Proyecto colaborativo donde participé en el desarrollo frontend y la integración con el backend.",
    link: "https://github.com/EAV06",
    tags: ["Web", "Logística", "Trabajo en equipo"],
  },
  {
    id: 2,
    title: "Plataforma Semilleros UdeA",
    description:
      "Plataforma frontend para la gestión de semilleros de investigación de la Universidad de Antioquia.",
    image: "/images/project2.jpg",
    details:
      "Desarrollo frontend de una plataforma para administrar los semilleros de investigación de la Universidad de Antioquia. Permite a estudiantes y docentes gestionar grupos, proyectos y miembros de los semilleros.",
    link: "https://github.com/yiyilopez/semillerosfront",
    tags: ["React", "Next.js", "Frontend", "UdeA"],
  },
  {
    id: 3,
    title: "ViveMedellín — Backend",
    description:
      "Backend de una aplicación para descubrir y explorar planes y actividades en Medellín.",
    image: "/images/project3.jpg",
    details:
      "Desarrollo del backend de ViveMedellín, una aplicación que conecta a las personas con planes, eventos y actividades de la ciudad. Incluye la gestión de datos, endpoints y la lógica del servidor.",
    link: "https://github.com/yiyilopez/ViveMedellin-Backend",
    tags: ["Backend", "API", "Node.js", "Medellín"],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yiyilopez", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yiyi-lopez", icon: "linkedin" },
  { name: "Email", url: "mailto:yiyilopez030@gmail.com", icon: "email" },
];
