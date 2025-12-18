import { defineCollection, defineContentConfig, z } from "@nuxt/content";

// Define the schema for accessibility audit documents
const accessibility = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    summary: z.object({
      date: z.string(),
      tools: z.string(),
      pages: z.string(),
    }),
    issues: z.array(
      z.object({
        title: z.string(),
        severity: z.string(),
        wcag: z.string(),
        location: z.string(),
        recommendation: z.string(),
      })
    ),
    changes: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
        files: z.string(),
        improved: z.string(),
      })
    ),
    followup: z.array(z.string()),
  }),
});

// Define schema for Market Statistics
const marketStatistics = defineCollection({
  type: "data",
  source: {
    include: "market-statistics/**/*.yml",
    exclude: ["market-statistics/_template.yml"],
  },
  schema: z.object({
    title: z.string(),
    report_date: z.string(),
    year: z.number(),
    month: z.string(),
    prepared_by: z.string().optional(),
    notes: z.string().optional(),
    greater_springfield_area: z.object({
      total_units_sold: z.number(),
      total_volume: z.number(),
      average_sale_price: z.number(),
      median_sale_price: z.number(),
      average_days_on_market: z.number(),
      cumulative_days_on_market: z.number(),
    }),
    counties: z.object({
      greene: z.object({
        total_units_sold: z.number(),
        total_volume: z.number(),
        average_sale_price: z.number(),
        median_sale_price: z.number(),
        average_days_on_market: z.number(),
        cumulative_days_on_market: z.number(),
      }),
      christian: z.object({
        total_units_sold: z.number(),
        total_volume: z.number(),
        average_sale_price: z.number(),
        median_sale_price: z.number(),
        average_days_on_market: z.number(),
        cumulative_days_on_market: z.number(),
      }),
      webster: z.object({
        total_units_sold: z.number(),
        total_volume: z.number(),
        average_sale_price: z.number(),
        median_sale_price: z.number(),
        average_days_on_market: z.number(),
        cumulative_days_on_market: z.number(),
      }),
    }),
  }),
});

// Define schema for News Articles
const news = defineCollection({
  type: "page",
  source: "news/**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
    category: z
      .enum([
        "announcement",
        "industry-news",
        "member-spotlight",
        "education",
        "advocacy",
        "events",
      ])
      .optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    excerpt: z.string().optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

// Define schema for Events
const events = defineCollection({
  type: "page",
  source: "events/**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    location: z.object({
      name: z.string(),
      address: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zip: z.string().optional(),
      url: z.string().optional(),
    }),
    eventType: z
      .enum([
        "meeting",
        "training",
        "networking",
        "conference",
        "webinar",
        "social",
      ])
      .optional(),
    cost: z
      .object({
        member: z.number().optional(),
        nonMember: z.number().optional(),
        free: z.boolean().optional(),
      })
      .optional(),
    registration: z
      .object({
        required: z.boolean().optional(),
        url: z.string().optional(),
        deadline: z.string().optional(),
      })
      .optional(),
    contact: z
      .object({
        name: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
      })
      .optional(),
    featured: z.boolean().optional().default(false),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

// Define schema for About GSBOR content
const aboutContent = defineCollection({
  type: "page",
  source: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    navigation: z
      .object({
        title: z.string(),
        order: z.number().optional(),
      })
      .optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    hero: z
      .object({
        image: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
  }),
});

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        cover: z.string().optional(),
        featured_image: z.string().optional(),
        meta: z
          .object({
            slug: z.string().optional(),
            author: z.string().optional(),
            tags: z.array(z.string()).optional(),
          })
          .optional(),
      }),
    }),
    accessibility,
    content: aboutContent,
    marketStatistics,
    news,
    events,
  },
});
