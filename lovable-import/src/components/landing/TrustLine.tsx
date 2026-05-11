const ITEMS = ["Cancele quando quiser", "Sem fidelidade", "Demonstração gratuita"];

export function TrustLine() {
  return (
    <section className="border-y border-border/60 bg-surface-2/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8">
        {ITEMS.map((i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
            <span className="font-medium text-foreground/80">{i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
