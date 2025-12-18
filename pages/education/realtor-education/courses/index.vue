<script setup lang="ts">
// SEO metadata
useHead({
  title: "Continuing Education Courses - Greater Springfield Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "View upcoming continuing education courses for REALTOR® license renewal. Online and in-person classes available for Missouri real estate professionals.",
    },
  ],
});

// Course data - this would typically come from a CMS or API
const upcomingCourses: Array<{
  id: number;
  title: string;
  type: string;
  hours: number;
  date: string;
  time: string;
  format: string;
  location: string;
  instructor: string;
  price: string;
  description: string;
  available: boolean;
  spotsLeft: number;
}> = [];

const onlineCourses = [
  {
    id: 6,
    title: "CE Shop Online Courses",
    provider: "The CE Shop",
    description:
      "Complete your continuing education requirements online with our partner, The CE Shop. Available 24/7 with immediate certificates.",
    features: [
      "24/7 Access",
      "Immediate Certificates",
      "Mobile Friendly",
      "MREC Approved",
    ],
    url: "https://gsbor.theceshop.com/online-education/missouri/real-estate/broker-and-sales-license/continuing-education/courses.html",
  },
  {
    id: 7,
    title: "REALTOR® University",
    provider: "NAR",
    description:
      "Access NAR's comprehensive online education platform with courses, webinars, and professional development opportunities.",
    features: [
      "NAR Member Pricing",
      "Professional Development",
      "Designation Courses",
      "Live Webinars",
    ],
    url: "https://www.realtor.org/education-and-events/realtor-university",
  },
];
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <HeroSection
        title="Continuing Education Courses"
        subtitle="Stay Current with Your Professional Development"
        description="View upcoming courses for Missouri real estate license renewal. Choose from in-person classes or convenient online options."
        variant="default"
      />

      <!-- Course Categories -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 mb-12">
              <div
                class="bg-primary-50 rounded-xl p-8 border border-primary-200"
              >
                <div class="flex items-center mb-4">
                  <div class="bg-primary-600 text-white p-3 rounded-lg mr-4">
                    <Icon name="i-lucide-book-open" class="w-6 h-6" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Core Courses
                  </h3>
                </div>
                <p class="text-gray-700 mb-4">
                  Required 3-hour core courses covering essential topics like
                  Missouri real estate law and ethics.
                </p>
                <div class="text-sm text-primary-700 font-medium">
                  3 hours required for license renewal
                </div>
              </div>

              <div
                class="bg-emerald-50 rounded-xl p-8 border border-emerald-200"
              >
                <div class="flex items-center mb-4">
                  <div class="bg-emerald-600 text-white p-3 rounded-lg mr-4">
                    <Icon name="i-lucide-graduation-cap" class="w-6 h-6" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Elective Courses
                  </h3>
                </div>
                <p class="text-gray-700 mb-4">
                  Choose from various topics to complete your remaining 9 hours
                  of continuing education.
                </p>
                <div class="text-sm text-emerald-700 font-medium">
                  9 hours required for license renewal
                </div>
              </div>
            </div>

            <!-- CE Requirements Reminder -->
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
              <div class="flex">
                <div class="flex-shrink-0">
                  <Icon
                    name="i-lucide-alert-triangle"
                    class="w-5 h-5 text-yellow-400"
                  />
                </div>
                <div class="ml-3">
                  <h4 class="text-lg font-medium text-yellow-800">
                    CE Renewal Deadlines
                  </h4>
                  <p class="text-yellow-700 mt-2">
                    <strong>Brokers:</strong> 12 hours due by June 30th of even
                    years<br />
                    <strong>Salespersons:</strong> 12 hours due by September
                    30th of even years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Upcoming In-Person Courses -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Upcoming In-Person Courses
              </h2>
              <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Register for classroom courses held at the GSBOR office. All
                courses are MREC approved.
              </p>
            </div>

            <div v-if="upcomingCourses.length > 0" class="grid gap-8">
              <div
                v-for="course in upcomingCourses"
                :key="course.id"
                class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div class="p-8">
                  <div
                    class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6"
                  >
                    <div class="flex-1">
                      <div class="flex items-center gap-3 mb-3">
                        <h3 class="text-xl font-semibold text-gray-900">
                          {{ course.title }}
                        </h3>
                        <BadgePrimarySolid
                          v-if="course.type === 'Core Course'"
                          class="bg-primary-100 text-primary-800"
                        >
                          Core
                        </BadgePrimarySolid>
                        <BadgePrimaryOutline v-else>
                          Elective
                        </BadgePrimaryOutline>
                      </div>

                      <p class="text-gray-600 mb-4">
                        {{ course.description }}
                      </p>

                      <div
                        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm"
                      >
                        <div class="flex items-center text-gray-700">
                          <Icon
                            name="i-lucide-calendar"
                            class="w-4 h-4 mr-2 text-gray-400"
                          />
                          {{ course.date }}
                        </div>
                        <div class="flex items-center text-gray-700">
                          <Icon
                            name="i-lucide-clock"
                            class="w-4 h-4 mr-2 text-gray-400"
                          />
                          {{ course.time }}
                        </div>
                        <div class="flex items-center text-gray-700">
                          <Icon
                            name="i-lucide-map-pin"
                            class="w-4 h-4 mr-2 text-gray-400"
                          />
                          {{ course.location }}
                        </div>
                        <div class="flex items-center text-gray-700">
                          <Icon
                            name="i-lucide-user"
                            class="w-4 h-4 mr-2 text-gray-400"
                          />
                          {{ course.instructor }}
                        </div>
                      </div>
                    </div>

                    <div class="flex-shrink-0 text-center lg:text-right">
                      <div class="mb-4">
                        <div class="text-2xl font-bold text-gray-900">
                          {{ course.price }}
                        </div>
                        <div class="text-sm text-gray-600">
                          {{ course.hours }} CE Hours
                        </div>
                      </div>

                      <div v-if="course.available" class="space-y-2">
                        <div class="text-sm text-emerald-600 font-medium">
                          {{ course.spotsLeft }} spots left
                        </div>
                        <Button
                          variant="primary"
                          color="primary"
                          class="w-full lg:w-auto"
                          @click="() => {}"
                        >
                          Register Now
                        </Button>
                      </div>
                      <div v-else class="space-y-2">
                        <div class="text-sm text-red-600 font-medium">
                          Course Full
                        </div>
                        <Button
                          variant="outline"
                          color="gray"
                          class="w-full lg:w-auto"
                          disabled
                        >
                          Waitlist Unavailable
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- No Upcoming Events Message -->
            <div
              v-else
              class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center"
            >
              <div class="max-w-md mx-auto">
                <Icon
                  name="i-lucide-calendar-x"
                  class="w-16 h-16 text-gray-400 mx-auto mb-4"
                />
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  No Upcoming Courses
                </h3>
                <p class="text-gray-600 mb-6">
                  There are currently no upcoming in-person courses scheduled.
                  Please check back soon or explore our online course options
                  below.
                </p>
                <Button
                  variant="outline"
                  color="primary"
                  to="/contact-us"
                  class="inline-flex"
                >
                  Contact Education Team
                </Button>
              </div>
            </div>

            <!-- Registration Policies -->
            <div class="mt-12 bg-white rounded-xl p-8 border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-6">
                Course Registration Policies
              </h3>
              <div class="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-4 h-4 mr-2 text-emerald-500 mt-0.5 flex-shrink-0"
                    />
                    Pre-registration is required for all courses
                  </li>
                  <li class="flex items-start">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-4 h-4 mr-2 text-emerald-500 mt-0.5 flex-shrink-0"
                    />
                    90% refund available with 2+ days notice
                  </li>
                  <li class="flex items-start">
                    <Icon
                      name="i-lucide-check-circle"
                      class="w-4 h-4 mr-2 text-emerald-500 mt-0.5 flex-shrink-0"
                    />
                    Certificates provided upon completion
                  </li>
                </ul>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <Icon
                      name="i-lucide-alert-circle"
                      class="w-4 h-4 mr-2 text-amber-500 mt-0.5 flex-shrink-0"
                    />
                    Late arrivals will not be admitted
                  </li>
                  <li class="flex items-start">
                    <Icon
                      name="i-lucide-alert-circle"
                      class="w-4 h-4 mr-2 text-amber-500 mt-0.5 flex-shrink-0"
                    />
                    Full attendance required for credit
                  </li>
                  <li class="flex items-start">
                    <Icon
                      name="i-lucide-alert-circle"
                      class="w-4 h-4 mr-2 text-amber-500 mt-0.5 flex-shrink-0"
                    />
                    No waiting lists maintained
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Online Course Options -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Online Course Options
              </h2>
              <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete your continuing education requirements online with
                flexible scheduling and immediate certificates.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div
                v-for="provider in onlineCourses"
                :key="provider.id"
                class="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  {{ provider.title }}
                </h3>
                <div class="text-primary-600 font-medium mb-4">
                  {{ provider.provider }}
                </div>
                <p class="text-gray-600 mb-6">
                  {{ provider.description }}
                </p>

                <div class="mb-6">
                  <h4 class="font-medium text-gray-900 mb-3">Features:</h4>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                      v-for="feature in provider.features"
                      :key="feature"
                      class="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="i-lucide-check"
                        class="w-4 h-4 mr-2 text-emerald-500"
                      />
                      {{ feature }}
                    </div>
                  </div>
                </div>

                <Button
                  :to="provider.url"
                  variant="primary"
                  color="primary"
                  external
                  class="w-full"
                >
                  <Icon name="i-lucide-external-link" class="w-4 h-4 mr-2" />
                  Visit {{ provider.provider }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <CtaBanner
        title="Questions About Course Registration?"
        content="Our education team is here to help you find the right courses for your continuing education needs."
        theme="primary"
        :primaryAction="{
          to: '/contact-us',
          text: 'Contact Education Team',
        }"
        :secondaryAction="{
          to: '/education/realtor-education',
          text: 'Back to Education Info',
        }"
      />
    </main>
  </div>
</template>

<style scoped>
/* Course grid responsive adjustments */
@media (max-width: 1024px) {
  .grid.lg\\:grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid.sm\\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>
