import { Heart, Calendar, MapPin, Star, Camera } from "lucide-react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: "heart" | "calendar" | "mapPin" | "star";
  image?: string;
  video?: string; // opcional: use para vídeos (mp4) no card de mídia
}

// Helper para montar caminhos públicos (usa BASE_URL e faz encode)
const asset = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return encodeURI(`${trimmedBase}/${path}`);
};

const events: TimelineEvent[] = [
  {
    id: 1,
    date: "Quando nos reconhecemos",
    title: "O reencontro",
    description: "Aquele instante em que tudo começou a fazer sentido. Meu coração soube na hora.",
    icon: "star",
    image: asset("fotos/958daa7e-20f6-4f49-95c2-9938bd68b167.jpg"),
    video: asset("fotos/VID-20210308-WA0046.mp4"), // opcional: defina um .mp4 aqui para usar vídeo neste card
  },
  {
    id: 2,
    date: "Treino juntos",
    title: "Franguinha",
    description: "Descobrimos que o tempo voa quando estamos juntos — e que o sorriso certo acalma qualquer medo.",
    icon: "calendar",
    image: asset("fotos/IMG_1243.jpg"),
  },
  {
    id: 3,
    date: "Nosso lugar",
    title: "Refúgio preferido",
    description: "Nosso canto seguro, onde as conversas são longas e o silêncio é confortável.",
    icon: "mapPin",
    image: asset("fotos/IMG_1759.jpg"),
  },
  {
    id: 4,
    date: "Hoje e sempre",
    title: "Amor em construção",
    description: "Seguimos colecionando memórias e sonhando o que ainda vamos viver. Sempre, eu e você.",
    icon: "heart",
    image: asset("fotos/1e2d98fe-3d0f-40a5-85a0-df78eca3dcdc.jpg"),
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
    <section id="historia" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 love-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="love-bubble primary" style={{ top: "10%", left: "14%" }} />
      <div className="love-bubble accent" style={{ bottom: "12%", right: "12%" }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="absolute left-0 top-10">
          <span className="love-sticker text-sm text-foreground/80">
            <Heart className="w-4 h-4 text-heart fill-heart/80" />
            Nossa história
          </span>
        </div>

        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">Linha do tempo</h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Pequenos grandes marcos do nosso amor — cada capítulo nos trouxe até aqui.
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
                className="relative pl-16 md:pl-0 mb-14 animate-fade-in-up"
                style={{ animationDelay: `${index * 140}ms` }}
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

                <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
                  <div
                    className={`flex ${isEven ? "md:justify-end" : "md:order-2 md:justify-start"} ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <article className="romantic-card interactive-card rounded-2xl p-6">
                      <span className="inline-block px-3 py-1 bg-rose-soft text-rose-deep rounded-full text-sm font-body font-medium mb-3">
                        {event.date}
                      </span>
                      <h3 className="font-display text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">{event.description}</p>
                    </article>
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
                          {event.video ? "Vídeo do momento" : "Foto do momento"}
                        </span>
                      </div>

                      <div className="relative flex-1">
                        {event.video ? (
                          <video
                            src={event.video}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                            poster={event.image || undefined}
                          />
                        ) : event.image ? (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            decoding="async"
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
