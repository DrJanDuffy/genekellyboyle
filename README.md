# Gene Kelly Boyle — Portfolio

Personal portfolio for **Gene Kelly Boyle**, Animation Artist & YouTube storyteller, creator of *Stickman: Epic Legends* (GK Animates).

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Pages

- `/` — Home (hero, about snippet, featured work, skills, CTA)
- `/about` — Bio, professional highlights, experience timeline, education, skills
- `/work` — Featured episodes & shorts with YouTube embeds
- `/contact` — Email, YouTube, LinkedIn, GitHub

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site content (name, bio, links, experience, skills, featured work) lives in a single file:

```
src/config/site.ts
```

### Embedding real YouTube videos

The Work page renders a YouTube player whenever a video has a `youtubeId`.
Open `src/config/site.ts`, find the `featuredWork` array, and paste the video
ID from each YouTube URL (the part after `v=` or after `youtu.be/`):

```ts
{
  title: "Meet Rofus the Dog! | Stickman: Epic Legends",
  description: "...",
  youtubeId: "dQw4w9WgXcQ", // <-- paste the real video ID here
  href: "https://www.youtube.com/@genekellyboyle",
}
```

Without a `youtubeId`, the card shows a play button that links to the channel.

## Deploy

Deploy to Vercel:

```bash
vercel        # preview
vercel --prod # production
```
