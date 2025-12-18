<script setup lang="ts">
// Footer navigation categories - matches header structure
const footerSections = [
  {
    title: "New Members",
    links: [
      { name: "Become A Member", path: "/new-members/become-a-member/" },
      {
        name: "Benefits of Membership",
        path: "/new-members/benefits-of-membership/",
      },
      { name: "Dues Calculator", path: "/new-members/become-a-member/#dues-calculator" },
      { name: "Supra", path: "/supra/" },
    ],
  },
  {
    title: "Current Members",
    links: [
      { name: "Member Portal", path: "https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2f", external: true },
      { name: "Member FAQ", path: "/member-faq/" },
      { name: "Supra®", path: "/supra/" },
      { name: "Forms & Documents", path: "/forms/#member-forms" },
      { name: "Political Advocacy", path: "/political-advocacy/" },
      { name: "R Care Fund", path: "/r-care-fund/" },
      { name: "GSBOR Help Hub", path: "http://support.gsbor.com", external: true },
    ],
  },
  {
    title: "Education",
    links: [
      { name: "REALTOR® Education", path: "/education/realtor-education/" },
      { name: "Courses", path: "/education/realtor-education/courses/" },
      { name: "REALTOR® Safety Information", path: "/education/realtor-safety-information/" },
      { name: "Homeowners / Buyers & Sellers", path: "/buyers-and-sellers/" },
    ],
  },
  {
    title: "About GSBOR",
    links: [
      { name: "Boards of Directors", path: "/about-gsbor/meet-our-board/" },
      { name: "Leadership Academy", path: "/about-gsbor/leadership-academy/" },
      { name: "Awards", path: "/about-gsbor/awards/" },
      { name: "Staff", path: "/about-gsbor/staff/" },
      { name: "Realtor Directory", path: "/directory" },
      { name: "Affiliate Directory", path: "/find-an-affiliate/" },
    ],
  },
  {
    title: "News & Events",
    links: [
      { name: "Events Calendar", path: "/events-calendar/" },
      { name: "Market Statistics", path: "/market-statistics/" },
      { name: "GSBOR News", path: "/news-events" },
    ],
  },
];

// Social media links
const socialLinks = [
  {
    icon: "i-fa-facebook-f",
    url: "https://www.facebook.com/gsbor/",
    label: "Facebook",
  },
  {
    icon: "i-fa-instagram",
    url: "https://www.instagram.com/gsbornews/",
    label: "Instagram",
  },
  {
    icon: "i-fa-youtube",
    url: "https://www.youtube.com/channel/UCU8c1r6BK9gwc6bmSv_lDNQ",
    label: "YouTube",
  },
];

// Legal links
const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Use", path: "/terms-of-use" },
];

// Contact information
const contactInfo = {
  phone: "(417) 883-1226",
  address: "1310 E Primrose St. Springfield, MO 65804",
};

// Current year for copyright
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#214f75] text-white pt-16 pb-8">
    <div class="container mx-auto px-6 flex flex-col items-center">
      <!-- Logo and Tagline -->
      <div class="w-full flex flex-col items-center mb-8">
        <img
          src="/images/GSBOR-logo-white.png"
          alt="Greater Springfield Board of REALTORS® Logo"
          class="h-16 mb-6"
        />
        <p class="text-white text-center max-w-xl text-base font-light">
          As the voice of Real Estate in Southwest Missouri, the Greater Springfield Board of REALTORS® is the leading advocate for real estate professionals in Greene, Christian, and Webster Counties.
        </p>
      </div>

      <!-- Navigation Links as Columns with Text Links -->
      <div
        class="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-8"
      >
        <div
          v-for="(section, index) in footerSections"
          :key="section.title"
          class="flex-1 min-w-[180px] md:px-4 relative"
        >
          <!-- Vertical divider between columns (not before first) -->
          <div
            v-if="index > 0"
            class="hidden md:block absolute -left-6 top-0 h-full border-l border-white/10"
          ></div>
          <h4
            class="text-xs uppercase tracking-widest mb-4 text-white font-bold text-center md:text-left letter-spacing-wider"
          >
            {{ section.title }}
          </h4>
          <div class="flex flex-col gap-2 items-center md:items-start">
            <component
              :is="link.external ? 'a' : 'NuxtLink'"
              v-for="link in section.links"
              :key="link.name"
              :to="!link.external ? link.path : undefined"
              :href="link.external ? link.path : undefined"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="text-white hover:text-white/80 hover:underline text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              {{ link.name }}
            </component>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="w-full border-t border-white/10 mb-8"></div>

      <!-- Contact and Accessibility Statement in a grid -->
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Contact Column -->
        <div class="flex flex-col justify-between h-full p-4">
          <!-- Contact Information -->
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2 text-white text-sm">
              <Icon name="i-lucide-phone" class="text-lg" />
              <a
                :href="`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`"
                class="hover:text-white/80 transition-colors"
              >
                {{ contactInfo.phone }}
              </a>
            </div>
            <div class="flex items-center gap-2 text-white text-sm">
              <Icon name="i-lucide-map-pin" class="text-lg" />
              <span>{{ contactInfo.address }}</span>
            </div>
          </div>

          <!-- Social Media Links at the bottom of this column -->
          <div class="flex gap-4 justify-center md:justify-start mt-6">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Icon :name="social.icon" class="text-xl" />
            </a>
          </div>

          <!-- Legal links and Copyright -->
          <div class="mt-6 flex flex-col gap-2">
            <div class="text-xs text-white/50">
              &copy; Copyright {{ currentYear }}. Greater Springfield Board of
              Realtors&reg;, Inc.
            </div>
            <div class="flex gap-4">
              <NuxtLink
                v-for="link in legalLinks"
                :key="link.name"
                :to="link.path"
                class="text-xs text-white/50 hover:text-white transition"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Accessibility Statement Column -->
        <div class="flex flex-col justify-between h-full p-4">
          <div>
            <h3 class="text-base flex items-center gap-2 mb-3">
              <Icon
                name="i-lucide-accessibility"
                class="text-white w-4 h-4"
              />
              Accessibility Commitment
            </h3>
            <p class="text-white text-sm mb-3">
              Greater Springfield Board of Realtors®, Inc. is committed to
              ensuring digital accessibility for people with disabilities.
            </p>
            <NuxtLink
              to="/accessibility"
              class="inline-flex items-center text-white/70 hover:text-white text-sm gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded cursor-pointer"
            >
              <span>Learn more about our accessibility commitment</span>
              <Icon name="i-lucide-chevron-right" class="w-3 h-3" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

