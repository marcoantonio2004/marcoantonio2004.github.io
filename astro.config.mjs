import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marcoantonio2004.github.io',
  base: '/marcoagc/',

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    mdx(),
    sitemap()
  ]
});
