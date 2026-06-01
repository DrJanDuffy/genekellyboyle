export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  intro: string;
  sections: PostSection[];
};

export const posts: readonly Post[] = [
  {
    slug: "why-i-animate-stick-figures",
    title: "Why I animate stick figures",
    description:
      "Stick-figure animation strips storytelling down to motion, timing, and emotion. Here's why it's the perfect canvas for cinematic action and comedy.",
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    readingTime: "3 min read",
    intro:
      "Stick figures look simple, but that simplicity is exactly the point. With no costume detail or facial nuance to hide behind, every ounce of personality has to come from movement — the way a character leans, lands, hesitates, or explodes into action. That constraint is what makes stick-figure animation such a powerful place to tell stories.",
    sections: [
      {
        heading: "Motion is the whole performance",
        paragraphs: [
          "In Stickman: Epic Legends, the acting lives entirely in the motion. A pause before a punch, an off-balance recovery, a tiny anticipation before a jump — these are the moments that make audiences feel something. Traditional animation principles like anticipation, follow-through, and timing do all the heavy lifting.",
          "Because the character design is minimal, I can push the animation further: faster action, bigger comedy, more exaggerated physics, without the figure ever feeling busy or cluttered.",
        ],
      },
      {
        heading: "Comedy and action share the same toolkit",
        paragraphs: [
          "The same timing that lands a fight beat also lands a joke. A well-placed hold, a snappy reaction, a sudden change of pace — these techniques work whether the scene is an epic battle on Animation Island or a quick comedic short.",
        ],
      },
      {
        heading: "Cinematic framing on a simple canvas",
        paragraphs: [
          "Stick figures free me to focus on camera work and composition. Dynamic angles, depth between foreground and background, and deliberate staging turn a minimalist character into a genuinely cinematic experience.",
        ],
      },
    ],
  },
  {
    slug: "my-animation-toolkit",
    title: "My animation toolkit: Adobe Animate and After Effects",
    description:
      "A look at the industry-standard tools behind GK Animates — Adobe Animate for character animation and After Effects for compositing and post.",
    datePublished: "2025-02-20",
    dateModified: "2025-02-20",
    readingTime: "3 min read",
    intro:
      "Every Stickman: Epic Legends episode is built with industry-standard tools: Adobe Animate for the character animation and Adobe After Effects for backgrounds, compositing, and post-production. The combination lets me blend traditional animation principles with modern digital techniques.",
    sections: [
      {
        heading: "Adobe Animate for the performance",
        paragraphs: [
          "Animate is where the characters come to life. It's where I work through the key poses, timing, and frame-by-frame motion that give Stickman his energy and personality. Strong fundamentals matter more than any single feature — the software is just the instrument.",
        ],
      },
      {
        heading: "After Effects for depth and polish",
        paragraphs: [
          "Once the animation is locked, After Effects is where scenes gain depth. Layering backgrounds, adding effects, and compositing foreground and background elements turn flat frames into a world. It's also where I handle the final editing and timing polish.",
        ],
      },
      {
        heading: "Tools serve the story",
        paragraphs: [
          "No tool replaces a good idea. The pipeline exists to serve the story — the action, the comedy, and the moments that make Animation Island worth visiting. Curious about the full workflow? See how an animation is made, step by step.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
