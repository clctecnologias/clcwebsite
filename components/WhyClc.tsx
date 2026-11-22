const REASONS = [
  {
    title: "Da ideia ao lançamento",
    desc: "Estratégia, design, desenvolvimento e marketing num só parceiro.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    ),
  },
  {
    title: "Tecnologia + criatividade",
    desc: "Soluções modernas com IA, automação e design de alto impacto.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </>
    ),
  },
  {
    title: "Entrega profissional",
    desc: "Prazos claros, qualidade e acompanhamento em cada etapa.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Atendimento próximo",
    desc: "Orçamentos rápidos, portal do cliente e suporte dedicado.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
      />
    ),
  },
];

export default function WhyClc() {
  return (
    <section id="porque" className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2.5">
            PORQUÊ A CLC TECNOLOGIAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight mb-3.5">
            Porquê a CLC Tecnologias?
          </h2>
          <p className="text-zinc-500 text-base">
            Da ideia ao sistema, da marca ao mercado — a tua parceira digital
            completa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-zinc-200/80 rounded-3xl p-7 hover:border-[#FF1E7A]/40 hover:shadow-lg hover:shadow-[#FF1E7A]/5 transition-all"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center mb-6">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#09090B] mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}