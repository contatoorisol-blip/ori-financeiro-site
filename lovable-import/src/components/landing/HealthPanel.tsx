const NAV = [
  "Dashboard",
  "Lançamentos",
  "Histórico",
  "Cartões",
  "DRE Financeira",
  "Resumo ORI",
  "Saúde Financeira",
  "Perfil",
];

const SUBS = [
  { label: "Resultado positivo", val: "25/25", pct: 100, ok: true },
  { label: "Despesas controladas", val: "20/20", pct: 100, ok: true },
  { label: "Contas a pagar", val: "0/15", pct: 0, ok: false },
  { label: "Uso do cartão", val: "2/15", pct: 13, ok: false },
  { label: "Receita recorrente", val: "15/15", pct: 100, ok: true },
  { label: "Equilíbrio financeiro", val: "10/10", pct: 100, ok: true },
];

const INDICATORS = [
  {
    title: "Margem Líquida",
    sub: "Meta: acima de 25% · Quanto do recebido sobrou após todos os pagamentos",
    val: "99,7%",
    meta: "Meta: ≥ 25%",
    pct: 99.7,
  },
  {
    title: "Receita Recorrente",
    sub: "Meta: acima de 70% · Percentual de receita de fontes previsíveis como mensalidades",
    val: "97,8%",
    meta: "Meta: ≥ 70%",
    pct: 97.8,
  },
  {
    title: "Ponto de Equilíbrio",
    sub: "Soma total das despesas — receita precisa superar para o período fechar positivo",
    val: "R$ 2.713",
    meta: "Recebido: R$ 5.005",
    pct: 100,
  },
];

export function HealthPanel() {
  return (
    <section id="para-quem" className="border-y border-border/60 bg-surface-2/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Painel do produto
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Saúde financeira do seu negócio em uma tela
          </h2>
          <p className="mt-4 text-muted-foreground">
            Score, sub-indicadores e diagnóstico — exatamente como você verá
            dentro do ORI.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
            {/* Side nav */}
            <aside className="border-b border-border/60 bg-surface-2 lg:border-b-0 lg:border-r">
              <div className="border-b border-border/60 px-4 py-4">
                <div className="font-display text-base font-bold text-primary">
                  ORI{" "}
                  <span className="ml-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Clareza Financeira
                  </span>
                </div>
              </div>
              <nav className="flex gap-1 overflow-x-auto p-2 lg:flex-col lg:overflow-visible lg:p-0 lg:py-2">
                {NAV.map((item) => {
                  const active = item === "Saúde Financeira";
                  return (
                    <div
                      key={item}
                      className={
                        "flex shrink-0 items-center gap-2 whitespace-nowrap border-l-[3px] px-4 py-2 text-xs font-medium transition-colors " +
                        (active
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-transparent text-muted-foreground")
                      }
                    >
                      <span
                        className={
                          "h-1.5 w-1.5 rounded-full " +
                          (active ? "bg-primary" : "bg-muted-foreground/40")
                        }
                      />
                      {item}
                    </div>
                  );
                })}
              </nav>
            </aside>

            {/* Main */}
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-display text-xl font-semibold">
                    Saúde Financeira
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Indicadores-chave do período
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Chip active>Mês</Chip>
                  <Chip>Ano</Chip>
                  <Chip>Todos</Chip>
                  <Chip variant="select">Maio 2026</Chip>
                </div>
              </div>

              {/* Score card */}
              <div className="grid gap-5 rounded-xl border border-border bg-surface p-5 sm:grid-cols-[auto_1fr]">
                <ScoreCircle value={72} />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm font-semibold">
                      Score ORI — Maio/2026
                    </div>
                    <span className="rounded-full border border-success/40 bg-success/10 px-2.5 py-0.5 text-[10px] font-semibold text-success">
                      ✓ Saudável
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Financeiro saudável. As contas a pagar estão pressionando o
                    caixa — priorize vencimentos próximos e confirme
                    recebimentos suficientes.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {SUBS.map((s) => (
                      <div
                        key={s.label}
                        className={
                          "rounded-lg border bg-surface-2 p-2.5 " +
                          (s.ok
                            ? "border-border"
                            : "border-danger/40 bg-danger/5")
                        }
                      >
                        <div className="text-[10px] leading-tight text-muted-foreground">
                          {s.label}
                        </div>
                        <div
                          className={
                            "mt-1 text-sm font-bold " +
                            (s.ok ? "text-success" : "text-danger")
                          }
                        >
                          {s.val}
                        </div>
                        <div className="mt-1.5 h-[3px] overflow-hidden rounded bg-border/60">
                          <div
                            className={
                              "h-full rounded " +
                              (s.ok ? "bg-success" : "bg-danger")
                            }
                            style={{ width: `${s.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Indicators */}
              <div className="space-y-2">
                {INDICATORS.map((ind) => (
                  <div
                    key={ind.title}
                    className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {ind.title}
                        <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] text-success">
                          Saudável
                        </span>
                      </div>
                      <div className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {ind.sub}
                      </div>
                      <div className="mt-2 h-1 overflow-hidden rounded bg-border/60">
                        <div
                          className="h-full rounded bg-success"
                          style={{ width: `${ind.pct}%` }}
                        />
                      </div>
                    </div>
                    <div className="min-w-[110px] text-right">
                      <div className="font-display text-base font-bold text-success">
                        {ind.val}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        {ind.meta}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-center text-[11px] text-muted-foreground">
                Para margem bruta e DRE completa do período, acesse a tela{" "}
                <span className="text-primary">DRE Financeira →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  children,
  active,
  variant,
}: {
  children: React.ReactNode;
  active?: boolean;
  variant?: "select";
}) {
  if (variant === "select") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] text-foreground/80">
        {children}
        <span className="text-muted-foreground">▾</span>
      </span>
    );
  }
  return (
    <span
      className={
        "rounded-full border px-3 py-1 text-[11px] font-medium " +
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground")
      }
    >
      {children}
    </span>
  );
}

function ScoreCircle({ value }: { value: number }) {
  const deg = (value / 100) * 360;
  return (
    <div
      className="relative grid h-24 w-24 place-items-center rounded-full"
      style={{
        background: `conic-gradient(var(--success) ${deg}deg, var(--border) 0)`,
      }}
    >
      <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-surface">
        <div className="font-display text-2xl font-bold leading-none text-success">
          {value}
        </div>
        <div className="text-[10px] text-muted-foreground">/100</div>
      </div>
    </div>
  );
}
