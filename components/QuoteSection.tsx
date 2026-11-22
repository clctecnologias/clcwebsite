"use client";

import { useState, useEffect, FormEvent } from "react";

interface QuoteSectionProps {
  preselectedService: string;
}

export default function QuoteSection({
  preselectedService,
}: QuoteSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Websites profissionais");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="orcamento"
      className="py-24 bg-white border-t border-zinc-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAFAFB] border border-zinc-200/80 rounded-[32px] p-8 sm:p-12 lg:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2.5">
              VAMOS CONVERSAR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] tracking-tight mb-4">
              Pronto para acelerar o seu projeto digital?
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Partilhe a sua ideia connosco. A equipa da CLC Tecnologias prepara
              uma proposta técnica à medida em menos de 24 horas.
            </p>
            <div className="space-y-3 text-xs font-semibold text-zinc-700">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center">
                  ✓
                </span>
                Diagnóstico técnico gratuito
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center">
                  ✓
                </span>
                Cronograma claro e acompanhamento dedicado
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Nome / Empresa
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Ana Silva"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#FF1E7A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      E-mail corporativo
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ana@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#FF1E7A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Solução pretendida
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm bg-white focus:outline-none focus:border-[#FF1E7A]"
                  >
                    <option value="Websites profissionais">
                      Websites profissionais
                    </option>
                    <option value="Aplicações mobile">Aplicações mobile</option>
                    <option value="Sistemas Web">
                      Sistemas Web (CRM, ERP, Gestão)
                    </option>
                    <option value="Automação & IA">
                      Automação & Inteligência Artificial
                    </option>
                    <option value="Design UI/UX & Marca">
                      Design UI/UX & Marca
                    </option>
                    <option value="Cloud & Infraestrutura">
                      Cloud & Infraestrutura
                    </option>
                    <option value="Agendamento de Reunião">
                      Agendamento de Reunião
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Detalhes do projeto
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva brevemente o que pretende construir..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#FF1E7A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full pink-gradient-btn text-white font-bold text-sm py-3.5 rounded-full"
                >
                  Enviar pedido de orçamento →
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center mx-auto mb-3 font-extrabold text-lg">
                  ✓
                </div>
                <h3 className="text-lg font-extrabold text-[#09090B] mb-1">
                  Pedido enviado com sucesso!
                </h3>
                <p className="text-sm text-zinc-500 mb-5">
                  Obrigado,{" "}
                  <strong className="text-[#09090B]">{name}</strong>! A equipa
                  da <strong className="text-[#FF1E7A]">CLC Tecnologias</strong>{" "}
                  entrará em contacto sobre <strong>{service}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setDetails("");
                  }}
                  className="px-5 py-2 rounded-full border border-zinc-200 text-xs font-bold text-[#09090B] hover:border-[#FF1E7A]"
                >
                  Enviar novo pedido
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}