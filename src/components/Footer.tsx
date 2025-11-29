import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-heart fill-heart animate-pulse-love" />
          <Heart className="w-6 h-6 text-heart fill-heart animate-pulse-love animation-delay-200" />
          <Heart className="w-5 h-5 text-heart fill-heart animate-pulse-love animation-delay-400" />
        </div>
        
        <p className="font-display text-2xl md:text-3xl italic mb-4 text-foreground/80">
          "Te amo mais do que as palavras podem expressar"
        </p>
        
        <p className="font-body text-muted-foreground">
          Feito com muito amor para você ❤️
        </p>
        
        <div className="mt-8 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-3 h-3 text-rose-medium fill-rose-soft"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
