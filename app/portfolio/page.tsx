"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import CaseStudyModal from "@/components/portfolio/CaseStudyModal";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import Modals from "@/components/Modals";
import {
  PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from "@/data/portfolioData";

const CATEGORIES: PortfolioCategory[] = [
  "Todos",
  "Websites",
  "Mobile",
  "Sistemas Web",
  "IA & Automação",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>("Todos");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null
  );
  const [clientAreaOpen, setClientAreaOpen] = useState(false);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState(
    "Websites profissionais"
  );

  const filteredProjects =
    selectedCategory === "Todos"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

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

      {/* Hero do Portfólio */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden bg-white border-b border-zinc-100">
        <HeroCanvas />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255, 30, 122, 0.08) 0%, transparent 45%), radial-gradient(circle at 82% 25%, rgba(255, 30, 122, 0.07) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF1E7A]" />
            <span className="text-xs font-semibold text-zinc-600">
              Portfólio CLC Tecnologias
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#09090B] leading-[1.1] mb-5">
            Projetos que transformam
            <span className="block hero-text-gradient mt-1">
              ideias em resultados reais
            </span>
          </h1>

          <p className="text-base sm:text-[17px] text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore websites, aplicações mobile, sistemas web e soluções de
            automação desenvolvidos com foco em desempenho, clareza e
            crescimento.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleSelectServiceAndScroll()}
              className="pink-gradient-btn text-white font-semibold text-sm px-7 py-3.5 rounded-full"
            >
              Solicitar orçamento →
            </button>
            <a
              href="/"
              className="bg-white border border-zinc-200 hover:border-[#09090B] text-[#09090B] font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Voltar ao início
            </a>
          </div>
        </div>
      </section>

      {/* Filtros e Grelha de Projetos */}
      <section className="py-20 bg-[#FAFAFB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Barra de Categorias */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-1.5">
                CASOS SELECIONADOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] tracking-tight">
                O que já construímos
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? "pink-gradient-btn text-white"
                        : "bg-white border border-zinc-200 text-zinc-600 hover:border-[#FF1E7A] hover:text-[#FF1E7A]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                onSelectProject={(item) => setActiveProject(item)}
              />
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

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestSimilar={(title) => {
          setActiveProject(null);
          handleSelectServiceAndScroll(title);
        }}
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