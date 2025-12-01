import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const phrases = [
  "Você é o meu lar.",
  "Cada batida é por você.",
  "Nosso amor é infinito.",
  "Com você, tudo faz sentido.",
];

const HeroSection = ({ name = "Paolla" }: HeroSectionProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    setTyped("");
    let current = 0;
    const typeInterval = setInterval(() => {
      current += 1;
      setTyped(phrase.slice(0, current));
      if (current === phrase.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhraseIndex((prev) => (prev + 1) % phrases.length), 1500);
      }
    }, 70);
    return () => clearInterval(typeInterval);
  }, [phraseIndex]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 love-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-90"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-12 w-72 h-72 bg-primary/16 blur-3xl rounded-full" />
        <div className="absolute right-0 top-10 w-80 h-80 bg-accent/14 blur-3xl rounded-full" />
        <div className="absolute left-1/2 -bottom-24 w-[480px] h-[480px] -translate-x-1/2 bg-rose-deep/12 blur-3xl rounded-full" />
        <div className="love-bubble primary" style={{ top: "18%", left: "12%" }} />
        <div className="love-bubble accent" style={{ top: "24%", right: "8%" }} />
        <div className="love-bubble heart" style={{ bottom: "16%", left: "26%" }} />
      </div>

      <div className="absolute top-14 left-8 animate-float-heart animation-delay-200 z-10">
        <Heart className="w-8 h-8 text-rose-medium fill-rose-soft" />
      </div>
      <div className="absolute top-32 right-10 animate-float-heart animation-delay-600 z-10">
        <Heart className="w-7 h-7 text-primary fill-rose-soft" />
      </div>
      <div className="absolute bottom-28 left-16 animate-float-heart animation-delay-400 z-10">
        <Heart className="w-10 h-10 text-heart fill-heart/30" />
      </div>
      <div className="absolute bottom-16 right-12 animate-float-heart animation-delay-800 z-10">
        <Heart className="w-7 h-7 text-rose-deep fill-rose-medium/50" />
      </div>

      <div className="absolute top-28 left-1/4 animate-sparkle z-10">
        <Sparkles className="w-5 h-5 text-gold drop-shadow-lg" />
      </div>
      <div className="absolute top-56 right-1/4 animate-sparkle animation-delay-600 z-10">
        <Sparkles className="w-4 h-4 text-gold drop-shadow-lg" />
      </div>

      <div className="relative text-center max-w-5xl mx-auto z-20 w-full px-2">
        <div className="romantic-card bg-card/80 rounded-3xl border border-border/60 px-6 py-10 md:px-12 md:py-14 shadow-2xl">
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs tracking-[0.25em] font-semibold uppercase">
              Te Amo Paolla
              <Sparkles className="w-4 h-4" />
            </span>
          </div>

          <div className="animate-fade-in-up animation-delay-100">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary/60 animate-pulse-love drop-shadow-[0_10px_30px_rgba(255,92,168,0.35)]" />
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-5 animate-fade-in-up animation-delay-200 tracking-tight leading-tight">
            Te Amo, <span className="text-gradient-love italic drop-shadow-lg">{name}</span> ❤️
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground/90 mb-6 animate-fade-in-up animation-delay-300 leading-relaxed max-w-3xl mx-auto">
            Site feito com todo o meu amor e dedicação para você lembrar sempre do quanto eu te amo e o quanto você é especial para mim.
            Mesmo que não estejamos mais juntos, esse site permanecerá como uma prova do meu amor eterno por você.
          </p>

          <div
            className="font-body text-base md:text-lg text-foreground/80 mb-8 animate-fade-in-up animation-delay-400 inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-foreground/5 border border-white/5"
            aria-live="polite"
          >
            <span className="text-primary font-semibold">✧</span>
            <span className="whitespace-pre-wrap">{typed}</span>
            <span className="w-2 h-5 bg-primary/70 animate-pulse" aria-hidden="true" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up animation-delay-500">
            <a
              href="#historia"
              className="relative overflow-hidden px-7 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-background font-semibold shadow-lg shadow-primary/30 transition transform hover:scale-[1.02] hover:shadow-[0_18px_45px_-18px_rgba(0,0,0,0.55)]"
            >
              <span className="relative z-10">Ver nossa história</span>
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10" />
            </a>
            <a
              href="#galeria"
              className="px-7 py-3 rounded-full border border-border/60 text-foreground font-semibold bg-foreground/5 backdrop-blur hover:border-primary/80 hover:text-primary transition"
            >
              Momentos especiais
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-7 text-foreground/80 animate-fade-in-up animation-delay-600">
            {["Sorrisos", "Promessas", "Sonhos", "Planos", "Momentos"].map((tag) => (
              <span key={tag} className="love-pill text-sm">
                <Heart className="w-4 h-4 text-heart fill-heart/80" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
