import { siteConfig, getWhatsappUrl } from "./siteConfig.js";

const navItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Para quem é", href: "#para-quem" },
];

const proofList = [
  "Tive lucro ou prejuízo?",
  "Quanto devo faturar para não ter prejuízo?",
  "Como está a saúde financeira do meu negócio (indicadores)?",
  "Qual a saúde financeira do meu negócio (Diagnóstico ORI)?",
];

const featureList = [
  "Ponto de Equilíbrio",
  "Diagnóstico Financeiro",
  "DRE Simplificada",
  "Recebido",
  "A Receber",
  "Pago",
  "A Pagar",
  "Fatura de cartão (tela exclusiva)",
];

const planCards = [
  {
    eyebrow: "Entrada rápida",
    title: "Somente App",
    description: "Para quem já tem organização básica e quer uma ferramenta melhor do que planilha.",
    price: `${siteConfig.price}${siteConfig.pricePeriod}`,
    items: ["Dashboard completo", "Fluxo de caixa e DRE", "Score ORI de saúde", "Importação OFX e CSV"],
    cta: "Começar com o app",
    accent: "secondary",
    href: "https://ori-contratacao.netlify.app/",
  },
  {
    eyebrow: "Recomendado",
    title: "App + Consultoria ORI",
    description: "Para quem quer organizar o financeiro com apoio profissional e mais estratégia.",
    price: "Consultar no WhatsApp",
    items: [
      "Diagnóstico financeiro inicial",
      "Estruturação do plano de contas",
      "Configuração guiada do sistema",
      "Acompanhamento financeiro estratégico",
      "Orientação para uso do app",
    ],
    cta: "Quero a consultoria",
    accent: "primary",
    href: getWhatsappUrl(),
  },
];

