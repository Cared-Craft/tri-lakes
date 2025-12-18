<script setup lang="ts">
import AccordionComponent from "~/components/ui/AccordionComponent.vue";

// SEO metadata based on the JSON content
useHead({
  title: "Education - Greater Springfield Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Discover GSBOR's comprehensive education programs including C2EX, Code of Ethics training, continuing education, certifications, and designations. Excellence through education for REALTOR® professionals.",
    },
  ],
});

// Education programs data extracted from the JSON content
const educationPrograms = [
  {
    title: "Continuing Education",
    description:
      "To assist members in the requirement for 12 classroom hours of continuing education every two years, GSBOR strives to bring in high-level and engaging speakers and trainers to provide current and topical training.",
    icon: "i-lucide-graduation-cap",
    cta: {
      to: "/education/realtor-education",
      text: "View CE Information",
      variant: "link",
      color: "primary",
    },
  },
  {
    title: "Code of Ethics",
    description:
      "The National Association of REALTORS® requires members to complete Code of Ethics training every three years. In addition to the online solution provided by NAR, GSBOR provides classroom education to ensure members are up to date on this requirement, and the latest changes in the Code from period to period, usually with continuing education credit.",
    icon: "i-lucide-scale",
    cta: {
      to: "https://www.nar.realtor/about-nar/policies/code-of-ethics-and-professional-standards",
      text: "NAR Code of Ethics",
      variant: "link",
      color: "primary",
      icon: "i-lucide-external-link",
    },
  },
  {
    title: "Designations",
    description:
      "Continual growth and development is a critical part of being a REALTOR®, and adding specialized designations to one's name recognizes that growth. GSBOR also offers a diverse line-up of designation-related class sessions to facilitate those designations.",
    icon: "i-lucide-badge",
    cta: {
      to: "/contact-us",
      text: "Explore Designations",
      variant: "link",
      color: "primary",
    },
  },
  {
    title: "GSBOR Certification Program",
    description:
      "As of 2021, GSBOR now offers its own specialized certifications, allowing members to promote their knowledge and experience in areas such as Fair Housing, New Construction, and beyond.",
    icon: "i-lucide-check-circle",
    cta: {
      to: "/contact-us",
      text: "Learn About Certifications",
      variant: "link",
      color: "primary",
    },
  },
  {
    title: "C2EX",
    description: `GSBOR supports the National Association of REALTORS® educational program "Commitment to Excellence" with peer-to-peer advice, counsel, and mentoring as students complete this series of action-oriented training.`,
    icon: "i-lucide-award",
    cta: {
      to: "https://www.c2ex.realtor/",
      text: "Learn More about C2EX",
      variant: "link",
      color: "primary",
      icon: "i-lucide-external-link",
    },
  },
  {
    title: "Fairhaven",
    description:
      "Fairhaven 2.0 is a free, dynamic online simulation offered by NAR that helps real estate professionals tackle fair housing challenges head-on. It also fulfills the NAR fair housing training requirement.",
    icon: "i-lucide-shield",
    cta: {
      to: "https://www.nar.realtor/fair-housing/fairhaven",
      text: "Learn More about Fairhaven",
      variant: "link",
      color: "primary",
      icon: "i-lucide-external-link",
    },
  },
];

const resourcesData = {
  title: "Resources",
  description:
    "From money-wise ideas for home improvement projects to insider secrets for homeownership, explore our comprehensive resources.",
};

