export interface ContactChannel {
  id: string;
  title: string;
  value: string;
  description: string;
  actionLabel: string;
  href: string;
  type: "email" | "phone" | "location" | "hours";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    title: "E-mail Comercial",
    value: "geral@clctecnologias.ao",
    description: "Para propostas, orçamentos e parcerias institucionais.",
    actionLabel: "Enviar e-mail →",
    href: "mailto:geral@clctecnologias.ao",
    type: "email",
  },
  {
    id: "whatsapp",
    title: "Telefone & WhatsApp",
    value: "+244 900 000 000",
    description: "Atendimento rápido para tirar dúvidas ou agendar reunião.",
    actionLabel: "Iniciar conversa →",
    href: "https://wa.me/244900000000?text=Ol%C3%A1%20CLC%20Tecnologias!%20Gostaria%20de%20falar%20com%20a%20equipa.",
    type: "phone",
  },
  {
    id: "location",
    title: "Sede & Atendimento",
    value: "Benfica, Luanda — Angola",
    description: "Reuniões presenciais mediante agendamento prévio.",
    actionLabel: "Agendar visita →",
    href: "#formulario-contacto",
    type: "location",
  },
  {
    id: "hours",
    title: "Horário Operacional",
    value: "Seg – Sex · 08h00 às 17h30",
    description: "Suporte técnico monitorizado para clientes ativos.",
    actionLabel: "Solicitar suporte →",
    href: "#formulario-contacto",
    type: "hours",
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "Em quanto tempo recebo resposta ao meu pedido?",
    answer:
      "A nossa equipa comercial e técnica analisa cada pedido e responde num prazo máximo de 24 horas úteis com os próximos passos ou proposta.",
  },
  {
    question: "Posso agendar uma reunião antes de fechar o orçamento?",
    answer:
      "Sim. Realizamos reuniões de diagnóstico gratuitas (online ou presenciais em Luanda) para alinhar requisitos, prazos e arquitetura do projeto.",
  },
  {
    question: "A CLC Tecnologias desenvolve projetos totalmente à medida?",
    answer:
      "Sim. Desde websites institucionais e lojas online até aplicações mobile Android/iOS, sistemas ERP/CRM e automações com Inteligência Artificial.",
  },
  {
    question: "Como funciona o acompanhamento após o lançamento?",
    answer:
      "Todos os projetos incluem garantia técnica, acesso ao portal de acompanhamento e planos opcionais de evolução contínua, manutenção e cloud.",
  },
];