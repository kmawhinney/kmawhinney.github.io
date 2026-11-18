export const SITE = {
  name: 'Kealan Mawhinney',
  description:
    'Engineer at Meta building AI inference infrastructure. Former product & growth lead (500K → 1.2M users, 2x revenue).',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kealanmawhinney/' },
  ],
};

export const formatMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

// "Nov 5, 2026"
export const formatShortDate = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