function Icon({ name }) {
  const paths = {
    whatsapp:
      "M20 12a8 8 0 0 1-11.7 7.1L4 20l1.1-4.1A8 8 0 1 1 20 12Z M8.9 8.8c.2-.5.4-.5.6-.5h.5c.2 0 .5 0 .7.5l.4 1c.2.4.2.7 0 1l-.3.5c-.1.2-.2.3 0 .6.5.9 1.3 1.6 2.2 2.2.3.2.4.2.6 0l.5-.3c.3-.2.6-.2 1 0l1 .4c.5.2.5.5.5.7v.5c0 .2 0 .4-.5.6-.4.2-1 .4-1.7.3-1-.2-2.2-.8-3.6-2.1-1.4-1.4-2-2.6-2.1-3.6-.1-.7.1-1.3.3-1.7Z",
    check: "M5 13l4 4L19 7",
    spark: "M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z",
    arrow: "M5 12h14m-5-5 5 5-5 5",
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProofBlocks({ items }) {
  return (
    <div className="proof-block-grid">
      {items.map((item, index) => (
        <article className="proof-block" key={item}>
          <span className="proof-index">{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}

function PlanCard({ eyebrow, title, description, price, items, cta, accent, href }) {
  return (
    <article className={`plan-card plan-card-${accent}`}>
      <span className="plan-eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="plan-price">{price}</div>
      <CheckList items={items} />
      <a className={`plan-button plan-button-${accent}`} href={href} target="_blank" rel="noreferrer">
        <span>{cta}</span>
        <Icon name="arrow" />
      </a>
    </article>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav">
        <a className="nav-brand" href="#top" aria-label="Voltar ao início do ORI">
          <strong>ORI</strong>
          <span>Clareza Financeira</span>
        </a>

        <div className="nav-menu">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-whatsapp" href={getWhatsappUrl()} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" />
          <span>Falar no WhatsApp</span>
        </a>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>
              Sua empresa finalmente sabe para onde o <em>dinheiro vai.</em>
            </h1>
            <p>Veja se o seu negócio teve lucro ou prejuízo em tempo real, de forma simples, sem depender de planilhas confusas.</p>

            <a className="hero-cta" href={getWhatsappUrl()} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              <span>Falar no WhatsApp</span>
            </a>

            <div className="hero-meta">
              <span>
                {siteConfig.price}
                {siteConfig.pricePeriod}
              </span>
              <span>Acesso online</span>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/assets/ori-devices.png" alt="ORI Clareza Financeira exibido em tablet e celular" />
          </div>
        </section>

        <section className="launch-bar" aria-label="Valor de lançamento">
          <div className="launch-copy">
            <span className="launch-kicker">Lançamento privado</span>
            <strong>App + Consultoria ORI</strong>
            <p>Condição especial reservada para os primeiros {siteConfig.scarcity.totalSpots} clientes desta entrada guiada.</p>
          </div>
          <div className="launch-meter">
            <span>
              <small>Mapa de ocupação</small>
              <small>
                {siteConfig.scarcity.filledSpots} de {siteConfig.scarcity.totalSpots}
              </small>
            </span>
            <div>
              <i style={{ width: `${Math.round((siteConfig.scarcity.filledSpots / siteConfig.scarcity.totalSpots) * 100)}%` }} />
            </div>
          </div>
        </section>

        <section className="proof-section" id="como-funciona">
          <div className="proof-question">
            <span className="section-label">A dor real</span>
            <h2>
              Você vende, recebe, paga contas... mas no fim do mês ainda fica sem saber <em>o que realmente sobrou?</em>
            </h2>
          </div>

          <div className="proof-answer">
            <p>O ORI mostra de forma simples, inteligente, automática e personalizada:</p>
            <ProofBlocks items={proofList} />
          </div>
        </section>

        <section className="features-section" id="recursos">
          <div className="features-copy">
            <span className="section-label">Recursos</span>
            <h2>Tudo online e em telas simples</h2>
            <div className="feature-icon-grid">
              {featureList.map((item) => (
                <div className="feature-icon-item" key={item}>
                  <span className="feature-icon-box">
                    <Icon name="spark" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-preview" id="para-quem">
            <div className="health-preview">
              <div className="health-main">
                <div className="health-header">
                  <div>
                    <h3>Saúde Financeira</h3>
                    <p>Indicadores-chave do período</p>
                  </div>
                  <div className="health-filters">
                    <span>Mês</span>
                    <span>Ano</span>
                    <span>Todos</span>
                    <span className="is-active">Maio 2026</span>
                  </div>
                </div>

                <div className="health-summary">
                  <div className="score-ring">
                    <div>
                      <strong>72</strong>
                      <span>/100</span>
                    </div>
                  </div>

                  <div className="health-summary-copy">
                    <div className="health-summary-top">
                      <strong>Score ORI - Maio/2026</strong>
                      <span>Saudável</span>
                    </div>
                    <p>Financeiro saudável. As contas a pagar estão pressionando o caixa - priorize vencimentos próximos e confirme recebimentos suficientes.</p>

                    <div className="health-mini-grid">
                      <article className="mini-card is-good">
                        <small>Resultado positivo</small>
                        <strong>25/25</strong>
                        <i />
                      </article>
                      <article className="mini-card is-good">
                        <small>Despesas controladas</small>
                        <strong>20/20</strong>
                        <i />
                      </article>
                      <article className="mini-card is-bad">
                        <small>Contas a pagar</small>
                        <strong>0/15</strong>
                        <i />
                      </article>
                      <article className="mini-card is-bad">
                        <small>Uso do cartão</small>
                        <strong>2/15</strong>
                        <i />
                      </article>
                      <article className="mini-card is-good">
                        <small>Receita recorrente</small>
                        <strong>15/15</strong>
                        <i />
                      </article>
                      <article className="mini-card is-good">
                        <small>Equilíbrio financeiro</small>
                        <strong>10/10</strong>
                        <i />
                      </article>
                    </div>
                  </div>
                </div>

                <div className="health-metric-list">
                  <article className="health-metric">
                    <div>
                      <strong>Margem Líquida</strong>
                      <p>Meta: acima de 25% - Quanto do recebido sobrou após todos os pagamentos</p>
                    </div>
                    <div className="health-metric-value">99,7%</div>
                    <i />
                  </article>
                  <article className="health-metric">
                    <div>
                      <strong>Receita Recorrente</strong>
                      <p>Meta: acima de 70% - Percentual de receita de fontes previsíveis</p>
                    </div>
                    <div className="health-metric-value">97,8%</div>
                    <i />
                  </article>
                  <article className="health-metric">
                    <div>
                      <strong>Ponto de Equilíbrio</strong>
                      <p>Soma total das despesas - a receita precisa superar para o período fechar positivo</p>
                    </div>
                    <div className="health-metric-value">R$ 2.713</div>
                    <i />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="plans-heading">
            <span className="section-label centered-label">Escolha como entrar</span>
            <h2>
              Dois caminhos.
              <br />
              O mesmo destino: <em>clareza.</em>
            </h2>
          </div>

          <div className="plan-grid">
            {planCards.map((card) => (
              <PlanCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="closing-cta">
          <h2>
            Pare de olhar só para o saldo.
            <br />
            Comece a enxergar o resultado do seu negócio.
          </h2>

          <a className="hero-cta closing-button" href={getWhatsappUrl()} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            <span>Falar no WhatsApp</span>
          </a>

          <div className="hero-meta center">
            <span>
              {siteConfig.price}
              {siteConfig.pricePeriod}
            </span>
            <span>Acesso online</span>
          </div>
        </section>
      </main>
    </>
  );
}
