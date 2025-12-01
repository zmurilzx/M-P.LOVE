import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "Meu Amor" }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 love-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-90"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-12 w-80 h-80 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute right-0 top-10 w-96 h-96 bg-accent/18 blur-3xl rounded-full" />
        <div className="absolute left-1/2 -bottom-24 w-[520px] h-[520px] -translate-x-1/2 bg-rose-deep/12 blur-3xl rounded-full" />
        <div className="love-bubble primary" style={{ top: "18%", left: "12%" }} />
        <div className="love-bubble accent" style={{ top: "24%", right: "8%" }} />
        <div className="love-bubble heart" style={{ bottom: "16%", left: "26%" }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float-heart animation-delay-200 z-10">
        <Heart className="w-8 h-8 text-rose-medium fill-rose-soft" />
      </div>
      <div className="absolute top-40 right-20 animate-float-heart animation-delay-600 z-10">
        <Heart className="w-6 h-6 text-primary fill-rose-soft" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-heart animation-delay-400 z-10">
        <Heart className="w-10 h-10 text-heart fill-heart/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-heart animation-delay-800 z-10">
        <Heart className="w-7 h-7 text-rose-deep fill-rose-medium/50" />
      </div>

      {/* Sparkles */}
      <div className="absolute top-32 left-1/4 animate-sparkle z-10">
        <Sparkles className="w-5 h-5 text-gold drop-shadow-lg" />
      </div>
      <div className="absolute top-60 right-1/4 animate-sparkle animation-delay-600 z-10">
        <Sparkles className="w-4 h-4 text-gold drop-shadow-lg" />
      </div>

      <div className="relative text-center max-w-4xl mx-auto z-20 w-full px-2">
        <div className="romantic-card bg-card/70 rounded-3xl border border-border/60 px-6 py-10 md:px-12 md:py-14 shadow-2xl">
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs tracking-[0.25em] font-semibold uppercase">
              Feito com amor
              <Sparkles className="w-4 h-4" />
            </span>
          </div>

          <div className="animate-fade-in-up animation-delay-100">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary/60 animate-pulse-love drop-shadow-[0_10px_30px_rgba(255,92,168,0.35)]" />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-6 animate-fade-in-up animation-delay-200 tracking-tight">
            Para você,{" "}
            <span className="text-gradient-love italic drop-shadow-lg">{name}</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground/90 mb-10 animate-fade-in-up animation-delay-400 leading-relaxed max-w-3xl mx-auto">
            Desenvolvi este site para mostrar o quanto te amo. Onde guardo cada batida
            do meu coração, cada lembrança que ilumina nossas noites e tudo o que
            ainda quero viver ao seu lado.
          </p>

          <div className="flex flex-col items-center gap-6 animate-fade-in-up animation-delay-600">
            <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.22em] text-foreground/70 font-semibold">
              <Heart className="w-4 h-4 text-heart fill-heart" />
              <span className="font-display text-base italic">Com todo meu amor</span>
              <Heart className="w-4 h-4 text-heart fill-heart" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#galeria"
                className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-background font-semibold shadow-lg transition transform hover:scale-[1.02] hover:shadow-[0_15px_45px_-20px_rgba(0,0,0,0.6)]"
              >
                <span className="relative z-10">Ver nossas fotos</span>
                <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10" />
              </a>
              <a
                href="#declaracoes"
                className="px-6 py-3 rounded-full border border-border/60 text-foreground font-semibold bg-foreground/5 backdrop-blur hover:border-primary/80 hover:text-primary transition"
              >
                Ler declarações
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-6 text-foreground/80">
              {["Sorrisos", "Promessas", "Sonhos", "Planos", "Momentos"].map((tag) => (
                <span key={tag} className="love-pill text-sm">
                  <Heart className="w-4 h-4 text-heart fill-heart/80" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
