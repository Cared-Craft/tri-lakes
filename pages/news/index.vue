<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl mb-6">News & Updates</h1>
          <p class="text-xl mb-8 text-primary-100">
            Stay informed with the latest news, announcements, and updates from
            Tri-Lakes Board of Realtors.
          </p>
        </div>
      </div>
    </section>

    <!-- News Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Empty State -->
          <div
            v-if="newsArticles.length === 0"
            class="text-center py-20 bg-white rounded-lg shadow-sm"
          >
            <Icon
              name="i-lucide-newspaper"
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
            />
            <h2 class="text-2xl text-gray-600 mb-2">No News Articles Yet</h2>
            <p class="text-gray-500 max-w-md mx-auto">
              Check back soon for the latest news and updates from Tri-Lakes
              Board of Realtors.
            </p>
          </div>

          <!-- News Grid -->
          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <NewsCard
              v-for="article in newsArticles"
              :key="article.path"
              :article="article"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NewsCard from "~/components/ui/NewsCard.vue";

// SEO metadata
useHead({
  title: "News & Updates | Tri-Lakes Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Stay informed with the latest news, announcements, and updates from Tri-Lakes Board of Realtors.",
    },
  ],
});

// Query news articles from content collection
const { data: newsArticles } = await useAsyncData("news", async () => {
  try {
    const { queryCollection } = useContent();
    const articles = await queryCollection("news").find();
    return articles.sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.log("No news articles found:", error);
    return [];
  }
});
</script>

