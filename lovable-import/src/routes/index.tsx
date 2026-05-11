import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PainSection } from "@/components/landing/PainSection";
import { Features } from "@/components/landing/Features";
import { HealthPanel } from "@/components/landing/HealthPanel";
import { Plans } from "@/components/landing/Plans";
import { TrustLine } from "@/components/landing/TrustLine";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "ORI Clareza Financeira — Saiba para onde o dinheiro do seu negócio vai",
      },
      {
        name: "description",
        content:
          "Veja em tempo real se sua empresa teve lucro ou prejuízo. ORI Clareza Financeira: dashboard, DRE e diagnóstico simples para pequenos negócios. R$ 39,90/mês.",
      },
      {
        property: "og:title",
        content: "ORI Clareza Financeira — Clareza para o seu negócio",
      },
      {
        property: "og:description",
        content:
          "Pare de olhar só para o saldo. Enxergue o resultado real do seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <Features />
        <HealthPanel />
        <Plans />
        <TrustLine />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
