<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Current Members"
      subtitle="Access your member resources, tools, and support services"
      :show-steps="false"
      :cta-buttons="[
        {
          text: 'Member Portal Login',
          link: 'https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2f',
          variant: 'primary',
        },
      ]"
      variant="compact"
      class="bg-emerald-600"
    />

    <!-- Quick Access Portal Links -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl text-gray-900 mb-4">Quick Access Portals</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Access your essential member portals and tools
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <PortalCard
            title="Member Portal"
            description="Access your member dashboard, directory, and account information"
            link="https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2f"
            cta-text="Login Now"
            variant="emerald"
            :external="true"
          />

          <PortalCard
            title="GSBOR Dashboard"
            description="Quick access to all your member resources and programs in one place"
            link="http://dash.gsbor.com/"
            cta-text="View Dashboard"
            variant="blue"
            :external="true"
          />

          <PortalCard
            title="GSBOR Help Hub"
            description="Get online support and access guides, FAQs, and help articles"
            link="http://support.gsbor.com"
            cta-text="Get Support"
            variant="orange"
            :external="true"
          />
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            Upcoming <span>Events</span>
          </h2>
          <p class="text-gray-700 max-w-2xl mx-auto mb-8">
            Check out upcoming GSBOR events and meetings.
          </p>
        </div>

        <div class="max-w-md mx-auto mb-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-sm">
            <div class="h-48 bg-primary-200 relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                alt="Upcoming Events"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="text-center mt-6 space-y-4">
            <Button
              to="/events-calendar"
              color="emerald"
              class="px-6 py-3 rounded-full"
            >
              View Events Calendar
            </Button>
            <div class="text-sm text-gray-600">
              <a
                href="https://gsborportal.ramcoams.net/Meetings/RegisteredEvents.aspx?selmenid=men3"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 hover:text-primary-800"
              >
                View Upcoming Events on Ramco Portal
                <Icon
                  name="i-lucide-external-link"
                  class="ml-1 w-4 h-4 inline"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Member Services -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl text-gray-900 mb-4">
            Member Services & Resources
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and services designed to support your real
            estate business
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Supra Key Management -->
          <ServiceCard
            title="Supra® Key Management"
            description="Access secure lockbox systems, eKEY apps, and key management tools for property showings"
            :image="'/images/supra_supra-ekey_5.jpg'"
            link="/supra/"
            variant="large"
            :featured="true"
          />

          <!-- Member FAQ -->
          <ServiceCard
            title="Member FAQ"
            description="Find answers to frequently asked questions about membership, services, and policies"
            :image="'/images/index_Help-Hub-Website_12.png'"
            link="/member-faq/"
            variant="large"
          />

          <!-- Forms Library -->
          <ServiceCard
            title="Forms & Documents"
            description="Access essential real estate forms, contracts, and legal documents for your transactions"
            :image="'/images/index_logo-f_23.png'"
            link="/forms/"
            variant="large"
          />

          <!-- Political Advocacy -->
          <ServiceCard
            title="Political Advocacy"
            description="Support REALTOR® political action and advocacy efforts through RPAC contributions"
            :image="'/images/political-advocacy_rpac-logo_3.png'"
            link="/political-advocacy/"
            variant="large"
          />

          <!-- R Care Fund -->
          <ServiceCard
            title="R Care Fund"
            description="Access mental health and counseling services through our partnership with Burrell Behavioral Health"
            :image="'/images/r-care-fund_R-Care-Fund-FINAL-GREEN-830x1024_3.png'"
            link="/r-care-fund/"
            variant="large"
          />

          <!-- Tech Suite -->
          <ServiceCard
            title="MLS NXT Tech Suite"
            description="Explore technology tools and partner services to enhance your real estate business"
            :image="'/images/mls-nxt-tech-suite_tech-suite-logo-no-background-crop_3.jpg'"
            link="/mls-nxt-tech-suite/"
            variant="large"
          />
        </div>
      </div>
    </section>

    <!-- Additional Resources -->
    <section class="py-16 bg-emerald-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl text-gray-900 mb-4">
            Additional Member Resources
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            More tools and services to support your professional growth
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          <ResourceCard
            title="Education"
            description="Continuing education and professional development"
            link="/edu/"
            cta-text="Learn More"
            variant="blue"
          />

          <ResourceCard
            title="Events Calendar"
            description="Upcoming events, meetings, and networking opportunities"
            link="/events-calendar/"
            cta-text="View Events"
            variant="purple"
          />

          <ResourceCard
            title="Market Statistics"
            description="Real estate market data and analytics"
            link="/market-statistics/"
            cta-text="View Data"
            variant="green"
          />

          <ResourceCard
            title="Member Directory"
            description="Search and connect with fellow REALTORS®"
            link="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx"
            cta-text="Search Directory"
            variant="indigo"
            :external="true"
          />

          <ResourceCard
            title="Affiliate Directory"
            description="Find trusted business partners and service providers"
            link="/find-an-affiliate/"
            cta-text="Browse Affiliates"
            variant="teal"
          />
        </div>
      </div>
    </section>

    <!-- Contact Support -->
    <SupportSection
      title="Need Help?"
      description="Our support team is here to help you make the most of your GSBOR membership"
      variant="gray"
      :buttons="[
        { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
      ]"
    />
  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: "Current Members - Greater Springfield Board of Realtors",
  description:
    "Access member resources, tools, and support services including Supra key management, forms, political advocacy, and more.",
  ogTitle: "Current Members - GSBOR",
  ogDescription:
    "Comprehensive member resources and services for GSBOR members.",
  ogImage: "/images/index_GSBOR-Logo_2.jpg",
  twitterCard: "summary_large_image",
});
</script>
