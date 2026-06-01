import type { Metadata } from "next";
import { siteConfig, experience, skills, highlights } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          About <span className="text-gradient">{siteConfig.name}</span>
        </h1>
        <p className="mt-3 text-lg text-zinc-400">{siteConfig.headline}</p>
      </header>

      <section className="mt-12 space-y-5 leading-8 text-zinc-300">
        <p>{siteConfig.about}</p>
        <p>
          &quot;Stickman Epic Legends&quot; follows the adventures of Stickman on
          Animation Island, showcasing action-packed sequences, comedic
          storytelling, fluid character motion, cinematic camera work, and
          vibrant, eye-catching visuals.
        </p>
      </section>

      {/* Highlights */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Professional highlights</h2>
        <ul className="mt-6 space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-zinc-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Experience</h2>
        <ol className="mt-8 space-y-8 border-l border-white/10 pl-6">
          {experience.map((job) => (
            <li key={`${job.title}-${job.company}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-[var(--background)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.title} ·{" "}
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-2 hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-accent-2">{job.company}</span>
                  )}
                </h3>
                <span className="text-sm text-zinc-500">{job.period}</span>
              </div>
              <p className="text-sm text-zinc-500">{job.location}</p>
              <p className="mt-2 text-zinc-300">{job.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold">Corona del Mar High School</h3>
          <p className="text-sm text-zinc-500">Newport Beach, California</p>
          <p className="mt-2 text-zinc-300">
            Studying animation techniques and narrative development under the
            mentorship of Vanessa D. Valdes, Arts Department Chair — blending
            traditional artistic methods with cutting-edge digital tools.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Skills &amp; tools</h2>
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
      </section>
    </div>
  );
}
