import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { posts } from "@/config/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  type Entry = {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
    lastModified?: Date;
  };

  const routes: Entry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/stickman-epic-legends", changeFrequency: "weekly", priority: 0.9 },
    { path: "/work", changeFrequency: "daily", priority: 0.9 },
    { path: "/characters", changeFrequency: "monthly", priority: 0.8 },
    { path: "/process", changeFrequency: "monthly", priority: 0.7 },
    { path: "/services", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  ];

  const postRoutes: Entry[] = posts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
    lastModified: new Date(post.dateModified ?? post.datePublished),
  }));

  return [...routes, ...postRoutes].map((route) => ({
    url: `${base}${route.path === "/" ? "" : route.path}`,
    lastModified: route.lastModified ?? lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
