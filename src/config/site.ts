export const siteConfig = {
  name: "Gene Kelly Boyle",
  shortName: "Gene Kelly Boyle",
  role: "Animation Artist & YouTube Storyteller",
  headline:
    "Innovative Animated Content Creator | YouTube Storyteller | Creator of \"Stickman Epic Legends\"",
  tagline:
    "Pushing the boundaries of stick-figure animation with dynamic action, comedy, and cinematic storytelling.",
  location: "Irvine, California, United States",
  url: "https://www.gkanimates.com",
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

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/stickman-epic-legends", label: "The Series" },
  { href: "/characters", label: "Characters" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav: {
  heading: string;
  links: { href: string; label: string }[];
}[] = [
  {
    heading: "Explore",
    links: [
      { href: "/stickman-epic-legends", label: "Stickman: Epic Legends" },
      { href: "/characters", label: "Characters" },
      { href: "/work", label: "Work" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/process", label: "How it's made" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export type Character = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  description: string;
};

export const characters: readonly Character[] = [
  {
    slug: "stickman",
    name: "Stickman",
    role: "Protagonist",
    summary:
      "The hero of Stickman: Epic Legends, defending Animation Island through action-packed, comedic adventures.",
    description:
      "Stickman is the central character of the series, leading the charge across Animation Island. His adventures blend fluid, dynamic combat with comedic timing and cinematic camera work.",
  },
  {
    slug: "rofus-the-dog",
    name: "Rofus the Dog",
    role: "Sidekick",
    summary:
      "The quirky canine companion who joins Stickman on his adventures to protect Animation Island.",
    description:
      "Rofus the Dog is one of the newest additions to the series — a quirky, comedic companion whose unique personality quickly made him a fan favorite. He teams up with Stickman to take on the evil Purple.",
  },
  {
    slug: "roxy",
    name: "Roxy",
    role: "Recurring character",
    summary:
      "A spirited recurring character known for memorable, comedy-driven moments in the series.",
    description:
      "Roxy is a recurring character featured in episodes and shorts such as \"Don't mess with Roxy!\" and \"Roxy's April Fools,\" bringing attitude and comedic energy to Animation Island.",
  },
  {
    slug: "purple",
    name: "Purple",
    role: "Antagonist",
    summary:
      "The villain of Animation Island, whose schemes Stickman and friends work to stop.",
    description:
      "Purple is the antagonist of Stickman: Epic Legends — the 'evil Purple' that Stickman and Rofus the Dog set out to defeat across their adventures.",
  },
] as const;

export type Faq = { question: string; answer: string };

export const faqs: readonly Faq[] = [
  {
    question: "Who is Gene Kelly Boyle?",
    answer:
      "Gene Kelly Boyle is an animation artist and YouTube storyteller based in Irvine, California, and the creator of the animated series \"Stickman: Epic Legends.\" He has been creating animation since 2014 and runs the GK Animates YouTube channel.",
  },
  {
    question: "What is Stickman: Epic Legends?",
    answer:
      "Stickman: Epic Legends is an animated YouTube series created by Gene Kelly Boyle. It follows Stickman's adventures on Animation Island, combining action-packed sequences, comedic storytelling, fluid character motion, and cinematic camera work.",
  },
  {
    question: "What software does Gene Kelly Boyle use to animate?",
    answer:
      "Gene Kelly Boyle animates with industry-standard tools including Adobe Animate and Adobe After Effects, combining traditional animation principles with modern digital techniques.",
  },
  {
    question: "How often are new videos released?",
    answer:
      "New animated content is released regularly on the GK Animates channel, including full episodes and shorts. The latest uploads are always shown on the Work page, which pulls live from YouTube.",
  },
  {
    question: "Where can I watch GK Animates videos?",
    answer:
      "You can watch all episodes and shorts on the GK Animates YouTube channel at youtube.com/@genekellyboyle. Featured videos are also embedded on this site's Work page.",
  },
  {
    question: "Can I hire Gene Kelly Boyle for animation work?",
    answer:
      "Yes. Gene Kelly Boyle runs Gene Kelly Animates, an animation and post-production studio. You can reach out via the Contact page or email genekellyboyle@gmail.com to discuss animation, collaboration, and commissions.",
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: readonly Service[] = [
  {
    title: "2D Character Animation",
    description:
      "Fluid, expressive stick-figure and 2D character animation with strong timing and personality.",
  },
  {
    title: "Storyboarding & Story Development",
    description:
      "Turning ideas into clear visual sequences — from concept and storyboards to a finished narrative.",
  },
  {
    title: "Video Editing & Post-Production",
    description:
      "Editing, compositing, and post-production polish in Adobe After Effects and beyond.",
  },
  {
    title: "Original Content & Shorts",
    description:
      "Custom animated shorts and series-style content built for YouTube and social platforms.",
  },
];

export type ProcessStep = {
  name: string;
  text: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    name: "Concept & story",
    text: "Every animation starts with an idea. I shape it into a clear story beat — the action, the joke, or the moment — that will drive the scene.",
  },
  {
    name: "Storyboard",
    text: "I block out the key poses and camera angles as a storyboard, planning the timing and cinematic framing before any animation begins.",
  },
  {
    name: "Animation",
    text: "Using Adobe Animate, I bring the characters to life frame by frame, applying traditional animation principles for fluid, expressive motion.",
  },
  {
    name: "Backgrounds & compositing",
    text: "Scenes are layered with backgrounds and effects in After Effects, combining foreground, midground, and background for depth.",
  },
  {
    name: "Editing & sound",
    text: "I edit the sequences together, add sound and music, and tune the comedic and cinematic timing in post-production.",
  },
  {
    name: "Publish",
    text: "The finished episode or short is exported and published to the GK Animates YouTube channel for the audience to enjoy.",
  },
];
