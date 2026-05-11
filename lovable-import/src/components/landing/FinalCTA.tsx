import { WHATSAPP_URL } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.16_78/0.18),transparent_60%)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Pare de olhar só para o saldo.
          <br />
          <span className="bg-[var(--gradient-gold)] bg-clip-text text-transparent">
            Comece a enxergar o resultado do seu negócio.
          </span>
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-premium)] transition-transform hover:scale-[1.02]"
          >
            Falar no WhatsApp
          </a>
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">R$ 39,90/mês</span>
            <span className="mx-2 text-border">•</span>Acesso online
          </div>
        </div>
      </div>
    </section>
  );
}
