"use client";

import { PortfolioProject } from "@/data/portfolioData";

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onRequestSimilar,
}: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full p-7 sm:p-8 shadow-2xl border border-zinc-100 max-h-[90vh] overflow-y-auto"
      >
        {/* Cabeçalho */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-[11px] font-bold">
                {project.category}
              </span>
              <span className="text-xs font-semibold text-zinc-400">
                {project.client} · {project.year}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#09090B]">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-[#09090B] shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Métricas de Impacto */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[#FAFAFB] border border-zinc-200/70 rounded-2xl p-4 text-center"
            >
              <div className="text-xl font-extrabold text-[#FF1E7A]">
                {metric.value}
              </div>
              <div className="text-[11px] font-medium text-zinc-500 mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Desafio e Solução */}
        <div className="space-y-4 text-sm text-zinc-600 leading-relaxed mb-6">
          <div className="bg-[#FAFAFB] rounded-2xl p-4 border border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#09090B] mb-1.5">
              Desafio
            </h4>
            <p>{project.challenge}</p>
          </div>

          <div className="bg-[#FAFAFB] rounded-2xl p-4 border border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#09090B] mb-1.5">
              Solução CLC Tecnologias
            </h4>
            <p>{project.solution}</p>
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mb-7">
          <span className="block text-xs font-bold uppercase tracking-wider text-[#09090B] mb-2.5">
            Tecnologias utilizadas
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-[#FFF0F6] text-[#FF1E7A] text-xs font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-zinc-100">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-zinc-200 text-xs font-bold text-[#09090B] hover:border-[#09090B] transition-colors"
          >
            Voltar ao portfólio
          </button>

          <button
            type="button"
            onClick={() => onRequestSimilar(project.title)}
            className="pink-gradient-btn text-white text-xs font-bold px-6 py-3 rounded-full"
          >
            Quero um projeto semelhante →
          </button>
        </div>
      </div>
    </div>
  );
}