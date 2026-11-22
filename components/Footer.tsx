"use client";

interface FooterProps {
  onOpenClientArea?: () => void;
  onSelectServiceAndScroll?: (serviceName?: string) => void;
}

export default function Footer({
  onOpenClientArea,
  onSelectServiceAndScroll,
}: FooterProps) {
  return (
    <footer className="bg-white border-t border-zinc-200/80 text-zinc-500">
      {/* Corpo Principal: 4 Colunas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Coluna 1: Marca, Tagline e Redes Sociais */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#09090B] via-[#FF1E7A] to-[#FF66A3] flex items-center justify-center shadow-xs">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 13C6.5 8.5 11.5 7 16 9.5M8 17.5C11.5 19.5 16.5 18 19.5 13.5"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[19px] font-extrabold tracking-tight text-[#09090B]">
                  CLC<span className="text-[#FF1E7A]">Tecnologias</span>
                </span>
                <span className="text-[9px] font-medium text-zinc-400 tracking-wide mt-0.5">
                  Ligamos ideias, pessoas e futuro.
                </span>
              </div>
            </a>

            <p className="text-[13.5px] text-zinc-500 leading-relaxed max-w-xs">
              Tecnologia, media e marketing para empresas que querem crescer.
            </p>

            {/* Ícones Sociais Circulares */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#orcamento"
                aria-label="Facebook CLC Tecnologias"
                className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:border-[#FF1E7A] hover:text-[#FF1E7A] hover:bg-[#FFF0F6] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V12H8v3h2v7h3v-7h2.2l.8-3H13V9.5c0-.28.22-.5.5-.5z" />
                </svg>
              </a>

              <a
                href="#orcamento"
                aria-label="Instagram CLC Tecnologias"
                className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:border-[#FF1E7A] hover:text-[#FF1E7A] hover:bg-[#FFF0F6] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="#orcamento"
                aria-label="LinkedIn CLC Tecnologias"
                className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:border-[#FF1E7A] hover:text-[#FF1E7A] hover:bg-[#FFF0F6] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 8.5H3.56V19.5h3.38V8.5zM5.25 3.5a1.97 1.97 0 100 3.94 1.97 1.97 0 000-3.94zM20.44 13.02c0-2.76-1.47-4.05-3.44-4.05-1.58 0-2.29.87-2.69 1.48V8.5h-3.38c.04.95 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.89.27-.66.87-1.35 1.89-1.35 1.33 0 1.86 1.01 1.86 2.5v5.88h3.38v-6.48z" />
                </svg>
              </a>

              <a
                href="#orcamento"
                aria-label="TikTok CLC Tecnologias"
                className="w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:border-[#FF1E7A] hover:text-[#FF1E7A] hover:bg-[#FFF0F6] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.18 8.18 0 004.76 1.52V6.77a4.83 4.83 0 01-1-.08z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Explorar */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-bold text-[#09090B] mb-4">
              Explorar
            </h3>
            <ul className="space-y-2.5 text-[13px] text-zinc-500">
              <li>
                <a href="#servicos" className="hover:text-[#FF1E7A] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-[#FF1E7A] transition-colors">
                  Orçamento online
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#FF1E7A] transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#porque" className="hover:text-[#FF1E7A] transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#porque" className="hover:text-[#FF1E7A] transition-colors">
                  Equipa
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-bold text-[#09090B] mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5 text-[13px] text-zinc-500">
              <li>
                <a href="/sobre/" className="hover:text-[#FF1E7A] transition-colors">
                  A CLC Tecnologias
                </a>
              </li>
              <li>
                <a href="/portfolio/" className="hover:text-[#FF1E7A] transition-colors">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="/contactos/" className="hover:text-[#FF1E7A] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-[13px] font-bold text-[#09090B] mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-[13px] text-zinc-500">
              <li>
                <a href="/legal#informacao-legal" className="hover:text-[#FF1E7A] transition-colors">
                  Informação legal
                </a>
              </li>
              <li>
                <a href="/legal#privacidade" className="hover:text-[#FF1E7A] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/legal#termos" className="hover:text-[#FF1E7A] transition-colors">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Inferior: Copyright e Atalhos */}
      <div className="border-t border-zinc-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-zinc-400">
          <p>
            © 2026 CLC Tecnologias. Todos os direitos
            reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}