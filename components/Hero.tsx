"use client";

import HeroCanvas from "./HeroCanvas";

interface HeroProps {
  onSelectServiceAndScroll: (serviceName?: string) => void;
}

export default function Hero({ onSelectServiceAndScroll }: HeroProps) {
  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden bg-white border-b border-zinc-100">
      <HeroCanvas />

      {/* Gradiente radial suave rosa e branco */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(255, 30, 122, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(255, 30, 122, 0.07) 0%, transparent 45%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Pill Badge Superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-xs mb-7">
          <span className="w-2 h-2 rounded-full bg-[#FF1E7A]" />
          <span className="text-xs font-semibold text-zinc-600">
            CLC Tecnologias Digital
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#09090B] leading-[1.08] mb-6">
          Construímos o futuro
          <span className="block hero-text-gradient mt-1">
            digital da sua empresa
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-[18px] text-zinc-500 max-w-2xl mx-auto leading-relaxed font-normal mb-9">
          Websites, sistemas, consultoria digital,
          experiências tecnológicas, soluções feitas à medida para
          crescer.
        </p>

        {/* Botões de Ação Centrais */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            type="button"
            onClick={() => onSelectServiceAndScroll()}
            className="pink-gradient-btn text-white font-semibold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2"
          >
            Solicitar orçamento
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          <a
            href="#servicos"
            className="bg-white border border-zinc-200 hover:border-[#09090B] text-[#09090B] font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            Ver serviços
          </a>

          <button
            type="button"
            onClick={() => onSelectServiceAndScroll("Agendamento de Reunião")}
            className="inline-flex items-center gap-2 text-zinc-700 hover:text-[#FF1E7A] font-semibold text-sm px-4 py-3.5 transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#09090B]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar reunião
          </button>
        </div>

        {/* 3 Micro-benefícios */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium text-zinc-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#FF1E7A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Entrega rápida e fiável</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#FF1E7A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
              />
            </svg>
            <span>Tecnologia de ponta</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#FF1E7A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Suporte dedicado</span>
          </div>
        </div>
      </div>
    </section>
  );
}