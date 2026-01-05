<script setup lang="ts">
import { ref, onMounted } from "vue";

// SEO metadata
useHead({
  title: "Tri-Lakes Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Tri-Lakes Board of Realtors serves as the leading advocate for real estate professionals in the Tri-Lakes area.",
    },
  ],
});


// Membership steps
const membershipSteps = [
  {
    number: 1,
    title: "Fill Out the Application",
    description:
      "Download and fill out a new member application or complete it online.",
  },
  {
    number: 2,
    title: "Submit Documentation",
    description:
      "Provide required documents including your real estate license.",
  },
  {
    number: 3,
    title: "Pay Membership Dues",
    description: "Complete your membership with payment of applicable fees.",
  },
  {
    number: 4,
    title: "Get Started",
    description: "Access all member benefits and resources immediately.",
  },
];

// Applications
const applications = [
  {
    title: "Member Application",
    description:
      "Join Tri-Lakes Board of Realtors and access MLS, technology, training, and important legislative updates.",
    file: "/documents/2025_Member_Application_ fillable.pdf",
  },
  {
    title: "Affiliate Application",
    description:
      "Become an affiliate member and connect with REALTORS® in the Tri-Lakes area.",
    file: "/documents/2025 Affiliate Application.pdf",
  },
  {
    title: "New DR Application",
    description:
      "Apply to become a Designated REALTOR® and lead your brokerage team.",
    file: "/documents/2025 New DR Application.pdf",
  },
  {
    title: "ULA Application",
    description:
      "Apply for Unlicensed Assistant status to support REALTORS® in their daily operations.",
    file: "/documents/2025 ULA Application.pdf",
  },
];
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <section
        class="hero-section relative overflow-hidden h-[55vh] md:h-[75vh] flex items-center"
      >
        <!-- Background Image -->
        <div class="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/header-images/branson-mo-bg.jpg"
            alt="Branson, Missouri"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/50 z-10"></div>

        <!-- Content Container -->
        <div class="absolute bottom-[75px] left-[75px] z-20">
          <p class="text-2xl md:text-3xl text-white leading-relaxed max-w-2xl">
            Your trusted partner in real estate excellence, dedicated to serving
            members, industry professionals, and the public.
          </p>
        </div>
      </section>

      <!-- About Section -->
      <section class="py-20 bg-primary-900 relative overflow-hidden">
        <!-- Subtle background elements -->
        <div class="absolute inset-0">
          <!-- Subtle gradient overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#0f2a3f]"
          ></div>

          <!-- Subtle pattern -->
          <div class="absolute inset-0 opacity-5 pattern-grid"></div>

          <!-- Decorative elements -->
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/4"
          ></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="relative">
              <h2
                class="text-3xl md:text-4xl font-light mb-6 leading-tight text-white relative"
              >
                About
                <span>Tri-Lakes Board of Realtors</span>
              </h2>
              <p class="text-white mb-8 leading-relaxed relative text-lg">
                Tri-Lakes Board of Realtors supports members, strengthens the industry, and serves the public with integrity. We provide tools, education, and advocacy that help REALTORS® and communities thrive.
              </p>
              <div class="relative">
                <NuxtLink
                  to="/about-us"
                  class="inline-flex items-center group text-white text-lg border-b border-transparent hover:border-white transition-colors duration-300"
                >
                  <span>Learn more about us</span>
                  <Icon
                    name="i-lucide-chevron-right"
                    class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Membership Steps - Apple Inspired -->
      <section class="py-24 relative bg-white">
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#F1F1F1] to-white h-[400px] w-full"
        ></div>
        <div class="container mx-auto px-6 max-w-[1920px] relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl mb-4 text-gray-900">
              How to Become <span>A Member</span>
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-lg">
              Join the region's leading real estate organization with a simple
              process.
            </p>
          </div>

          <!-- Apple-style product showcase -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <!-- Apply Online Section -->
            <NuxtLink
              to="/new-members/become-a-member"
              class="block group cursor-pointer"
            >
              <div
                class="flex flex-col items-center text-center p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-[2rem] transition-all duration-300"
              >
                <h3
                  class="text-2xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
                >
                  Join Tri-Lakes Board of Realtors
                </h3>
                <p class="text-gray-500 mb-6 text-lg max-w-sm">
                  Start your journey with a simple online application process.
                </p>
                <div
                  class="relative mb-10 w-full h-80 overflow-hidden rounded-[2rem] bg-gradient-to-b from-gray-100 to-gray-50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800&q=80"
                    alt="Apply Online"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </NuxtLink>

            <!-- Enjoy Member Benefits Section -->
            <NuxtLink
              to="/new-members/benefits-of-membership"
              class="block group cursor-pointer"
            >
              <div
                class="flex flex-col items-center text-center p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-[2rem] transition-all duration-300"
              >
                <h3
                  class="text-2xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
                >
                  Enjoy Member Benefits
                </h3>
                <p class="text-gray-500 mb-6 text-lg max-w-sm">
                  Access exclusive resources and support from day one.
                </p>
                <div
                  class="relative mb-10 w-full h-80 overflow-hidden rounded-[2rem] bg-gradient-to-b from-gray-100 to-gray-50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                    alt="Enjoy Benefits"
                    class="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Apple-style CTA banner -->
          <div
            class="rounded-3xl overflow-hidden bg-[#139E78] p-12 text-center text-white relative max-w-4xl mx-auto"
          >
            <!-- Background styling elements -->
            <div class="absolute inset-0">
              <!-- Green gradient overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-[#139E78] via-[#17B48C] to-[#1FCBA0]"
              ></div>

              <!-- Subtle pattern -->
              <div class="absolute inset-0 opacity-5 pattern-grid"></div>

              <!-- Decorative elements -->
              <div
                class="absolute top-0 right-0 w-64 h-64 bg-[#0D7C5F] rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-48 h-48 bg-[#2AD9AC] rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"
              ></div>
            </div>

            <!-- Content -->
            <div class="relative z-10">
              <p class="text-white mb-8 max-w-2xl mx-auto text-lg">
                Become a member today and unlock a world of professional
                resources and opportunities.
              </p>
              <NuxtLink
                to="/new-members/become-a-member"
                class="btn inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer bg-white hover:bg-gray-50 text-gray-900 shadow-md hover:shadow-lg border-2 border-gray-200 focus:ring-gray-500 transform hover:scale-105 px-4 py-2 text-sm rounded-md px-10 py-3 rounded-full shadow-lg"
              >
                Become a Member
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Applications Section -->
      <section class="py-20 relative overflow-hidden">
        <!-- Rich background with subtle patterns and gradients -->
        <div class="absolute inset-0 z-0">
          <!-- Base gradient background -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#214f75]"
          ></div>

          <!-- Subtle pattern overlay -->
          <div class="absolute inset-0 opacity-5 pattern-grid"></div>

          <!-- Decorative blurred circles -->
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-tertiary-500/10 rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 rounded-full opacity-15 blur-3xl transform -translate-x-1/3 translate-y-1/3"
          ></div>
          <div
            class="absolute top-1/2 left-1/4 w-64 h-64 bg-quaternary-500/10 rounded-full opacity-10 blur-2xl"
          ></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center mb-16">
            <h2
              class="text-3xl md:text-4xl font-light mb-6 leading-tight text-white relative"
            >
              Applications
            </h2>
            <p class="text-white/90 max-w-2xl mx-auto">
              Download and complete the application forms to join Tri-Lakes Board of Realtors.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a
              v-for="(app, index) in applications"
              :key="index"
              :href="app.file"
              target="_blank"
              rel="noopener noreferrer"
              class="block group"
            >
              <div
                class="bg-primary-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-primary-700/30 shadow-xl h-full transition-all duration-300 hover:bg-primary-800/60 hover:shadow-2xl hover:-translate-y-1"
              >
                <div class="p-8 relative">
                  <div class="flex items-center justify-between mb-4">
                    <Icon
                      name="i-lucide-file-text"
                      class="w-8 h-8 text-white/80 group-hover:text-white transition-colors"
                    />
                    <Icon
                      name="i-lucide-download"
                      class="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 class="text-xl mb-3 text-white group-hover:text-white transition-colors">
                    {{ app.title }}
                  </h3>
                  <p class="text-white/85 leading-relaxed text-sm">
                    {{ app.description }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  background-color: #000;
}


.pattern-grid {
  background-image: linear-gradient(
      to right,
      rgba(33, 79, 117, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(33, 79, 117, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
