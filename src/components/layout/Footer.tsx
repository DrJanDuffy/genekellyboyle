import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-zinc-400">{siteConfig.role}</p>
          <p className="mt-1 text-sm text-zinc-500">{siteConfig.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="/about" className="text-zinc-400 hover:text-white">
            About
          </Link>
          <Link href="/work" className="text-zinc-400 hover:text-white">
            Work
          </Link>
          <Link href="/contact" className="text-zinc-400 hover:text-white">
            Contact
          </Link>
          <a
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            YouTube
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
