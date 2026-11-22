export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  featured?: boolean;
  extra?: boolean;
  mockupType: "websites" | "mobile" | "systems" | "ai" | "design" | "cloud";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "websites",
    title: "Websites profissionais",
    shortDesc:
      "Sites institucionais, landing pages e e-commerce rápidos e seguros.",
    fullDesc:
      "Projetamos e desenvolvemos plataformas web ultra-rápidas com foco em SEO técnico, conversão comercial e design exclusivo alinhado à sua identidade.",
    deliverables: [
      "Design UI/UX exclusivo responsivo",
      "Otimização Core Web Vitals & SEO",
      "Painel administrativo fácil de gerir",
      "Certificado SSL e deploy em cloud",
    ],
    timeline: "2 a 4 semanas",
    featured: true,
    mockupType: "websites",
  },
  {
    id: "mobile",
    title: "Aplicações mobile",
    shortDesc:
      "Apps Android e iOS para o seu negócio, lojistas e clientes.",
    fullDesc:
      "Aplicações nativas e multiplataforma de alta fluidez com notificações push, pagamentos integrados, geolocalização e publicação nas lojas oficiais.",
    deliverables: [
      "Apps iOS e Android sincronizados",
      "Integração com gateways de pagamento",
      "Autenticação biométrica e segurança",
      "Publicação App Store & Google Play",
    ],
    timeline: "4 a 8 semanas",
    featured: true,
    mockupType: "mobile",
  },
  {
    id: "systems",
    title: "Sistemas Web",
    shortDesc:
      "CRM, ERP, reservas, gestão e plataformas à medida.",
    fullDesc:
      "Arquitetura de software robusta para digitalizar processos internos, controlar operações em tempo real e escalar equipas sem limitações.",
    deliverables: [
      "Controlo de permissões e utilizadores",
      "Dashboards analíticos e relatórios",
      "APIs REST/GraphQL documentadas",
      "Backups automáticos e auditoria",
    ],
    timeline: "6 a 12 semanas",
    featured: true,
    mockupType: "systems",
  },
  {
    id: "ai",
    title: "Automação & IA",
    shortDesc:
      "Agentes inteligentes, chatbots e fluxos automatizados 24/7.",
    fullDesc:
      "Implementamos assistentes com IA generativa integrados ao WhatsApp, CRM e ERP para responder clientes, qualificar leads e eliminar tarefas manuais.",
    deliverables: [
      "Agentes treinados com dados da empresa",
      "Integração WhatsApp Business API",
      "Automação de faturamento e suporte",
      "Métricas de atendimento em tempo real",
    ],
    timeline: "1 a 3 semanas",
    extra: true,
    mockupType: "ai",
  },
  {
    id: "design",
    title: "Design UI/UX & Marca",
    shortDesc:
      "Identidade visual, protótipos interativos e sistemas de design.",
    fullDesc:
      "Criamos interfaces intuitivas e memoráveis que aumentam a retenção de utilizadores e posicionam a sua empresa como referência no setor.",
    deliverables: [
      "Design System completo no Figma",
      "Protótipos navegáveis testados",
      "Identidade visual e guia de marca",
      "Micro-interações e acessibilidade",
    ],
    timeline: "2 a 3 semanas",
    extra: true,
    mockupType: "design",
  },
  {
    id: "cloud",
    title: "Cloud & Infraestrutura",
    shortDesc:
      "Servidores escaláveis, DevOps, segurança e monitorização contínua.",
    fullDesc:
      "Migração, otimização e gestão de servidores em nuvem com alta disponibilidade, proteção DDoS e pipelines automáticos de deploy.",
    deliverables: [
      "Arquitetura AWS / Google Cloud / Vercel",
      "CI/CD automatizado sem downtime",
      "Monitorização 24/7 com alertas",
      "Hardening e conformidade de dados",
    ],
    timeline: "1 a 2 semanas",
    extra: true,
    mockupType: "cloud",
  },
];