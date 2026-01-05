<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <NuxtLink
            to="/consumers"
            class="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <Icon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" />
            Back to Consumers
          </NuxtLink>
          <h1 class="text-4xl md:text-5xl mb-6">{{ cityData.name }}</h1>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- City Image -->
          <div v-if="cityData.image" class="mb-8 rounded-lg overflow-hidden">
            <img
              :src="cityData.image"
              :alt="`${cityData.name}, Missouri`"
              class="w-full h-64 object-cover"
            />
          </div>

          <!-- Links Section -->
          <div v-if="cityData.links && cityData.links.length > 0" class="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">Links</h2>
            <div class="space-y-4">
              <div
                v-for="(link, index) in cityData.links"
                :key="index"
                class="flex items-start"
              >
                <Icon name="i-lucide-external-link" class="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 class="font-medium text-gray-900 mb-1">{{ link.title }}</h3>
                  <a
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary-600 hover:text-primary-700 hover:underline break-all"
                  >
                    {{ link.url }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- School District Info -->
          <div v-if="cityData.schoolDistrict" class="bg-white rounded-lg shadow-sm p-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6">
              School District Info
            </h2>
            <div class="space-y-4">
              <div>
                <h3 class="font-medium text-gray-900 mb-2">
                  {{ cityData.schoolDistrict.name }}
                </h3>
                <p v-if="cityData.schoolDistrict.phone" class="text-gray-600 mb-2">
                  <Icon name="i-lucide-phone" class="w-4 h-4 inline mr-2" />
                  <a
                    :href="`tel:${cityData.schoolDistrict.phone.replace(/[^0-9]/g, '')}`"
                    class="hover:text-primary-600 transition-colors"
                  >
                    {{ cityData.schoolDistrict.phone }}
                  </a>
                </p>
                <p v-if="cityData.schoolDistrict.website" class="text-gray-600">
                  <Icon name="i-lucide-globe" class="w-4 h-4 inline mr-2" />
                  <span class="mr-2">School Website:</span>
                  <a
                    :href="cityData.schoolDistrict.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary-600 hover:text-primary-700 hover:underline break-all"
                  >
                    {{ cityData.schoolDistrict.website }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const citySlug = route.params.city as string;

// City data mapping
const cityDataMap: Record<string, any> = {
  "blue-eye": {
    name: "Blue Eye",
    links: [
      {
        title: "Blue Eye, Missouri Office of Emergency Management",
        url: "http://www.facebook.com/BlueEyeOEM",
      },
    ],
    schoolDistrict: {
      name: "Blue Eye School District",
      phone: "417.779.5332",
      website: "http://www.blueeye.k12.mo.us",
    },
  },
  branson: {
    name: "Branson",
    links: [
      {
        title: "City of Branson Government",
        url: "http://www.bransonmo.gov",
      },
      {
        title: "Branson Chamber of Commerce",
        url: "http://www.bransonchamber.com",
      },
      {
        title: "City of Branson Facebook",
        url: "http://www.facebook.com/BransonCity",
      },
    ],
    schoolDistrict: {
      name: "Branson School District",
      phone: "417.334.6541",
      website: "http://www.branson.k12.mo.us",
    },
  },
  "branson-west": {
    name: "Branson West",
    links: [
      {
        title: "City of Branson West Government",
        url: "http://www.cityofbransonwest.com",
      },
    ],
    schoolDistrict: {
      name: "Reeds Spring School District",
      phone: "417.272.8173",
      website: "http://www.r-wolves.com",
    },
  },
  forsyth: {
    name: "Forsyth",
    links: [
      {
        title: "City of Forsyth Government",
        url: "http://www.cityofforsythmo.com",
      },
      {
        title: "Forsyth Chamber of Commerce",
        url: "http://www.forsythmissouri.org",
      },
    ],
    schoolDistrict: {
      name: "Forsyth School District",
      phone: "417.546.6384",
      website: "http://www.forsythpanthers.org",
    },
  },
  hollister: {
    name: "Hollister",
    links: [
      {
        title: "City of Hollister Government",
        url: "http://www.cityofhollister.com/",
      },
      {
        title: "Hollister Chamber of Commerce",
        url: "http://www.hollisterchamber.net/",
      },
    ],
    schoolDistrict: {
      name: "Hollister School District",
      phone: "417.243.4000",
      website: "http://www.hollister.k12.mo.us/",
    },
  },
  "reeds-spring": {
    name: "Reeds Spring",
    links: [
      {
        title: "City of Reeds Spring Government",
        url: "http://www.reedsspring.org/",
      },
    ],
    schoolDistrict: {
      name: "Reeds Spring School District",
      phone: "417.272.8173",
      website: "http://www.r-wolves.com/",
    },
  },
  lampe: {
    name: "Lampe",
    links: [],
    schoolDistrict: {
      name: "Blue Eye School District",
      phone: "417.779.5332",
      website: "http://www.blueeye.k12.mo.us/",
    },
  },
  "kimberling-city": {
    name: "Kimberling City",
    links: [],
    schoolDistrict: {
      name: "Reeds Spring School District",
      phone: "417.272.8173",
      website: "http://www.r-wolves.com/",
    },
  },
  bradleyville: {
    name: "Bradleyville",
    links: [],
    schoolDistrict: {
      name: "Bradleyville School District",
      phone: "417.796.2288",
      website: "http://www.bradleyviller1.com",
    },
  },
};

const cityData = cityDataMap[citySlug] || {
  name: citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "),
  links: [],
  schoolDistrict: null,
};

// SEO metadata
useHead({
  title: `${cityData.name} | Tri-Lakes Board of Realtors`,
  meta: [
    {
      name: "description",
      content: `Information about ${cityData.name}, Missouri - part of the Tri-Lakes area served by Tri-Lakes Board of Realtors.`,
    },
  ],
});
</script>

