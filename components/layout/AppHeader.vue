<script setup lang="ts">
// Scroll detection for sticky header
const isScrolled = ref(false);

// Handle scroll detection
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Add scroll listener on mount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove scroll listener on unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Navigation items with dropdown menus
const navItems = [
  {
    name: "Directory",
    path: "/directory",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "New Members",
    path: "#",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    dropdown: [
      {
        name: "Become a Member",
        path: "/new-members/become-a-member/",
      },
      {
        name: "Benefits of Membership",
        path: "/new-members/benefits-of-membership/",
      },
      {
        name: "Dues Calculator",
        path: "/new-members/become-a-member/#dues-calculator",
      },
      {
        name: "Supra",
        path: "/supra/",
      },
      {
        name: "GSBOR News",
        path: "/news-events",
      },
    ],
  },
  {
    name: "Current Members",
    path: "/current-members",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    dropdown: [
      {
        name: "Member Dashboard",
        path: "https://dash.gsbor.com/dashboard",
        external: true,
      },
      {
        name: "Member FAQ",
        path: "/member-faq/",
      },
      {
        name: "Supra®",
        path: "/supra/",
      },
      {
        name: "Forms & Documents",
        path: "/forms/#member-forms",
      },
      {
        name: "Political Advocacy",
        path: "/political-advocacy/",
      },
      {
        name: "R Care Fund",
        path: "/r-care-fund/",
      },
      {
        name: "GSBOR Help Hub",
        path: "http://support.gsbor.com",
        external: true,
      },
    ],
  },
  {
    name: "Education",
    path: "/edu",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    dropdown: [
      {
        name: "LEDR Designation",
        path: "/education/ledr/",
      },
      {
        name: "REALTOR® Education",
        path: "/education/realtor-education/",
      },
      {
        name: "Courses",
        path: "/education/realtor-education/courses/",
      },
      {
        name: "REALTOR® Safety Information",
        path: "/education/realtor-safety-information/",
      },
      {
        name: "Homeowners / Buyers & Sellers",
        path: "/buyers-and-sellers/",
      },
    ],
  },
  {
    name: "News & Events",
    path: "/news-events",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    dropdown: [
      {
        name: "Events Calendar",
        path: "/events-calendar/",
      },
      {
        name: "Market Statistics",
        path: "/market-statistics/",
      },
    ],
  },
  {
    name: "About GSBOR",
    path: "/about-gsbor/",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    dropdown: [
      {
        name: "Boards of Directors",
        path: "/about-gsbor/meet-our-board/",
      },
      {
        name: "Leadership Academy",
        path: "/about-gsbor/leadership-academy/",
      },
      {
        name: "Awards",
        path: "/about-gsbor/awards/",
      },
      { name: "Staff", path: "/about-gsbor/staff/" },
      {
        name: "Realtor Directory",
        path: "/directory",
      },
      {
        name: "Affiliate Directory",
        path: "/find-an-affiliate/",
      },
    ],
  },
  {
    name: "Quick Links",
    path: "#",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    isMegaMenu: true,
    megaMenuColumns: [
      {
        title: "MLS",
        links: [
          { name: "Tech Helpline", path: "https://www.techhelpline.com/" },
          { name: "Flex Help", path: "https://help.flexmls.com/" },
          { name: "FlexMLS Login", path: "https://somo.flexmls.com/ticket" },
          { name: "Flexmls Status", path: "https://fbs.statuspage.io/" },
          {
            name: "Supra Help",
            path: "https://www.supraekey.com/CustomerSupport/Pages/CustomerSupport.aspx",
          },
          {
            name: "Supra Log In",
            path: "https://supraweb.suprakim.com/KimWeb/Showing.mvc/Showing",
          },
          {
            name: "BrokerBay",
            path: "https://www.brokerbay.com/mls/gsbor-brokerbay",
          },
          { name: "GSBOR Help Hub", path: "http://support.gsbor.com" },
        ],
      },
      {
        title: "License & Education",
        links: [
          {
            name: "Missouri Real Estate Commission (MREC)",
            path: "https://pr.mo.gov/realestate-licensee-search.asp",
          },
          {
            name: "CE Shop",
            path: "https://gsbor.theceshop.com/online-education/missouri/real-estate/broker-and-sales-license/continuing-education/courses.html",
          },
          {
            name: "Real Estate Learning Library",
            path: "https://realestatelearninglibrary.com/",
          },
          {
            name: "Code of Ethics",
            path: "https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/code-of-ethics-training",
          },
        ],
      },
      {
        title: "Missouri Realtors®",
        links: [
          {
            name: "Missouri REALTORS® (MR)",
            path: "https://www.missourirealtor.org/home",
          },
          {
            name: "MR Forms",
            path: "https://www.missourirealtor.org/risk-management/forms-index",
          },
          {
            name: "MR Political Advocacy",
            path: "https://www.missourirealtor.org/advocacy",
          },
          {
            name: "MR The Landing",
            path: "https://thelanding.missourirealtor.org/home",
          },
          {
            name: "Professional Standards",
            path: "https://www.missourirealtor.org/risk-management/professional-standards",
          },
          { name: "Tech Helpline", path: "https://www.techhelpline.com/" },
        ],
      },
      {
        title: "National Association of Realtors® (NAR)",
        links: [
          { name: "NAR Home", path: "https://www.nar.realtor/" },
          {
            name: "NAR Political Advocacy",
            path: "https://www.nar.realtor/political-advocacy",
          },
          { name: "NAR The Hub", path: "https://thehub.realtor/home" },
          {
            name: "REALTORS® Property Resource (RPR)",
            path: "https://www.narrpr.com/",
          },
          {
            name: "Women's Council of REALTORS® (WCR)",
            path: "https://www.wcr.org/",
          },
        ],
      },
    ],
  },
];

