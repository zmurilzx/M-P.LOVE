import { useMemo, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface BurstHeart {
  id: number;
  left: string;
  delay: string;
}

const LoveAction = () => {
  const [clicked, setClicked] = useState(false);
  const burstHearts: BurstHeart[] = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        left: `${10 + i * 10}%`,
        delay: `${(i % 3) * 120}ms`,
      })),
    []
  );

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-x-0 -top-16 h-36 bg-gradient-to-b from-heart/15 via-heart/8 to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 love-grid opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto relative">
        <div className="romantic-card rounded-3xl border border-border/60 p-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs tracking-[0.25em] font-semibold uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Momento fofo
          </div>
          <h3 className="font-display text-3xl md:text-4xl mb-3">Clique aqui se você me ama</h3>
          <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
            Só para confirmar o que eu já sei: seu coração bate junto com o meu. Prometo retribuir com todo o amor do mundo.
          </p>
          <div className="relative">
            <button
              type="button"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-background font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition relative overflow-hidden"
              onClick={() => setClicked(true)}
              aria-pressed={clicked}
            >
              <span className="relative z-10">{clicked ? "Eu também te amo!" : "Eu te amo ❤️"}</span>
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10" />
            </button>

            {clicked && (
              <div className="absolute inset-0 pointer-events-none">
                {burstHearts.map((heart) => (
                  <Heart
                    key={heart.id}
                    className="absolute text-heart fill-heart animate-float-up"
                    style={{
                      left: heart.left,
                      bottom: "-10px",
                      animationDelay: heart.delay,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveAction;
