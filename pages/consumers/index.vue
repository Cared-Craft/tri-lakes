<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl mb-6">Consumers</h1>
          <p class="text-xl mb-8 text-primary-100">
            Find a REALTOR®, Broker, or Affiliate in the Tri-Lakes area
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-3xl mb-8 text-gray-900">Find a...</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink
              to="/directory"
              class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              REALTOR®
            </NuxtLink>
            <NuxtLink
              to="/directory"
              class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              BROKER
            </NuxtLink>
            <NuxtLink
              to="/find-an-affiliate"
              class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              AFFILIATE
            </NuxtLink>
            <NuxtLink
              to="/buyers-and-sellers"
              class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Additional Information
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Cities Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Communities We Serve
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink
              v-for="city in cities"
              :key="city.slug"
              :to="`/consumers/${city.slug}`"
              class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
            >
              <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {{ city.name }}
              </h3>
              <p class="text-gray-600 text-sm">
                Learn more about {{ city.name }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO metadata
useHead({
  title: "Consumers | Tri-Lakes Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Find a REALTOR®, Broker, or Affiliate in the Tri-Lakes area. Explore communities we serve including Branson, Branson West, Hollister, and more.",
    },
  ],
});

const cities = [
  { name: "Blue Eye", slug: "blue-eye" },
  { name: "Branson", slug: "branson" },
  { name: "Branson West", slug: "branson-west" },
  { name: "Forsyth", slug: "forsyth" },
  { name: "Hollister", slug: "hollister" },
  { name: "Reeds Spring", slug: "reeds-spring" },
  { name: "Lampe", slug: "lampe" },
  { name: "Kimberling City", slug: "kimberling-city" },
  { name: "Bradleyville", slug: "bradleyville" },
];
</script>

