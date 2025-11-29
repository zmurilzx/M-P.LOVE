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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative romantic-card rounded-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-secondary/50 flex items-center justify-center">
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
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
