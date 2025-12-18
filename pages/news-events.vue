<script setup lang="ts">
// SEO metadata
useHead({
  title: "News & Events | GSBOR",
  meta: [
    {
      name: "description",
      content:
        "Stay updated with the latest news and upcoming events from the Greater Springfield Board of REALTORS®.",
    },
  ],
});

// Content queries using Nuxt Content v3 API
const { data: newsArticles } = await useAsyncData("news-articles", () =>
  queryCollection("news").all()
);

const { data: events } = await useAsyncData("events", () =>
  queryCollection("events").all()
);

// Reactive state for filters
const activeTab = ref<"all" | "news" | "events">("all");
const selectedCategory = ref<string>("all");
const selectedEventType = ref<string>("all");
const searchQuery = ref<string>("");

// Get unique categories and event types for filters
const newsCategories = computed(() => {
  const categories = new Set<string>();
  newsArticles.value?.forEach((article) => {
    if (article.category) categories.add(article.category);
  });
  return Array.from(categories);
});

const eventTypes = computed(() => {
  const types = new Set<string>();
  events.value?.forEach((event) => {
    if (event.eventType) types.add(event.eventType);
  });
  return Array.from(types);
});

// Filter and search content
const filteredNews = computed(() => {
  if (!newsArticles.value) return [];

  let filtered = newsArticles.value;

  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        (article.excerpt && article.excerpt.toLowerCase().includes(query)) ||
        (article.tags &&
          article.tags.some((tag) => tag.toLowerCase().includes(query)))
    );
  }

  // Category filter
  if (selectedCategory.value !== "all") {
    filtered = filtered.filter(
      (article) => article.category === selectedCategory.value
    );
  }

  // Sort by date (newest first)
  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

const filteredEvents = computed(() => {
  if (!events.value) return [];

  let filtered = events.value;

  // Search filter
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.name.toLowerCase().includes(query) ||
        (event.tags &&
          event.tags.some((tag) => tag.toLowerCase().includes(query)))
    );
  }

  // Event type filter
  if (selectedEventType.value !== "all") {
    filtered = filtered.filter(
      (event) => event.eventType === selectedEventType.value
    );
  }

  // Sort by date (newest first)
  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

// Featured content
const featuredNews = computed(() =>
  filteredNews.value.filter((article) => article.featured)
);

const featuredEvents = computed(() =>
  filteredEvents.value.filter((event) => event.featured)
);