// Mobile menu state
const isMobileMenuOpen = ref(false);
const activeDropdown = ref<number | null>(null);
const activeMegaMenu = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    activeDropdown.value = null;
  }
};

// Toggle dropdown menu
const toggleDropdown = (index: number) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = index;
  }
};

// Toggle mega menu
const toggleMegaMenu = () => {
  activeMegaMenu.value = !activeMegaMenu.value;
};
</script>

<template>
  <header
    class="w-full z-50 transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg"
  >
    <!-- Primary Navigation -->
    <div
      class="border-b border-gray-100 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md"
    >
      <div
        class="container mx-auto px-6 transition-all duration-300 ease-in-out py-2"
      >
        <div class="flex justify-between items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="block">
              <img
                src="/images/GSBOR-Horz_Full-Color-3.png"
                alt="GSBOR Logo"
                class="w-auto h-10 transition-all duration-300 ease-in-out"
              />
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-1">
            <div
              v-for="(item, index) in navItems"
              :key="index"
              class="relative group"
            >
              <!-- With this: -->
              <template v-if="item.isMegaMenu">
                <button
                  class="px-4 py-5 text-sm text-gray-800 hover:text-primary-700 flex items-center transition-colors duration-200 border-b-2 border-transparent hover:border-primary-600 mx-1"
                  @click.prevent="toggleMegaMenu()"
                  type="button"
                >
                  {{ item.name }}
                </button>
              </template>
              <template v-else-if="item.external">
                <a
                  :href="item.path"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-5 text-sm text-gray-800 hover:text-primary-700 flex items-center transition-colors duration-200 border-b-2 border-transparent hover:border-primary-600 mx-1"
                >
                  {{ item.name }}
                </a>
              </template>
              <template v-else-if="item.dropdown">
                <button
                  class="px-4 py-5 text-sm text-gray-800 hover:text-primary-700 flex items-center transition-colors duration-200 border-b-2 border-transparent hover:border-primary-600 mx-1 cursor-pointer"
                  type="button"
                >
                  {{ item.name }}
                </button>
              </template>
              <template v-else>
                <NuxtLink
                  :to="item.path"
                  class="px-4 py-5 text-sm text-gray-800 hover:text-primary-700 flex items-center transition-colors duration-200 border-b-2 border-transparent hover:border-primary-600 mx-1"
                >
                  {{ item.name }}
                </NuxtLink>
              </template>

              <!-- Standard Dropdown Menu -->
              <div
                v-if="item.dropdown && !item.isMegaMenu"
                class="absolute left-0 mt-1 w-72 bg-white shadow-xl rounded-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
              >
                <div class="py-2">
                  <template
                    v-for="(dropdownItem, dropdownIndex) in item.dropdown"
                    :key="dropdownIndex"
                  >
                    <!-- Standard dropdown item -->
                    <template v-if="!dropdownItem.submenu">
                      <NuxtLink
                        v-if="!dropdownItem.external"
                        :to="dropdownItem.path"
                        class="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center group/item transition-all duration-200"
                      >
                        <div>
                          <div>{{ dropdownItem.name }}</div>
                        </div>
                      </NuxtLink>
                      <a
                        v-else
                        :href="dropdownItem.path"
                        :target="'_blank'"
                        :rel="'noopener noreferrer'"
                        class="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center group/item transition-all duration-200"
                      >
                        <div>
                          <div>{{ dropdownItem.name }}</div>
                        </div>
                      </a>
                    </template>

                    <!-- Nested dropdown item -->
                    <div v-else class="relative group/nested">
                      <div
                        class="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between cursor-pointer group/item transition-all duration-200"
                      >
                        <div class="flex items-center">
                          <div>
                            <div>
                              {{ dropdownItem.name }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Nested submenu -->
                      <div
                        class="absolute left-full top-0 w-72 bg-white shadow-xl rounded-lg overflow-hidden z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 border border-gray-100"
                      >
                        <div class="py-2">
                          <NuxtLink
                            v-for="(
                              submenuItem, submenuIndex
                            ) in dropdownItem.submenu"
                            :key="submenuIndex"
                            :to="submenuItem.path"
                            class="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center group/subitem transition-all duration-200"
                          >
                            <div>
                              <div>
                                {{ submenuItem.name }}
                              </div>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>

              <!-- Mega Menu -->
              <div
                v-if="item.isMegaMenu"
                class="absolute right-0 mt-1 bg-white shadow-xl rounded-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100"
                style="width: 800px; max-width: 95vw; right: 0; left: auto"
              >
                <div class="flex flex-col md:flex-row">
                  <!-- Mega Menu Sidebar -->
                  <div
                    class="w-full md:w-56 bg-gradient-to-b from-rose-50 to-rose-100 p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div class="flex items-center mb-3">
                        <div
                          class="w-6 h-6 rounded-full bg-rose-600 mr-2"
                        ></div>
                        <h3 class="text-base text-rose-800">Quick Links</h3>
                      </div>
                      <p class="text-xs text-rose-700 mb-4">
                        Access all your essential resources in one place
                      </p>
                      <div
                        class="bg-white p-3 rounded-lg shadow-sm border border-rose-200"
                      >
                        <h4 class="text-xs text-rose-800 mb-1">Need Help?</h4>
                        <p class="text-xs text-gray-600 mb-2">
                          Contact our support team for assistance.
                        </p>
                        <a
                          href="http://support.gsbor.com"
                          class="inline-flex items-center text-xs text-rose-600 hover:text-rose-800"
                        >
                          Visit Help Center
                        </a>
                      </div>
                    </div>
                    <div class="mt-auto pt-3 hidden md:block">
                      <a
                        href="#"
                        class="text-xs text-rose-700 hover:text-rose-900 flex items-center"
                      >
                        View all resources
                      </a>
                    </div>
                  </div>

                  <!-- Mega Menu Content -->
                  <div class="flex-1 p-4 max-h-[70vh] overflow-y-auto">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div
                        v-for="(column, columnIndex) in item.megaMenuColumns"
                        :key="columnIndex"
                        class="space-y-3"
                      >
                        <h3
                          class="text-xs text-gray-900 uppercase tracking-wider"
                        >
                          {{ column.title }}
                        </h3>
                        <ul class="space-y-2">
                          <li
                            v-for="(link, linkIndex) in column.links"
                            :key="linkIndex"
                          >
                            <NuxtLink
                              :to="link.path"
                              class="text-xs text-gray-600 hover:text-primary-900 flex items-center group/link"
                            >
                              {{ link.name }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden" @click="toggleMobileMenu">
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <div class="w-5 h-0.5 bg-primary-900 mb-1"></div>
              <div class="w-5 h-0.5 bg-primary-900 mb-1"></div>
              <div class="w-5 h-0.5 bg-primary-900"></div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Primary Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden bg-white py-4 px-6 absolute w-full shadow-lg z-50 max-h-[80vh] overflow-y-auto"
    >
      <div class="flex flex-col space-y-1">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="border-b border-gray-100 last:border-b-0"
        >
          <div
            class="flex items-center justify-between py-3 cursor-pointer"
            @click="item.isMegaMenu ? toggleMegaMenu() : toggleDropdown(index)"
          >
            <div class="flex items-center">
              <component
                v-if="!item.dropdown && !item.isMegaMenu"
                :is="item.external ? 'a' : 'NuxtLink'"
                :to="!item.external ? item.path : undefined"
                :href="item.external ? item.path : undefined"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="text-sm text-gray-900"
                @click="isMobileMenuOpen = false"
              >
                {{ item.name }}
              </component>
              <span v-else class="text-sm text-gray-900">{{ item.name }}</span>
            </div>
          </div>

          <!-- Standard Dropdown Menu (Mobile) -->
          <div
            v-if="item.dropdown && !item.isMegaMenu && activeDropdown === index"
            class="pl-4 pb-3 bg-gray-50 rounded-lg my-2 p-3"
          >
            <template
              v-for="(dropdownItem, dropdownIndex) in item.dropdown"
              :key="dropdownIndex"
            >
              <!-- Standard dropdown item -->
              <template v-if="!dropdownItem.submenu">
                <NuxtLink
                  v-if="!dropdownItem.external"
                  :to="dropdownItem.path"
                  class="py-2 text-sm text-gray-700 flex items-center hover:bg-white rounded-md px-2 transition-colors duration-200"
                  @click="isMobileMenuOpen = false"
                >
                  <div>{{ dropdownItem.name }}</div>
                </NuxtLink>
                <a
                  v-else
                  :href="dropdownItem.path"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="py-2 text-sm text-gray-700 flex items-center hover:bg-white rounded-md px-2 transition-colors duration-200"
                  @click="isMobileMenuOpen = false"
                >
                  <div>{{ dropdownItem.name }}</div>
                </a>
              </template>

              <!-- Nested dropdown item -->
              <div v-else class="py-2">
                <div class="text-sm text-gray-900 mb-2 flex items-center px-2">
                  {{ dropdownItem.name }}
                </div>
                <div class="pl-6 space-y-2">
                  <NuxtLink
                    v-for="(submenuItem, submenuIndex) in dropdownItem.submenu"
                    :key="submenuIndex"
                    :to="submenuItem.path"
                    class="text-sm text-gray-700 flex items-center hover:bg-white rounded-md py-1.5 px-2 transition-colors duration-200"
                    @click="isMobileMenuOpen = false"
                  >
                    <div
                      :class="[item.color, 'w-1.5 h-1.5 rounded-full mr-2']"
                    ></div>
                    {{ submenuItem.name }}
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>

          <!-- Mega Menu (Mobile) -->
          <div
            v-if="item.isMegaMenu && activeMegaMenu"
            class="pl-4 pb-3 bg-gray-50 rounded-lg my-2 p-3"
          >
            <div class="mb-3 pb-2 border-b border-gray-200 flex items-center">
              <div class="w-4 h-4 rounded-full bg-rose-600 mr-2"></div>
              <div>
                <div class="text-sm text-gray-900">Quick Links</div>
                <div class="text-xs text-gray-500">
                  Access essential resources
                </div>
              </div>
            </div>
            <div
              v-for="(column, columnIndex) in item.megaMenuColumns"
              :key="columnIndex"
              class="mb-4"
            >
              <div class="text-sm text-gray-900 mb-2">
                {{ column.title }}
              </div>
              <ul class="pl-4 space-y-2">
                <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                  <NuxtLink
                    :to="link.path"
                    class="text-sm text-gray-700 flex items-center hover:bg-white rounded-md py-1.5 px-2 transition-colors duration-200"
                    @click="isMobileMenuOpen = false"
                  >
                    {{ link.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-hover-effect {
  position: relative;
}

.nav-hover-effect::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-out;
}

.nav-hover-effect:hover::after {
  transform: scaleX(1);
}
</style>
