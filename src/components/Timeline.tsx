import { Heart, Calendar, MapPin, Star, Camera } from "lucide-react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: "heart" | "calendar" | "mapPin" | "star";
  image?: string;
}

const events: TimelineEvent[] = [
  {
    id: 1,
    date: "O começo",
    title: "Quando nos conhecemos",
    description: "O dia em que minha vida mudou para sempre",
    icon: "star",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    date: "Primeiro encontro",
    title: "Nossa primeira vez juntos",
    description: "Nervosismo, risos e o início de algo especial",
    icon: "calendar",
    image: "https://images.unsplash.com/photo-1469495226960-8899e992537c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    date: "Nosso lugar",
    title: "Onde tudo acontece",
    description: "Aquele cantinho especial que é só nosso",
    icon: "mapPin",
    image: "",
  },
  {
    id: 4,
    date: "Hoje e sempre",
    title: "Nosso amor",
    description: "E a história continua, cada dia mais forte",
    icon: "heart",
    image: "",
  },
];

const getIcon = (iconType: TimelineEvent["icon"]) => {
  const iconClass = "w-5 h-5";
  switch (iconType) {
    case "heart":
      return <Heart className={`${iconClass} text-heart fill-heart`} />;
    case "calendar":
      return <Calendar className={iconClass} />;
    case "mapPin":
      return <MapPin className={iconClass} />;
    case "star":
      return <Star className={`${iconClass} fill-current`} />;
  }
};

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 love-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="love-bubble primary" style={{ top: "10%", left: "14%" }} />
      <div className="love-bubble accent" style={{ bottom: "12%", right: "12%" }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-0 top-10">
          <span className="love-sticker text-sm text-foreground/80">
            <Heart className="w-4 h-4 text-heart fill-heart/80" />
            Linha do tempo
          </span>
        </div>

        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Nossa História
            </h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground">
            Momentos que marcaram nosso caminho juntos
          </p>
          <div className="love-divider" aria-hidden="true" />
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-soft via-primary to-heart transform md:-translate-x-1/2" />

          {events.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="relative pl-20 md:pl-0 mb-16 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--x", `${x}px`);
                  e.currentTarget.style.setProperty("--y", `${y}px`);
                }}
              >
                <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 w-12 h-12 transform -translate-x-1/2 bg-card border-4 border-primary rounded-full flex items-center justify-center z-10 heart-shadow">
                  {getIcon(event.icon)}
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-stretch">
                  <div
                    className={`flex ${isEven ? "md:justify-end" : "md:order-2 md:justify-start"} ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="romantic-card interactive-card rounded-2xl p-6 h-full">
                      <span className="inline-block px-3 py-1 bg-rose-soft text-rose-deep rounded-full text-sm font-body font-medium mb-3">
                        {event.date}
                      </span>
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {event.title}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex ${isEven ? "md:justify-start" : "md:order-1 md:justify-end"} ${
                      isEven ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div className="romantic-card interactive-card rounded-2xl overflow-hidden border border-border/50 bg-secondary/50 h-full flex flex-col">
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/40 backdrop-blur">
                        <Camera className="w-4 h-4 text-primary" />
                        <span className="font-body text-xs uppercase tracking-[0.18em] text-foreground/70">
                          Foto do momento
                        </span>
                      </div>

                      <div className="relative flex-1">
                        {event.image ? (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-muted-foreground/80 gap-3 p-4 text-center">
                            <Camera className="w-10 h-10" />
                            <p className="font-body text-sm">Adicione uma foto deste momento</p>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
