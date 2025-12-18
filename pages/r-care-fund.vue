<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="R Care Fund"
      subtitle="Mental health and counseling services for GSBOR members"
      :show-steps="false"
      :cta-button="{
        text: 'Access Services',
        link: 'https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2f',
        variant: 'primary',
      }"
      variant="compact"
      class="bg-green-600"
    />

    <!-- Program Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl text-gray-900 mb-6">
              Supporting Your Mental Health
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              The Greater Springfield Board of REALTORS® partners with Burrell Behavioral Health to provide therapy and counseling services accessible to GSBOR members. This member benefit from the R Care Fund covers up to three appointments per member and is effective February 1, 2023.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl text-gray-900 mb-6">
                Member Benefit Program
              </h3>
              <p class="text-gray-600 mb-6">
                We understand that the real estate industry can be demanding and
                stressful. That's why we've partnered with Burrell Behavioral
                Health to provide professional mental health support when you
                need it most.
              </p>
              <div class="bg-green-50 rounded-lg p-6">
                <h4 class="text-green-900 mb-3">What's Covered:</h4>
                <ul class="space-y-2 text-green-800">
                  <li class="flex items-center">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
                    />
                    Up to 3 therapy/counseling sessions
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
                    />
                    Professional licensed therapists
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
                    />
                    Confidential services
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-5 h-5 text-green-600 mr-3 flex-shrink-0"
                    />
                    No cost to GSBOR members
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center">
              <img
                src="/images/r-care-fund_R-Care-Fund-FINAL-GREEN-830x1024_3.png"
                alt="R Care Fund Logo"
                class="rounded-xl shadow-lg max-w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Access -->
    <section class="py-12 bg-green-600 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl mb-6">How to Access Services</h2>
          <p class="text-xl text-green-100 mb-8">
            Login to your GSBOR member portal to access R Care Fund information and contact details. Contact Burrell Behavioral Health to schedule your appointment and verify your GSBOR membership.
          </p>
          <NuxtLink
            to="https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2f"
            external
            class="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Icon name="i-lucide-external-link" class="mr-2 w-5 h-5" />
            Access Member Portal
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Additional Resources -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p class="text-lg text-gray-600">
              Additional support and resources for your mental health and well-being
            </p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-xl text-gray-900 mb-6">NAR Mental Wellness Resources</h3>
            <p class="text-gray-700 mb-6">
              The National Association of REALTORS® provides additional mental wellness resources and support for real estate professionals.
            </p>
            <a
              href="https://www.nar.realtor/safety/mental-wellness"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-primary-600 hover:text-primary-800 text-lg"
            >
              Visit NAR Mental Wellness Resources
              <Icon name="i-lucide-external-link" class="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <SupportSection
      title="Have Questions?"
      variant="green"
      :buttons="[
        { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
      ]"
    />
  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: "R Care Fund - Greater Springfield Board of Realtors",
  description:
    "Mental health and counseling services for GSBOR members through our partnership with Burrell Behavioral Health. Up to 3 free sessions available.",
  ogTitle: "R Care Fund - GSBOR",
  ogDescription:
    "Free mental health and counseling services for GSBOR members through Burrell Behavioral Health partnership.",
  ogImage: "/images/r-care-fund_R-Care-Fund-FINAL-GREEN-830x1024_3.png",
  twitterCard: "summary_large_image",
});
</script>
