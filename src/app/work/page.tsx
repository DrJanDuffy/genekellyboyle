import type { Metadata } from "next";
import { siteConfig, featuredWork } from "@/config/site";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  getChannelVideos,
  formatViews,
  formatDate,
  type ChannelVideo,
} from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Work",
  description: `Animated work by ${siteConfig.name} — Stickman: Epic Legends and more from GK Animates.`,
};

// Refresh the live feed hourly.
export const revalidate = 3600;

// Fallback used only if the YouTube feed can't be reached at build/runtime.
function fallbackVideos(): ChannelVideo[] {
  return featuredWork
    .filter((w) => w.youtubeId)
    .map((w) => ({
      id: w.youtubeId as string,
      title: w.title,
      description: w.description,
      published: "",
      thumbnail: `https://i.ytimg.com/vi/${w.youtubeId}/hqdefault.jpg`,
      watchUrl: w.href,
      isShort: Boolean(w.vertical),
    }));
}

function ChannelLink() {
  return (
    <a
      href={siteConfig.links.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
    >
      Visit the channel ({siteConfig.channelHandle})
    </a>
  );
}

function Meta({ video }: { video: ChannelVideo }) {
  const views = formatViews(video.views);
  const date = formatDate(video.published);
  const parts = [date, views].filter(Boolean);
  if (parts.length === 0) return null;
  return <p className="mt-1 text-xs text-zinc-500">{parts.join(" · ")}</p>;
}

export default async function WorkPage() {
  const live = await getChannelVideos(12);
  const videos = live.length > 0 ? live : fallbackVideos();

  const longForm = videos.filter((v) => !v.isShort);
  const shorts = videos.filter((v) => v.isShort);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          My <span className="text-gradient">work</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          The latest episodes and shorts from{" "}
          <span className="font-semibold text-white">
            Stickman: Epic Legends
          </span>{" "}
          and the GK Animates channel — pulled live from YouTube.
        </p>
        <div className="mt-6">
          <ChannelLink />
        </div>
      </header>

      {longForm.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold">Episodes &amp; trailers</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {longForm.map((video) => (
              <article
                key={video.id}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <YouTubeEmbed id={video.id} title={video.title} />
                <h3 className="mt-5 text-lg font-semibold leading-snug">
                  {video.title}
                </h3>
                <Meta video={video} />
                {video.description && (
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                    {video.description}
                  </p>
                )}
                <a
                  href={video.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-accent-2 hover:underline"
                >
                  Watch on YouTube →
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      {shorts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Shorts</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {shorts.map((video) => (
              <article key={video.id} className="flex flex-col">
                <YouTubeEmbed id={video.id} title={video.title} vertical />
                <h3 className="mt-3 text-sm font-semibold leading-snug">
                  {video.title}
                </h3>
                <Meta video={video} />
              </article>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 text-center text-sm text-zinc-500">
        Want the full library of episodes and shorts?{" "}
        <a
          href={siteConfig.links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-2 hover:underline"
        >
          Subscribe on YouTube
        </a>
        .
      </p>
    </div>
  );
}
