import { getCollection } from 'astro:content';

export async function getPosts() {
  // In dev, keep drafts so you can preview them; in the live build, drop them.
  const posts = await getCollection('insights', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getJourney() {
  const entries = await getCollection('journey');
  // Ongoing things first, then most recent start date.
  return entries.sort(
    (a, b) =>
      Number(b.data.current) - Number(a.data.current) ||
      b.data.start.valueOf() - a.data.start.valueOf(),
  );
}
