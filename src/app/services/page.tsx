import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { servicesSchema } from "@/lib/seo";

const description =
  "Gene Kelly Animates offers 2D character animation, storyboarding, video editing, and original animated content. Based in Irvine, California; available worldwide.";

export const metadata: Metadata = {
  title: "Animation Services & Commissions",
  description,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <JsonLd data={servicesSchema([...services])} />
      <Breadcrumbs crumbs={[{ name: "Services", path: "/services" }]} />

      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Animation <span className="text-gradient">services</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
          <strong>Gene Kelly Animates</strong> is an animation and
          post-production studio founded by {siteConfig.name} in Irvine,
          California. Services include 2D character animation, storyboarding,
          video editing, and original animated content — available to clients
          worldwide.
        </p>
      </header>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="text-lg font-semibold text-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">How to start a project</h2>
        <p className="mt-3 leading-8 text-zinc-300">
          Email{" "}
          <a
            href={siteConfig.links.email}
            className="text-accent-2 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          with a short description of your project, timeline, and goals. You can
          also reach out through the{" "}
          <Link href="/contact" className="text-accent-2 hover:underline">
            contact page
          </Link>
          . Want to see the workflow first? Read{" "}
          <Link href="/process" className="text-accent-2 hover:underline">
            how an animation is made
          </Link>
          .
        </p>
      </section>

      <div className="mt-12">
        <a
          href={siteConfig.links.email}
          className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Start a project
        </a>
      </div>
    </div>
  );
}
