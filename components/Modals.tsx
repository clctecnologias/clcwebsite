"use client";

import { useState, FormEvent } from "react";
import { ServiceItem } from "@/data/servicesData";

interface ModalsProps {
  selectedService: ServiceItem | null;
  onCloseService: () => void;
  onRequestQuoteFromService: (serviceTitle: string) => void;
  clientAreaOpen: boolean;
  onCloseClientArea: () => void;
}

export default function Modals({
  selectedService,
  onCloseService,
  onRequestQuoteFromService,
  clientAreaOpen,
  onCloseClientArea,
}: ModalsProps) {
  const [loginFeedback, setLoginFeedback] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoginFeedback(true);
  };

  return (
    <>
      {/* Modal Detalhes do Serviço */}
      {selectedService && (
        <div
          onClick={onCloseService}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 shadow-2xl border border-zinc-100"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-[11px] font-bold mb-2">
                  Solução CLC Tecnologias
                </span>
                <h3 className="text-2xl font-extrabold text-[#09090B]">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseService}
                className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-[#09090B]"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
              {selectedService.fullDesc}
            </p>

            <div className="bg-[#FAFAFB] rounded-2xl p-4 mb-5 border border-zinc-100">
              <div className="text-xs font-bold text-[#09090B] uppercase tracking-wider mb-2.5">
                O que está incluído:
              </div>
              <ul className="space-y-2 text-xs text-zinc-600">
                {selectedService.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#FF1E7A] font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="text-xs text-zinc-500">
                Prazo médio:{" "}
                <strong className="text-[#09090B]">
                  {selectedService.timeline}
                </strong>
              </span>
              <button
                type="button"
                onClick={() => onRequestQuoteFromService(selectedService.title)}
                className="pink-gradient-btn text-white text-xs font-bold px-6 py-3 rounded-full"
              >
                Solicitar orçamento →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Área de Cliente */}
      {clientAreaOpen && (
        <div
          onClick={onCloseClientArea}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full p-7 sm:p-8 shadow-2xl border border-zinc-100"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#FF1E7A] text-white font-extrabold flex items-center justify-center text-xs">
                  C
                </span>
                <span className="font-extrabold text-[#09090B]">
                  Portal do Cliente CLC
                </span>
              </div>
              <button
                type="button"
                onClick={onCloseClientArea}
                className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-[#09090B]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-500 mb-5">
              Aceda ao acompanhamento dos seus projetos, faturas e suporte
              técnico dedicado.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  E-mail de acesso
                </label>
                <input
                  type="email"
                  required
                  placeholder="cliente@empresa.com"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#FF1E7A]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Palavra-passe
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#FF1E7A]"
                />
              </div>
              <button
                type="submit"
                className="w-full pink-gradient-btn text-white font-bold text-sm py-3 rounded-full"
              >
                Entrar no portal
              </button>
            </form>

            {loginFeedback && (
              <div className="mt-4 p-3 rounded-xl bg-[#FFF0F6] text-[#FF1E7A] text-xs font-semibold text-center">
                Credenciais em validação. Caso ainda não tenha acesso, solicite
                um orçamento connosco.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}