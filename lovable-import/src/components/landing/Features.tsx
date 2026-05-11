const ITEMS = [
  "Ponto de Equilíbrio",
  "A Receber",
  "Diagnóstico Financeiro",
  "Pago",
  "DRE Simplificada",
  "A Pagar",
  "Recebido",
  "Fatura de cartão (tela exclusiva)",
];

export function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Recursos
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Tudo online e em tela simples
        </h2>
      </div>

      <div className="mt-10 grid gap-x-12 gap-y-3 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 border-b border-border/60 py-4"
          >
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
            <span className="text-base font-medium text-foreground/90">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