const resourcesAccordionItems = [
  {
    id: "buyers-sellers",
    title: "Buyers and Sellers",
    defaultOpen: true,
    content: `
   <ul class="space-y-3">
    <li><a href="https://multiplelistingservice.org/how-it-works/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     How the MLS Works
    </a></li>
    <li><a href="https://realestatecommissionfacts.com/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     Real Estate Compensation Facts
    </a></li>
    <li><a href="https://www.nar.realtor/competition-in-real-estate/fostering-competition" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     Competition in Real Estate
    </a></li>
    <li><a href="http://www.realtor.com/advice/10-step-guide-to-buying-a-house/?iid=rdc_advice_category_editors-picks" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     10-Step Guide to Buying a House
    </a></li>
    <li><a href="https://www.realtor.com/mortgage/tools/affordability-calculator/#/iid=news_advice_articles" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     Know How Much You Can Afford
    </a></li>
    <li><a href="https://www.realtor.com/advice/buy/buying-a-house-while-selling-a-house/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     How to Buy and Sell a Home at the Same Time
    </a></li>
    <li><a href="https://www.realtor.com/foreveryone/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     All About Fair Housing
    </a></li>
    <li><a href="https://www.realtor.com/advice/sell/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     More seller resources
    </a></li>
    <li><a href="https://www.realtor.com/advice/buy/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
     More buyer resources
    </a></li>
   </ul>
  `,
  },
  {
    id: "find-realtor",
    title: "Find a REALTOR®",
    content: `
   <div class="space-y-4">
    <ul class="space-y-3">
     <li><a href="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx?selmenid=men4" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
      Find a REALTOR®
     </a></li>
     <li><a href="https://www.realtor.com/advice/sell/questions-to-ask-real-estate-agents-when-selling/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
      How to Choose the Right REALTOR®
     </a></li>
     <li><a href="https://www.realtor.com/advice/buy/types-real-estate-agents-you-meet/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
      5 Types of REALTORS®: Which Type is Right for You?
     </a></li>
    </ul>
   </div>
  `,
  },
  {
    id: "home-ownership",
    title: "Home Ownership",
    content: `
   <div class="space-y-4">
    <p class="text-gray-700">
     From money-wise ideas for home improvement projects to insider secrets for homeownership, HouseLogic has you covered.
    </p>
    <p>
     <a href="https://www.houselogic.com/" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-800 underline hover:no-underline transition-all">
      Read More
     </a>
    </p>
   </div>
  `,
  },
];
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <HeroSection
        title="Education Programs"
        subtitle="Excellence Through Education"
        description="Discover comprehensive educational opportunities designed to enhance your professional development and expertise as a REALTOR®. From continuing education to specialized certifications, GSBOR is committed to your success."
        variant="default"
      />

      <!-- Education Programs Feature Cards -->
      <FeatureCardsSection
        title="Education Programs"
        subtitle="Comprehensive training and development opportunities for REALTOR® professionals"
        :features="educationPrograms"
        theme="light"
        :columns="3"
        :show-pattern="true"
        :show-decorative="true"
      />

      <!-- Code of Ethics External Links Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl text-gray-900 mb-4">
                Professional Standards Resources
              </h2>
              <p class="text-gray-700 text-lg">
                Access important professional standards and ethical guidelines
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div
                class="bg-white rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow"
              >
                <h3 class="text-xl text-gray-900 mb-4">
                  NAR Code of Ethics & Professional Standards
                </h3>
                <p class="text-gray-700 mb-6">
                  Review the National Association of REALTORS® Code of Ethics
                  and Professional Standards requirements.
                </p>
                <Button
                  to="https://www.nar.realtor/about-nar/policies/code-of-ethics-and-professional-standards"
                  variant="primary"
                  color="primary"
                  external
                  class="inline-flex items-center"
                >
                  <Icon name="i-lucide-external-link" class="w-4 h-4 mr-2" />
                  View NAR Standards
                </Button>
              </div>

              <div
                class="bg-white rounded-lg p-8 shadow-sm border hover:shadow-md transition-shadow"
              >
                <h3 class="text-xl text-gray-900 mb-4">
                  Missouri REALTORS Professional Standards
                </h3>
                <p class="text-gray-700 mb-6">
                  Access Missouri-specific professional standards and
                  requirements for real estate professionals.
                </p>
                <Button
                  to="https://www.missourirealtor.org/risk-management/professional-standards"
                  variant="primary"
                  color="primary"
                  external
                  class="inline-flex items-center"
                >
                  <Icon name="i-lucide-external-link" class="w-4 h-4 mr-2" />
                  View MO Standards
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact for More Information Section -->
      <ContentSection
        title="Learn More About REALTOR® Education"
        content="If you need more information about continuing education courses, hours or policies, email support@gsbor.com for assistance."
        theme="light"
        layout="default"
        card-title="Education Support"
        card-content="Our education team is here to help you navigate your professional development journey and answer any questions about our programs."
        :cta-link="{
          to: '/contact-us',
          text: 'Contact Us for Assistance',
        }"
      />
    </main>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
