<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Member Directory"
      subtitle="Search our comprehensive member directory to find REALTOR® professionals in the Greater Springfield area."
      variant="compact"
      class="bg-gradient-to-r from-blue-900 to-blue-700"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Introduction -->
      <div class="prose prose-lg max-w-none mb-8">
        <p class="text-lg text-gray-700 leading-relaxed">
          Find and connect with REALTOR® professionals in our area. Search by
          name, location, specialization, and more to find the right agent for
          your needs.
        </p>
      </div>

      <!-- Directory Portal Container -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-4 bg-gray-50 border-b">
          <h2 class="text-xl font-semibold text-gray-900">
            GSBOR Member Search Portal
          </h2>
          <p class="text-sm text-gray-600 mt-1">
            Use the search tools below to find REALTOR® professionals in our
            directory.
          </p>
        </div>

        <!-- Iframe Container -->
        <div class="relative" style="height: 1000px">
          <iframe
            src="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx"
            class="w-full h-full border-0"
            title="GSBOR Member Directory Search"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-top-navigation"
          />

          <!-- Loading overlay -->
          <div
            id="iframe-loading"
            class="absolute inset-0 bg-gray-100 flex items-center justify-center"
            style="display: none"
          >
            <div class="text-center">
              <div
                class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
              ></div>
              <p class="text-gray-600">Loading member directory...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Help Section -->
      <div class="mt-12 bg-blue-50 rounded-lg p-8">
        <h3 class="text-xl font-semibold text-blue-900 mb-4">
          Need Help Using the Directory?
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 class="font-medium text-blue-800 mb-2">Search Tips:</h4>
            <ul class="space-y-1 text-gray-700">
              <li>• Use partial names for broader results</li>
              <li>• Filter by zip code for location-specific searches</li>
              <li>• Select member type to narrow your search</li>
              <li>• Use field of business to find specialists</li>
            </ul>
          </div>
          <div>
            <h4 class="font-medium text-blue-800 mb-2">Having Issues?</h4>
            <p class="text-gray-700 mb-2">
              If you're having trouble accessing the directory or need
              assistance, please contact our office.
            </p>
            <a
              href="/contact-us"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact Us
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Alternative Access -->
      <div class="mt-8 text-center">
        <p class="text-gray-600 mb-4">
          Prefer to access the directory in a new window?
        </p>
        <a
          href="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open in New Window
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Member Directory - Greater Springfield Board of Realtors",
  description:
    "Search our comprehensive member directory to find REALTOR® professionals in the Greater Springfield area.",
  ogTitle: "Member Directory - Greater Springfield Board of Realtors",
  ogDescription:
    "Search our comprehensive member directory to find REALTOR® professionals in the Greater Springfield area.",
  ogType: "website",
});

// Handle iframe loading
onMounted(() => {
  const iframe = document.querySelector("iframe");
  const loadingOverlay = document.getElementById("iframe-loading");

  if (iframe && loadingOverlay) {
    // Show loading initially
    loadingOverlay.style.display = "flex";

    // Hide loading when iframe loads
    iframe.addEventListener("load", () => {
      loadingOverlay.style.display = "none";
    });

    // Handle iframe errors
    iframe.addEventListener("error", () => {
      loadingOverlay.innerHTML = `
        <div class="text-center">
          <div class="text-red-500 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="text-gray-600 mb-4">Unable to load the member directory.</p>
          <a 
            href="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx" 
            target="_blank"
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open in New Window
          </a>
        </div>
      `;
    });
  }
});
</script>
