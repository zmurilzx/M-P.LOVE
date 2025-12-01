import { useEffect, useState } from "react";
import { Heart, Camera, X } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos?: Photo[];
}

// Helper para resolver caminho relativo respeitando BASE_URL sem quebrar em prod
const asset = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}/${path}`;
};

// Coloque as fotos aqui:
// - Preencha `url` com o caminho/URL da imagem (ex.: "/fotos/minha-foto.jpg" ou "https://...").
// - Ajuste `caption` para a legenda.
// - Adicione ou remova objetos deste array para mudar a quantidade de fotos exibidas.
const defaultPhotos: Photo[] = [
  { id: 1, url: asset("fotos/1e2d98fe-3d0f-40a5-85a0-df78eca3dcdc.jpg"), caption: "Primeira viagem juntos" },
  { id: 2, url: asset("fotos/731BB708-E211-4504-87C5-AA2747CA1E38.jpg"), caption: "Um neném?" },
  { id: 3, url: asset("fotos/IMG_1759.jpg"), caption: "Que fominha!" },
  { id: 4, url: asset("fotos/IMG_1243.jpg"), caption: "Que braveza kk" },
  { id: 5, url: asset("fotos/IMG_0793.jpg"), caption: "Pastelzinho" },
  { id: 6, url: asset("fotos/9318cb3b-a8ad-46f7-b580-a8db46cfbbad.jpg"), caption: "Chocolatinho" },
  { id: 7, url: asset("fotos/69818b05-27df-4ceb-b003-c616e1090328.jpg"), caption: "Lindos" },
  { id: 8, url: asset("fotos/de956cd8-188f-4b75-b518-5cf60b1c624c.jpg"), caption: "Amo" },
  { id: 9, url: asset("fotos/fa115133-2aff-4bf9-8d2f-9bf8ab49c76c.jpg"), caption: "Te amo" },
];

const PhotoGallery = ({ photos = defaultPhotos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedPhoto]);

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
            Momentos especiais
          </span>
        </div>

        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-heart fill-heart" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Galeria do nosso amor
            </h2>
            <Heart className="w-6 h-6 text-heart fill-heart" />
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Clique para ampliar cada lembrança e reviver nossos instantes favoritos.
          </p>
          <div className="love-divider" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <article
              key={photo.id}
              className="group relative romantic-card interactive-card rounded-2xl overflow-hidden animate-fade-in-up cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              style={{ animationDelay: `${index * 80}ms` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
              onClick={() => photo.url && setSelectedPhoto(photo)}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && photo.url) {
                  e.preventDefault();
                  setSelectedPhoto(photo);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Abrir foto: ${photo.caption}`}
            >
              <div className="aspect-square bg-secondary/60 border border-border/50 flex items-center justify-center">
                {photo.url ? (
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
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
              
              {/* Overlay with caption (always visible on mobile; shows on hover in desktop) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/40 backdrop-blur-[2px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-4 md:p-5 pb-6 max-h-full overflow-y-auto">
                  <p className="font-display text-white drop-shadow-md text-base md:text-lg leading-snug break-words whitespace-pre-wrap italic">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Heart decoration */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <Heart className="w-6 h-6 text-heart fill-heart drop-shadow-lg" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-background/90 rounded-3xl border border-border/60 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-foreground hover:bg-black/60 transition"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Fechar visualização da foto"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-5 border-t border-border/50 bg-gradient-to-r from-primary/10 via-background/60 to-accent/10">
              <p className="font-display text-lg text-foreground">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
