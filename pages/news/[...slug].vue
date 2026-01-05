<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Article Content -->
    <article v-if="article" class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Back Link -->
          <NuxtLink
            to="/news"
            class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <Icon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" />
            Back to News
          </NuxtLink>

          <!-- Article Header -->
          <header class="mb-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                v-if="article.category"
                class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
              >
                {{ formatCategory(article.category) }}
              </span>
              <time
                v-if="article.date"
                :datetime="article.date"
                class="text-gray-500 text-sm"
              >
                {{ formatDate(article.date) }}
              </time>
            </div>

            <h1 class="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              {{ article.title }}
            </h1>

            <p
              v-if="article.description"
              class="text-xl text-gray-600 leading-relaxed mb-6"
            >
              {{ article.description }}
            </p>

            <div
              v-if="article.author"
              class="flex items-center text-gray-600 text-sm"
            >
              <Icon name="i-lucide-user" class="w-4 h-4 mr-2" />
              By {{ article.author }}
            </div>
          </header>

          <!-- Article Image -->
          <div
            v-if="article.image"
            class="mb-8 rounded-lg overflow-hidden"
          >
            <img
              :src="article.image.src"
              :alt="article.image.alt || article.title"
              class="w-full h-auto"
            />
          </div>

          <!-- Article Body -->
          <div class="prose prose-lg max-w-none bg-white rounded-lg shadow-sm p-8">
            <ContentRenderer :value="article" />
          </div>

          <!-- Tags -->
          <div
            v-if="article.tags && article.tags.length > 0"
            class="mt-8 flex flex-wrap gap-2"
          >
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </article>

    <!-- Not Found -->
    <div
      v-else
      class="container mx-auto px-4 py-20 text-center"
    >
      <h1 class="text-4xl text-gray-900 mb-4">Article Not Found</h1>
      <p class="text-gray-600 mb-8">
        The article you're looking for doesn't exist or has been removed.
      </p>
      <NuxtLink
        to="/news"
        class="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        View All News
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string[];

// SEO metadata
useHead({
  title: "News Article | Tri-Lakes Board of Realtors",
});

// Query the article
const { data: article } = await useAsyncData(
  `news-${slug.join("/")}`,
  async () => {
    try {
      const { queryCollection } = useContent();
      const path = `/news/${slug.join("/")}`;
      const result = await queryCollection("news").path(path).first();
      return result;
    } catch (error) {
      console.log("Article not found:", error);
      return null;
    }
  }
);

// Update SEO when article loads
if (article.value) {
  useHead({
    title: `${article.value.title} | Tri-Lakes Board of Realtors`,
    meta: [
      {
        name: "description",
        content: article.value.description || article.value.excerpt || "",
      },
    ],
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatCategory(category: string) {
  return category
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
</script>