// Combined content for 'all' tab
const allContent = computed(() => {
  const combined: Array<any> = [
    ...filteredNews.value.map((item) => ({ ...item, type: "news" })),
    ...filteredEvents.value.map((item) => ({ ...item, type: "events" })),
  ];

  // Sort by date (newest first)
  return combined.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

// Helper functions
const getCategoryLabel = (category: string) => {
  return category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

const getEventTypeLabel = (type: string) => {
  return type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

// Reset filters when tab changes
watch(activeTab, () => {
  selectedCategory.value = "all";
  selectedEventType.value = "all";
});
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <section class="relative bg-primary-900 py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-light mb-6 text-white">
              News & <span>Events</span>
            </h1>
            <p class="text-xl text-white/90 leading-relaxed">
              Stay connected with the latest updates, announcements, and
              upcoming events from the Greater Springfield Board of REALTORS®.
            </p>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-7xl mx-auto">
            <!-- Tab Navigation -->
            <div class="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
              <button
                @click="activeTab = 'all'"
                :class="[
                  'px-6 py-3 font-medium rounded-t-lg transition-colors',
                  activeTab === 'all'
                    ? 'bg-primary-600 text-white border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600',
                ]"
              >
                All Content
              </button>
              <button
                @click="activeTab = 'news'"
                :class="[
                  'px-6 py-3 font-medium rounded-t-lg transition-colors',
                  activeTab === 'news'
                    ? 'bg-primary-600 text-white border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600',
                ]"
              >
                News & Articles
              </button>
              <button
                @click="activeTab = 'events'"
                :class="[
                  'px-6 py-3 font-medium rounded-t-lg transition-colors',
                  activeTab === 'events'
                    ? 'bg-primary-600 text-white border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600',
                ]"
              >
                Events
              </button>
            </div>

            <!-- Search and Filters -->
            <div class="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
              <!-- Search Bar -->
              <div class="flex-1 min-w-64">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search news, events, and content..."
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <!-- Category Filter (News) -->
              <div
                v-if="activeTab === 'news' || activeTab === 'all'"
                class="flex-1 min-w-48"
              >
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  v-model="selectedCategory"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Categories</option>
                  <option
                    v-for="category in newsCategories"
                    :key="category"
                    :value="category"
                  >
                    {{ getCategoryLabel(category) }}
                  </option>
                </select>
              </div>

              <!-- Event Type Filter (Events) -->
              <div
                v-if="activeTab === 'events' || activeTab === 'all'"
                class="flex-1 min-w-48"
              >
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  v-model="selectedEventType"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Types</option>
                  <option v-for="type in eventTypes" :key="type" :value="type">
                    {{ getEventTypeLabel(type) }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Featured Content -->
            <div
              v-if="
                (activeTab === 'news' && featuredNews.length > 0) ||
                (activeTab === 'events' && featuredEvents.length > 0) ||
                (activeTab === 'all' &&
                  (featuredNews.length > 0 || featuredEvents.length > 0))
              "
              class="mb-12"
            >
              <h2 class="text-2xl font-light mb-6 text-gray-900">
                Featured <span>Content</span>
              </h2>
              <div class="grid lg:grid-cols-3 gap-6">
                <!-- Featured News -->
                <template v-if="activeTab === 'news' || activeTab === 'all'">
                  <NewsCard
                    v-for="article in featuredNews.slice(0, 2)"
                    :key="article.path"
                    :article="article"
                    variant="featured"
                  />
                </template>

                <!-- Featured Events -->
                <template v-if="activeTab === 'events' || activeTab === 'all'">
                  <EventCard
                    v-for="event in featuredEvents.slice(0, 2)"
                    :key="event.path"
                    :event="event"
                    variant="featured"
                  />
                </template>
              </div>
            </div>

            <!-- All Content Tab -->
            <div v-if="activeTab === 'all'">
              <h2 class="text-2xl font-light mb-6 text-gray-900">
                All <span>Content</span>
              </h2>
              <div class="grid lg:grid-cols-3 gap-6">
                <template v-for="item in allContent" :key="item.path">
                  <NewsCard
                    v-if="item.type === 'news'"
                    :article="item"
                    variant="default"
                  />
                  <EventCard v-else :event="item" variant="default" />
                </template>
              </div>

              <!-- No Content Message -->
              <div v-if="allContent.length === 0" class="text-center py-12">
                <Icon
                  name="i-lucide-inbox"
                  class="w-16 h-16 text-gray-400 mx-auto mb-4"
                />
                <h3 class="text-xl font-medium text-gray-900 mb-2">
                  No Content Found
                </h3>
                <p class="text-gray-600">
                  No news articles or events match your current filters.
                </p>
              </div>
            </div>

            <!-- News Tab -->
            <div v-if="activeTab === 'news'">
              <h2 class="text-2xl font-light mb-6 text-gray-900">
                News & <span>Articles</span>
              </h2>
              <div class="grid lg:grid-cols-3 gap-6">
                <NewsCard
                  v-for="article in filteredNews"
                  :key="article.path"
                  :article="article"
                  variant="default"
                />
              </div>

              <!-- No News Message -->
              <div v-if="filteredNews.length === 0" class="text-center py-12">
                <Icon
                  name="i-lucide-newspaper"
                  class="w-16 h-16 text-gray-400 mx-auto mb-4"
                />
                <h3 class="text-xl font-medium text-gray-900 mb-2">
                  No News Articles
                </h3>
                <p class="text-gray-600">
                  No news articles match your current filters.
                </p>
              </div>
            </div>

            <!-- Events Tab -->
            <div v-if="activeTab === 'events'">
              <h2 class="text-2xl font-light mb-6 text-gray-900">
                Upcoming <span>Events</span>
              </h2>
              <div class="grid lg:grid-cols-3 gap-6">
                <EventCard
                  v-for="event in filteredEvents"
                  :key="event.path"
                  :event="event"
                  variant="default"
                />
              </div>

              <!-- No Events Message -->
              <div v-if="filteredEvents.length === 0" class="text-center py-12">
                <Icon
                  name="i-lucide-calendar"
                  class="w-16 h-16 text-gray-400 mx-auto mb-4"
                />
                <h3 class="text-xl font-medium text-gray-900 mb-2">
                  No Events
                </h3>
                <p class="text-gray-600">
                  No events match your current filters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <div class="mb-12">
              <Icon
                name="i-lucide-mail"
                class="w-16 h-16 text-primary-600 mx-auto mb-6"
              />
              <h2 class="text-3xl font-light mb-6 text-gray-900">
                Stay <span>Connected</span>
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-6">
                Check out our <a href="https://www.facebook.com/gsbor/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-800">Facebook</a> and <a href="https://www.instagram.com/gsbornews/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-800">Instagram</a> for the latest updates.
              </p>
              <p class="text-gray-700 text-lg leading-relaxed mb-8">
                Watch for emails from support@gsbor.com for the latest Association updates.
              </p>
            </div>

            <div class="flex flex-wrap gap-4 justify-center">
              <Button to="/contact-us" color="primary" size="lg">
                Have a question about upcoming events or not receiving Association emails?
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
