<script setup lang="ts">
import AccordionComponent from "~/components/ui/AccordionComponent.vue";

// SEO metadata
useHead({
  title: "Realtor Education - Greater Springfield Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "REALTOR® education is vital to the continued excellence of our members. Check out our course enrollment policies, education schedule and online class catalogue.",
    },
  ],
});

// Define accordion items
const accordionItems = [
  {
    id: "mrec-renewal",
    title:
      "Missouri Real Estate Commission (MREC) Continuing Education/Renewal:",
    content:
      "The MREC requires that all licensees in the state of Missouri complete 12 hours of continuing education every two years. Brokers must have their 12 hours of education completed by June 30th of even years and salespersons must have their 12 hours of education completed by September 30th of even years.<br><br>If a licensee fails to complete his or her education by the renewal date, it will cause a loss of license and the licensing process must begin again. MREC requirements are 12 continuing education hours. Three hours must be in the form of a core class and the remaining 9 hours can be in elective classes. Course providers must be MREC approved and must supply the student with a proper certificate of completion for each course. Students who complete education using an online service are not limited in daily credit hours. Students who complete education in a classroom can only receive credit for 6 hours in a 24 hour period.",
    defaultOpen: true,
  },
  {
    id: "ce-online",
    title: "Continuing Education Online",
    content:
      'GSBOR is pleased to offer quality online education for Missouri real estate agents. Complete your continuing education for license renewal right here. Looking to enhance your career and brand yourself through a designation? Go no further. Online educational opportunities are offered through NAR\'s REALTOR® University, and The Continuing Education Shop, Inc. Each of these online schools has online support staff available, or you can contact GSBOR Staff at support@gsbor.com for information.<br><br><a href="https://gsbor.com/education/realtor-education/courses/" class="text-primary-600 hover:text-primary-700 ">View Upcoming Courses</a>',
    defaultOpen: false,
  },
];
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <HeroSection
        title="REALTOR® Education"
        subtitle="Continuing Excellence Through Education"
        description="REALTOR® education is vital to the continued excellence of our members. Check out our course enrollment policies, education schedule and online class catalogue."
        variant="default"
      />

      <!-- Continuing Education Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl mb-4 text-gray-900">
                Continuing <span>Education</span>
              </h2>
              <p class="text-gray-500 max-w-2xl mx-auto text-lg">
                Stay current with your license requirements and professional
                development
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <!-- MREC Requirements Card -->
              <div class="bg-white rounded-[2rem] p-8 shadow-sm">
                <h3 class="text-2xl text-gray-900 mb-4">MREC Requirements</h3>
                <div class="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Missouri Real Estate Commission (MREC) requires all
                    licensees to complete <strong>12 hours</strong> of
                    continuing education every two years.
                  </p>
                  <div class="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p class="text-sm mb-2">
                      <strong class="text-blue-900">Brokers:</strong> Complete
                      by June 30th of even years
                    </p>
                    <p class="text-sm">
                      <strong class="text-blue-900">Salespersons:</strong>
                      Complete by September 30th of even years
                    </p>
                  </div>
                  <p>
                    <strong>Course Requirements:</strong>
                  </p>
                  <ul class="list-disc list-inside space-y-2 ml-2">
                    <li>3 hours: Core class (required)</li>
                    <li>9 hours: Elective classes</li>
                  </ul>
                  <div
                    class="bg-yellow-50 rounded-xl p-4 border border-yellow-100"
                  >
                    <p class="text-sm text-yellow-900">
                      <strong>Important:</strong> Failure to complete education
                      by the renewal date will result in loss of license.
                    </p>
                  </div>
                  <p class="text-sm">
                    <strong>Daily Credit Limits:</strong> Online courses have no
                    daily limit. Classroom courses are limited to 6 hours per
                    24-hour period.
                  </p>
                </div>
              </div>

              <!-- Online Education Card -->
              <div class="bg-white rounded-[2rem] p-8 shadow-sm">
                <h3 class="text-2xl text-gray-900 mb-4">Online Education</h3>
                <div class="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    GSBOR is pleased to offer quality online education for
                    Missouri real estate agents. Complete your continuing
                    education for license renewal conveniently from anywhere.
                  </p>
                  <p>
                    Looking to enhance your career and brand yourself through a
                    designation? Online educational opportunities are offered
                    through:
                  </p>
                  <div class="space-y-3">
                    <div
                      class="bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <p class="font-semibold text-gray-900 mb-1">
                        NAR's REALTOR® University
                      </p>
                      <p class="text-sm text-gray-600">
                        Professional development and designation courses
                      </p>
                    </div>
                    <div
                      class="bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <p class="font-semibold text-gray-900 mb-1">
                        The Continuing Education Shop, Inc.
                      </p>
                      <p class="text-sm text-gray-600">
                        Comprehensive CE courses for license renewal
                      </p>
                    </div>
                  </div>
                  <p class="text-sm">
                    Each online school has support staff available. You can also
                    contact GSBOR Staff at
                    <a
                      href="mailto:support@gsbor.com"
                      class="text-primary-600 hover:text-primary-700 underline"
                      >support@gsbor.com</a
                    >
                    for information.
                  </p>
                  <div class="pt-4">
                    <Button
                      to="/education/realtor-education/courses/"
                      variant="outline"
                      color="primary"
                      class="w-full"
                    >
                      View Upcoming Courses
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Check CE Hours Section -->
            <div class="mt-16 text-center">
              <div class="relative inline-block">
                <h2 class="text-3xl md:text-4xl font-light mb-4 text-gray-900 leading-tight">
                  Check Continuing <span class="block md:inline">Education Hours</span>
                </h2>
                <p class="text-lg text-gray-700 mb-6">
                  Check your renewal information and status here.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    to="https://pr.mo.gov/realestate-ceu-requirements.asp"
                    variant="primary"
                    color="primary"
                    external
                    class="inline-flex items-center justify-center cursor-pointer"
                  >
                    MREC CE Requirements
                    <Icon name="i-lucide-external-link" class="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    to="https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/code-of-ethics-training"
                    variant="outline"
                    color="primary"
                    external
                    class="inline-flex items-center justify-center cursor-pointer"
                  >
                    NAR COE Requirements
                    <Icon name="i-lucide-external-link" class="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CE Shop Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <div class="mb-8">
              <img
                src="/images/education_realtor-education_ceshop_3.svg"
                alt="CE Shop"
                class="mx-auto h-24 w-auto"
              />
            </div>
            <Button
              to="https://gsbor.theceshop.com/online-education/missouri/real-estate/broker-and-sales-license/continuing-education/courses.html"
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
      </section>

      <!-- C2EX Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <div class="mb-8">
              <img
                src="/images/education_realtor-education_c2ex_5.svg"
                alt="C2EX"
                class="mx-auto h-32 w-auto"
              />
            </div>

            <div class="prose prose-lg max-w-none mb-8">
              <p class="text-gray-700 mb-4">From the NAR:</p>
              <p class="text-gray-700 mb-4">
                REALTORS® defined professionalism in this industry more than 100
                years ago when they created the Code of Ethics. The
                award-winning C2EX program takes professionalism to the next
                level by enabling NAR members to assess their expertise in 10
                (11 for brokers) elements of professionalism ranging from
                customer service to use of technology.
              </p>
              <p class="text-gray-700 mb-4">
                This innovative engagement tool encourages participation in all
                levels of the REALTOR® organization. It's not a designation or a
                course. It's not a requirement, but a benefit available to all
                NAR members at no additional cost.
              </p>
              <p class="text-gray-700 mb-8">
                To get started, log in to www.C2EX.realtor and take the
                self-assessment that measures your proficiency in each of the
                elements of professionalism, known as the C2EX Competencies.
                Based on your results, the platform will generate customized
                learning paths, recommend experiences, and provide tools and
                resources to increase your knowledge and enhance your skillsets.
              </p>
            </div>

            <Button
              to="https://www.c2ex.realtor/"
              variant="primary"
              color="primary"
              external
              class="inline-flex items-center"
            >
              <Icon name="i-lucide-external-link" class="w-4 h-4 mr-2" />
              Learn More about C2EX
            </Button>
          </div>
        </div>
      </section>

      <!-- Course Enrollment Policies Section -->
      <section class="py-24 relative bg-white">
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#F1F1F1] to-white h-[400px] w-full"
        ></div>
        <div class="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl mb-4 text-gray-900">
              Course Enrollment <span>Policies</span>
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-lg">
              Important information for course registration and attendance
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <!-- Refund Policy -->
            <div
              class="p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-[2rem]"
            >
              <h3 class="text-xl mb-3 text-gray-900">Refund Policy</h3>
              <p class="text-gray-600 text-base leading-relaxed">
                90% refund available with written request at least two calendar
                days before class. Send requests to support@gsbor.com.
              </p>
            </div>

            <!-- Pre-Registration -->
            <div
              class="p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-[2rem]"
            >
              <h3 class="text-xl mb-3 text-gray-900">
                Pre-Registration Required
              </h3>
              <p class="text-gray-600 text-base leading-relaxed">
                Pre-registration is required for all courses. Walk-ins are not
                accepted.
              </p>
            </div>

            <!-- Waiting List -->
            <div
              class="p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-[2rem]"
            >
              <h3 class="text-xl mb-3 text-gray-900">No Waiting List</h3>
              <p class="text-gray-600 text-base leading-relaxed">
                We do not maintain a waiting list. If a class is full, check
                back often for cancellations.
              </p>
            </div>

            <!-- Ethics Training -->
            <div
              class="p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-[2rem]"
            >
              <h3 class="text-xl mb-3 text-gray-900">
                Ethics Training Required
              </h3>
              <p class="text-gray-600 text-base leading-relaxed">
                Two online ethics courses available on REALTOR.org: New Member
                Orientation and Biannual Ethics Training. Completion is
                mandatory to maintain membership.
              </p>
            </div>
          </div>

          <!-- Attendance Policy - Full Width Emphasized -->
          <div
            class="p-8 bg-gradient-to-br from-red-100 via-red-50 to-white rounded-[2rem] border-2 border-red-200 mb-8"
          >
            <h3 class="text-2xl mb-3 text-gray-900">
              <span class="text-red-600">Important:</span> Strict Attendance
              Policy
            </h3>
            <p class="text-gray-700 text-base leading-relaxed">
              For seated CE courses, late arrivals will not be admitted,
              regardless of reason. Per MREC Chapter 7 statutes, you must attend
              the entire class to receive a completion certificate and CE
              credit.
              <strong>No exceptions.</strong>
            </p>
          </div>

          <div class="text-center">
            <Button
              to="/education/realtor-education/courses/"
              variant="primary"
              color="primary"
              class="px-8 py-3 rounded-full"
            >
              View Upcoming Courses
            </Button>
          </div>
        </div>
      </section>

      <!-- Learn More CTA Section -->
      <CtaBanner
        title="Learn More About REALTOR® Education."
        content="If you need more information about continued education courses, hours or policies, email support@gsbor.com for assistance."
        theme="primary"
        :primaryAction="{
          to: '/contact-us',
          text: 'Contact Us',
        }"
      />
    </main>
  </div>
</template>

<style scoped>
.prose p {
  margin-bottom: 1rem;
}
</style>
