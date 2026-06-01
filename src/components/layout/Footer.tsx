import Link from "next/link";
import { siteConfig, footerNav } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-lg font-bold tracking-tight">
            <span className="text-gradient">GK</span> Animates
          </p>
          <p className="mt-1 text-sm text-zinc-400">{siteConfig.role}</p>
          <p className="mt-1 text-sm text-zinc-500">{siteConfig.location}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
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
            <a
              href={siteConfig.links.email}
              className="text-zinc-400 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        {footerNav.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-semibold text-white">{group.heading}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
