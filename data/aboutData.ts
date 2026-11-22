export interface PillarItem {
  title: string;
  description: string;
  tag: string;
}

export interface LeaderMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  highlight: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

export const COMPANY_STATS = [
  { value: "+45", label: "Projetos entregues" },
  { value: "99.9%", label: "Disponibilidade em nuvem" },
  { value: "< 24h", label: "Resposta a propostas" },
  { value: "100%", label: "Foco em arquitetura limpa" },
];

export const COMPANY_PILLARS: PillarItem[] = [
  {
    tag: "Missão",
    title: "Digitalizar empresas com engenharia de precisão",
    description:
      "Transformar ideias e desafios operacionais em software rápido, seguro e intuitivo, conectando tecnologia de ponta ao crescimento real dos negócios.",
  },
  {
    tag: "Visão",
    title: "Ser referência em inovação tecnológica",
    description:
      "Liderar a modernização digital de empresas e instituições com soluções escaláveis em web, mobile, automação e inteligência aplicada.",
  },
  {
    tag: "Valores",
    title: "Rigor técnico, transparência e proximidade",
    description:
      "Compromisso absoluto com prazos claros, código legível, acompanhamento próximo em cada etapa e entrega orientada a resultados.",
  },
];

export const LEADERSHIP_TEAM: LeaderMember[] = [
  {
    name: "Cirilo Canganjo",
    role: "Fundador & Chief Executive Officer (CEO)",
    bio: "Lidera a visão estratégica, parcerias institucionais e expansão comercial da CLC Tecnologias, conectando oportunidades de mercado a soluções digitais de impacto.",
    initials: "CC",
    highlight: "Estratégia & Negócios",
  },
  {
    name: "Alberto Cativa",
    role: "Co-fundador & Head of Engineering",
    bio: "Coordena a arquitetura de sistemas, padrões de qualidade de engenharia, segurança e entregas técnicas de alta disponibilidade.",
    initials: "AC",
    highlight: "Arquitetura & Engenharia",
  },
  {
    name: "Equipa de Produto & Design",
    role: "Full-Stack, Mobile & UI/UX",
    bio: "Especialistas focados em interfaces de alta conversão, sistemas web modulares, aplicações móveis e fluxos automatizados.",
    initials: "CLC",
    highlight: "Produto & Experiência",
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: "01",
    title: "Diagnóstico & Estratégia",
    description:
      "Mapeamos os objetivos do negócio, fluxos atuais e requisitos técnicos para definir o escopo ideal sem desperdícios.",
  },
  {
    step: "02",
    title: "Prototipagem UI/UX",
    description:
      "Desenhamos interfaces limpas, responsivas e orientadas à experiência do utilizador antes de iniciar o código.",
  },
  {
    step: "03",
    title: "Engenharia Ágil",
    description:
      "Desenvolvimento modular com entregas contínuas, testes rigorosos e total visibilidade do progresso.",
  },
  {
    step: "04",
    title: "Lançamento & Escala",
    description:
      "Deploy seguro em produção, monitorização contínua e suporte técnico dedicado para acompanhar o crescimento.",
  },
];