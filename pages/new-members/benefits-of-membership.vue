<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <HeroSection
      title="Benefits of Membership"
      description="Thank you for your interest in Greater Springfield Board of REALTORS®. Membership at GSBOR connects you with exclusive products, programs and services which extend to the Missouri REALTORS® (MR) and the National Association of REALTORS® (NAR)."
      :cta-buttons="[
        {
          text: 'Become a Member',
          link: '/new-members/become-a-member',
          variant: 'primary',
        },
        {
          text: 'Contact Us',
          link: '/contact-us',
          variant: 'outline',
        },
      ]"
      variant="compact"
      :show-floating-card="true"
      :floating-card-content="{
        icon: 'i-lucide-star',
        label: 'Member Benefits',
        title: 'Exclusive REALTOR® Advantages',
      }"
    />

    <!-- REALTOR Advantage Section -->
    <section class="py-16" style="background-color: #1e6b97">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-light mb-6 leading-tight text-white"
          >
            The
            <span>REALTOR®</span>
            Advantage
          </h2>
          <p class="text-white mb-8 leading-relaxed text-lg">
            This membership entitles real estate professionals to use the NAR's
            federally registered collective membership trade name, REALTOR®.
            This trade name sets you apart from non-members. Proudly display the
            REALTOR® logo on your marketing literature.
          </p>
          <div>
            <NuxtLink
              to="/new-members/become-a-member"
              class="inline-flex items-center group text-white text-lg border-b border-transparent hover:border-white transition-colors duration-300"
            >
              <span>Start your membership journey</span>
              <Icon
                name="i-lucide-chevron-right"
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Levels of Membership -->
    <div class="container mx-auto px-6 py-16 max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl mb-4 text-gray-900">
          Three Levels of <span>Membership Benefits</span>
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          Benefits of membership at the local, state and national level include:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Local Benefits -->
        <div
          class="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm"
        >
          <div
            class="h-48 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=800&q=80');
            "
          ></div>
          <div class="p-6 text-center">
            <h3 class="text-2xl mb-3 text-gray-900">Local GSBOR</h3>
            <p class="text-gray-500 mb-6 text-lg">
              Your local board provides essential tools and resources for daily
              operations.
            </p>
            <div class="space-y-3 text-gray-600">
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>MLS access</span>
              </div>
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>Local market statistics</span>
              </div>
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>Networking opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <!-- State Benefits -->
        <div
          class="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm"
        >
          <div
            class="h-48 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80');
            "
          ></div>
          <div class="p-6 text-center">
            <h3 class="text-2xl mb-3 text-gray-900">Missouri REALTORS®</h3>
            <p class="text-gray-500 mb-6 text-lg">
              State-level advocacy and professional support services.
            </p>
            <div class="space-y-3 text-gray-600">
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>Legal Line support</span>
              </div>
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>State legislation advocacy</span>
              </div>
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>RPAC participation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- National Benefits -->
        <div
          class="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm"
        >
          <div
            class="h-48 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80');
            "
          ></div>
          <div class="p-6 text-center">
            <h3 class="text-2xl mb-3 text-gray-900">National Association</h3>
            <p class="text-gray-500 mb-6 text-lg">
              National advocacy and exclusive REALTOR® benefits.
            </p>
            <div class="space-y-3 text-gray-600">
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>REALTOR® trademark usage</span>
              </div>
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>RPR property data</span>
              </div>
              <div class="flex items-center justify-center">
                <Icon
                  name="i-lucide-check"
                  class="w-5 h-5 text-green-500 mr-2"
                />
                <span>National advocacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Member Services Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            Member <span>Services</span>
          </h2>
          <p class="text-gray-700 max-w-2xl mx-auto">
            By becoming a member of the Greater Springfield Board of REALTORS®,
            Inc., you also receive the benefits of membership with Missouri
            REALTORS®, and the National Association of REALTORS®.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <!-- MLS Access -->
          <NuxtLink
            to="https://flexmls.com/"
            external
            target="_blank"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div
              class="h-48 bg-white relative flex items-center justify-center p-8"
            >
              <img
                src="/images/logos/SOMO Logo.png"
                alt="SOMO MLS Logo"
                class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                Access to SOMO MLS
              </h3>
              <p class="text-gray-700 mb-4">
                Access to the Southern Missouri Regional Multiple Listing
                Service.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>flexmls.com</span>
                <Icon name="i-lucide-external-link" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- Supra Keys -->
          <NuxtLink
            to="https://www.suprasystems.com/"
            external
            target="_blank"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div
              class="h-48 bg-white relative flex items-center justify-center p-8"
            >
              <img
                src="/images/logos/Supra-logo.png"
                alt="Supra Logo"
                class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                Supra Key and lockbox access
              </h3>
              <p class="text-gray-700 mb-4">
                Professional key and lockbox system for secure property access
                and showing management.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>Supra Access</span>
                <Icon name="i-lucide-external-link" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- Continuing Education -->
          <NuxtLink
            to="/education/realtor-education/"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div class="h-48 bg-primary-200 relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="Continuing Education"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                Continuing Education classes
              </h3>
              <p class="text-gray-700 mb-4">
                Professional development courses and training programs to
                advance your career.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>View Courses</span>
                <Icon name="i-lucide-chevron-right" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- Legal Line -->
          <NuxtLink
            to="https://www.missourirealtor.org/risk-management/legal-line"
            external
            target="_blank"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div class="h-48 bg-primary-200 relative">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
                alt="Legal Line"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                Missouri REALTORS® Legal Line
              </h3>
              <p class="text-gray-700 mb-4">
                Professional legal consultation and guidance for real estate
                transactions and issues.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>Legal Support</span>
                <Icon name="i-lucide-external-link" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- Form Simplicity -->
          <ServiceCard
            title="Form Simplicity"
            description="Enjoy using the Ultimate Edition of Form Simplicity to manage your paperless transactions, obtain digital signatures quickly and to protect your transactions with Form Simplicity's stringent security measures."
            :image="'/images/home-new-version-icons_simplicity-logo_30.png'"
            link="https://www.formsimplicity.com/"
            variant="large"
            :external="true"
          />

          <!-- NAR Benefits -->
          <NuxtLink
            to="https://www.nar.realtor/realtor-benefits-program?cid=CLAR-EITY-0126"
            external
            target="_blank"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div class="h-48 bg-primary-200 relative">
              <img
                src="/images/logos/NAR-realtor-benefits.png"
                alt="NAR Benefits"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                NAR REALTOR® Benefits Program
              </h3>
              <p class="text-gray-700 mb-4">
                Exclusive discounts and benefits from national partners and
                service providers.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>View Benefits</span>
                <Icon name="i-lucide-external-link" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- RPR Access -->
          <NuxtLink
            to="https://blog.narrpr.com/"
            external
            target="_blank"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div
              class="h-48 bg-white relative flex items-center justify-center p-8"
            >
              <img
                src="/images/logos/rpr-logo.png"
                alt="RPR Logo"
                class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                REALTORS® Property Resource (RPR)
              </h3>
              <p class="text-gray-700 mb-4">
                Comprehensive property data, analytics, and market insights
                platform.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>Access RPR</span>
                <Icon name="i-lucide-external-link" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- Research & Statistics -->
          <NuxtLink
            to="/market-statistics/"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div class="h-48 bg-primary-200 relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Research and Statistics"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                Research and Statistics
              </h3>
              <p class="text-gray-700 mb-4">
                Access to comprehensive market data, trends, and analytics to
                inform your business decisions.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>View Market Data</span>
                <Icon name="i-lucide-chevron-right" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>

          <!-- Networking Opportunities -->
          <NuxtLink
            to="/events-calendar/"
            class="group bg-white rounded-xl overflow-hidden shadow-sm card-hover block cursor-pointer"
          >
            <div class="h-48 bg-primary-200 relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                alt="Member Networking"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
            </div>
            <div class="p-6">
              <h3
                class="text-xl mb-3 text-gray-900 group-hover:text-primary-700 transition-colors"
              >
                Member Networking Opportunities
              </h3>
              <p class="text-gray-700 mb-4">
                Connect with fellow professionals through events, meetings, and
                educational programs.
              </p>
              <div
                class="inline-flex items-center text-primary-700 group-hover:text-primary-900 transition-colors"
              >
                <span>View Events</span>
                <Icon name="i-lucide-chevron-right" class="ml-1 w-4 h-4" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- RPAC Section -->
    <section
      class="py-12 relative overflow-hidden"
      style="background-color: #6b46c1"
    >
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-8">
          <h2
            class="text-2xl md:text-3xl font-light mb-4 leading-tight text-white relative"
          >
            Political <span>Advocacy</span>
          </h2>
          <p class="text-white/90 max-w-2xl mx-auto">
            Through RPAC (REALTOR® Political Action Committee), REALTORS® help
            support policies and legislation that benefit consumers and promote
            property ownership at the local, state, and national levels.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div>
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg h-full"
            >
              <div class="p-6 relative">
                <h3 class="text-xl mb-3 text-white">NAR RPAC Page</h3>
                <p class="text-white/85 leading-relaxed mb-6 text-sm">
                  Support national policies and candidates that protect property
                  rights and promote homeownership.
                </p>
                <Button
                  to="https://realtorparty.realtor/rpac/?referrer=http://www.realtor.org/topics/rpac"
                  color="white"
                  variant="solid"
                  class="px-6 py-2"
                  external
                >
                  NAR RPAC
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg h-full"
            >
              <div class="p-6 relative">
                <h3 class="text-xl mb-3 text-white">
                  Missouri REALTORS® RPAC Page
                </h3>
                <p class="text-white/85 leading-relaxed mb-6 text-sm">
                  Participate in state-level political action and advocacy for
                  Missouri real estate professionals.
                </p>
                <Button
                  to="https://www.missourirealtor.org/advocacy/missouri-realtor-party"
                  color="white"
                  variant="solid"
                  class="px-6 py-2"
                  external
                >
                  Missouri RPAC
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            Want to Learn <span>More?</span>
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Fill out a contact form, email or call to learn more about the
            benefits of membership today.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/contact-us"
              color="primary"
              variant="solid"
              class="px-8 py-3 rounded-full"
            >
              Contact Us
            </Button>
            <Button
              to="/new-members/become-a-member"
              color="primary"
              variant="outline"
              class="px-8 py-3 rounded-full"
            >
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: "Benefits of Membership - Greater Springfield Board of REALTORS®",
  meta: [
    {
      name: "description",
      content:
        "Discover the exclusive benefits of GSBOR membership including MLS access, Supra keys, legal support, education, and advocacy at local, state, and national levels.",
    },
  ],
});

// Add page key to ensure proper navigation
definePageMeta({
  key: "benefits-of-membership",
});
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  background-color: #f8fafc;
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

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (min-width: 1024px) {
  .hero-section {
    min-height: auto;
  }
}
</style>
