"use client";

import { useState, useEffect } from "react";
import {
  useCookieConsent,
  CookiePreferences,
} from "@/hooks/useCookieConsent";

interface CategoryConfig {
  key: keyof Omit<CookiePreferences, "updatedAt">;
  title: string;
  description: string;
  locked?: boolean;
}

const COOKIE_CATEGORIES: CategoryConfig[] = [
  {
    key: "necessary",
    title: "Cookies estritamente necessários",
    description:
      "Essenciais para navegação, segurança, equilíbrio de carga e funcionamento básico da plataforma. Não podem ser desativados.",
    locked: true,
  },
  {
    key: "functional",
    title: "Cookies funcionais",
    description:
      "Permitem recordar escolhas de interface, preferências de sessão e melhorias de usabilidade entre visitas.",
  },
  {
    key: "analytics",
    title: "Cookies de analítica e desempenho",
    description:
      "Ajudam a compreender como os visitantes interagem com as páginas para otimizar tempos de resposta e conteúdos.",
  },
  {
    key: "marketing",
    title: "Cookies de marketing",
    description:
      "Utilizados para medir relevância de campanhas e apresentar comunicações alinhadas aos seus interesses.",
  },
];

export default function CookieModal() {
  const {
    preferences,
    hasSavedConsent,
    isModalOpen,
    setIsModalOpen,
    acceptAll,
    rejectNonEssential,
    saveCustomPreferences,
  } = useCookieConsent();

  const [draft, setDraft] = useState({
    functional: preferences.functional,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
  });

  useEffect(() => {
    setDraft({
      functional: preferences.functional,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
  }, [preferences, isModalOpen]);

  const toggleCategory = (key: "functional" | "analytics" | "marketing") => {
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Banner Inicial Compacto (exibido apenas antes de guardar preferência) */}
      {!hasSavedConsent && !isModalOpen && (
        <div className="fixed bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-40 bg-white/98 backdrop-blur-md border border-zinc-200/90 rounded-3xl p-5 shadow-2xl shadow-zinc-900/10">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-2xl bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center shrink-0 font-extrabold text-sm">
              🍪
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#09090B]">
                Preferências de Cookies
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                A <strong className="text-[#09090B]">CLC Tecnologias</strong>{" "}
                utiliza cookies para garantir o bom funcionamento do site,
                analisar desempenho e melhorar a sua experiência. Consulte a{" "}
                <a
                  href="/legal#privacidade"
                  className="font-bold text-[#FF1E7A] hover:underline"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={acceptAll}
              className="pink-gradient-btn text-white text-xs font-bold px-4 py-2.5 rounded-full flex-1 sm:flex-initial text-center"
            >
              Aceitar todos
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-xs font-bold text-[#09090B] hover:border-[#FF1E7A] hover:text-[#FF1E7A] transition-colors"
            >
              Personalizar
            </button>

            <button
              type="button"
              onClick={rejectNonEssential}
              className="px-3.5 py-2.5 rounded-full text-xs font-semibold text-zinc-500 hover:text-[#09090B] transition-colors"
            >
              Apenas essenciais
            </button>
          </div>
        </div>
      )}

      {/* Modal Completa de Gestão de Cookies */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[32px] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-100 max-h-[90vh] overflow-y-auto"
          >
            {/* Cabeçalho */}
            <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-zinc-100">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-[11px] font-bold mb-2">
                  Privacidade & Consentimento
                </span>
                <h2
                  id="cookie-modal-title"
                  className="text-2xl font-extrabold text-[#09090B] tracking-tight"
                >
                  Centro de Preferências de Cookies
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fechar modal de cookies"
                className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-[#09090B] shrink-0"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-6">
              Controle quais categorias de cookies pretende permitir. Pode
              alterar ou retirar o seu consentimento a qualquer momento. Mais
              detalhes em{" "}
              <a
                href="/legal#privacidade"
                className="font-bold text-[#FF1E7A] hover:underline"
              >
                Política de Privacidade
              </a>{" "}
              e{" "}
              <a
                href="/legal#termos"
                className="font-bold text-[#FF1E7A] hover:underline"
              >
                Termos de Uso
              </a>
              .
            </p>

            {/* Categorias */}
            <div className="space-y-3 mb-7">
              {COOKIE_CATEGORIES.map((category) => {
                const isChecked = category.locked
                  ? true
                  : draft[category.key as "functional" | "analytics" | "marketing"];

                return (
                  <div
                    key={category.key}
                    className="bg-[#FAFAFB] border border-zinc-200/80 rounded-2xl p-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold text-[#09090B]">
                          {category.title}
                        </h3>
                        {category.locked && (
                          <span className="px-2 py-0.5 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-[10px] font-bold">
                            Sempre ativo
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isChecked}
                      aria-label={category.title}
                      disabled={category.locked}
                      onClick={() => {
                        if (!category.locked) {
                          toggleCategory(
                            category.key as "functional" | "analytics" | "marketing"
                          );
                        }
                      }}
                      className={`w-11 h-6 rounded-full p-0.5 transition-colors shrink-0 mt-0.5 ${
                        isChecked ? "bg-[#FF1E7A]" : "bg-zinc-300"
                      } ${
                        category.locked
                          ? "opacity-75 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    >
                      <span
                        className={`block w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                          isChecked ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-4 border-t border-zinc-100">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-4 py-2.5 rounded-full border border-zinc-200 text-xs font-bold text-zinc-700 hover:border-[#09090B] transition-colors"
              >
                Rejeitar opcionais
              </button>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => saveCustomPreferences(draft)}
                  className="px-5 py-2.5 rounded-full border border-[#FF1E7A] bg-[#FFF0F6] text-[#FF1E7A] text-xs font-bold hover:bg-[#FF1E7A] hover:text-white transition-colors"
                >
                  Guardar preferências
                </button>

                <button
                  type="button"
                  onClick={acceptAll}
                  className="pink-gradient-btn text-white text-xs font-bold px-5 py-2.5 rounded-full"
                >
                  Aceitar todos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}