import { Music2 } from "lucide-react";

// Cole aqui o link do YouTube (watch ou youtu.be). O helper converte para embed.
// Ex.: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" ou "https://youtu.be/dQw4w9WgXcQ"
const rawYoutubeUrl = "https://youtu.be/vPTxVQDk11U?list=RDvPTxVQDk11U";

const toEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("/embed/")) return url;
  const ytId =
    url.match(/youtu\.be\/([^?&]+)/)?.[1] ||
    url.match(/v=([^?&]+)/)?.[1] ||
    url.match(/youtube\.com\/shorts\/([^?&]+)/)?.[1];
  return ytId ? `https://www.youtube.com/embed/${ytId}?rel=0` : url;
};

const youtubeEmbedUrl = toEmbedUrl(rawYoutubeUrl);

const MusicPlayer = () => {
  return (
    <section className="relative py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="romantic-card rounded-3xl border border-border/60 p-6 flex flex-col gap-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-background shadow-lg shadow-primary/30">
            <Music2 className="w-6 h-6" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-display text-xl truncate">Música que me lembra você</p>
            <p className="text-sm text-muted-foreground">
              Ouvia essa música quando comecei a te amar.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-background/70 aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={youtubeEmbedUrl}
              title="Playlist ou vídeo do amor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
