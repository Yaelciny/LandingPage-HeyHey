// ============================================================
// Hey Hey Studio — Landing Page Content Data
// All text, images, icons, and elements are centralized here.
// Components consume this data — no hardcoded text in JSX/TSX.
// ============================================================

// Iconos
import {
  Zap,
  Briefcase,
  Heart,
  Eye,
  Pen,
  Target,
  TrendingUp,
  Lightbulb,
  Palette,
  Camera,
  Megaphone,
  PenTool,
  BarChart,
  ShoppingBag,
  Users,
  Rocket,
  Star,
  type LucideIcon,
} from "lucide-react";

// Interfaces
export interface Brand {
  name: string;
  suffix: string;
  full: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  id: number;
  text: string;
}

export interface AboutCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AboutSection {
  title: string;
  description: string;
  cards: AboutCard[];
}

export interface ServiceItem {
  id: number;
  name: string;
  icon: LucideIcon;
}

export interface ServicesSection {
  subtitle: string;
  title: string;
  intro: string;
  items: ServiceItem[];
  closing: string;
}

export interface WorkflowStep {
  id: number;
  num: string;
  title: string;
  description: string;
}

export interface WorkflowSection {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface CaseStudyItem {
  name: string;
  tags: string;
  icon: LucideIcon;
}

export interface ProjectsSection {
  subtitle: string;
  title: string;
  intro: string;
  workflow: WorkflowSection;
  casesTitle: string;
  cases: CaseStudyItem[];
  viewProjectText: string;
}

export interface ContactItem {
  label: string;
  value: string;
  sub?: string;
  href?: string;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  items: ContactItem[];
  cta: string;
  closing: string;
}

export interface FooterData {
  copyright: string;
  tagline: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  og: {
    title: string;
    description: string;
    type: string;
    locale: string;
  };
}

export interface SiteData {
  brand: Brand;
  siteName: string;
  siteDescription: string;
  navLinks: NavLink[];
  banners: Banner[];
  features: Feature[];
  experienceTitle: string;
  experience: ExperienceItem[];
  about: AboutSection;
  services: ServicesSection;
  projects: ProjectsSection;
  contact: ContactSection;
  footer: FooterData;
  metadata: SiteMetadata;
  scrollIndicatorText: string;
}

// === DATOS EDITABLES ===

export const brand: Brand = {
  name: "Hey Hey",
  suffix: "Studio",
  full: "Hey Hey Studio",
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const siteMetadata = {
  title: "Hey Hey Studio — Agencia de Marketing Creativo",
  description:
    "Transformamos ideas en marcas que se recuerdan. Branding, contenido y marketing digital con creatividad estratégica enfocada en resultados.",
  keywords: [
    "marketing creativo",
    "branding",
    "identidad de marca",
    "diseño gráfico",
    "redes sociales",
    "marketing digital",
    "Hey Hey Studio",
    "León Guanajuato",
  ],
  og: {
    title: "Hey Hey Studio — Agencia de Marketing Creativo",
    description:
      "Transformamos ideas en marcas que se recuerdan. Branding, contenido y marketing digital.",
    type: "website" as const,
    locale: "es_MX",
  },
};

// Objeto principal que agrupa todos los datos del sitio
export const siteData: SiteData = {
  brand,
  siteName: brand.full,
  siteDescription:
    "Transformamos ideas en marcas que se recuerdan. Branding, contenido y marketing digital.",
  navLinks,

  // ----- HERO / INICIO -----
  banners: [
    {
      id: 1,
      title: "Hey Hey Studio",
      subtitle: "Agencia de Marketing Creativo",
      description: "Transformamos ideas en marcas que se recuerdan.",
    },
    {
      id: 2,
      title: "Creatividad + Estrategia",
      subtitle: "Soluciones digitales que conectan y venden",
      description: "Tu marca no necesita más ruido, necesita una estrategia.",
    },
    {
      id: 3,
      title: "Branding, contenido y marketing digital",
      subtitle: "Marcas auténticas con voz propia",
      description:
        "Las marcas que se atreven a ser diferentes son las que se quedan en la mente.",
    },
  ],

  features: [
    {
      id: 1,
      title: "Creatividad Estratégica",
      description: "Enfocada en resultados que impulsan tu marca.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Experiencia en Marcas",
      description: "Construcción de identidades con impacto real.",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Acompañamiento Creativo",
      description: "Te guiamos en todo el proceso, paso a paso.",
      icon: Heart,
    },
    {
      id: 4,
      title: "Comunicación Visual",
      description: "Profesionalismo y coherencia en cada pieza.",
      icon: Eye,
    },
    {
      id: 5,
      title: "Contenido Auténtico",
      description: "Diseñado con intención para conectar con tu audiencia.",
      icon: Pen,
    },
  ],

  experienceTitle: "Creatividad, Estrategia y Resultados",
  experience: [
    { id: 1, text: "Atención personalizada para marcas y emprendedores." },
    { id: 2, text: "Integración de soluciones creativas y estratégicas." },
    { id: 3, text: "Adaptabilidad a distintos sectores y necesidades." },
    { id: 4, text: "Servicio profesional enfocado en resultados medibles." },
  ],

  // ----- SOBRE NOSOTROS -----
  about: {
    title: brand.full,
    description:
      "En Hey Hey Studio creemos que cada marca tiene algo único que contar. Por eso combinamos estrategia, creatividad y comunicación digital para construir proyectos que conectan, inspiran y generan resultados. Nos apasiona transformar ideas en marcas con identidad, personalidad y presencia en el mundo digital.",
    cards: [
      {
        id: 1,
        title: "Nuestra Misión",
        description:
          "Potenciar marcas a través de estrategias creativas que generan conexiones reales y resultados tangibles.",
        icon: Target,
      },
      {
        id: 2,
        title: "Trayectoria",
        description:
          "Contamos con experiencia en branding, diseño y marketing digital, atendiendo diversos sectores con un enfoque en creatividad y cumplimiento.",
        icon: TrendingUp,
      },
      {
        id: 3,
        title: "Valor Agregado",
        description:
          "No creemos en lo genérico. Creemos en marcas que destacan. Diseñamos soluciones que combinan estrategia, identidad y contenido.",
        icon: Lightbulb,
      },
    ],
  },

  // ----- SERVICIOS -----
  services: {
    subtitle: "Servicios",
    title: "Soluciones creativas para tu marca",
    intro: "Soluciones creativas diseñadas para que tu marca destaque.",
    items: [
      { id: 1, name: "Branding e Identidad de Marca", icon: Palette },
      { id: 2, name: "Diseño de Logotipo y Manual de Marca", icon: Pen },
      { id: 3, name: "Gestión de Redes Sociales", icon: Megaphone },
      { id: 4, name: "Creación de Contenido Visual", icon: Camera },
      { id: 5, name: "Diseño Gráfico para Marcas", icon: Palette },
      { id: 6, name: "Publicidad en Redes Sociales", icon: ShoppingBag },
      { id: 7, name: "Copywriting y Storytelling", icon: PenTool },
      { id: 8, name: "Estrategias de Marketing Digital", icon: TrendingUp },
      { id: 9, name: "Marketing de Contenidos", icon: BarChart },
      { id: 10, name: "Consultoría Creativa y Estrategia de Marca", icon: Lightbulb },
      { id: 11, name: "Automatización de Marketing", icon: Rocket },
      { id: 12, name: "Análisis de métricas y optimización", icon: BarChart },
    ],
    closing: "Porque en marketing no solo se trata de crear... se trata de crecer.",
  },

  // ----- NUESTROS PROYECTOS -----
  projects: {
    subtitle: "Nuestros Proyectos",
    title: "Proyectos que hablan por sí solos",
    intro:
      "Cada proyecto representa una historia, una idea y una marca con algo único qué decir. Más que diseños, creamos experiencias de marca.",
    workflow: {
      title: "Nuestro Proceso",
      subtitle: "Cómo trabajamos",
      steps: [
        {
          id: 1,
          num: "01",
          title: "Entendemos tu marca",
          description: "Conocemos tu historia, tu audiencia y tus objetivos.",
        },
        {
          id: 2,
          num: "02",
          title: "Creamos la estrategia",
          description: "Diseñamos un plan creativo alineado a tus metas.",
        },
        {
          id: 3,
          num: "03",
          title: "Desarrollamos el proyecto",
          description: "Damos vida a la estrategia con diseño y contenido.",
        },
        {
          id: 4,
          num: "04",
          title: "Optimizamos resultados",
          description: "Medimos, ajustamos y mejoramos continuamente.",
        },
      ],
    },
    casesTitle: "Casos de Éxito",
    cases: [
      { name: "Café Aurora", tags: "Branding / Identidad visual", icon: Star },
      { name: "Fit Gym", tags: "Gestión de redes + contenido", icon: Star },
      { name: "Casa Verde", tags: "Branding + estrategia digital", icon: Star },
    ],
    viewProjectText: "Ver proyecto",
  },

  // ----- CONTACTO -----
  contact: {
    title: "Contacto",
    subtitle: "Hablemos de tu proyecto",
    items: [
      {
        label: "Ubicación",
        value:
          "Av. León 508-Int. 11, Jardines del Moral, 37160 León de los Aldama, Gto.",
        sub: "Atención en línea y proyectos en toda la República Mexicana.",
      },
      {
        label: "Teléfono / WhatsApp",
        value: "+523312694198",
        href: "https://wa.me/523312694198",
      },
      {
        label: "Correo electrónico",
        value: "hola@heyheymarketing.mx",
        href: "mailto:hola@heyheymarketing.mx",
      },
      {
        label: "Instagram",
        value: "@hey_hey_marketing",
        href: "https://instagram.com/hey_hey_marketing",
      },
    ],
    cta: "Contáctanos",
    closing: "Tu marca tiene potencial. Nosotros te ayudamos a hacerlo visible.",
  },

  // ----- FOOTER -----
  footer: {
    copyright: `© ${new Date().getFullYear()} Hey Hey Studio. Todos los derechos reservados.`,
    tagline: "Agencia de Marketing Creativo",
  },

  // ----- METADATA -----
  metadata: siteMetadata,

  scrollIndicatorText: "Scroll",
};

// Exports individuales para compatibilidad con componentes existentes
export const heroSection = {
  banners: siteData.banners,
  distinctives: siteData.features.map((f) => ({ label: f.title })),
  scrollIndicatorText: siteData.scrollIndicatorText,
};

export const aboutSection = {
  sectionLabel: "Sobre Nosotros",
  concept: siteData.about.description.split(". ")[0] + ".",
  description: siteData.about.description,
  valuesTitle: "Lo que nos define",
  values: siteData.experience.map((e) => ({ label: e.text })),
  closing:
    "En Hey Hey Studio no solo diseñamos... construimos marcas que dejan huella.",
};

export const servicesSection = {
  sectionLabel: siteData.services.subtitle,
  intro: siteData.services.intro,
  services: siteData.services.items,
  closing: siteData.services.closing,
};

export const projectsSection = {
  sectionLabel: siteData.projects.subtitle,
  intro: siteData.projects.intro,
  processTitle: siteData.projects.workflow.title,
  process: siteData.projects.workflow.steps.map((s) => ({
    id: s.id,
    title: s.title,
  })),
  casesTitle: siteData.projects.casesTitle,
  cases: siteData.projects.cases,
  viewProjectText: siteData.projects.viewProjectText,
};

export const contactSection = {
  sectionLabel: siteData.contact.title,
  title: siteData.contact.subtitle,
  info: {
    address: siteData.contact.items[0].value,
    addressNote: siteData.contact.items[0].sub,
    phone: siteData.contact.items[1].value,
    email: siteData.contact.items[2].value,
    instagram: siteData.contact.items[3].href,
    instagramHandle: siteData.contact.items[3].value,
  },
  items: siteData.contact.items,
  cta: siteData.contact.cta,
  closing: siteData.contact.closing,
};

export const footerData = {
  copyright: siteData.footer.copyright,
  tagline: siteData.footer.tagline,
};

export const brandName = brand.full;
export { type LucideIcon } from "lucide-react";
