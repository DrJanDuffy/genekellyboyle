import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/config/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { formatDate } from "@/lib/youtube";

const description =
  "Articles on stick-figure animation, craft, and the making of Stickman: Epic Legends by Gene Kelly Boyle.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Breadcrumbs crumbs={[{ name: "Blog", path: "/blog" }]} />

      <header className="animate-fade-up">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          The <span className="text-gradient">blog</span>
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-200">
          Notes on animation craft, tools, and the making of Stickman: Epic
          Legends.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/50"
          >
            <p className="text-xs text-zinc-500">
              {formatDate(post.datePublished)} · {post.readingTime}
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent-2">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 leading-7 text-zinc-400">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-accent-2 hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
