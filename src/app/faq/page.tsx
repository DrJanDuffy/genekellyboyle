import type { Metadata } from "next";
import Link from "next/link";
import { faqs, siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";

const description =
  "Frequently asked questions about Gene Kelly Boyle, Stickman: Epic Legends, GK Animates, the animation software used, release schedule, and commissions.";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description,
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd data={faqSchema([...faqs])} />
      <Breadcrumbs crumbs={[{ name: "FAQ", path: "/faq" }]} />

      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Frequently asked <span className="text-gradient">questions</span>
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-200">
          Answers about {siteConfig.name}, the Stickman: Epic Legends series, and
          working with GK Animates.
        </p>
      </header>

      <dl className="mt-12 divide-y divide-white/10">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <dt className="text-lg font-semibold text-white">{faq.question}</dt>
            <dd className="mt-2 leading-8 text-zinc-300">{faq.answer}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-accent/15 to-accent-2/10 p-6 text-center">
        <p className="text-lg font-semibold">Still have a question?</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
