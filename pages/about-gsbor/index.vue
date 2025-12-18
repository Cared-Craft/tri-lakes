<template>
  <div>
    <!-- Compact Header -->
    <HeroSection
      title="About GSBOR"
      subtitle="The leading voice for real estate professionals in Greater Springfield"
      variant="compact"
      class="bg-gradient-to-r from-primary-800 to-primary-600"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="prose max-w-none mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            The Greater Springfield Board of REALTORS® (GSBOR) has been the voice for real estate in southwest Missouri since 1933. With more than 2,800 members across Greene, Christian, and Webster counties, we provide REALTORS® the tools, advocacy, and education they need to serve clients with professionalism and integrity. Every member of GSBOR commits to the REALTOR® Code of Ethics, setting a standard of trust that benefits both our industry and the communities we call home.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            In addition to serving our members, GSBOR works to advance the real estate industry and strengthen the communities we represent. By equipping REALTORS® with the resources to succeed and supporting policies that strengthen property rights and homeownership, we help ensure that real estate remains a cornerstone of opportunity and growth in southwest Missouri.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 class="text-2xl font-semibold text-blue-900 mb-4">
              The Vision
            </h2>
            <p class="text-blue-800 text-lg">
              To empower our members to excel in professionalism and ethical
              standards in real estate.
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-12">
            <h2 class="text-2xl font-semibold text-green-900 mb-4">
              The Mission
            </h2>
            <p class="text-green-800 text-lg">
              To be the trusted real estate voice advocating for the benefit of
              our members and our communities.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <NuxtLink
            to="/about-gsbor/meet-our-board"
            class="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div class="mb-4">
              <h3 class="text-xl group-hover:text-blue-600 transition-colors">
                Boards of Directors
              </h3>
            </div>
            <p class="text-gray-600">
              View our current MLS and GSBOR board members.
            </p>
          </NuxtLink>

          <NuxtLink
            to="/about-gsbor/leadership-academy"
            class="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div class="mb-4">
              <h3 class="text-xl group-hover:text-green-600 transition-colors">
                Leadership Academy
              </h3>
            </div>
            <p class="text-gray-600">
              Get the latest info about the GSBOR Leadership Academy.
            </p>
          </NuxtLink>

          <NuxtLink
            to="/about-gsbor/awards"
            class="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div class="mb-4">
              <h3 class="text-xl group-hover:text-yellow-600 transition-colors">
                Awards
              </h3>
            </div>
            <p class="text-gray-600">View our past award winners here.</p>
          </NuxtLink>
        </div>

        <div
          class="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center"
        >
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            Want to Learn More About GSBOR?
          </h2>
          <NuxtLink
            to="/contact-us"
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: "About GSBOR - Greater Springfield Board of REALTORS®",
  meta: [
    {
      name: "description",
      content:
        "Learn about the Greater Springfield Board of REALTORS®, serving Greene, Christian and Webster counties since 1933. Meet our board of directors, discover our leadership academy, and explore our awards program.",
    },
  ],
});
</script>
