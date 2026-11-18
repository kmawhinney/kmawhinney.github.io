// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kealanmawhinney.com',
  // Leave the old /writing redirect pages out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.includes('/writing') })],
  // Old URLs from when the section was called Writing
  redirects: {
    '/writing': '/insights',
    '/writing/[id]': '/insights/[id]',
  },
  server: {
    // Listen on IPv4 so http://localhost and http://127.0.0.1 both work
    // (by default it can bind only to IPv6 ::1, which some browsers don't try).
    host: '127.0.0.1',
  },
});
