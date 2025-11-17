import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marcoantonio2004.github.io/marcoagc.github.io',
  base: '/marcoagc.github.io',

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
