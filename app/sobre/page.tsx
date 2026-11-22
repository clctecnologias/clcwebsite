"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import Modals from "@/components/Modals";
import {
  COMPANY_STATS,
  COMPANY_PILLARS,
  LEADERSHIP_TEAM,
  METHODOLOGY_STEPS,
} from "@/data/aboutData";

export default function AboutPage() {
  const [clientAreaOpen, setClientAreaOpen] = useState(false);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState(
    "Websites profissionais"
  );

  const handleSelectServiceAndScroll = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedQuoteService(serviceName);
    }
    const el = document.getElementById("orcamento");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#09090B]">
      <Navbar
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={handleSelectServiceAndScroll}
      />

      {/* Hero Institucional */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 overflow-hidden bg-white border-b border-zinc-100">
        <HeroCanvas />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, rgba(255, 30, 122, 0.08) 0%, transparent 45%), radial-gradient(circle at 82% 28%, rgba(255, 30, 122, 0.07) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF1E7A]" />
            <span className="text-xs font-semibold text-zinc-600">
              Sobre a CLC Tecnologias
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#09090B] leading-[1.1] mb-6">
            Ligamos ideias, pessoas
            <span className="block hero-text-gradient mt-1">
              e o futuro digital
            </span>
          </h1>

          <p className="text-base sm:text-[17.5px] text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-9">
            Somos uma startup de tecnologia focada em engenharia de software,
            design digital e automação inteligente. Ajudamos empresas a
            construir produtos sólidos e preparados para escalar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => handleSelectServiceAndScroll()}
              className="pink-gradient-btn text-white font-semibold text-sm px-7 py-3.5 rounded-full"
            >
              Falar com a equipa →
            </button>
            <a
              href="/portfolio"
              className="bg-white border border-zinc-200 hover:border-[#09090B] text-[#09090B] font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </section>

      {/* Métricas de Destaque */}
      <section className="py-12 bg-[#FAFAFB] border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-zinc-200/80 rounded-3xl p-6 text-center shadow-2xs"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FF1E7A] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História & Quem Somos */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block">
              QUEM SOMOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight leading-tight">
              Engenharia moderna com foco em resultados reais
            </h2>
            <p className="text-zinc-600 text-[15px] leading-relaxed">
              A <strong className="text-[#09090B]">CLC Tecnologias</strong>{" "}
              nasceu com o propósito de elevar o padrão de desenvolvimento de
              software e presença digital. Combinamos rigor arquitetural,
              interfaces intuitivas e agilidade na entrega para resolver
              problemas concretos de negócios.
            </p>
            <p className="text-zinc-500 text-[15px] leading-relaxed">
              Desde plataformas web institucionais e aplicações móveis até
              sistemas corporativos complexos (ERP/CRM) e fluxos com IA,
              atuamos como parceiro tecnológico de ponta a ponta — da conceção
              estratégica à operação contínua.
            </p>
          </div>

          {/* Card Visual Institucional */}
          <div className="lg:col-span-6">
            <div className="service-card-top rounded-[32px] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF1E7A]" />
                DNA CLC Tecnologias
              </div>

              <h3 className="text-2xl font-extrabold leading-snug mb-6">
                “Construímos tecnologia limpa, escalável e feita à medida para
                quem quer liderar o seu mercado.”
              </h3>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15 text-xs">
                <div>
                  <span className="text-white/60 block mb-1">Foco Técnico</span>
                  <span className="font-bold text-white">
                    Web, Mobile, Sistemas & IA
                  </span>
                </div>
                <div>
                  <span className="text-white/60 block mb-1">Compromisso</span>
                  <span className="font-bold text-white">
                    Qualidade, Prazo & Suporte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-[#FAFAFB] border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2.5">
              IDENTIDADE & CULTURA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight mb-3">
              Os pilares que guiam cada entrega
            </h2>
            <p className="text-zinc-500 text-base">
              Clareza estratégica e excelência técnica em todas as fases do
              projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {COMPANY_PILLARS.map((pillar) => (
              <div
                key={pillar.tag}
                className="bg-white border border-zinc-200/80 rounded-3xl p-8 hover:border-[#FF1E7A]/40 hover:shadow-lg hover:shadow-[#FF1E7A]/5 transition-all"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-xs font-bold mb-5">
                  {pillar.tag}
                </span>
                <h3 className="text-xl font-extrabold text-[#09090B] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderança & Equipa */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2.5">
              LIDERANÇA & EQUIPA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight mb-3">
              Pessoas por trás da tecnologia
            </h2>
            <p className="text-zinc-500 text-base">
              Uma estrutura técnica ágil que une visão executiva e rigor de
              engenharia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-[#FAFAFB] border border-zinc-200/80 rounded-3xl p-7 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#09090B] text-white font-extrabold text-sm flex items-center justify-center">
                      {member.initials}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-[11px] font-bold">
                      {member.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#09090B]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FF1E7A] mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia de Trabalho */}
      <section className="py-20 bg-[#FAFAFB] border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2.5">
              COMO TRABALHAMOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight mb-3">
              Da ideia ao lançamento em 4 etapas
            </h2>
            <p className="text-zinc-500 text-base">
              Um processo transparente para garantir previsibilidade e
              qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-zinc-200/80 rounded-3xl p-7 relative"
              >
                <span className="text-2xl font-extrabold text-[#FF1E7A] block mb-4">
                  {item.step}
                </span>
                <h3 className="text-[17px] font-bold text-[#09090B] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection preselectedService={preselectedQuoteService} />

      <Footer
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={handleSelectServiceAndScroll}
      />

      <FloatingWidgets
        onOpenSupport={() =>
          handleSelectServiceAndScroll("Agendamento de Reunião")
        }
      />

      <Modals
        selectedService={null}
        onCloseService={() => {}}
        onRequestQuoteFromService={handleSelectServiceAndScroll}
        clientAreaOpen={clientAreaOpen}
        onCloseClientArea={() => setClientAreaOpen(false)}
      />
    </main>
  );
}