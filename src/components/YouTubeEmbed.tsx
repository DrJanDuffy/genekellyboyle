type YouTubeEmbedProps = {
  id: string;
  title: string;
  vertical?: boolean;
};

export function YouTubeEmbed({ id, title, vertical = false }: YouTubeEmbedProps) {
  return (
    <div
      className={`mx-auto w-full overflow-hidden rounded-xl border border-white/10 bg-black ${
        vertical ? "aspect-[9/16] max-w-[280px]" : "aspect-video"
      }`}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
