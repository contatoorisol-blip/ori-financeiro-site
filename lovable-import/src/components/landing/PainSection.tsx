const ITEMS = [
  "Tive lucro ou prejuízo",
  "Quanto devo faturar para não ter prejuízo",
  "Como está a saúde financeira do meu negócio (indicadores)",
  "Qual a saúde financeira do meu negócio (Diagnóstico ORI)",
];

export function PainSection() {
  return (
    <section id="como-funciona" className="border-y border-border/60 bg-surface-2/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            A dor real
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Você vende, recebe, paga contas… mas no fim do mês ainda fica sem
            saber o que realmente sobrou?
          </h2>
        </div>

        <div>
          <p className="text-base text-muted-foreground">
            O ORI mostra de forma simples, inteligente, automática e
            personalizada:
          </p>
          <div className="mt-6 space-y-3">
            {ITEMS.map((item, i) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-primary/40"
              >
                <span className="absolute inset-y-0 left-0 w-px bg-foreground/15" />
                <span className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-primary" />
                <div className="flex items-center gap-4 pl-3">
                  <span className="font-display text-xs font-bold tabular-nums text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground/90">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
