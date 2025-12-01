import { Heart } from "lucide-react";

interface Reason {
  id: number;
  title: string;
  detail: string;
}

const reasons: Reason[] = [
  {
    id: 1,
    title: "Seu jeito",
    detail: "Você é intensa, linda, meiga e charmosa. Sua delicadeza me atrai e me conquista!",
  },
  {
    id: 2,
    title: "Seu sorriso",
    detail: "Ele ilumina meus dias e me faz lembrar de como sou sortudo.",
  },
  {
    id: 3,
    title: "Nossa conexão",
    detail: "Com você as coisas se encaixam de um jeito tão natural e verdadeiro.",
  }
];

const LoveDeclarations = () => {
  return (
    <section id="motivos" className="relative py-20 px-4 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 love-grid opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="love-bubble heart" style={{ top: "6%", left: "10%" }} />
      <div className="love-bubble primary" style={{ bottom: "10%", right: "14%" }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="absolute right-0 top-12">
          <span className="love-sticker text-sm text-foreground/80">
            <Heart className="w-4 h-4 text-primary fill-primary/80" />
            Motivos
          </span>
        </div>

        <div className="text-center mb-14 space-y-3">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">Motivos pelos quais te amo</h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada detalhe seu é tiro no meu peito de amor. Aqui estão alguns que fazem meu coração vibrar.
          </p>
          <div className="love-divider" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <article
              key={reason.id}
              className="romantic-card interactive-card rounded-2xl p-6 h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent text-background shadow-lg shadow-primary/30">
                  <Heart className="w-5 h-5 fill-background" />
                </span>
                <h3 className="font-display text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">{reason.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveDeclarations;
