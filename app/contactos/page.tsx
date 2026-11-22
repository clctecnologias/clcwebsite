"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import Modals from "@/components/Modals";
import { CONTACT_CHANNELS, CONTACT_FAQS } from "@/data/contactData";

export default function ContactPage() {
  const [clientAreaOpen, setClientAreaOpen] = useState(false);

  // Estados do Formulário
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("Solicitar orçamento de projeto");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Estado do Acordeão FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleScrollToForm = (presetSubject?: string) => {
    if (presetSubject) {
      setSubject(presetSubject);
    }
    const el = document.getElementById("formulario-contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderChannelIcon = (type: string) => {
    switch (type) {
      case "email":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      case "phone":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        );
      case "location":
        return (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </>
        );
      default:
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </>
        );
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#09090B]">
      <Navbar
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={handleScrollToForm}
      />

      {/* Hero de Contactos */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden bg-white border-b border-zinc-100">
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
              Contactos CLC Tecnologias
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#09090B] leading-[1.1] mb-5">
            Vamos tirar o seu
            <span className="block hero-text-gradient mt-1">
              projeto do papel
            </span>
          </h1>

          <p className="text-base sm:text-[17.5px] text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Fale diretamente com a nossa equipa técnica e comercial. Estamos
            prontos para ouvir a sua ideia, propor a melhor arquitetura e
            acelerar o crescimento da sua empresa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() =>
                handleScrollToForm("Solicitar orçamento de projeto")
              }
              className="pink-gradient-btn text-white font-semibold text-sm px-7 py-3.5 rounded-full"
            >
              Enviar mensagem →
            </button>
            <button
              type="button"
              onClick={() => handleScrollToForm("Agendamento de Reunião")}
              className="bg-white border border-zinc-200 hover:border-[#09090B] text-[#09090B] font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Agendar reunião
            </button>
          </div>
        </div>
      </section>

      {/* Cards de Canais Diretos */}
      <section className="py-16 bg-[#FAFAFB] border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_CHANNELS.map((channel) => (
              <div
                key={channel.id}
                className="bg-white border border-zinc-200/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#FF1E7A]/40 hover:shadow-lg hover:shadow-[#FF1E7A]/5 transition-all"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center mb-5">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {renderChannelIcon(channel.type)}
                    </svg>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    {channel.title}
                  </span>
                  <h2 className="text-[15.5px] font-extrabold text-[#09090B] mb-2">
                    {channel.value}
                  </h2>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-5">
                    {channel.description}
                  </p>
                </div>

                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-xs font-bold text-[#FF1E7A] hover:underline"
                >
                  {channel.actionLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secção Principal: Formulário + Informação Institucional / Mapa */}
      <section id="formulario-contacto" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-start">
          {/* Coluna Esquerda: Formulário */}
          <div className="lg:col-span-7 bg-[#FAFAFB] border border-zinc-200/80 rounded-[32px] p-7 sm:p-10">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF1E7A] block mb-2">
              FORMULÁRIO DIRETO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] tracking-tight mb-2">
              Envie-nos uma mensagem
            </h2>
            <p className="text-sm text-zinc-500 mb-7">
              Preencha os dados abaixo e responderemos em menos de 24 horas
              úteis.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Manuel Domingos"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-[#FF1E7A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      E-mail corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="manuel@empresa.ao"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-[#FF1E7A]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+244 9XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-[#FF1E7A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Empresa / Organização
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nome da sua empresa"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-[#FF1E7A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Assunto
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-[#FF1E7A]"
                  >
                    <option value="Solicitar orçamento de projeto">
                      Solicitar orçamento de projeto
                    </option>
                    <option value="Websites & E-commerce">
                      Websites & E-commerce
                    </option>
                    <option value="Aplicações Mobile (Android / iOS)">
                      Aplicações Mobile (Android / iOS)
                    </option>
                    <option value="Sistemas Web (ERP / CRM / Gestão)">
                      Sistemas Web (ERP / CRM / Gestão)
                    </option>
                    <option value="Automação & Inteligência Artificial">
                      Automação & Inteligência Artificial
                    </option>
                    <option value="Agendamento de Reunião">
                      Agendamento de Reunião
                    </option>
                    <option value="Parcerias ou Carreiras">
                      Parcerias ou Carreiras
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Mensagem ou descrição do projeto *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos sobre os objetivos, funcionalidades desejadas ou prazos estimados..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-[#FF1E7A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full pink-gradient-btn text-white font-bold text-sm py-3.5 rounded-full"
                >
                  Enviar mensagem à CLC Tecnologias →
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-3xl border border-zinc-200/80 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFF0F6] text-[#FF1E7A] flex items-center justify-center mx-auto mb-3 font-extrabold text-lg">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold text-[#09090B] mb-2">
                  Mensagem recebida com sucesso!
                </h3>
                <p className="text-sm text-zinc-500 max-w-md mx-auto mb-6">
                  Obrigado pelo contacto,{" "}
                  <strong className="text-[#09090B]">{fullName}</strong>. A
                  nossa equipa irá responder para{" "}
                  <strong className="text-[#FF1E7A]">{email}</strong> dentro de
                  24 horas úteis.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                  className="px-6 py-2.5 rounded-full border border-zinc-200 text-xs font-bold text-[#09090B] hover:border-[#FF1E7A]"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}
          </div>

          {/* Coluna Direita: Cartão Sede + FAQ */}
          <div className="lg:col-span-5 space-y-7">
            {/* Cartão Localização Visual */}
            <div className="service-card-top rounded-[32px] p-7 sm:p-8 text-white shadow-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold mb-4">
                Sede Social · Luanda
              </span>
              <h3 className="text-xl font-extrabold mb-2">
                CLC Tecnologias — Prestação de Serviços, Lda
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-5">
                Bairro Benfica, Município de Belas, Província de Luanda,
                Angola. Atendimento presencial mediante marcação prévia.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/70">E-mail direto:</span>
                  <span className="font-bold">geral@clctecnologias.ao</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">WhatsApp:</span>
                  <span className="font-bold">+244 900 000 000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Tempo médio de resposta:</span>
                  <span className="font-bold text-[#FF85B8]">&lt; 24 horas</span>
                </div>
              </div>
            </div>

            {/* Perguntas Frequentes (FAQ) */}
            <div className="bg-[#FAFAFB] border border-zinc-200/80 rounded-[32px] p-7">
              <h3 className="text-lg font-extrabold text-[#09090B] mb-4">
                Perguntas frequentes
              </h3>

              <div className="space-y-3">
                {CONTACT_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.question}
                      className="bg-white border border-zinc-200/70 rounded-2xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? null : idx)
                        }
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-xs font-bold text-[#09090B]"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[#FF1E7A] text-base leading-none">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100 pt-2.5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={handleScrollToForm}
      />

      <FloatingWidgets
        onOpenSupport={() => handleScrollToForm("Agendamento de Reunião")}
      />

      <Modals
        selectedService={null}
        onCloseService={() => {}}
        onRequestQuoteFromService={handleScrollToForm}
        clientAreaOpen={clientAreaOpen}
        onCloseClientArea={() => setClientAreaOpen(false)}
      />
    </main>
  );
}