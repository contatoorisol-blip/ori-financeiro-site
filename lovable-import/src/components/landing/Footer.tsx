export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          <span className="font-display font-bold text-foreground">ORI</span>{" "}
          Clareza Financeira
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ORI. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
