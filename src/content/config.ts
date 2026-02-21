import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false)
});

export const collections = {
  playground: defineCollection({ type: "content", schema: postSchema }),
  research: defineCollection({ type: "content", schema: postSchema }),
  apps: defineCollection({
    type: "content",
    schema: postSchema.extend({
      status: z.enum(["idea", "prototype", "live"]).default("prototype"),
      url: z.string().url().optional()
    })
  })
};

