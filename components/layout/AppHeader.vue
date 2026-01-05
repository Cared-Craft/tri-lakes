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

// Navigation items - simplified to core pages only
const navItems = [
  {
    name: "Home",
    path: "/",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    name: "Consumers",
    path: "/consumers",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Affiliates",
    path: "/find-an-affiliate",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Members",
    path: "/new-members",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Advocacy",
    path: "/political-advocacy",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    name: "About Us",
    path: "/about-us",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
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
                src="/images/logos/tri-lakes-logo.png"
                alt="Tri-Lakes Board of Realtors Logo"
                class="w-auto h-16 transition-all duration-300 ease-in-out"
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
                  v-if="item.path === '/'"
                  :to="item.path"
                  class="px-4 py-5 text-sm text-gray-800 hover:text-primary-700 flex items-center transition-colors duration-200 border-b-2 border-transparent hover:border-primary-600 mx-1"
                >
                  {{ item.name }}
                </NuxtLink>
                <span
                  v-else
                  class="px-4 py-5 text-sm text-gray-400 flex items-center cursor-not-allowed mx-1"
                  @click.prevent
                >
                  {{ item.name }}
                </span>
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
                      <span
                        class="px-4 py-3 text-sm text-gray-400 flex items-center cursor-not-allowed"
                        @click.prevent
                      >
                        <div>
                          <div>{{ dropdownItem.name }}</div>
                        </div>
                      </span>
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
                          <span
                            v-for="(
                              submenuItem, submenuIndex
                            ) in dropdownItem.submenu"
                            :key="submenuIndex"
                            class="px-4 py-3 text-sm text-gray-400 flex items-center cursor-not-allowed"
                            @click.prevent
                          >
                            <div>
                              <div>
                                {{ submenuItem.name }}
                              </div>
                            </div>
                          </span>
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
                          href="mailto:sherri@tlbor.com"
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
                            <span
                              v-if="link.path !== '/'"
                              class="text-xs text-gray-400 flex items-center cursor-not-allowed"
                              @click.prevent
                            >
                              {{ link.name }}
                            </span>
                            <NuxtLink
                              v-else
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
              <NuxtLink
                v-if="!item.dropdown && !item.isMegaMenu && item.path === '/'"
                :to="item.path"
                class="text-sm text-gray-900"
                @click="isMobileMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
              <span
                v-else-if="!item.dropdown && !item.isMegaMenu"
                class="text-sm text-gray-400 cursor-not-allowed"
                @click.prevent
              >
                {{ item.name }}
              </span>
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
                <span
                  class="py-2 text-sm text-gray-400 flex items-center cursor-not-allowed px-2"
                  @click.prevent
                >
                  <div>{{ dropdownItem.name }}</div>
                </span>
              </template>

              <!-- Nested dropdown item -->
              <div v-else class="py-2">
                <div class="text-sm text-gray-900 mb-2 flex items-center px-2">
                  {{ dropdownItem.name }}
                </div>
                <div class="pl-6 space-y-2">
                  <span
                    v-for="(submenuItem, submenuIndex) in dropdownItem.submenu"
                    :key="submenuIndex"
                    class="text-sm text-gray-400 flex items-center cursor-not-allowed py-1.5 px-2"
                    @click.prevent
                  >
                    <div
                      :class="[item.color, 'w-1.5 h-1.5 rounded-full mr-2 opacity-50']"
                    ></div>
                    {{ submenuItem.name }}
                  </span>
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
                  <span
                    v-if="link.path !== '/'"
                    class="text-sm text-gray-400 flex items-center cursor-not-allowed py-1.5 px-2"
                    @click.prevent
                  >
                    {{ link.name }}
                  </span>
                  <NuxtLink
                    v-else
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
