import type { Metadata } from "next";
import Link from "next/link";
import { processSteps, siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { howToSchema } from "@/lib/seo";

const howToName = "How a Stickman animation is made";
const description =
  "How Gene Kelly Boyle makes a stick-figure animation, step by step: concept, storyboard, animation in Adobe Animate, backgrounds and compositing, editing, and publishing.";

export const metadata: Metadata = {
  title: "How a Stickman Animation Is Made",
  description,
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd
        data={howToSchema({
          name: howToName,
          description,
          steps: [...processSteps],
        })}
      />
      <Breadcrumbs crumbs={[{ name: "Process", path: "/process" }]} />

      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          How it&apos;s <span className="text-gradient">made</span>
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-200">
          Every Stickman: Epic Legends episode follows a clear production
          pipeline — from a story idea to a finished animation published on
          YouTube. Here is {siteConfig.name}&apos;s six-step process.
        </p>
      </header>

      <ol className="mt-12 space-y-6">
        {processSteps.map((step, index) => (
          <li
            key={step.name}
            className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 text-sm font-bold text-black">
              {index + 1}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-white">{step.name}</h2>
              <p className="mt-1 leading-7 text-zinc-300">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/work"
          className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          See the results
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Hire for a project
        </Link>
      </div>
    </div>
  );
}
