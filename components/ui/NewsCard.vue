<script setup lang="ts">
interface NewsArticle {
  path: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  category?:
    | "announcement"
    | "industry-news"
    | "member-spotlight"
    | "education"
    | "advocacy"
    | "events";
  tags?: string[];
  featured?: boolean;
  image?: {
    src: string;
    alt: string;
  };
  excerpt?: string;
}

interface Props {
  article: NewsArticle;
  variant?: "default" | "featured" | "compact";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const categoryColors = {
  announcement: "bg-primary-100 text-primary-800",
  "industry-news": "bg-blue-100 text-blue-800",
  "member-spotlight": "bg-purple-100 text-purple-800",
  education: "bg-green-100 text-green-800",
  advocacy: "bg-orange-100 text-orange-800",
  events: "bg-pink-100 text-pink-800",
};

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
</script>

<template>
  <article
    :class="[
      'bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer',
      variant === 'featured' ? 'lg:col-span-2' : '',
      variant === 'compact' ? 'flex gap-4' : '',
    ]"
  >
    <NuxtLink :to="article.path" class="block">
      <!-- Image -->
      <div
        v-if="article.image && variant !== 'compact'"
        :class="[
          'relative overflow-hidden',
          variant === 'featured' ? 'h-64 md:h-80' : 'h-48',
        ]"
      >
        <img
          :src="article.image.src"
          :alt="article.image.alt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          v-if="article.featured"
          class="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          Featured
        </div>
      </div>

      <!-- Compact Image -->
      <div
        v-if="article.image && variant === 'compact'"
        class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden"
      >
        <img
          :src="article.image.src"
          :alt="article.image.alt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Content -->
      <div :class="['p-6', variant === 'compact' ? 'flex-1 py-2' : '']">
        <!-- Category & Date -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span
              v-if="article.category"
              :class="[
                'px-2 py-1 rounded-full text-xs font-medium',
                categoryColors[article.category] || 'bg-gray-100 text-gray-800',
              ]"
            >
              {{ getCategoryLabel(article.category) }}
            </span>
            <span
              v-if="article.featured && variant === 'compact'"
              class="px-2 py-1 bg-primary-600 text-white rounded-full text-xs font-medium"
            >
              Featured
            </span>
          </div>
          <time :datetime="article.date" class="text-sm text-gray-500">
            {{ formatDate(article.date) }}
          </time>
        </div>

        <!-- Title -->
        <h3
          :class="[
            'font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2',
            variant === 'featured' ? 'text-2xl mb-3' : 'text-lg',
            variant === 'compact' ? 'text-base mb-1' : '',
          ]"
        >
          {{ article.title }}
        </h3>

        <!-- Description/Excerpt -->
        <p
          :class="[
            'text-gray-600 leading-relaxed',
            variant === 'featured' ? 'text-base mb-4' : 'text-sm mb-3',
            variant === 'compact'
              ? 'text-sm mb-2 line-clamp-2'
              : 'line-clamp-3',
          ]"
        >
          {{ article.excerpt || article.description }}
        </p>

        <!-- Author & Tags -->
        <div
          v-if="article.author || article.tags"
          class="flex items-center justify-between"
        >
          <span v-if="article.author" class="text-sm text-gray-500">
            By {{ article.author }}
          </span>
          <div v-if="article.tags && variant !== 'compact'" class="flex gap-1">
            <span
              v-for="tag in article.tags.slice(0, 2)"
              :key="tag"
              class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Read More Link -->
        <div v-if="variant === 'featured'" class="mt-4">
          <span
            class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Read Full Article
            <Icon name="i-lucide-arrow-right" class="ml-1 w-4 h-4" />
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
