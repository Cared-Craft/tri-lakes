<script setup lang="ts">
import StepByStepGuide from "~/components/ui/StepByStepGuide.vue";
import ServiceCard from "~/components/ui/ServiceCard.vue";
import Button from "~/components/ui/Button.vue";

// SEO metadata
useHead({
  title: "New Members | Greater Springfield Board of REALTORS®",
  meta: [
    {
      name: "description",
      content:
        "Joining the Greater Springfield Board Of REALTORS® is the first step to real estate brokerage success. Access MLS, technology, training and important legislative updates.",
    },
  ],
});

// Membership steps from the original content
const membershipSteps = [
  {
    number: "01",
    title: "Fill out the Application",
    description:
      "Download and fill out a new member application or complete it online.",
    details:
      "Get started by completing our comprehensive membership application. You can download the PDF form or use our convenient online application system.",
    icon: "i-lucide-file-text",
    ctaText: "Start Application",
    ctaLink: "/new-members/become-a-member",
  },
  {
    number: "02",
    title: "Submit Documentation",
    description:
      "Provide required documents including your real estate license and driver's license.",
    details:
      "Upload or submit your Missouri Real Estate Commission license, driver's license, and any required supporting documents through our online system.",
    icon: "i-lucide-file-check",
    ctaText: "Learn More",
    ctaLink: "/new-members/become-a-member",
  },
  {
    number: "03",
    title: "Payment and Processing",
    description:
      "Complete your membership with payment of applicable fees using our online dues calculator.",
    details:
      "Calculate your membership dues online and complete payment. Our membership team will process your application and contact you with next steps.",
    icon: "i-lucide-credit-card",
    ctaText: "Calculate Dues",
    ctaLink: "/new-members/become-a-member#dues-calculator",
  },
  {
    number: "04",
    title: "New Member Orientation",
    description:
      "Learn about GSBOR and the keys to becoming a successful realtor in the Springfield area.",
    details:
      "Complete your onboarding with our comprehensive orientation program. You'll learn about our services, meet key staff members, and get set up with all necessary tools.",
    icon: "i-lucide-graduation-cap",
    ctaText: "Learn More",
    ctaLink: "/new-members/benefits-of-membership",
  },
];

// Member benefits from the original content
const memberBenefits = [
  {
    title: "Become A Member",
    description: "Start your membership application process",
    icon: "i-lucide-user-plus",
    link: "/new-members/become-a-member",
    variant: "large" as const,
    featured: true,
  },
  {
    title: "Benefits Of Membership",
    description: "Learn more about GSBOR membership benefits",
    icon: "i-lucide-star",
    link: "/new-members/benefits-of-membership",
    variant: "large" as const,
  },
  {
    title: "Dues Calculator",
    description: "Calculate your membership dues",
    icon: "i-lucide-calculator",
    link: "/new-members/become-a-member#dues-calculator",
    variant: "large" as const,
  },
];

// Additional resources from the original links
const additionalResources = [
  {
    title: "Member FAQ",
    description: "Frequently asked questions about membership",
    icon: "i-lucide-help-circle",
    link: "/member-faq",
    variant: "medium" as const,
  },
  {
    title: "Supra®",
    description: "Electronic key system access",
    icon: "i-lucide-key",
    link: "/supra",
    variant: "medium" as const,
  },
  {
    title: "REALTOR® Education",
    description: "Continuing education and training",
    icon: "i-lucide-graduation-cap",
    link: "/education/realtor-education",
    variant: "medium" as const,
  },
  {
    title: "Market Statistics",
    description: "Local market data and trends",
    icon: "i-lucide-trending-up",
    link: "/market-statistics",
    variant: "medium" as const,
  },
];
</script>

<template>
  <div class="new-members-page">
    <!-- Compact Header Section -->
    <HeroSection
      title="New Members"
      description="Joining the Greater Springfield Board Of REALTORS® is the first step to real estate brokerage success. Your local GSBOR membership provides access to industry trend information, local statistics, MLS, technology, training and important legislative updates, in addition to membership in the Missouri Association of REALTORS® (MR) and the National Association of REALTORS® (NAR)."
      variant="compact"
      :show-floating-card="true"
      :floating-card-content="{
        icon: 'i-lucide-users',
        label: 'Join Our Community',
        title: '1,200+ Active Members',
      }"
    >
      <template #visual>
        <div
          class="relative z-20 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
            alt="Real Estate Professionals"
            class="w-full h-[320px] object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0f2a3f]/40 to-transparent"
          ></div>

          <!-- Floating membership card -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
              <div class="flex items-center space-x-2 mb-2">
                <Icon name="i-lucide-users" class="w-5 h-5 text-primary-600" />
                <span class="text-sm text-primary-700">Join Our Community</span>
              </div>
              <h3 class="text-lg text-primary-900">1,200+ Active Members</h3>
            </div>
          </div>
        </div>
      </template>
    </HeroSection>

    <!-- How to Become a Member Section -->
    <StepByStepGuide
      title="How to Become a Member"
      subtitle="Join GSBOR in four simple steps and start accessing the tools and resources that will help you succeed in real estate."
      :steps="membershipSteps"
      variant="default"
      background-color="bg-primary-600"
      :show-icons="false"
      class="-mt-0"
    />

    <!-- Member Benefits Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-light text-primary-900 mb-6">
            Member Benefits
          </h2>
          <p class="text-xl text-primary-700 max-w-3xl mx-auto">
            Have a question about the GSBOR application process? Fill out a
            contact form to get in touch with our staff today.
          </p>
        </div>

        <!-- Main Services Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            v-for="service in memberBenefits"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :link="service.link"
            :variant="service.variant"
            :featured="service.featured"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.new-members-page {
  /* Page-specific styles */
}

.pattern-grid {
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(29, 53, 87, 0.15) 1px,
    transparent 0
  );
  background-size: 20px 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 1rem;
  }
}
</style>
