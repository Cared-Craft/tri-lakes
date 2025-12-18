<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <HeroSection
      title="Events Calendar"
      subtitle="Stay Connected with GSBOR Events"
      description="View our upcoming events, meetings, and educational opportunities."
      variant="default"
    />

    <!-- Important Notice -->
    <section class="py-8 bg-amber-50 border-b border-amber-200">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center mb-4">
            <Icon name="i-lucide-info" class="w-6 h-6 text-amber-600 mr-3" />
            <span class="text-lg text-amber-800">Important Notice</span>
          </div>
          <p class="text-amber-700 text-lg">
            *Please note that the following meetings and events are subject to
            change at any time. For questions regarding the calendar, please email support@gsbor.com.
          </p>
        </div>
      </div>
    </section>

    <!-- Calendar Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl text-gray-900 mb-4">
              GSBOR <span class="text-primary-600">Events Calendar</span>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay up to date with all Greater Springfield Board of REALTORS®
              meetings, educational events, and networking opportunities.
            </p>
          </div>

          <!-- Embedded Calendar -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div class="responsive-iframe-container big-container">
              <iframe
                src="https://outlook.office365.com/owa/calendar/2ce335dc986b489d9be63cc51bf90819@gsbor.com/5622da34623e429bba0956e5669cb9c27320448435453900870/calendar.html"
                style="border-width: 0"
                width="100%"
                height="650"
                frameborder="0"
                scrolling="yes"
                title="GSBOR Events Calendar"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Support Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div
            class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 class="text-3xl mb-6">
              Have a question about an upcoming event?
            </h2>
            <p class="text-xl mb-8 text-primary-100">
              Events are more time sensitive, so please call (417) 883-1226 or email support@gsbor.com if you need immediate assistance.
            </p>
            <Button
              to="/contact-us"
              variant="outline"
              color="white"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata for routing
definePageMeta({
  title: "Events Calendar",
  description:
    "View upcoming GSBOR events, meetings, and educational opportunities",
});

// SEO Meta using the proper Nuxt 3 approach
useSeoMeta({
  title: "Events Calendar | Greater Springfield Board of REALTORS®",
  description:
    "View upcoming GSBOR events, meetings, and educational opportunities. Stay connected with the Greater Springfield Board of REALTORS® community.",
  keywords:
    "GSBOR events, realtor meetings, real estate education, Springfield realtor events, continuing education, networking events",
  ogTitle: "Events Calendar | Greater Springfield Board of REALTORS®",
  ogDescription:
    "View upcoming GSBOR events, meetings, and educational opportunities. Stay connected with the Greater Springfield Board of REALTORS® community.",
  ogType: "website",
  ogImage: "/images/index_GSBOR-Logo_2.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
/* Responsive iframe container styles */
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
}

.responsive-iframe-container.big-container {
  min-height: 800px;
}

.responsive-iframe-container iframe {
  border: none;
  width: 100%;
  height: 100%;
  min-height: 800px;
}

/* Ensure iframe is responsive */
@media (max-width: 768px) {
  .responsive-iframe-container.big-container {
    min-height: 650px;
  }

  .responsive-iframe-container iframe {
    min-height: 650px;
  }
}

@media (max-width: 480px) {
  .responsive-iframe-container.big-container {
    min-height: 550px;
  }

  .responsive-iframe-container iframe {
    min-height: 550px;
  }
}

/* Loading state for iframe */
.responsive-iframe-container::before {
  content: "Loading calendar...";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #6b7280;
  font-size: 1.125rem;
  z-index: -1;
}
</style>
