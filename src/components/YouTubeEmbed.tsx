"use client";

import { useState } from "react";

type YouTubeEmbedProps = {
  id: string;
  title: string;
  vertical?: boolean;
  thumbnail?: string;
};

/**
 * Lightweight "facade" YouTube embed: renders only a thumbnail + play button
 * on load, and lazily injects the real (heavy) YouTube iframe on click.
 * Avoids shipping ~800KB of player JS/CSS until the user actually plays.
 */
export function YouTubeEmbed({
  id,
  title,
  vertical = false,
  thumbnail,
}: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const poster = thumbnail ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-xl border border-white/10 bg-black ${
        vertical ? "aspect-[9/16] max-w-[280px]" : "aspect-video"
      }`}
    >
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
