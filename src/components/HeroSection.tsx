import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "Meu Amor" }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float-heart animation-delay-200">
        <Heart className="w-8 h-8 text-rose-medium fill-rose-soft" />
      </div>
      <div className="absolute top-40 right-20 animate-float-heart animation-delay-600">
        <Heart className="w-6 h-6 text-primary fill-rose-soft" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-heart animation-delay-400">
        <Heart className="w-10 h-10 text-heart fill-heart/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-heart animation-delay-800">
        <Heart className="w-7 h-7 text-rose-deep fill-rose-medium/50" />
      </div>

      {/* Sparkles */}
      <div className="absolute top-32 left-1/4 animate-sparkle">
        <Sparkles className="w-5 h-5 text-gold" />
      </div>
      <div className="absolute top-60 right-1/4 animate-sparkle animation-delay-600">
        <Sparkles className="w-4 h-4 text-gold" />
      </div>

      <div className="text-center max-w-3xl mx-auto z-10">
        <div className="animate-fade-in-up">
          <Heart className="w-16 h-16 mx-auto mb-6 text-heart fill-heart animate-pulse-love" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          Para você,{" "}
          <span className="text-gradient-love italic">{name}</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-400 leading-relaxed">
          Este site foi feito especialmente para você, 
          para guardar nossos momentos mais preciosos 
          e todas as palavras que meu coração quer te dizer.
        </p>

        <div className="flex items-center justify-center gap-2 animate-fade-in-up animation-delay-600">
          <Heart className="w-4 h-4 text-heart fill-heart" />
          <span className="font-display italic text-lg text-foreground/70">
            Com todo meu amor
          </span>
          <Heart className="w-4 h-4 text-heart fill-heart" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
