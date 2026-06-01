export const siteConfig = {
  name: "Gene Kelly Boyle",
  shortName: "Gene Kelly Boyle",
  role: "Animation Artist & YouTube Storyteller",
  headline:
    "Innovative Animated Content Creator | YouTube Storyteller | Creator of \"Stickman Epic Legends\"",
  tagline:
    "Pushing the boundaries of stick-figure animation with dynamic action, comedy, and cinematic storytelling.",
  location: "Irvine, California, United States",
  url: "https://genekellyboyle.com",
  email: "genekellyboyle@gmail.com",
  about: `I'm passionate about pushing the boundaries of digital animation and storytelling. As the creator of "Stickman Epic Legends," I'm revolutionizing stick figure animation on YouTube, blending dynamic action, comedy, and cinematic techniques. I combine traditional animation principles with modern digital tools, releasing new high-quality animated content monthly and growing a dedicated audience.`,
  channelHandle: "@genekellyboyle",
  channelId: "UC_WllVNTkI50BEXRYkmVGRw",
  links: {
    youtube: "https://www.youtube.com/@genekellyboyle",
    linkedin: "https://www.linkedin.com/in/genekellyboyle",
    github: "https://github.com/genekellyboyle",
    email: "mailto:genekellyboyle@gmail.com",
  },
  stats: [
    { label: "Followers", value: "1,762" },
    { label: "Connections", value: "500+" },
    { label: "Years animating", value: "11+" },
  ],
} as const;

export const highlights: readonly string[] = [
  'Developed and produce "Stickman Epic Legends," a cutting-edge animated YouTube series',
  "Specialize in fluid character animation and innovative storytelling techniques",
  "Proficient in Adobe Animate, After Effects, and other industry-standard animation tools",
  "Release new high-quality animated content monthly, growing a dedicated audience",
  "Combine traditional animation principles with modern digital techniques",
] as const;

export const skills: readonly string[] = [
  "2D Animation",
  "Character Design",
  "Storyboarding",
  "Digital Storytelling",
  "Video Editing",
  "Adobe Animate",
  "After Effects",
  "Cinematic Camera Work",
  "YouTube Channel Management",
  "Content Creation",
] as const;

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  href?: string;
};

export const experience: readonly Experience[] = [
  {
    title: "Animation Artist",
    company: "Stickman Epic Legends",
    period: "Sep 2014 - Present",
    location: "YouTube",
    description:
      "Create and produce the cutting-edge animated series following Stickman's adventures on Animation Island — packed with action sequences, comedic storytelling, and cinematic camera work.",
  },
  {
    title: "Animator",
    company: "Gene Kelly Animates",
    period: "Sep 2022 - Present",
    location: "Irvine, California",
    description:
      "Founder of an independent animation and post-production studio focused on original stick-figure storytelling and high-quality digital content.",
  },
  {
    title: "YouTube Content Creator",
    company: "YouTube",
    period: "Jul 2022 - Present",
    location: "United States",
    description:
      "Build and grow an engaged audience by releasing original animated content monthly, from full episodes to shorts.",
    href: "https://www.youtube.com/@genekellyboyle",
  },
] as const;

export type FeaturedWork = {
  title: string;
  description: string;
  // Paste the YouTube video ID here to embed the player (e.g. "dQw4w9WgXcQ").
  // Leave empty to render a link-out card instead.
  youtubeId?: string;
  // Set true for YouTube Shorts (vertical 9:16 video).
  vertical?: boolean;
  href: string;
};

const youtubeWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const featuredWork: readonly FeaturedWork[] = [
  {
    title: "Swing Strife",
    description:
      "The latest GK Animates short — fast-paced stickman action with fluid, dynamic motion.",
    youtubeId: "GQlTRWYPMK0",
    vertical: true,
    href: youtubeWatch("GQlTRWYPMK0"),
  },
  {
    title: "A teaser?",
    description:
      "A cinematic teaser hinting at what's coming next on Animation Island.",
    youtubeId: "TDhxrLtwALQ",
    href: youtubeWatch("TDhxrLtwALQ"),
  },
  {
    title: "The Ocean is a SOUP!",
    description:
      "A playful short bursting with comedy and expressive character animation.",
    youtubeId: "Fe0nqvCIyMw",
    vertical: true,
    href: youtubeWatch("Fe0nqvCIyMw"),
  },
  {
    title: "Coffee shanty",
    description:
      "A rhythmic, characterful short showing off timing and personality.",
    youtubeId: "qXFisoRAth4",
    vertical: true,
    href: youtubeWatch("qXFisoRAth4"),
  },
  {
    title: "I.... am Stickman...",
    description:
      "Stickman takes center stage in this energetic, action-packed short.",
    youtubeId: "lQKyi1eoOhk",
    vertical: true,
    href: youtubeWatch("lQKyi1eoOhk"),
  },
  {
    title: "Firework Chaos",
    description:
      "A New Year's short full of explosive comedy and frantic stickman energy.",
    youtubeId: "LVQd2Q7TreM",
    vertical: true,
    href: youtubeWatch("LVQd2Q7TreM"),
  },
] as const;
