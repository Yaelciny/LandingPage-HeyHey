// ============================================================
// Hey Hey Studio — Landing Page Content Data
// All text, titles, descriptions and elements are centralized here.
// Components consume this data — no hardcoded text in JSX/TSX.
// ============================================================

// ----- TYPES -----

export interface BannerSlide {
  title: string;
  subtitle: string;
  description: string;
}

export interface Distinctive {
  label: string;
}

export interface DefiningValue {
  label: string;
}

export interface Service {
  id: number;
  name: string;
}

export interface ProcessStep {
  id: number;
  title: string;
}

export interface CaseStudy {
  name: string;
  tags: string;
}

export interface ContactInfo {
  address: string;
  addressNote: string;
  phone: string;
  email: string;
  instagram: string;
  instagramHandle: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ----- NAVIGATION -----

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const brandName = "Hey Hey Studio";

// ----- HERO / INICIO -----

export const heroSection = {
  banners: [
    {
      title: "Hey Hey Studio",
      subtitle: "Agencia de Marketing Creativo",
      description: "Transformamos ideas en marcas que se recuerdan.",
    },
    {
      title: "Creatividad + Estrategia",
      subtitle: "Soluciones digitales que conectan y venden",
      description:
        "Tu marca no necesita más ruido, necesita una estrategia.",
    },
    {
      title: "Branding, contenido y marketing digital",
      subtitle: "Marcas auténticas con voz propia",
      description:
        "Las marcas que se atreven a ser diferentes son las que se quedan en la mente.",
    },
  ] as BannerSlide[],

  distinctives: [
    { label: "Creatividad estratégica enfocada en resultados" },
    { label: "Experiencia en construcción de marcas" },
    { label: "Acompañamiento en todo el proceso creativo" },
    { label: "Comunicación visual profesional" },
    { label: "Contenido auténtico y diseñado con intención" },
  ] as Distinctive[],
};

// ----- SOBRE NOSOTROS -----

export const aboutSection = {
  sectionLabel: "Sobre Nosotros",
  concept: "Agencia de marketing creativo y diseño estratégico.",
  description:
    "En Hey Hey Studio creemos que cada marca tiene algo único que contar. Por eso combinamos estrategia, creatividad y comunicación digital para construir proyectos que conectan, inspiran y generan resultados. Nos apasiona transformar ideas en marcas con identidad, personalidad y presencia en el mundo digital. No creemos en lo genérico. Creemos en marcas que destacan.",
  valuesTitle: "Lo que nos define",
  values: [
    { label: "Creatividad con intención" },
    { label: "Estrategia basada en objetivos" },
    { label: "Ideas pensadas para generar impacto" },
    { label: "Acompañamiento cercano y personalizado" },
    { label: "Resultados medibles y reales" },
  ] as DefiningValue[],
  closing:
    "En Hey Hey Studio no solo diseñamos... construimos marcas que dejan huella.",
};

// ----- SERVICIOS -----

export const servicesSection = {
  sectionLabel: "Servicios",
  intro: "Soluciones creativas diseñadas para que tu marca destaque.",
  services: [
    { id: 1, name: "Branding e Identidad de Marca" },
    { id: 2, name: "Diseño de Logotipo y Manual de Marca" },
    { id: 3, name: "Gestión de Redes Sociales" },
    { id: 4, name: "Creación de Contenido Visual" },
    { id: 5, name: "Diseño Gráfico para Marcas" },
    { id: 6, name: "Publicidad en Redes Sociales" },
    { id: 7, name: "Copywriting y Storytelling" },
    { id: 8, name: "Estrategias de Marketing Digital" },
    { id: 9, name: "Marketing de Contenidos" },
    { id: 10, name: "Consultoría Creativa y Estrategia de Marca" },
    { id: 11, name: "Automatización de Marketing" },
    { id: 12, name: "Análisis de métricas y optimización" },
  ] as Service[],
  closing:
    "Porque en marketing no solo se trata de crear... se trata de crecer.",
};

// ----- NUESTROS PROYECTOS -----

export const projectsSection = {
  sectionLabel: "Nuestros Proyectos",
  intro:
    "Cada proyecto representa una historia, una idea y una marca con algo único qué decir. Más que diseños, creamos experiencias de marca.",
  processTitle: "Nuestro Proceso",
  process: [
    { id: 1, title: "Entendemos tu marca" },
    { id: 2, title: "Creamos la estrategia" },
    { id: 3, title: "Desarrollamos el proyecto" },
    { id: 4, title: "Optimizamos resultados" },
  ] as ProcessStep[],
  casesTitle: "Casos de Éxito",
  cases: [
    { name: "Café Aurora", tags: "Branding / Identidad visual" },
    { name: "Fit Gym", tags: "Gestión de redes + contenido" },
    { name: "Casa Verde", tags: "Branding + estrategia digital" },
  ] as CaseStudy[],
};

// ----- CONTACTO -----

export const contactSection = {
  sectionLabel: "Contacto",
  info: {
    address:
      "Av. León 508-Int. 11, Jardines del Moral, 37160 León de los Aldama, Gto.",
    addressNote:
      "Atención en línea y proyectos en toda la República Mexicana.",
    phone: "+523312694198",
    email: "hola@heyheymarketing.mx",
    instagram: "https://instagram.com/hey_hey_marketing",
    instagramHandle: "@hey_hey_marketing",
  } as ContactInfo,
  closing: "Tu marca tiene potencial. Nosotros te ayudamos a hacerlo visible.",
};

// ----- FOOTER -----

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Hey Hey Studio. Todos los derechos reservados.`,
  tagline: "Agencia de Marketing Creativo",
};
