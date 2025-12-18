<script setup lang="ts">
const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

// Fetch the news article
const { data: article } = await useAsyncData(`news-${slug}`, () =>
  queryCollection("news").path(`/news/${slug}`).first()
);

// Handle 404 if article not found
if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

// Set SEO metadata
useHead({
  title: `${article.value.title} | GSBOR News`,
  meta: [
    {
      name: "description",
      content: article.value.description || article.value.excerpt,
    },
    {
      property: "og:title",
      content: article.value.title,
    },
    {
      property: "og:description",
      content: article.value.description || article.value.excerpt,
    },
    {
      property: "og:image",
      content: article.value.image?.src || "",
    },
  ],
});

// Get related articles
const { data: relatedArticles } = await useAsyncData(
  `related-news-${slug}`,
  () =>
    queryCollection("news")
      .where("path", "<>", `/news/${slug}`)
      .order("date", "DESC")
      .limit(3)
      .all()
);

// Helper functions
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getCategoryLabel = (category?: string) => {
  if (!category) return "";
  return category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

const categoryColors = {
  announcement: "bg-primary-100 text-primary-800",
  "industry-news": "bg-blue-100 text-blue-800",
  "member-spotlight": "bg-purple-100 text-purple-800",
  education: "bg-green-100 text-green-800",
  advocacy: "bg-orange-100 text-orange-800",
  events: "bg-pink-100 text-pink-800",
};
</script>

<template>
  <div>
    <main>
      <!-- Breadcrumb -->
      <section class="bg-gray-50 py-6">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <nav class="flex items-center space-x-2 text-sm text-gray-600">
              <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
              <Icon name="i-lucide-chevron-right" class="w-4 h-4" />
              <NuxtLink to="/news-events" class="hover:text-primary-600"
                >News & Events</NuxtLink
              >
              <Icon name="i-lucide-chevron-right" class="w-4 h-4" />
              <span class="text-gray-900">{{ article.title }}</span>
            </nav>
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <article class="py-12">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <!-- Article Header -->
            <header class="mb-8">
              <!-- Category & Date -->
              <div class="flex items-center gap-4 mb-6">
                <span
                  v-if="article.category"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium',
                    categoryColors[article.category] ||
                      'bg-gray-100 text-gray-800',
                  ]"
                >
                  {{ getCategoryLabel(article.category) }}
                </span>
                <time :datetime="article.date" class="text-gray-600">
                  {{ formatDate(article.date) }}
                </time>
                <span v-if="article.author" class="text-gray-600">
                  By {{ article.author }}
                </span>
              </div>

              <!-- Title -->
              <h1 class="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                {{ article.title }}
              </h1>

              <!-- Description -->
              <p
                v-if="article.description"
                class="text-xl text-gray-700 leading-relaxed mb-8"
              >
                {{ article.description }}
              </p>

              <!-- Featured Image -->
              <div v-if="article.image" class="mb-8">
                <img
                  :src="article.image.src"
                  :alt="article.image.alt"
                  class="w-full h-64 md:h-96 object-cover rounded-xl"
                />
              </div>
            </header>

            <!-- Article Body -->
            <div class="prose prose-lg max-w-none">
              <ContentRenderer :value="article" />
            </div>

            <!-- Tags -->
            <div
              v-if="article.tags && article.tags.length > 0"
              class="mt-8 pt-8 border-t border-gray-200"
            >
              <h3 class="text-lg font-medium mb-4">Tags</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in article.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Share & Actions -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <span class="text-gray-600">Share this article:</span>
                  <div class="flex gap-2">
                    <a
                      :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        article.title
                      )}&url=${encodeURIComponent($route.fullPath)}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <Icon name="i-lucide-twitter" class="w-4 h-4" />
                    </a>
                    <a
                      :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        $route.fullPath
                      )}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Icon name="i-lucide-facebook" class="w-4 h-4" />
                    </a>
                    <a
                      :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        $route.fullPath
                      )}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <Icon name="i-lucide-linkedin" class="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <Button to="/news-events" variant="outline" color="primary">
                  <Icon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" />
                  Back to News
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Related Articles -->
      <section
        v-if="relatedArticles && relatedArticles.length > 0"
        class="py-12 bg-gray-50"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-2xl font-light mb-8 text-gray-900">
              Related <span>Articles</span>
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <NewsCard
                v-for="relatedArticle in relatedArticles"
                :key="relatedArticle.path"
                :article="relatedArticle"
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
