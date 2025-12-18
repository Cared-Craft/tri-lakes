<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="LEDR Designation"
      subtitle="Leading Excellence in the Delivery of Real Estate"
      variant="default"
      class="bg-gradient-to-r from-primary-800 to-primary-700"
    />

    <!-- Main Content -->
    <div class="bg-white">
      <!-- Logo Section -->
      <section class="container mx-auto px-6 py-5 md:py-10">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-center items-center">
            <div class="relative w-full max-w-md">
              <!-- LEDR Logo Image -->
              <img
                src="/images/education/ledr-logo.png"
                alt="LEDR Designation Logo"
                class="w-full h-auto mx-auto drop-shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- What is LEDR & Why LEDR Section -->
      <section class="bg-gray-50 py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- What is LEDR -->
            <div
              class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-md border-l-4 border-primary-600"
            >
              <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                What is LEDR?
              </h2>
              <div
                class="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed"
              >
                <p>
                  <span class="font-bold text-primary-700 text-lg"
                    >LEDR = Leading Excellence in the Delivery of Real
                    Estate</span
                  >
                </p>
                <p>
                  The LEDR Designation (pronounced
                  <span class="italic font-semibold text-primary-800"
                    >Leader</span
                  >) is a regionally developed, high-impact program created by
                  and for real estate professionals who are ready to lead with
                  intention, purpose, and influence.
                </p>
              </div>
            </div>

            <!-- Why LEDR -->
            <div
              class="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-8 shadow-md border-l-4 border-secondary-500"
            >
              <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                Why LEDR?
              </h2>
              <p class="text-base md:text-lg text-gray-800 leading-relaxed">
                Whether you're a seasoned agent or an emerging leader, LEDR is
                your opportunity to grow deeper roots, reach new heights, and
                become the professional others look to for guidance and
                excellence.
              </p>
            </div>
          </div>

          <!-- Bottom Statement Box -->
          <div
            class="mt-12 bg-gradient-to-r from-primary-700 to-primary-800 text-white p-8 rounded-xl shadow-lg"
          >
            <p class="text-lg md:text-xl leading-relaxed text-center">
              This designation goes beyond the basics to elevate how you
              operate, communicate, and give back—both in business and in the
              broader community.
            </p>
          </div>
        </div>
      </section>

      <!-- Six Dynamic Modules Section -->
      <section class="py-16 md:py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-4 mb-4">
              <div
                class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center shadow-lg"
              >
                <span class="text-white text-xl md:text-2xl font-bold">6</span>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-primary-900">
                DYNAMIC MODULES
              </h2>
            </div>
            <p
              class="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              Comprehensive training across six key areas of leadership
              excellence
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(module, index) in modules"
              :key="module.title"
              class="rounded-xl p-6 shadow-md relative overflow-hidden border-l-4"
              :class="getModuleCardClasses(index)"
            >
              <h3 class="font-bold mb-3" :class="getModuleTitleClasses(index)">
                {{ module.title }}
              </h3>
              <p class="leading-relaxed" :class="getModuleTextClasses(index)">
                {{ module.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Meet the Instructors Section -->
      <section class="bg-gray-50 py-16 md:py-20">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
              Meet The Instructors
            </h2>
            <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from experienced leaders who bring decades of real estate
              expertise
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Jeff Kester -->
            <PersonCard
              name="JEFF KESTER"
              :bio="jeffKester.bio"
              :photo="jeffKester.photo"
              variant="detailed"
              size="large"
              layout="vertical"
              :show-contact="false"
              class="bg-white rounded-xl shadow-lg border border-gray-100"
            />

            <!-- Angie Mullings -->
            <PersonCard
              name="ANGIE MULLINGS"
              :bio="angieMullings.bio"
              :photo="angieMullings.photo"
              variant="detailed"
              size="large"
              layout="vertical"
              :show-contact="false"
              class="bg-white rounded-xl shadow-lg border border-gray-100"
            />
          </div>

          <!-- Commitment Statement -->
          <div
            class="text-center bg-accent-100 rounded-xl p-8 border border-accent-200"
          >
            <p
              class="text-xl md:text-2xl lg:text-3xl font-light italic text-primary-900"
            >
              <span class="font-bold">LEDR isn't just a designation</span>
              -<br />
              <span class="font-semibold">It's a commitment to Lead!</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <SupportSection
        title="Ready to Lead with LEDR?"
        description="Contact us today to learn more and register for the LEDR Designation program."
        :buttons="[
          { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
        ]"
        variant="gray"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "LEDR Designation - Greater Springfield Board of Realtors",
  description:
    "LEDR (Leading Excellence in the Delivery of Real Estate) is a regionally developed, high-impact program for real estate professionals ready to lead with intention, purpose, and influence.",
  ogTitle: "LEDR Designation - Greater Springfield Board of Realtors",
  ogDescription:
    "LEDR (Leading Excellence in the Delivery of Real Estate) is a regionally developed, high-impact program for real estate professionals ready to lead with intention, purpose, and influence.",
  ogType: "website",
});

// Six Dynamic Modules
const modules = [
  {
    title: "LEDR Overview",
    description:
      "LEDR empowers real estate professionals to excel with clients, build strategic businesses, advance the industry, give back to their communities, and stay ahead through innovation.",
  },
  {
    title: "LEDRship with Consumers",
    description:
      "Deliver exceptional client experiences by building trust, educating, and guiding with clarity.",
  },
  {
    title: "LEDRship with Business",
    description:
      "Design a sustainable, strategic business with aligned people, processes, and vision.",
  },
  {
    title: "LEDRship in the Real Estate Industry",
    description:
      "Advance the profession through advocacy, involvement, and ethical standards.",
  },
  {
    title: "LEDRship in Citizenship",
    description:
      "Give back to your community, support local initiatives, and model values-driven practices.",
  },
  {
    title: "LEDRship in Innovation",
    description:
      "Stay ahead with technology, market insights, and forward-thinking strategies.",
  },
];

// Helper functions for module styling diversity
function getModuleCardClasses(index: number): string {
  // All modules: white backgrounds with colored borders
  const colors = ["blue", "green", "red"];
  const colorIndex = index % 3;

  const borders = [
    "bg-white border-blue-600",
    "bg-white border-green-600",
    "bg-white border-red-600",
  ];
  return borders[colorIndex];
}

function getModuleTitleClasses(index: number): string {
  // Consistent font sizes for all modules
  return "text-xl md:text-2xl text-primary-900";
}

function getModuleTextClasses(index: number): string {
  // Consistent font sizes for all modules
  return "text-base md:text-lg text-gray-700";
}

// Instructor Information
const jeffKester = {
  photo: "/images/staff/staff-jeff-kester.jpg",
  bio: "With a real estate career that began in 1994 as a mortgage loan officer, Jeff has spent three decades mastering every corner of the industry—from agency to operations. Today, he leads five local real estate associations and a regional MLS, while guiding agents to raise the bar through LEDR. His teaching philosophy is simple but powerful: do the right thing and do it well.",
};

const angieMullings = {
  photo: "/images/education/Angie Head Shot(1).jpg", // Photo will need to be added
  bio: "A lifelong leader in real estate, Angie has been broker/owner of Century 21 Integrity Group since 2007, guiding agents with her core values of education, communication, and service. Recognized as one of Springfield Business Journal's 20 Most Influential Women, she brings a passion for helping families—especially military families—navigate big moves with confidence and care.",
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
