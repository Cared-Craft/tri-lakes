<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Meet the Staff"
      subtitle="Our dedicated team of professionals is here to serve our members and support the real estate community in the Tri-Lakes area."
      variant="default"
      class="bg-gradient-to-r from-emerald-900 to-emerald-700"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Staff Directory -->
      <section class="mb-20">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <div
            v-for="member in staff"
            :key="member.name"
            class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {{ member.title }}
            </p>
            <a
              :href="`mailto:${member.email}`"
              class="text-primary-600 hover:text-primary-800 text-sm transition-colors"
            >
              {{ member.email }}
            </a>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <SupportSection
        title="Have A Question for Our Staff?"
        description="Don't hesitate to email, call or fill out a contact form. One of our staff members would be happy to help you."
        :buttons="[
          { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
          {
            text: 'Visit Our Office',
            link: 'https://www.google.com/maps/search/?api=1&query=2875+State+Hwy.+265,+Branson,+Missouri+65616',
            variant: 'secondary',
          },
        ]"
        variant="emerald"
        class="mt-16"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Staff Directory - Tri-Lakes Board of Realtors",
  description:
    "Meet the professional staff team at Tri-Lakes Board of Realtors who provide exceptional service and support to our realtor members.",
  ogTitle: "Staff Directory - Tri-Lakes Board of Realtors",
  ogDescription:
    "Meet the professional staff team at Tri-Lakes Board of Realtors who provide exceptional service and support to our realtor members.",
  ogType: "website",
});

// Staff Members
const staff = [
  {
    name: "Sherri Cordell",
    title: "Association Executive/CEO",
    email: "sherri@tlbor.com",
  },
  {
    name: "Jake Lawrence",
    title: "Member Services/MLS Coordinator",
    email: "jake@tlbor.com",
  },
  {
    name: "Shay Mouser",
    title: "Communications/Social Media Coordinator",
    email: "shay@tlbor.com",
  },
];
</script>

<style scoped>
/* Custom styles for the staff page */
</style>
