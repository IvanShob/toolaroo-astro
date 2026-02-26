import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['writing', 'image', 'coding', 'video', 'audio', 'productivity', 'research', 'design', 'ai-marketing']).optional(),
    featured: z.boolean().optional(),
    rank: z.number().optional(),
    slug: z.string().optional(),
    url: z.string().url().optional(),
    longDescription: z.string().optional(),
    features: z.array(z.string()).optional(),
    useCases: z.array(z.string()).optional(),
    pricing: z.record(z.string()).optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    alternatives: z.array(z.object({
      name: z.string(),
      reason: z.string(),
    })).optional(),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    name: z.string().optional(),
    pricingModel: z.enum(['Free', 'Freemium', 'Paid']).optional(),
    rating: z.number().optional(),
  }),
});

export const collections = {
  tools: toolsCollection,
};
