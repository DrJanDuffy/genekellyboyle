import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, characters, featuredWork } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { creativeWorkSeriesSchema } from "@/lib/seo";

const title = "Stickman: Epic Legends — Animated Series";
const description =
  "Stickman: Epic Legends is an animated YouTube series by Gene Kelly Boyle following Stickman's action-packed, comedic adventures on Animation Island.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/stickman-epic-legends" },
};

export default function SeriesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <JsonLd
        data={creativeWorkSeriesSchema({
          name: "Stickman: Epic Legends",
          description,
          path: "/stickman-epic-legends",
          characters: characters.map((c) => ({ name: c.name })),
        })}
      />
      <Breadcrumbs crumbs={[{ name: "The Series", path: "/stickman-epic-legends" }]} />

      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Stickman: <span className="text-gradient">Epic Legends</span>
        </h1>
        {/* Answer-first lead paragraph (40-60 words) for AEO extraction. */}
        <p className="mt-5 text-lg leading-8 text-zinc-200">
          <strong>Stickman: Epic Legends</strong> is an animated YouTube series
          created by {siteConfig.name}. It follows Stickman&apos;s adventures on
          Animation Island, blending action-packed sequences, comedic
          storytelling, fluid character motion, and cinematic camera work into
          high-quality stick-figure animation released on the GK Animates
          channel.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">What is Animation Island?</h2>
        <p className="mt-3 leading-8 text-zinc-300">
          Animation Island is the world where the series takes place — the stage
          for Stickman&apos;s battles, comedy, and cinematic set pieces. Each
          episode and short expands the world with new characters and
          adventures, from epic action to lighthearted comedy.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Meet the characters</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {characters.map((character) => (
            <Link
              key={character.slug}
              href={`/characters#${character.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:text-accent-2">
                  {character.name}
                </h3>
                <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-zinc-400">
                  {character.role}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {character.summary}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/characters"
          className="mt-6 inline-block text-sm font-semibold text-accent-2 hover:underline"
        >
          View all characters →
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Where to watch</h2>
        <p className="mt-3 leading-8 text-zinc-300">
          Every episode and short streams free on the{" "}
          <a
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-2 hover:underline"
          >
            GK Animates YouTube channel
          </a>
          . You can also watch featured videos on the{" "}
          <Link href="/work" className="text-accent-2 hover:underline">
            Work page
          </Link>
          .
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {featuredWork.slice(0, 4).map((work) => (
            <li key={work.title}>
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300 transition-colors hover:border-accent/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {work.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 flex flex-wrap gap-4">
        <a
          href={siteConfig.links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Watch the series
        </a>
        <Link
          href="/process"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          How it&apos;s made
        </Link>
      </div>
    </div>
  );
}
