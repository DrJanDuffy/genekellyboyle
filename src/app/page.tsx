import Link from "next/link";
import {
  siteConfig,
  highlights,
  skills,
  featuredWork,
} from "@/config/site";
import { getChannelVideos } from "@/lib/youtube";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export const revalidate = 3600;

export default async function Home() {
  const [latest] = await getChannelVideos(1);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-accent-2" />
              Animation Artist · {siteConfig.location}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Hi, I&apos;m {siteConfig.name}. I bring{" "}
              <span className="text-gradient">stick figures</span> to life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                View my work
              </Link>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Watch on YouTube
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-zinc-400">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Latest video */}
      {latest && (
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
            <div className={latest.isShort ? "order-2 md:order-1" : ""}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-accent-2">
                <span className="h-2 w-2 rounded-full bg-accent-2" />
                Latest upload
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                {latest.title}
              </h2>
              {latest.description && (
                <p className="mt-3 leading-7 text-zinc-300">
                  {latest.description}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={latest.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                >
                  Watch now
                </a>
                <Link
                  href="/work"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  All videos
                </Link>
              </div>
            </div>
            <div className={latest.isShort ? "order-1 md:order-2" : ""}>
              <YouTubeEmbed
                id={latest.id}
                title={latest.title}
                vertical={latest.isShort}
              />
            </div>
          </div>
        </section>
      )}

      {/* About snippet */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              About <span className="text-gradient">Gene</span>
            </h2>
            <p className="mt-4 leading-8 text-zinc-300">{siteConfig.about}</p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-accent-2 hover:underline"
            >
              More about me →
            </Link>
          </div>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300"
              >
                <span className="mt-1 text-accent-2">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">Featured work</h2>
            <Link
              href="/work"
              className="text-sm font-semibold text-accent-2 hover:underline"
            >
              See all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredWork.slice(0, 3).map((work) => (
              <a
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/50 hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-semibold leading-snug group-hover:text-accent-2">
                  {work.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                  {work.description}
                </p>
                <span className="mt-4 text-sm font-medium text-accent-2">
                  Watch on YouTube →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">Skills &amp; tools</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s create something <span className="text-gradient">epic</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Animators, content creators, and collaborators welcome. Reach out and
            let&apos;s push the boundaries of digital animation together.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
            <a
              href={siteConfig.links.email}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Email me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
