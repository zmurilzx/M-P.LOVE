import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/30 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-heart fill-heart animate-pulse-love" />
          <Heart className="w-6 h-6 text-heart fill-heart animate-pulse-love animation-delay-200" />
          <Heart className="w-5 h-5 text-heart fill-heart animate-pulse-love animation-delay-400" />
        </div>
        
        <p className="font-display text-2xl md:text-3xl italic text-foreground/80">
          "Te amo mais do que as palavras podem expressar"
        </p>
        
        <p className="font-body text-muted-foreground">
          Feito com muito amor, Paolla. Sempre seu.
        </p>
        
        <div className="mt-6 flex items-center justify-center gap-1">
          {[...Array(7)].map((_, i) => (
            <Heart
              key={i}
              className="w-3 h-3 text-rose-medium fill-rose-soft"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
