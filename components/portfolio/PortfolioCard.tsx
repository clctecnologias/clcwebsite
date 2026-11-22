"use client";

import { PortfolioProject } from "@/data/portfolioData";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  onSelectProject: (project: PortfolioProject) => void;
}

export default function PortfolioCard({
  project,
  index,
  onSelectProject,
}: PortfolioCardProps) {
  const renderMockup = () => {
    switch (project.mockupVariant) {
      case "web":
        return (
          <div className="w-[82%] h-[84%] bg-[#09090B] rounded-xl border border-zinc-700 p-3 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E7A]" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
              <span className="text-[8px] text-zinc-400">{project.year}</span>
            </div>
            <div className="my-auto text-center px-2">
              <p className="text-[10px] font-extrabold text-white leading-snug line-clamp-2">
                {project.title}
              </p>
              <span className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-[#FF1E7A] text-white text-[8px] font-bold">
                {project.category}
              </span>
            </div>
            <div className="h-1 w-1/2 mx-auto rounded-full bg-zinc-800" />
          </div>
        );

      case "mobile":
        return (
          <div className="flex items-center justify-center gap-3 h-full w-full">
            <div className="w-[34%] h-[88%] bg-white rounded-2xl border-[3px] border-[#09090B] p-2 shadow-xl flex flex-col justify-between -rotate-2">
              <div className="w-7 h-1 bg-zinc-200 rounded-full mx-auto" />
              <div className="space-y-1.5 my-auto">
                <div className="h-6 rounded-lg bg-[#FFF0F6] border border-[#FF1E7A]/25 flex items-center justify-center text-[8px] font-extrabold text-[#FF1E7A]">
                  APP
                </div>
                <div className="h-2 rounded bg-zinc-100 w-4/5 mx-auto" />
                <div className="h-2 rounded bg-zinc-100 w-3/5 mx-auto" />
              </div>
              <div className="h-1 w-8 bg-zinc-900 rounded-full mx-auto" />
            </div>
            <div className="w-[34%] h-[82%] bg-[#09090B] rounded-2xl border border-zinc-700 p-2 shadow-xl flex flex-col justify-between rotate-3 translate-y-2">
              <div className="w-6 h-1 bg-zinc-700 rounded-full mx-auto" />
              <div className="text-center my-auto">
                <div className="text-[10px] font-extrabold text-[#FF1E7A]">
                  {project.metrics[0]?.value}
                </div>
                <div className="text-[7px] text-zinc-400">
                  {project.metrics[0]?.label}
                </div>
              </div>
              <div className="h-1 w-7 bg-zinc-700 rounded-full mx-auto" />
            </div>
          </div>
        );

      case "erp":
        return (
          <div className="w-[84%] h-[84%] bg-white rounded-xl border border-zinc-200 p-3 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
              <span className="text-[8px] font-extrabold text-[#09090B]">
                Sistema & Painel
              </span>
              <span className="text-[8px] font-bold text-[#FF1E7A]">
                Ativo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto items-end h-14">
              <div className="bg-[#FFF0F6] h-7 rounded-t border border-[#FF1E7A]/20" />
              <div className="bg-[#FF1E7A]/60 h-11 rounded-t" />
              <div className="bg-[#FF1E7A] h-14 rounded-t" />
            </div>
            <div className="flex justify-between text-[8px] font-semibold text-zinc-500">
              <span>{project.client}</span>
              <span className="text-[#09090B] font-bold">
                {project.metrics[0]?.value}
              </span>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="w-[82%] h-[84%] bg-[#09090B] rounded-xl border border-zinc-700 p-3 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold text-[#FF1E7A]">
                ● CLC AI Engine
              </span>
              <span className="text-[8px] text-zinc-400">Automação</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="bg-zinc-800 text-zinc-200 text-[8px] px-2.5 py-1.5 rounded-lg w-3/4">
                Qualificar pedido e agendar?
              </div>
              <div className="bg-[#FF1E7A] text-white text-[8px] font-semibold px-2.5 py-1.5 rounded-lg w-4/5 ml-auto">
                Fluxo concluído automaticamente.
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <article className="bg-white rounded-3xl border border-zinc-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#FF1E7A]/8 transition-all duration-300 flex flex-col">
      {/* Topo Ilustrativo com Identidade Rosa & Preto */}
      <div
        className={`relative h-52 ${
          index % 2 === 1 ? "service-card-top-alt" : "service-card-top"
        } p-4 flex flex-col justify-between overflow-hidden`}
      >
        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-white text-[#FF1E7A] text-[11px] font-bold shadow-xs">
            {project.badge}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium">
            {project.category}
          </span>
        </div>

        <div className="mt-3 w-full h-36 flex items-center justify-center">
          {renderMockup()}
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
            {project.client} · {project.year}
          </p>
          <h3 className="text-lg font-extrabold text-[#09090B] mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* Tags de Tecnologia */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-[#FAFAFB] border border-zinc-200/80 text-[11px] font-semibold text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#FF1E7A] hover:gap-2.5 transition-all"
        >
          Ver caso de estudo <span>→</span>
        </button>
      </div>
    </article>
  );
}