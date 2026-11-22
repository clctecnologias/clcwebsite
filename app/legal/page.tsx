"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import Modals from "@/components/Modals";
import { LEGAL_DOCUMENTS, LegalTabId } from "@/data/legalData";

const TABS: { id: LegalTabId; label: string }[] = [
  { id: "informacao-legal", label: "Informação Legal" },
  { id: "privacidade", label: "Política de Privacidade" },
  { id: "termos", label: "Termos e Condições" },
];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<LegalTabId>("informacao-legal");
  const [clientAreaOpen, setClientAreaOpen] = useState(false);

  // Sincroniza a aba caso o utilizador aceda via âncora (#privacidade, #termos, #informacao-legal)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "") as LegalTabId;
      if (hash && LEGAL_DOCUMENTS[hash]) {
        setActiveTab(hash);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const handleTabChange = (tabId: LegalTabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  const currentDoc = LEGAL_DOCUMENTS[activeTab];

  return (
    <main className="min-h-screen bg-white text-[#09090B]">
      <Navbar
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={() => {
          window.location.href = "/contactos";
        }}
      />

      {/* Hero da Secção Legal */}
      <section className="relative pt-36 pb-14 sm:pt-44 sm:pb-16 overflow-hidden bg-white border-b border-zinc-100">
        <HeroCanvas />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 22%, rgba(255, 30, 122, 0.08) 0%, transparent 45%), radial-gradient(circle at 82% 28%, rgba(255, 30, 122, 0.07) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-2xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF1E7A]" />
            <span className="text-xs font-semibold text-zinc-600">
              Transparência & Conformidade
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#09090B] leading-[1.12] mb-4">
            Centro Legal e
            <span className="block hero-text-gradient mt-1">
              Privacidade CLC
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Consulte os dados institucionais, a política de tratamento e
            proteção de dados pessoais e os termos gerais de utilização dos
            nossos serviços digitais.
          </p>

          {/* Navegação por Abas */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#FAFAFB] border border-zinc-200/80">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "pink-gradient-btn text-white"
                      : "text-zinc-600 hover:text-[#09090B]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conteúdo do Documento Selecionado */}
      <section id={currentDoc.id} className="py-16 sm:py-20 bg-[#FAFAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <article className="bg-white border border-zinc-200/80 rounded-[32px] p-7 sm:p-12 shadow-2xs">
            {/* Cabeçalho do Documento */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-zinc-100">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-[11px] font-bold mb-2.5">
                  {currentDoc.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090B]">
                  {currentDoc.title}
                </h2>
              </div>

              <span className="text-xs font-medium text-zinc-400">
                Última atualização: {currentDoc.lastUpdated}
              </span>
            </div>

            {/* Introdução */}
            <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed mb-8">
              {currentDoc.intro}
            </p>

            {/* Cláusulas e Secções */}
            <div className="space-y-8">
              {currentDoc.blocks.map((block) => (
                <div key={block.heading} className="space-y-3">
                  <h3 className="text-lg font-extrabold text-[#09090B]">
                    {block.heading}
                  </h3>

                  {block.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm text-zinc-600 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {block.bullets && (
                    <ul className="space-y-2 pt-1">
                      {block.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-zinc-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E7A] mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Rodapé do Documento */}
            <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-zinc-500">
                Dúvidas sobre estes termos? Fale connosco em{" "}
                <a
                  href="mailto:geral@clctecnologias.ao"
                  className="font-bold text-[#FF1E7A] hover:underline"
                >
                  geral@clctecnologias.ao
                </a>
              </p>

              <a
                href="/contactos"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-zinc-200 text-xs font-bold text-[#09090B] hover:border-[#FF1E7A] hover:text-[#FF1E7A] transition-colors"
              >
                Contactar suporte legal →
              </a>
            </div>
          </article>
        </div>
      </section>

      <Footer
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={() => {
          window.location.href = "/contactos";
        }}
      />

      <FloatingWidgets
        onOpenSupport={() => {
          window.location.href = "/contactos";
        }}
      />

      <Modals
        selectedService={null}
        onCloseService={() => {}}
        onRequestQuoteFromService={() => {
          window.location.href = "/contactos";
        }}
        clientAreaOpen={clientAreaOpen}
        onCloseClientArea={() => setClientAreaOpen(false)}
      />
    </main>
  );
}