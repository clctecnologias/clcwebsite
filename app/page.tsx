"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyClc from "@/components/WhyClc";
import ServicesSection from "@/components/ServicesSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import Modals from "@/components/Modals";
import { ServiceItem } from "@/data/servicesData";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [clientAreaOpen, setClientAreaOpen] = useState(false);
  const [preselectedQuoteService, setPreselectedQuoteService] = useState(
    "Websites profissionais"
  );

  const handleSelectServiceAndScroll = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedQuoteService(serviceName);
    }
    const element = document.getElementById("orcamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRequestQuoteFromModal = (serviceTitle: string) => {
    setSelectedService(null);
    handleSelectServiceAndScroll(serviceTitle);
  };

  return (
    <main className="min-h-screen bg-white text-[#09090B]">
      <Navbar
        onOpenClientArea={() => setClientAreaOpen(true)}
        onSelectServiceAndScroll={handleSelectServiceAndScroll}
      />

      <Hero onSelectServiceAndScroll={handleSelectServiceAndScroll} />

      <WhyClc />

      <ServicesSection
        onOpenServiceModal={(service) => setSelectedService(service)}
      />

      <QuoteSection preselectedService={preselectedQuoteService} />

      <Footer />

      <FloatingWidgets
        onOpenSupport={() =>
          handleSelectServiceAndScroll("Agendamento de Reunião")
        }
      />

      <Modals
        selectedService={selectedService}
        onCloseService={() => setSelectedService(null)}
        onRequestQuoteFromService={handleRequestQuoteFromModal}
        clientAreaOpen={clientAreaOpen}
        onCloseClientArea={() => setClientAreaOpen(false)}
      />
    </main>
  );
}