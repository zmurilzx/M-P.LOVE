import { Heart, Calendar, MapPin, Star } from "lucide-react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: "heart" | "calendar" | "mapPin" | "star";
}

const events: TimelineEvent[] = [
  {
    id: 1,
    date: "O começo",
    title: "Quando nos conhecemos",
    description: "O dia em que minha vida mudou para sempre",
    icon: "star",
  },
  {
    id: 2,
    date: "Primeiro encontro",
    title: "Nossa primeira vez juntos",
    description: "Nervosismo, risos e o início de algo especial",
    icon: "calendar",
  },
  {
    id: 3,
    date: "Nosso lugar",
    title: "Onde tudo acontece",
    description: "Aquele cantinho especial que é só nosso",
    icon: "mapPin",
  },
  {
    id: 4,
    date: "Hoje e sempre",
    title: "Nosso amor",
    description: "E a história continua, cada dia mais forte",
    icon: "heart",
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
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
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
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-soft via-primary to-heart transform md:-translate-x-1/2" />

          {events.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex items-center mb-12 animate-fade-in-up ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-12 h-12 transform -translate-x-1/2 bg-card border-4 border-primary rounded-full flex items-center justify-center z-10 heart-shadow">
                {getIcon(event.icon)}
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
              >
                <div className="romantic-card rounded-2xl p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
