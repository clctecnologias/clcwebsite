export type PortfolioCategory =
  | "Todos"
  | "Websites"
  | "Mobile"
  | "Sistemas Web"
  | "IA & Automação";

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: Exclude<PortfolioCategory, "Todos">;
  badge: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  year: string;
  mockupVariant: "web" | "mobile" | "erp" | "ai";
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "agrolunga-platform",
    title: "AgroLunga — Plataforma Comercial & Gestão",
    client: "AgroLunga Digital",
    category: "Websites",
    badge: "Destaque",
    summary:
      "Plataforma web de alto desempenho com catálogo dinâmico, localização e arquitetura escalável.",
    challenge:
      "Unificar o catálogo de produtos agrícolas e melhorar a experiência de navegação em dispositivos móveis com ligações variáveis.",
    solution:
      "Desenvolvemos uma aplicação web moderna com carregamento rápido, tipagem estrita e painéis estruturados para equipas comerciais.",
    metrics: [
      { label: "Tempo de carregamento", value: "0.8s" },
      { label: "Aumento de contactos", value: "+64%" },
      { label: "Disponibilidade", value: "99.9%" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API REST"],
    year: "2026",
    mockupVariant: "web",
  },
  {
    id: "nigro-hub",
    title: "Nigro — Ecossistema de Autenticação & Painéis",
    client: "Nigro Systems",
    category: "Sistemas Web",
    badge: "Destaque",
    summary:
      "Sistema web modular com gestão de sessões, rotas condicionais e controlo operacional centralizado.",
    challenge:
      "Garantir segurança de sessão, fluidez na navegação entre módulos e clareza na leitura de dados operacionais.",
    solution:
      "Implementámos hooks dedicados de autenticação, gestão de estado reativa e dashboards orientados a produtividade.",
    metrics: [
      { label: "Produtividade interna", value: "+48%" },
      { label: "Erros de fluxo", value: "-72%" },
      { label: "Módulos integrados", value: "12" },
    ],
    stack: ["Next.js", "React", "TypeScript", "Role Auth"],
    year: "2026",
    mockupVariant: "erp",
  },
  {
    id: "gestao-academica-360",
    title: "EduCore — Gestão Académica e Propinas",
    client: "Instituições de Ensino",
    category: "Sistemas Web",
    badge: "Em Produção",
    summary:
      "Módulo administrativo e financeiro focado no registo de estudantes, controlo de pagamentos e relatórios.",
    challenge:
      "Substituir registos dispersos por uma visão centrada no aluno com estados claros de pagamento e fluxos rápidos.",
    solution:
      "Criámos grelhas dinâmicas de estado, janelas modais contextuais e relatórios estruturados para secretarias e direção.",
    metrics: [
      { label: "Rapidez no atendimento", value: "3x" },
      { label: "Precisão de registos", value: "99.8%" },
      { label: "Perfis de acesso", value: "5" },
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Dashboards"],
    year: "2026",
    mockupVariant: "erp",
  },
  {
    id: "kamba-pay-app",
    title: "KambaGo — App Mobile de Serviços e Pedidos",
    client: "KambaGo Mobilidade",
    category: "Mobile",
    badge: "Destaque",
    summary:
      "Aplicação mobile para Android e iOS com acompanhamento em tempo real, notificações e pagamentos digitais.",
    challenge:
      "Oferecer uma jornada simples do pedido à confirmação final tanto para utilizadores finais como para operadores.",
    solution:
      "Construímos uma interface móvel limpa, intuitiva e sincronizada com serviços em nuvem de baixa latência.",
    metrics: [
      { label: "Avaliação média", value: "4.9 ★" },
      { label: "Retenção mensal", value: "78%" },
      { label: "Tempo de resposta", value: "<120ms" },
    ],
    stack: ["React Native", "API REST", "Push Alerts", "Cloud"],
    year: "2025",
    mockupVariant: "mobile",
  },
  {
    id: "clc-assistente-ia",
    title: "CLC Desk AI — Triagem e Atendimento Inteligente",
    client: "Empresas & Atendimento B2B",
    category: "IA & Automação",
    badge: "Inovação",
    summary:
      "Fluxos automatizados e assistente inteligente para qualificação de pedidos, respostas rápidas e encaminhamento.",
    challenge:
      "Reduzir o tempo de espera no primeiro contacto e organizar pedidos recebidos fora do horário comercial.",
    solution:
      "Estruturámos respostas guiadas, captura estruturada de requisitos e integração direta com o fluxo comercial.",
    metrics: [
      { label: "Disponibilidade", value: "24/7" },
      { label: "Resposta inicial", value: "< 3s" },
      { label: "Triagem automática", value: "82%" },
    ],
    stack: ["IA Aplicada", "Webhooks", "Automação", "Analytics"],
    year: "2026",
    mockupVariant: "ai",
  },
  {
    id: "praca-leitura-portal",
    title: "Praça da Leitura — Portal Cultural & Programação",
    client: "Comunidade Académica & Cultural",
    category: "Websites",
    badge: "Comunidade",
    summary:
      "Website informativo e interativo para divulgação de programação cultural, oficinas, debates e inscrições.",
    challenge:
      "Centralizar horários, espaços temáticos e chamadas para participação num formato acessível e visualmente apelativo.",
    solution:
      "Desenvolvemos um portal leve com navegação direta por atividades, identidade vibrante e foco na participação do público.",
    metrics: [
      { label: "Participantes alcançados", value: "+1.500" },
      { label: "Tempo na página", value: "3m 40s" },
      { label: "Acesso mobile", value: "86%" },
    ],
    stack: ["Next.js", "Tailwind CSS", "UI/UX", "SEO"],
    year: "2026",
    mockupVariant: "web",
  },
];