import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de blog
const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

// Colección de pasatiempos
const pasatiemposCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    publishDate: z.coerce.date(), // Cambié z.date() por z.coerce.date() para que convierta strings
    tags: z.array(z.string()).optional(),
  }),
});

// Exportar todas las colecciones
export const collections = {
  blog: blog,
  pasatiempos: pasatiemposCollection,
};