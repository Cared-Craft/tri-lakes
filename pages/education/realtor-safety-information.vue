<script setup lang="ts">
// SEO metadata
useHead({
  title: "Realtor Safety Information - Greater Springfield Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "REALTOR® safety is of the utmost importance. Use the classes and resources below to help develop personal safety strategies.",
    },
  ],
});
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <HeroSection
        title="REALTOR® Safety Information"
        subtitle="Safety First, Success Always"
        description="REALTOR® safety is of the utmost importance. Use the classes and resources below to help develop personal safety strategies."
        variant="default"
      />

      <!-- FOREWARN Partnership Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl text-gray-900 mb-6">FOREWARN</h2>
                <div class="prose prose-lg max-w-none">
                  <p class="text-gray-700 mb-4">
                    GSBOR is excited to partner with FOREWARN to bring you
                    cutting-edge technology designed to improve REALTOR® safety
                    and security.
                    <em
                      >All primary and secondary GSBOR REALTOR® members are
                      eligible for Premium app features at no additional
                      cost.</em
                    >
                  </p>
                  <p class="text-gray-700">
                    FOREWARN brings knowledge to the real estate industry
                    through innovative solutions to ensure safer engagements and
                    smarter interactions. Leveraging powerful analytics and a
                    massive data repository, FOREWARN solutions enable real
                    estate professionals to gain real-time knowledge, for
                    purposes such as verifying identity, searching for criminal
                    histories, and validating information provided by potential
                    clients such as financial and asset information – all from
                    just a phone number or name. Risk assessment and due
                    diligence at your fingertips™.
                  </p>
                </div>
              </div>
              <div class="text-center">
                <img
                  src="/images/education_realtor-safety-information_Forewarn-logo-redviolet-tagline-large-1-1024x803_3.jpg"
                  alt="FOREWARN Logo"
                  class="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Safety Information Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <div class="prose prose-lg max-w-none mb-8">
              <p class="text-gray-700 mb-4">
                While being friendly and personable is a key to success for
                REALTORS®, it is critical to show caution when meeting clients
                for the first time.
              </p>
              <p class="text-gray-700">
                Visit the NAR Safety Resources below for a full list of articles
                and videos on REALTOR® safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Safety Resources Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl text-center text-gray-900 mb-12">
              REALTOR® Safety Resources
            </h2>

            <div class="grid lg:grid-cols-2 gap-12">
              <!-- Safety Articles -->
              <div class="text-center">
                <h3 class="text-xl text-gray-900 mb-4">Safety Articles</h3>
                <hr class="w-12 border-t-2 border-primary-600 mx-auto mb-4" />
                <p class="text-gray-700 mb-6">
                  It's crucial to have a comprehensive knowledge of how to
                  protect yourself in all aspects of your real estate business.
                  View articles about every part of real estate safety on the
                  NAR safety page.
                </p>
                <Button
                  to="https://www.nar.realtor/safety"
                  variant="primary"
                  color="primary"
                  external
                  class="inline-flex items-center"
                >
                  <Icon name="i-lucide-external-link" class="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>

              <!-- Safety Videos -->
              <div class="text-center">
                <h3 class="text-xl text-gray-900 mb-4">Safety Videos</h3>
                <hr class="w-12 border-t-2 border-primary-600 mx-auto mb-4" />
                <p class="text-gray-700 mb-6">
                  Staying up-to-date on the latest safety procedures is
                  essential to protecting yourself and your business. View and
                  share videos about REALTOR® safety from the NAR.
                </p>
                <Button
                  to="https://www.nar.realtor/safety/safety-videos"
                  variant="primary"
                  color="primary"
                  external
                  class="inline-flex items-center"
                >
                  <Icon name="i-lucide-external-link" class="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Questions CTA Section -->
      <CtaBanner
        title="Have a Question About REALTOR® Safety?"
        content="Don't hesitate to fill out a contact form, email or call. One of our friendly staff members would be happy to help you."
        theme="primary"
        :primaryAction="{
          to: '/contact-us',
          text: 'Contact Us',
        }"
      />

      <!-- Text Alerts Section -->
    </main>
  </div>
</template>

<style scoped>
.prose p {
  margin-bottom: 1rem;
}
</style>
