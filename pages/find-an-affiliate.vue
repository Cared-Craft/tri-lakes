<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl mb-6">Affiliate Directory</h1>
          <p class="text-xl mb-8 text-primary-100">
            Tri-Lakes Board of Realtors Affiliate members are experts
            in all areas of the real estate industry. Our Affiliate members are
            committed to strong ethical practices, have high professional
            standards, and provide quality customer satisfaction.
          </p>
          <p class="text-lg text-blue-300">
            Looking for one of our affiliates? Search by category or name below.
          </p>
        </div>
      </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="py-8 bg-white shadow-sm sticky top-0 z-10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Search Input -->
            <div class="relative">
              <Icon
                name="lucide:search"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name, organization, or email..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <!-- Category Filter -->
            <div class="relative">
              <Icon
                name="lucide:filter"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <select
                v-model="selectedCategory"
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                <option
                  v-for="category in categories"
                  :key="category.slug"
                  :value="category.slug"
                >
                  {{ category.name }}
                </option>
              </select>
              <Icon
                name="lucide:chevron-down"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
              />
            </div>
          </div>

          <!-- Results Count -->
          <div class="mt-4 text-sm text-gray-600">
            Showing {{ filteredAffiliates.length }} of
            {{ affiliates.length }} affiliates
            <span v-if="searchQuery || selectedCategory" class="ml-2">
              <button
                @click="clearFilters"
                class="text-blue-600 hover:text-blue-800 underline"
              >
                Clear filters
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Affiliates Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div v-if="filteredAffiliates.length === 0" class="text-center py-12">
            <Icon
              name="lucide:search-x"
              class="w-16 h-16 text-gray-400 mx-auto mb-4"
            />
            <h3 class="text-xl text-gray-600 mb-2">No affiliates found</h3>
            <p class="text-gray-500">
              Try adjusting your search criteria or browse all affiliates.
            </p>
          </div>

          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              v-for="affiliate in filteredAffiliates"
              :key="affiliate.id"
              class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <!-- Logo -->
              <div
                v-if="affiliate.logoUrl"
                class="mb-4 affiliate-logo-container"
              >
                <img
                  :src="affiliate.logoUrl"
                  :alt="`${affiliate.organization || affiliate.title} logo`"
                  class="affiliate-logo"
                  @error="handleImageError"
                  @load="handleImageLoad"
                />
              </div>
              <div v-else class="mb-4 affiliate-logo-container">
                <div class="logo-fallback">
                  <Icon name="lucide:building" class="w-6 h-6" />
                </div>
              </div>

              <!-- Title/Name -->
              <h3 class="text-xl text-gray-900 mb-2">
                {{ affiliate.title }}
              </h3>

              <!-- Organization -->
              <p
                v-if="affiliate.organization"
                class="text-lg text-blue-600 mb-3"
              >
                {{ affiliate.organization }}
              </p>

              <!-- Contact Info -->
              <div class="space-y-2 text-sm text-gray-600">
                <!-- Address -->
                <div v-if="affiliate.addressLine1" class="flex items-start">
                  <Icon
                    name="lucide:map-pin"
                    class="w-4 h-4 mt-0.5 mr-2 text-gray-400 flex-shrink-0"
                  />
                  <div>
                    <div>{{ affiliate.addressLine1 }}</div>
                    <div v-if="affiliate.addressLine2">
                      {{ affiliate.addressLine2 }}
                    </div>
                  </div>
                </div>

                <!-- Phone -->
                <div v-if="affiliate.phoneNumber" class="flex items-center">
                  <Icon
                    name="lucide:phone"
                    class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
                  />
                  <a
                    :href="`tel:${affiliate.phoneNumber}`"
                    class="hover:text-blue-600 transition-colors"
                  >
                    {{ affiliate.phoneNumber }}
                  </a>
                </div>

                <!-- Email -->
                <div v-if="affiliate.emailAddress" class="flex items-center">
                  <Icon
                    name="lucide:mail"
                    class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
                  />
                  <a
                    :href="`mailto:${affiliate.emailAddress}`"
                    class="hover:text-blue-600 transition-colors break-all"
                  >
                    {{ affiliate.emailAddress }}
                  </a>
                </div>

                <!-- Website -->
                <div v-if="affiliate.url" class="flex items-center">
                  <Icon
                    name="lucide:globe"
                    class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
                  />
                  <a
                    :href="formatUrl(affiliate.url)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-blue-600 transition-colors break-all"
                  >
                    {{ affiliate.url }}
                  </a>
                </div>
              </div>

              <!-- Categories -->
              <div
                v-if="affiliate.categories.length > 0"
                class="mt-4 pt-4 border-t border-gray-200"
              >
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="category in affiliate.categories"
                    :key="category.slug"
                    class="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full cursor-pointer hover:bg-blue-200 transition-colors"
                    @click="filterByCategory(category.slug)"
                  >
                    {{ category.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Meta
useHead({
  title: "Find an Affiliate | Tri-Lakes Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Search our directory of expert affiliate members. Tri-Lakes Board of Realtors affiliate members provide quality services across all areas of the real estate industry.",
    },
  ],
});

// Use static data composable
const { affiliates, categories, isLoading } = useAffiliates();

// Reactive data
const searchQuery = ref("");
const selectedCategory = ref("");

// Computed properties
const filteredAffiliates = computed(() => {
  let filtered = affiliates.value;

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((affiliate) => {
      return (
        affiliate.title.toLowerCase().includes(query) ||
        affiliate.organization.toLowerCase().includes(query) ||
        affiliate.emailAddress.toLowerCase().includes(query) ||
        affiliate.firstName.toLowerCase().includes(query) ||
        affiliate.lastName.toLowerCase().includes(query)
      );
    });
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter((affiliate) => {
      return affiliate.categories.some(
        (cat) => cat.slug === selectedCategory.value
      );
    });
  }

  return filtered;
});

// Methods
function clearFilters() {
  searchQuery.value = "";
  selectedCategory.value = "";
}

function filterByCategory(categorySlug) {
  selectedCategory.value = categorySlug;
  searchQuery.value = "";
  // Scroll to top of results
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}

function handleImageError(event) {
  // Hide the image if it fails to load
  event.target.style.display = "none";
}

function handleImageLoad(event) {
  // Smart logo sizing based on dimensions
  const img = event.target;
  const aspectRatio = img.naturalWidth / img.naturalHeight;

  // Apply smart sizing based on aspect ratio
  if (aspectRatio > 3) {
    // Very wide logo
    img.style.maxHeight = "3rem";
    img.style.maxWidth = "12rem";
  } else if (aspectRatio < 0.7) {
    // Very tall logo
    img.style.maxHeight = "4rem";
    img.style.maxWidth = "3rem";
  } else if (img.naturalWidth < 100 || img.naturalHeight < 100) {
    // Small logo - boost minimum size
    img.style.minHeight = "3rem";
    img.style.minWidth = "3rem";
  }
}
</script>
