"use client";

import { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";

interface ServicesSectionProps {
  onOpenServiceModal: (service: ServiceItem) => void;
}

export default function ServicesSection({
  onOpenServiceModal,
}: ServicesSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => !s.extra);

  const renderMockup = (type: ServiceItem["mockupType"]) => {
    switch (type) {
      case "websites":
        return (
          <div className="relative w-full h-full flex items-end justify-center">
            <div className="w-[74%] h-[82%] bg-[#09090B] rounded-t-xl border-2 border-zinc-700 p-2.5 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E7A]" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
              <div className="text-center my-auto px-2">
                <div className="text-[10px] font-extrabold text-white leading-tight">
                  Construímos o futuro{" "}
                  <span className="text-[#FF1E7A]">digital da sua empresa</span>
                </div>
                <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-[#FF1E7A] text-white text-[7px] font-bold">
                  Explorar
                </div>
              </div>
              <div className="h-1 bg-zinc-800 rounded-full w-1/2 mx-auto" />
            </div>
            <div className="absolute left-2 bottom-0 w-[34%] h-[56%] bg-[#121215] rounded-t-lg border border-zinc-700 p-1.5 shadow-xl">
              <div className="text-[7px] font-bold text-white leading-tight mt-2">
                Performance <span className="text-[#FF1E7A]">99.9%</span>
              </div>
            </div>
            <div className="absolute right-3 bottom-0 w-[20%] h-[62%] bg-[#09090B] rounded-t-xl border border-zinc-700 p-1.5 shadow-xl">
              <div className="w-4 h-0.5 bg-zinc-700 mx-auto rounded-full mb-2" />
              <div className="w-full h-8 rounded bg-[#FF1E7A]/20 border border-[#FF1E7A]/40" />
            </div>
          </div>
        );

      case "mobile":
        return (
          <div className="relative w-full h-full flex items-center justify-center gap-3">
            <div className="w-[34%] h-[88%] bg-white rounded-2xl border-[3px] border-[#09090B] p-2 shadow-2xl flex flex-col justify-between -rotate-3">
              <div className="w-8 h-1 bg-zinc-200 rounded-full mx-auto" />
              <div className="grid grid-cols-2 gap-1.5 my-auto">
                <div className="h-7 rounded-lg bg-[#FFF0F6] border border-[#FF1E7A]/20 flex items-center justify-center text-[8px] font-bold text-[#FF1E7A]">
                  Pay
                </div>
                <div className="h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-[8px] font-bold text-[#09090B]">
                  Shop
                </div>
                <div className="h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-[8px] font-bold text-[#09090B]">
                  Track
                </div>
                <div className="h-7 rounded-lg bg-[#FF1E7A] flex items-center justify-center text-[8px] font-bold text-white">
                  CLC
                </div>
              </div>
              <div className="h-1.5 w-10 bg-zinc-900 rounded-full mx-auto" />
            </div>
            <div className="w-[34%] h-[84%] bg-[#09090B] rounded-2xl border-2 border-zinc-700 p-2 shadow-2xl flex flex-col justify-between rotate-3 translate-y-2">
              <div className="w-6 h-1 bg-zinc-700 rounded-full mx-auto" />
              <div className="text-center my-auto">
                <div className="w-7 h-7 rounded-full bg-[#FF1E7A] text-white font-extrabold text-[9px] flex items-center justify-center mx-auto mb-1.5">
                  CLC
                </div>
                <div className="text-[8px] font-bold text-white">
                  App iOS & Android
                </div>
              </div>
              <div className="h-1 w-8 bg-zinc-700 rounded-full mx-auto" />
            </div>
          </div>
        );

      case "systems":
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-[82%] h-[84%] bg-white rounded-xl border border-zinc-200 shadow-2xl p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#FF1E7A]" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300" />
                </div>
                <span className="text-[8px] font-bold text-zinc-400">
                  CLC ERP v4.0
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 my-auto">
                <div className="col-span-2 bg-zinc-50 rounded-lg p-2 border border-zinc-100">
                  <div className="flex items-end gap-1.5 h-12">
                    <div className="w-full bg-[#FF1E7A]/30 h-5 rounded-t" />
                    <div className="w-full bg-[#FF1E7A]/60 h-8 rounded-t" />
                    <div className="w-full bg-[#FF1E7A] h-11 rounded-t" />
                    <div className="w-full bg-[#09090B] h-9 rounded-t" />
                  </div>
                </div>
                <div className="bg-[#FFF0F6] rounded-lg p-2 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-4 border-[#FF1E7A] border-t-[#09090B]" />
                  <span className="text-[8px] font-extrabold text-[#09090B] mt-1">
                    +84%
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="w-[80%] h-[82%] bg-[#09090B] rounded-xl border border-zinc-700 p-3 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-[#FF1E7A]">
                ● CLC AI Agent
              </span>
              <span className="text-[8px] text-zinc-400">24/7 Ativo</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="bg-zinc-800 text-zinc-200 text-[8px] px-2.5 py-1.5 rounded-lg w-3/4">
                Automatizar atendimento e vendas?
              </div>
              <div className="bg-[#FF1E7A] text-white text-[8px] font-semibold px-2.5 py-1.5 rounded-lg w-4/5 ml-auto">
                Fluxo IA configurado em tempo real.
              </div>
            </div>
          </div>
        );

      case "design":
        return (
          <div className="w-[80%] h-[82%] bg-white rounded-xl p-3 flex items-center justify-between gap-2 shadow-xl">
            <div className="space-y-1.5 flex-1">
              <div className="h-3 w-16 rounded bg-[#09090B]" />
              <div className="h-2 w-24 rounded bg-zinc-200" />
              <div className="flex gap-1.5 pt-1">
                <span className="w-5 h-5 rounded-full bg-[#FF1E7A]" />
                <span className="w-5 h-5 rounded-full bg-[#09090B]" />
                <span className="w-5 h-5 rounded-full bg-zinc-200" />
              </div>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-[#FFF0F6] border border-[#FF1E7A]/30 flex items-center justify-center font-extrabold text-[#FF1E7A] text-xs">
              UI/UX
            </div>
          </div>
        );

      case "cloud":
        return (
          <div className="w-[80%] h-[82%] bg-[#09090B] rounded-xl border border-zinc-700 p-3 flex flex-col justify-between shadow-xl">
            <div className="flex justify-between items-center text-[8px] text-zinc-400">
              <span>CLUSTER LUANDA-01</span>
              <span className="text-emerald-400 font-bold">99.99% UP</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="h-10 rounded bg-zinc-900 border border-[#FF1E7A]/40 flex items-center justify-center text-[8px] text-white font-bold">
                Node 01
              </div>
              <div className="h-10 rounded bg-zinc-900 border border-[#FF1E7A]/40 flex items-center justify-center text-[8px] text-white font-bold">
                Node 02
              </div>
              <div className="h-10 rounded bg-[#FF1E7A] flex items-center justify-center text-[8px] text-white font-bold">
                Auto-Scale
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="servicos"
      className="py-20 sm:py-24 bg-[#FAFAFB] border-t border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Secção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2.5">
              SERVIÇOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight mb-2.5">
              O que fazemos por si
            </h2>
            <p className="text-zinc-500 text-base">
              Soluções digitais completas, da estratégia à entrega.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-xs font-bold text-[#09090B] hover:border-[#FF1E7A] hover:text-[#FF1E7A] transition-colors shadow-2xs"
          >
            <span>{showAll ? "Ver menos ↑" : "Ver todos →"}</span>
          </button>
        </div>

        {/* Grid de Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {visibleServices.map((service, index) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl border border-zinc-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#FF1E7A]/8 transition-all duration-300 flex flex-col"
            >
              <div
                className={`relative h-52 ${
                  index % 2 === 1 ? "service-card-top-alt" : "service-card-top"
                } p-4 flex flex-col justify-between overflow-hidden`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-white text-[#FF1E7A] text-[11px] font-bold shadow-xs">
                    {service.featured ? "Destaque" : "Inovação"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium">
                    Tecnologia
                  </span>
                </div>
                <div className="mt-3 w-full h-36 flex items-center justify-center">
                  {renderMockup(service.mockupType)}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[#09090B] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenServiceModal(service)}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#FF1E7A] hover:gap-2.5 transition-all"
                >
                  Ver serviço <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}