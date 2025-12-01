import { Heart, Quote } from "lucide-react";

interface Declaration {
  id: number;
  text: string;
}

const declarations: Declaration[] = [
  {
    id: 1,
    text: "Desde que você entrou na minha vida, tudo ficou mais colorido. Você é a pessoa que eu sempre sonhei encontrar.",
  },
  {
    id: 2,
    text: "Cada momento ao seu lado é um presente. Seu sorriso ilumina meus dias e sua presença aquece meu coração.",
  },
  {
    id: 3,
    text: "Te amo não só pelo que você é, mas pelo que eu me torno quando estou com você. Você me faz querer ser melhor a cada dia.",
  },
  {
    id: 4,
    text: "Você é minha melhor amiga, minha confidente, meu amor. Não consigo imaginar minha vida sem você.",
  },
];

const LoveDeclarations = () => {
  return (
    <section id="declaracoes" className="relative py-20 px-4 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 love-grid opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="love-bubble heart" style={{ top: "6%", left: "10%" }} />
      <div className="love-bubble primary" style={{ bottom: "10%", right: "14%" }} />

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute right-0 top-12">
          <span className="love-sticker text-sm text-foreground/80">
            <Quote className="w-4 h-4 text-primary" />
            Amor em palavras
          </span>
        </div>

        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Declarações de Amor
            </h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground">
            Palavras que vêm do coração
          </p>
          <div className="love-divider" aria-hidden="true" />
        </div>

        <div className="space-y-8">
          {declarations.map((declaration, index) => (
            <div
              key={declaration.id}
              className={`romantic-card interactive-card rounded-2xl p-8 animate-fade-in-up ${
                index % 2 === 0 ? "ml-0 mr-0 md:mr-12" : "ml-0 md:ml-12"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
            >
              <div className="flex gap-4">
                <Quote className="w-8 h-8 text-rose-medium flex-shrink-0 transform rotate-180" />
                <div>
                  <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/90">
                    {declaration.text}
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Heart className="w-4 h-4 text-heart fill-heart animate-pulse-love" />
                    <Heart className="w-3 h-3 text-rose-medium fill-rose-soft" />
                    <Heart className="w-2 h-2 text-rose-soft fill-rose-soft" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveDeclarations;
