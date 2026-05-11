import { WHATSAPP_URL } from "@/lib/whatsapp";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.16_78/0.12),transparent_60%)] blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Clareza financeira para pequenos negócios
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sua empresa finalmente sabe{" "}
            <span className="bg-[var(--gradient-gold)] bg-clip-text text-transparent">
              para onde o dinheiro vai.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Veja se o seu negócio teve lucro ou prejuízo em tempo real, de forma
            simples, sem depender de planilhas confusas.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-premium)] transition-transform hover:scale-[1.02]"
            >
              Falar no WhatsApp
            </a>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">R$ 39,90/mês</span>
              <span className="mx-2 text-border">•</span>Acesso online
            </div>
          </div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
