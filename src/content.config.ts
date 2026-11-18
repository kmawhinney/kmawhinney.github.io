import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Drafts show (with a "Draft" badge) while running `npm run dev`,
    // and are left out of the live site entirely.
    draft: z.boolean().default(false),
    // Show this post in the "Featured" list on the home page.
    featured: z.boolean().default(false),
  }),
});

const journey = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journey' }),
  schema: ({ image }) => {
    // A single stint inside a grouped entry (e.g. one internship).
    const role = z.object({
      org: z.string(),
      logo: image().optional(),
      orgUrl: z.string().url().optional(),
      location: z.string().optional(),
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      summary: z.string().optional(),
    });

    return z
      .object({
        title: z.string(),
        // Optional when the entry is a group of `roles`.
        org: z.string().optional(),
        // Path to a logo image, relative to the .md file, e.g. ../../assets/logos/company.png
        // Leave out to show the org's initials (or a briefcase for groups).
        logo: image().optional(),
        orgUrl: z.string().url().optional(),
        kind: z.enum(['work', 'education', 'project', 'milestone']),
        location: z.string().optional(),
        // For a group, start/end default to the span of its roles.
        start: z.coerce.date().optional(),
        // Leave out `end` and set `current: true` for something ongoing.
        // Leave out both for a one-off milestone (shows a single date).
        end: z.coerce.date().optional(),
        current: z.boolean().default(false),
        // Several short stints shown together under one timeline item.
        roles: z.array(role).optional(),
        // Work samples shown under the entry, e.g. YouTube videos.
        media: z
          .array(
            z.object({
              youtube: z.string().url(),
              title: z.string(),
              caption: z.string(),
            }),
          )
          .optional(),
      })
      .transform((d) => {
        const roles = d.roles?.slice().sort((a, b) => b.start.valueOf() - a.start.valueOf());
        const start = d.start ?? roles?.at(-1)?.start;
        const end = d.end ?? roles?.[0]?.end;
        if (!start) throw new Error(`Journey entry "${d.title}" needs a start date or roles.`);
        return { ...d, roles, start, end };
      });
  },
});

export const collections = { insights, journey };
