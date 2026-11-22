"use client";

import { useState } from "react";

interface NavbarProps {
  onOpenClientArea: () => void;
  onSelectServiceAndScroll: (serviceName?: string) => void;
}

export default function Navbar({
  onOpenClientArea,
  onSelectServiceAndScroll,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-[#FF1E7A]/20 rounded-full nav-pill-shadow px-4 sm:px-6 h-16 flex items-center justify-between transition-all">
        {/* Logo CLC Tecnologias */}
        <a href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#09090B] via-[#FF1E7A] to-[#FF66A3] flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
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
            <span className="text-[8.5px] font-medium text-zinc-400 tracking-wide mt-0.5 hidden sm:block">
              Ligamos ideias, pessoas e futuro.
            </span>
          </div>
        </a>

        {/* Menu Central Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-zinc-600">
          <a href="/sobre/" className="hover:text-[#09090B] transition-colors">
            A CLC Tecnologias
          </a>
          <a href="/portfolio/" className="hover:text-[#09090B] transition-colors">
            Portfólio
          </a>
          <a href="/contactos/" className="hover:text-[#09090B] transition-colors">
            Contactos
          </a>

        </nav>

        {/* Ações à Direita */}
        <div className="flex items-center gap-2 sm:gap-2.5">

          <button
            type="button"
            onClick={() => onSelectServiceAndScroll()}
            className="pink-gradient-btn text-white text-[13px] font-semibold px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            Solicitar orçamento
          </button>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir Menu"
            className="lg:hidden w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-[#09090B]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white rounded-3xl border border-zinc-100 shadow-xl p-5">
          <div className="flex flex-col gap-3 text-sm font-semibold text-zinc-700">
            <a
              href="/sobre/"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 hover:text-[#FF1E7A]"
            >
              A CLC Tecnologias
            </a>
            <a
              href="/portfolio/"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 hover:text-[#FF1E7A]"
            >
              Portfólio
            </a>
            <a
              href="/contactos/"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 hover:text-[#FF1E7A]"
            >
              Contactos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}