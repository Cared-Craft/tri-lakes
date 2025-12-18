<template>
  <!-- Hero Section -->
  <HeroSection
    :title="pageData.title"
    :description="pageData.description"
    variant="compact"
  />

  <!-- REALTOR Directory Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-light text-primary-900 mb-6">
          REALTOR® Directory
        </h2>
        <p class="text-lg text-primary-700 mb-8">
          Find a REALTOR® to help you buy or sell your home. Search our
          directory for trusted professionals in your area.
        </p>
        <Button
          to="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx?selmenid=men4"
          color="primary"
          class="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
          external
        >
          View REALTOR® Directory
          <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  </section>

  <!-- External Resource Links Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-light text-primary-900 mb-4">
            Home Buying & Selling Resources
          </h2>
          <p class="text-lg text-primary-700">
            Explore trusted resources for buyers and sellers. All links open in
            a new tab.
          </p>
        </div>
        <div class="grid gap-6">
          <div class="bg-white rounded-lg shadow p-6">
            <ul class="space-y-3">
              <li>
                <a
                  href="https://multiplelistingservice.org/how-it-works/"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  How the MLS Works
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://realestatecommissionfacts.com/"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  Real Estate Compensation Facts
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nar.realtor/competition-in-real-estate/fostering-competition"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  Competition in Real Estate
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.realtor.com/advice/10-step-guide-to-buying-a-house/?iid=rdc_advice_category_editors-picks"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  10-Step Guide to Buying a House
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.realtor.com/mortgage/tools/affordability-calculator/#/iid=news_advice_articles"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  Know How Much You Can Afford
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.realtor.com/advice/buy/buying-a-house-while-selling-a-house/"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  How to Buy and Sell a Home at the Same Time
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.realtor.com/foreveryone/"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  All About Fair Housing
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.realtor.com/advice/sell/"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  More seller resources
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.realtor.com/advice/buy/"
                  target="_blank"
                  rel="noopener"
                  class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all flex items-center"
                >
                  More buyer resources
                  <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Affiliates Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-light text-primary-900 mb-6">
          {{ affiliatesData.title }}
        </h2>
        <p class="text-lg text-primary-700 mb-8">
          {{ affiliatesData.description }}
        </p>
        <Button
          :to="affiliatesData.ctaLink"
          color="primary"
          class="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
          external
        >
          {{ affiliatesData.ctaText }}
          <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  </section>

  <!-- Contact CTA Banner -->
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto">
        <div class="bg-gray-100 rounded-xl p-6 text-center">
          <h3 class="text-xl text-gray-900 mb-4">
            While GSBOR cannot provide specific advice on buying or selling a home or recommend individual REALTORS®, we're here to help you get started.
          </h3>
          <p class="text-gray-700 mb-6 text-sm">
            Use our REALTOR® directory above to connect with a licensed professional in our area. For questions about GSBOR or our services, please send us a message.
          </p>
          <Button
            to="/contact-us/"
            color="primary"
            variant="solid"
            class="px-6 py-2 rounded-lg cursor-pointer"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Web Accessibility Statement -->
  <section class="py-8 bg-gray-100">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h4 class="text-lg text-primary-900 mb-3">
          <NuxtLink
            to="/web-accessibility"
            class="text-primary-600 hover:text-primary-800"
          >
            Web Accessibility
          </NuxtLink>
        </h4>
        <div class="text-sm text-primary-700 space-y-2">
          <p>
            {{ accessibilityData.commitment }}
          </p>
          <p>
            {{ accessibilityData.contact }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSection from "~/components/ui/HeroSection.vue";
import Button from "~/components/ui/Button.vue";

// Page metadata
definePageMeta({
  title: "Buyers and Sellers - Greater Springfield Board of Realtors",
  description:
    "Resources for home buyers and sellers, affiliate directory, and expert guidance for your real estate needs.",
});

// Page data derived from JSON content
const pageData = {
  title: "Home Buyers and Sellers",
  description:
    "Own a home? Looking to buy a home? Visit the links below to the National Association of REALTORS® and other great resources to learn more about selling, buying, and owning a home.",
};

const affiliatesData = {
  title: "Meet Our Affiliates",
  description:
    "Check out some of our excellent affiliate members with a searchable affiliate directory.",
  ctaText: "View Affiliate Directory",
  ctaLink: "https://gsbor.com/find-an-affiliate/",
};

const accessibilityData = {
  commitment:
    "Greater Springfield Board of Realtors®, Inc. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.",
  contact:
    "If you have difficulty accessing content, have difficulty viewing a file on the website, or notice any accessibility problems, please contact us to specify the nature of the accessibility issue and any assistive technology you use. We will strive to provide the content you need in the format you require.",
};
</script>
