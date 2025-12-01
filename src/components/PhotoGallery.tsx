import { Heart, Camera } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
}

const defaultPhotos: Photo[] = [
  { id: 1, url: "", caption: "Nosso primeiro encontro" },
  { id: 2, url: "", caption: "Aquele dia especial" },
  { id: 3, url: "", caption: "Juntos é melhor" },
  { id: 4, url: "", caption: "Momentos de felicidade" },
  { id: 5, url: "", caption: "Nosso lugar favorito" },
  { id: 6, url: "", caption: "Para sempre" },
];

const PhotoGallery = ({ photos = defaultPhotos }: PhotoGalleryProps) => {
  return (
    <section id="galeria" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none love-grid opacity-40" aria-hidden="true" />
      <div className="love-bubble primary" style={{ top: "12%", left: "8%" }} />
      <div className="love-bubble accent" style={{ top: "20%", right: "6%" }} />
      <div className="love-bubble heart" style={{ bottom: "6%", right: "18%" }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="absolute left-0 top-12">
          <span className="love-sticker text-sm text-foreground/80">
            <Heart className="w-4 h-4 text-heart fill-heart/80" />
            Lembranças queridas
          </span>
        </div>

        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Nossos Momentos
            </h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Cada foto conta uma história do nosso amor
          </p>
          <div className="love-divider" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative romantic-card interactive-card rounded-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
            >
              <div className="aspect-square bg-secondary/60 border border-border/50 flex items-center justify-center">
                {photo.url ? (
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-6">
                    <Camera className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground/70 font-body">
                      Adicione uma foto
                    </p>
                  </div>
                )}
              </div>
              
              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="font-display text-primary-foreground text-lg italic">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Heart decoration */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <Heart className="w-6 h-6 text-heart fill-heart drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
