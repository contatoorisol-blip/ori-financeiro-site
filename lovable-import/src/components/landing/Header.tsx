import { WHATSAPP_URL } from "@/lib/whatsapp";
import lampIcon from "@/assets/ori-lamp.png";

const NAV = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Login", href: "#login" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 bg-slate-800">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark />
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight text-foreground">
              ORI
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
              Clareza Financeira
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-premium)] transition-transform hover:scale-[1.02]"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <img
      src={lampIcon}
      alt="ORI"
      width={56}
      height={56}
      className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(245,158,11,0.55)]"
    />
  );
}
