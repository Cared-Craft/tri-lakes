<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Meet Our Leadership"
      subtitle="Our leadership team works hard to empower members to excel in professionalism and ethical standards in real estate."
      variant="default"
      class="bg-gradient-to-r from-primary-800 to-primary-700"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Executive Team -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">Executive Team</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="member in executiveTeam"
            :key="member.name"
            class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-1">
              {{ member.name }}
            </h3>
            <p class="text-sm text-gray-600 mb-4 capitalize">
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

      <!-- State Directors -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">State Directors</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="director in stateDirectors"
            :key="director.name"
            class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              {{ director.name }}
            </h3>
            <a
              :href="`mailto:${director.email}`"
              class="text-primary-600 hover:text-primary-800 text-sm transition-colors"
            >
              {{ director.email }}
            </a>
          </div>
        </div>
      </section>

      <!-- SOMO Directors -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">SOMO Directors</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="director in somoDirectors"
            :key="director.name"
            class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              {{ director.name }}
            </h3>
            <a
              :href="`mailto:${director.email}`"
              class="text-primary-600 hover:text-primary-800 text-sm transition-colors"
            >
              {{ director.email }}
            </a>
          </div>
        </div>
      </section>

      <!-- Meet Our Board -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">Meet Our Board</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="member in boardMembers"
            :key="member.name"
            class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-4 capitalize">
              {{ member.name }}
            </h3>
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
        title="Have a question?"
        :buttons="[
          { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
        ]"
        variant="gray"
        class="mt-16"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Meet Our Leadership - Tri-Lakes Board of Realtors",
  description:
    "Meet the leadership team of Tri-Lakes Board of Realtors including the Executive Team, State Directors, SOMO Directors, and Board Members.",
  ogTitle: "Meet Our Leadership - Tri-Lakes Board of Realtors",
  ogDescription:
    "Meet the leadership team of Tri-Lakes Board of Realtors including the Executive Team, State Directors, SOMO Directors, and Board Members.",
  ogType: "website",
});

// Executive Team
const executiveTeam = [
  {
    name: "David Gubin",
    title: "Immediate Past President",
    email: "DavidGubin@ReeceNichols.com",
  },
  {
    name: "Dave Dove",
    title: "President",
    email: "dave@gerkenandassociates.com",
  },
  {
    name: "Jon Hulsizer",
    title: "President-Elect",
    email: "jon.hulsizer@century21.com",
  },
  {
    name: "Audrey Spratt",
    title: "Secretary-Treasurer",
    email: "audrey@teamspratt.com",
  },
  {
    name: "Cole Currier",
    title: "MLS Vice President",
    email: "cole@foggyriver.com",
  },
];

// State Directors
const stateDirectors = [
  {
    name: "David Gubin",
    email: "davidgubin@reecenichols.com",
  },
  {
    name: "Gerrie Moore",
    email: "GerrieKW@Gmail.com",
  },
  {
    name: "Jon Holloway",
    email: "Jon@GerkenandAssociates.com",
  },
  {
    name: "Matthew Brock",
    email: "matthew@gerkenandassociates.com",
  },
  {
    name: "Deana Wolfe",
    email: "bigbadwolfe@reecenichols.com",
  },
  {
    name: "Bradley Gore",
    email: "bradg@reecenichols.com",
  },
];

// SOMO Directors
const somoDirectors = [
  {
    name: "Cole Currier",
    email: "cole@foggyriver.com",
  },
  {
    name: "Jessica Brock",
    email: "Jessica@gerkenandassociates.com",
  },
];

// Board Members
const boardMembers = [
  {
    name: "Rick Billington",
    email: "rickbillington@reecenichols.com",
  },
  {
    name: "Matthew Brock",
    email: "Matthew@gerkenandassociates.com",
  },
  {
    name: "jim robertson",
    email: "jim@bransonlistings.com",
  },
  {
    name: "Thayne robertson",
    email: "thayne.kw@gmail.com",
  },
  {
    name: "Nichole Lawrence",
    email: "nichole@myhomerunagents.com",
  },
  {
    name: "Deb mundell",
    email: "debmundell@gmail.com",
  },
  {
    name: "Bradley Gore",
    email: "bradg@reecenichols.com",
  },
  {
    name: "Jon Holloway",
    email: "jon@gerkenandassociates.com",
  },
  {
    name: "tammy sherrell-shortt",
    email: "tammy@sherrellrealty.com",
  },
];
</script>

