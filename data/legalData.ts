export type LegalTabId = "informacao-legal" | "privacidade" | "termos";

export interface LegalSectionBlock {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  id: LegalTabId;
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  blocks: LegalSectionBlock[];
}

export const LEGAL_DOCUMENTS: Record<LegalTabId, LegalDocument> = {
  "informacao-legal": {
    id: "informacao-legal",
    badge: "Identificação Institucional",
    title: "Informação Legal",
    lastUpdated: "Novembro de 2026",
    intro:
      "Em conformidade com as normas aplicáveis ao comércio eletrónico e prestação de serviços digitais na República de Angola, disponibilizamos os dados identificativos da entidade titular desta plataforma.",
    blocks: [
      {
        heading: "1. Titularidade do Website",
        paragraphs: [
          "O presente website e os serviços digitais associados são geridos e operados pela CLC Tecnologias — Prestação de Serviços, Lda.",
        ],
        bullets: [
          "Denominação Social: CLC Tecnologias — Prestação de Serviços, Lda",
          "NIF: 5000000000 (substituir pelo NIF oficial registado)",
          "Matrícula Comercial: 00000-00/000000",
          "Capital Social: Kz 100.000,00 (cem mil kwanzas)",
          "Sede Social: Rua Principal, Bairro Benfica, Município de Belas, Província de Luanda, Angola",
          "E-mail de Contacto Oficial: geral@clctecnologias.ao",
        ],
      },
      {
        heading: "2. Propriedade Intelectual e Industrial",
        paragraphs: [
          "Todos os elementos visuais, logótipos, marcas registadas, código-fonte, textos, protótipos, ilustrações e arquiteturas de software exibidos neste portal são propriedade exclusiva da CLC Tecnologias ou de terceiros que autorizaram expressamente a sua utilização.",
          "É proibida a reprodução, distribuição, modificação ou exploração comercial total ou parcial dos conteúdos sem autorização prévia e escrita da CLC Tecnologias.",
        ],
      },
      {
        heading: "3. Limitação de Responsabilidade Técnica",
        paragraphs: [
          "A CLC Tecnologias emprega boas práticas de engenharia, segurança e disponibilidade em nuvem, não se responsabilizando, contudo, por interrupções decorrentes de falhas nas redes públicas de telecomunicações, ataques externos fora do controlo razoável ou utilização indevida por parte dos utilizadores.",
        ],
      },
    ],
  },

  privacidade: {
    id: "privacidade",
    badge: "Proteção de Dados",
    title: "Política de Privacidade",
    lastUpdated: "Novembro de 2026",
    intro:
      "A CLC Tecnologias respeita a privacidade de clientes, parceiros e visitantes, garantindo o tratamento transparente e seguro dos dados pessoais em conformidade com a Lei de Proteção de Dados Pessoais de Angola (Lei n.º 22/11).",
    blocks: [
      {
        heading: "1. Dados Pessoais Recolhidos",
        paragraphs: [
          "Recolhemos apenas os dados estritamente necessários para responder a pedidos de orçamento, agendar reuniões, prestar suporte técnico ou executar contratos de desenvolvimento.",
        ],
        bullets: [
          "Dados de identificação e contacto: nome completo, e-mail corporativo e número de telefone/WhatsApp;",
          "Dados empresariais: nome da empresa ou organização, cargo e requisitos técnicos do projeto;",
          "Dados técnicos essenciais: registos de segurança e métricas anónimas de desempenho da plataforma.",
        ],
      },
      {
        heading: "2. Finalidade do Tratamento",
        paragraphs: [
          "Os dados fornecidos nos formulários da CLC Tecnologias são utilizados exclusivamente para:",
        ],
        bullets: [
          "Elaboração e envio de propostas comerciais e diagnósticos técnicos;",
          "Comunicação direta sobre projetos em curso, faturamento e suporte ao cliente;",
          "Cumprimento de obrigações legais, fiscais e contratuais.",
        ],
      },
      {
        heading: "3. Partilha, Segurança e Retenção",
        paragraphs: [
          "A CLC Tecnologias não vende, aluga nem cede dados pessoais a terceiros para fins publicitários. Os dados são armazenados em servidores protegidos com controlo de acesso restrito e encriptação em trânsito (HTTPS/TLS).",
          "Conservamos as informações apenas durante o período necessário para cumprir as finalidades acima descritas ou prazos legais aplicáveis.",
        ],
      },
      {
        heading: "4. Direitos do Titular dos Dados",
        paragraphs: [
          "A qualquer momento, o titular pode solicitar o acesso, retificação, atualização ou eliminação dos seus dados pessoais através do e-mail geral@clctecnologias.ao.",
        ],
      },
    ],
  },

  termos: {
    id: "termos",
    badge: "Condições Gerais",
    title: "Termos e Condições de Uso",
    lastUpdated: "Novembro de 2026",
    intro:
      "Estes Termos e Condições regulam o acesso e a utilização do website da CLC Tecnologias, bem como as diretrizes gerais aplicáveis aos pedidos de orçamento e contratação de soluções digitais.",
    blocks: [
      {
        heading: "1. Aceitação dos Termos",
        paragraphs: [
          "Ao navegar neste website, preencher formulários de contacto ou aceder à Área de Cliente, o utilizador declara ter lido, compreendido e aceite integralmente os presentes Termos e Condições.",
        ],
      },
      {
        heading: "2. Orçamentos e Contratação de Serviços",
        paragraphs: [
          "Os pedidos submetidos através do website constituem solicitações de proposta técnica e comercial, não representando vínculo contratual automático até à aprovação formal do escopo, cronograma e condições financeiras por ambas as partes.",
        ],
        bullets: [
          "Cada projeto é regido por proposta específica ou contrato de prestação de serviços;",
          "Os prazos de entrega dependem da complexidade técnica e da entrega atempada de conteúdos ou aprovações pelo cliente;",
          "Alterações de escopo solicitadas após o início do desenvolvimento são avaliadas e orçamentadas em separado.",
        ],
      },
      {
        heading: "3. Uso Adequado da Plataforma e Área de Cliente",
        paragraphs: [
          "O utilizador compromete-se a fornecer informações verdadeiras nos formulários e a manter a confidencialidade das suas credenciais de acesso ao Portal do Cliente, não podendo utilizar a plataforma para fins ilícitos ou que comprometam a integridade dos sistemas.",
        ],
      },
      {
        heading: "4. Lei Aplicável e Foro Competente",
        paragraphs: [
          "Os presentes Termos e Condições regem-se pela legislação vigente na República de Angola. Para a resolução de qualquer litígio emergente da interpretação ou execução destes termos, fica estipulado o foro da Comarca de Luanda, com renúncia expressa a qualquer outro.",
        ],
      },
    ],
  },
};