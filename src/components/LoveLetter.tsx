import { Heart, Feather } from "lucide-react";

const LoveLetter = () => {
  return (
    <section id="carta" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 love-grid opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="love-bubble heart" style={{ top: "10%", right: "12%" }} />
      <div className="love-bubble primary" style={{ bottom: "12%", left: "6%" }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">Carta para Dedê</h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma carta aberta para lembrar que, em cada linha, existe um pedaço de nós dois.
          </p>
          <div className="love-divider" aria-hidden="true" />
        </div>

        <div className="romantic-card rounded-3xl p-6 md:p-8 border border-border/50 bg-background/70">
          <div className="flex items-center gap-3 mb-4 text-foreground/80">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent text-background shadow-lg shadow-primary/30">
              <Feather className="w-5 h-5" />
            </span>
            <p className="font-display text-lg italic">Para você, com todo o meu amor.</p>
          </div>
          <div className="max-h-[360px] overflow-y-auto pr-1 space-y-4 font-body leading-relaxed text-foreground/90">
            <p>
              Paolla, fiz esse site para que sempre que sentir saudade ou dúvidas do meu amor você voltar e ver. E provar que o
              meu pensamento volta para você sempre, e de que eu tenho orgulho de chamar você de amor.
            </p>
            <p>
              Obrigado por tudo, por ser a pessoa que eu mais amo nessa vida, por cada momento juntos, por cada sorriso
              e por ser a mulher que amo e que quero amar pelo resto da vida. Seu riso é a trilha
              sonora dos meus dias e seu olhar é coisa mais maravilhosa que já vi.
            </p>
            <p>
              Eu sempre quero cuidar de você, respeitar seu tempo, apoiar seus sonhos mesmo sendo ciumentão.
              Que esta carta seja um lembrete: eu te amo profundamente, e escolheria você em cada universo possível apesar dos contras.
            </p>
            <p className="font-semibold text-primary">
              Com amor, para sempre seu.
              Veja sempre que quiser. Nunca vai sair do ar essa declaração.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
