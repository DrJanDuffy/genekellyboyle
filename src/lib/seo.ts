import { siteConfig } from "@/config/site";

const base = siteConfig.url;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${base}${path === "/" ? "" : path}`;
}

/** Organization entity for the studio, grounded via @id + sameAs. */
export const organizationId = `${base}/#organization`;
export const personId = `${base}/#person`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "Gene Kelly Animates",
    alternateName: "GK Animates",
    url: base,
    logo: absoluteUrl("/icon.png"),
    image: absoluteUrl("/og-image.png"),
    foundingDate: "2022",
    founder: { "@id": personId },
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irvine",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.links.youtube,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function creativeWorkSeriesSchema(input: {
  name: string;
  description: string;
  path: string;
  characters: { name: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl("/og-image.png"),
    genre: ["Animation", "Comedy", "Action"],
    creator: { "@id": personId },
    productionCompany: { "@id": organizationId },
    character: input.characters.map((c) => ({
      "@type": "Person",
      name: c.name,
    })),
  };
}

export function servicesSchema(
  services: { title: string; description: string }[],
) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { "@id": organizationId },
    areaServed: "Worldwide",
  }));
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl("/og-image.png"),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@id": personId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}
