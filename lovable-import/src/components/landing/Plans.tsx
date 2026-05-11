import { WHATSAPP_URL } from "@/lib/whatsapp";

const PLAN_A = [
  "Dashboard completo",
  "Fluxo de caixa e DRE",
  "Score ORI de saúde",
  "Importação OFX e CSV",
  "Demonstração via WhatsApp",
];

const PLAN_B = [
  "Diagnóstico financeiro inicial",
  "Estruturação do plano de contas",
  "Configuração guiada do sistema",
  "Acompanhamento financeiro estratégico",
  "Orientação para uso do app",
];

export function Plans() {
  return (
    <section id="planos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Escolha como entrar
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
          Dois caminhos.{" "}
          <span className="bg-[var(--gradient-gold)] bg-clip-text text-transparent">
            O mesmo destino: clareza.
          </span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <PlanCard
          title="Somente App"
          eyebrow="Entrada rápida"
          description="Comece hoje e tenha clareza imediata sobre as finanças do seu negócio."
          price="R$ 39,90"
          priceSuffix="/mês"
          features={PLAN_A}
          cta="Começar com o app"
        />
        <PlanCard
          title="Consultoria ORI"
          eyebrow="Recomendado"
          recommended
          description="Implementação guiada, estratégia financeira e suporte contínuo do nosso time."
          highlight="Consultar no WhatsApp"
          features={PLAN_B}
          cta="Quero a consultoria"
        />
      </div>
    </section>
  );
}

function PlanCard({
  title,
  eyebrow,
  description,
  price,
  priceSuffix,
  highlight,
  features,
  cta,
  recommended,
}: {
  title: string;
  eyebrow: string;
  description: string;
  price?: string;
  priceSuffix?: string;
  highlight?: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}) {
  return (
    <div
      className={
        "relative flex flex-col overflow-hidden rounded-2xl border bg-surface p-8 " +
        (recommended
          ? "border-primary/60 shadow-[var(--shadow-premium)]"
          : "border-border")
      }
    >
      {recommended && (
        <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          Recomendado
        </div>
      )}

      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </div>
      <div className="mt-3 font-display text-2xl font-bold">{title}</div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>

      <div className="mt-6 min-h-[60px]">
        {price && (
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold text-foreground">
              {price}
            </span>
            <span className="text-sm text-muted-foreground">{priceSuffix}</span>
          </div>
        )}
        {highlight && (
          <div className="inline-flex items-center rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 font-display text-base font-semibold text-primary">
            {highlight}
          </div>
        )}
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "mt-auto inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform hover:scale-[1.01] " +
          (recommended
            ? "bg-primary text-primary-foreground shadow-[var(--shadow-premium)]"
            : "border border-border bg-surface-2 text-foreground hover:border-primary/40")
        }
        style={{ marginTop: "2rem" }}
      >
        {cta}
      </a>
    </div>
  );
}
