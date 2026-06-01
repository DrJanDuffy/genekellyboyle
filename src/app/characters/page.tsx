import type { Metadata } from "next";
import Link from "next/link";
import { characters } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";

const description =
  "Meet the characters of Stickman: Epic Legends by Gene Kelly Boyle — Stickman, Rofus the Dog, Roxy, and the villain Purple.";

export const metadata: Metadata = {
  title: "Characters of Stickman: Epic Legends",
  description,
  alternates: { canonical: "/characters" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Characters of Stickman: Epic Legends",
  itemListElement: characters.map((character, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Person",
      name: character.name,
      description: character.summary,
      url: absoluteUrl(`/characters#${character.slug}`),
    },
  })),
};

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <JsonLd data={itemListSchema} />
      <Breadcrumbs crumbs={[{ name: "Characters", path: "/characters" }]} />

      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          The <span className="text-gradient">characters</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
          Stickman: Epic Legends is brought to life by a cast of memorable
          characters on Animation Island — from the heroic Stickman and his
          quirky companion Rofus the Dog to the scheming villain Purple.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {characters.map((character) => (
          <article
            key={character.slug}
            id={character.slug}
            className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold">{character.name}</h2>
              <span className="rounded-full border border-white/15 px-3 py-0.5 text-xs font-medium text-accent-2">
                {character.role}
              </span>
            </div>
            <p className="mt-3 leading-8 text-zinc-300">
              {character.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/stickman-epic-legends"
          className="text-sm font-semibold text-accent-2 hover:underline"
        >
          ← Back to the series
        </Link>
      </div>
    </div>
  );
}
