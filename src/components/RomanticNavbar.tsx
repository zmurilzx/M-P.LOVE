import { useState } from "react";
import { Heart, Menu, Sparkles, X } from "lucide-react";

interface NavLinkItem {
  href: string;
  label: string;
}

const links: NavLinkItem[] = [
  { href: "#inicio", label: "Início" },
  { href: "#historia", label: "Nossa História" },
  { href: "#galeria", label: "Momentos" },
  { href: "#motivos", label: "Motivos" },
  { href: "#carta", label: "Carta" },
  { href: "#planos", label: "Planos" },
  { href: "#playlist", label: "Playlist" },
];

const RomanticNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-background/70 border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2 text-foreground">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
            <Heart className="w-5 h-5 text-background fill-background" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg">Te Amo, Paolla</p>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary" /> feito com amor
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-2">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full text-sm font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#carta"
            className="ml-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-background font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition"
          >
            Ler minha carta
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-foreground"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-xl text-base font-medium text-foreground/90 hover:bg-primary/10 hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#carta"
              className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-semibold shadow-lg shadow-primary/30"
              onClick={() => setOpen(false)}
            >
              Ler minha carta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default RomanticNavbar;
