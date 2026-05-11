export function HeroDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,oklch(0.82_0.16_78/0.18),transparent_60%)] blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-[var(--shadow-card)]">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/80" />
            <span className="ml-3 text-xs text-muted-foreground">
              ORI · app.ori.com.br/dashboard
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-primary">Ao vivo</span>
        </div>

        {/* Body */}
        <div className="space-y-3 bg-background p-5">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-display text-lg font-semibold">Dashboard</div>
              <div className="text-xs text-muted-foreground">
                Visão geral das suas finanças
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Pill>Mês</Pill>
              <Pill active>Maio 2026</Pill>
            </div>
          </div>

          {/* Ponto de equilíbrio */}
          <div className="rounded-xl border border-success/30 bg-success/5 p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-success/90">
                  Ponto de equilíbrio — Maio/2026
                </div>
                <div className="mt-1 text-sm text-foreground/90">
                  Você precisa receber{" "}
                  <span className="font-semibold">R$ 3.248</span> para cobrir
                  todos os custos do mês
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl font-bold text-success">62%</div>
                <div className="text-[10px] text-success/80">Atingido</div>
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-success/15">
              <div className="h-full w-[62%] rounded-full bg-success" />
            </div>
          </div>

          {/* Fluxo de caixa */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                Fluxo de caixa
              </span>
              <span className="text-[10px] text-muted-foreground">
                Entradas e saídas reais do período
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <KpiCard label="Total recebido" value="R$ 3.450" tone="success" tag="Realizado" />
              <KpiCard label="A receber" value="R$ 1.200" tone="warning" tag="Em dia" />
              <KpiCard label="A pagar" value="R$ 2.150" tone="danger" tag="Atenção" />
              <KpiCard
                label="Resultado projetado"
                value="R$ 2.500"
                tone="info"
                tag="Positivo"
              />
            </div>
          </div>

          {/* DRE */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full border border-info/40 bg-info/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-info">
                DRE — Competência
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <DreCard label="Receita total" value="R$ 4.650" tone="success" />
              <DreCard label="Despesas" value="R$ 2.350" tone="danger" />
              <DreCard label="Resultado líquido" value="R$ 2.300" tone="info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={
        "rounded-full border px-2.5 py-1 text-[10px] font-medium " +
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground")
      }
    >
      {children}
    </span>
  );
}

const TONES: Record<string, string> = {
  success: "border-success/40 text-success",
  warning: "border-warning/50 text-warning",
  danger: "border-danger/40 text-danger",
  info: "border-info/40 text-info",
};

function KpiCard({
  label,
  value,
  tone,
  tag,
}: {
  label: string;
  value: string;
  tone: keyof typeof TONES;
  tag: string;
}) {
  return (
    <div
      className={
        "rounded-lg border bg-surface-2/60 p-3 " + TONES[tone].split(" ")[0]
      }
    >
      <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div
        className={
          "mt-1 font-display text-base font-bold " + TONES[tone].split(" ")[1]
        }
      >
        {value}
      </div>
      <div className={"mt-1 text-[9px] " + TONES[tone].split(" ")[1]}>{tag}</div>
    </div>
  );
}

function DreCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: keyof typeof TONES;
}) {
  return (
    <div className={"rounded-lg border bg-surface-2/60 p-3 " + TONES[tone].split(" ")[0]}>
      <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className={"mt-1 font-display text-base font-bold " + TONES[tone].split(" ")[1]}>
        {value}
      </div>
    </div>
  );
}
