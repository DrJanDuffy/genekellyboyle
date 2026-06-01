import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for animation, collaboration, and content creation.`,
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
    cta: "Send an email",
  },
  {
    label: "YouTube",
    value: siteConfig.channelHandle,
    href: siteConfig.links.youtube,
    cta: "Watch & subscribe",
  },
  {
    label: "LinkedIn",
    value: "/in/genekellyboyle",
    href: siteConfig.links.linkedin,
    cta: "Connect on LinkedIn",
  },
  {
    label: "GitHub",
    value: "github.com/genekellyboyle",
    href: siteConfig.links.github,
    cta: "View projects",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="animate-fade-up text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Let&apos;s <span className="text-gradient">connect</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
          I&apos;m always eager to connect with fellow animators, digital content
          creators, and anyone interested in collaborative opportunities in
          animation and digital content.
        </p>
      </header>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/50 hover:bg-white/[0.06]"
          >
            <p className="text-sm text-zinc-400">{c.label}</p>
            <p className="mt-1 break-all text-lg font-semibold text-white">
              {c.value}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-accent-2 group-hover:underline">
              {c.cta} →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-accent/15 to-accent-2/10 p-8 text-center">
        <p className="text-lg font-semibold">
          Passionate about animation or digital storytelling?
        </p>
        <p className="mt-2 text-zinc-300">
          Let&apos;s discuss how we can push the boundaries of digital animation
          together.
        </p>
        <a
          href={siteConfig.links.email}
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
