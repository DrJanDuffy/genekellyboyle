import { siteConfig } from "@/config/site";

export type ChannelVideo = {
  id: string;
  title: string;
  description: string;
  published: string;
  thumbnail: string;
  watchUrl: string;
  isShort: boolean;
  views?: string;
};

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${siteConfig.channelId}`;

function decodeEntities(input: string): string {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function cleanTitle(raw: string): string {
  // Strip the " | GK Animates ..." suffix and trailing hashtags for display.
  const base = raw.split("|")[0] ?? raw;
  return decodeEntities(base.replace(/#\w+/g, "").trim());
}

function pick(block: string, regex: RegExp): string | undefined {
  const match = block.match(regex);
  return match?.[1];
}

/**
 * Fetches the channel's latest uploads from the public YouTube RSS feed.
 * Cached/revalidated hourly so new uploads appear without code changes.
 * Returns an empty array on failure so callers can fall back gracefully.
 */
export async function getChannelVideos(limit = 12): Promise<ChannelVideo[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();

    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
    const videos: ChannelVideo[] = [];

    for (const entry of entries) {
      const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      if (!id) continue;
      const rawTitle = pick(entry, /<title>([^<]+)<\/title>/) ?? "Untitled";
      const link = pick(entry, /<link rel="alternate" href="([^"]+)"/) ?? "";
      const isShort = link.includes("/shorts/");

      videos.push({
        id,
        title: cleanTitle(rawTitle),
        description: decodeEntities(
          (pick(entry, /<media:description>([\s\S]*?)<\/media:description>/) ?? "")
            .split("\n")[0]
            .trim(),
        ),
        published: pick(entry, /<published>([^<]+)<\/published>/) ?? "",
        // Canonical (non-sharded) host so it matches our <link rel="preconnect">.
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        watchUrl: link || `https://www.youtube.com/watch?v=${id}`,
        isShort,
        views: pick(entry, /<media:statistics views="(\d+)"/),
      });
    }

    return videos.slice(0, limit);
  } catch {
    return [];
  }
}

export function formatViews(views?: string): string | null {
  if (!views) return null;
  const n = Number(views);
  if (!Number.isFinite(n)) return null;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K views`;
  return `${n} views`;
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
