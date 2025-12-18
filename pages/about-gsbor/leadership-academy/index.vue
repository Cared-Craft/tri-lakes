<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Leadership Academy"
      subtitle="Through the Leadership Academy, GSBOR members gain practical skills and leadership experience to thrive personally and professionally."
      variant="compact"
      class="bg-gradient-to-r from-primary-800 to-primary-600"
    />

    <!-- Video Section -->
    <section class="bg-gray-50 py-12">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/bOC0VmUIN_I"
              title="Leadership Academy Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-12">
      <!-- Program Description -->
      <section class="mb-20">
        <div class="prose prose-lg max-w-none mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            The GSBOR Leadership Academy develops future leaders through comprehensive training, networking, mentorship, and advanced professional development. Launched in 2018 and modeled after successful programs at Missouri REALTORS® and the National Association of REALTORS®, the Academy equips members with skills they can apply in both business and life while providing insight into leadership at the local, state, and national levels.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Graduates gain the confidence, skills, and connections to make a meaningful impact within the real estate profession and beyond. The program offers an immersive leadership experience designed to inspire growth, foster collaboration, and develop skilled leaders who advance GSBOR and the REALTOR® community.
          </p>
        </div>
      </section>

      <!-- Current Academy Members -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">Current Academy Members</h2>

        <!-- Individual Current Members -->
        <div class="mb-8">
          <h3 class="text-2xl text-gray-900 mb-6">
            2025 Leadership Academy Participants
          </h3>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
          >
            <PersonCard
              v-for="member in academyMembers"
              :key="member.name"
              :name="member.name"
              :show-contact="false"
              :show-photo="false"
              class="bg-white rounded-xl shadow-lg"
            />
          </div>
        </div>

        <!-- Current Class Photo -->
        <div class="flex justify-center">
          <div class="bg-white w-2/3 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/leadership-academy/2025 LA Class.JPG"
              alt="2025 Leadership Academy Class"
              class="w-full h-96 object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <!-- Previous Leadership Academy Classes & Graduates -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">
          Previous Leadership Academy Classes & Graduates
        </h2>
        <div
          class="space-y-2 border border-gray-200 rounded-lg overflow-hidden"
        >
          <div
            v-for="classYear in leadershipClasses"
            :key="classYear.year"
            class="accordion-item transition-all duration-200 border-b border-gray-200 last:border-b-0 group"
          >
            <!-- Accordion Header -->
            <button
              @click="toggleClass(classYear.year)"
              :aria-expanded="isClassOpen(classYear.year)"
              class="accordion-header w-full text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 px-6 py-4 text-base bg-white hover:bg-gray-50 flex items-center justify-between cursor-pointer"
            >
              <span class="text-primary-900 text-left">
                {{ classYear.year }} Leadership Academy Class
              </span>
              <Icon
                name="i-lucide-chevron-down"
                class="w-5 h-5 text-primary-600 flex-shrink-0 ml-4 transition-transform duration-200"
                :class="{ 'rotate-180': isClassOpen(classYear.year) }"
              />
            </button>

            <!-- Accordion Content -->
            <Transition
              name="accordion"
              @enter="onEnter"
              @after-enter="onAfterEnter"
              @leave="onLeave"
              @after-leave="onAfterLeave"
            >
              <div
                v-show="isClassOpen(classYear.year)"
                class="accordion-content px-6 py-4 text-base bg-white border-t border-gray-200 text-gray-700 leading-relaxed"
              >
                <div class="flex flex-col lg:flex-row gap-8">
                  <!-- Image Section -->
                  <div class="lg:w-1/3 flex-shrink-0">
                    <img
                      :src="classYear.image"
                      :alt="`${classYear.year} Leadership Academy Class`"
                      class="rounded-lg shadow-lg w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>

                  <!-- Content Section -->
                  <div class="lg:w-2/3">
                    <h4 class="text-lg font-semibold text-gray-900 mb-4">
                      Graduates:
                    </h4>

                    <!-- Graduate tiles -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        v-for="graduate in classYear.graduates"
                        :key="graduate"
                        class="bg-white rounded-xl shadow-lg p-4 text-center"
                      >
                        <h4 class="text-sm font-medium text-gray-900">
                          {{ graduate }}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <SupportSection
        title="Want to learn more about LA?"
        :buttons="[
          { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
        ]"
        variant="gray"
        class="mt-16"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Leadership Academy - Greater Springfield Board of Realtors",
  description:
    "Develop leadership skills and get involved with GSBOR's Leadership Academy program, designed to cultivate future leaders.",
  ogTitle: "Leadership Academy - Greater Springfield Board of Realtors",
  ogDescription:
    "Develop leadership skills and get involved with GSBOR's Leadership Academy program, designed to cultivate future leaders.",
  ogType: "website",
});

// Current Academy Members
const academyMembers = [
  {
    name: "Arik Dennis",
  },
  {
    name: "Roberta Gotchie",
  },
  {
    name: "Cassandra Jones",
  },
  {
    name: "Marius Lupescu",
  },
  {
    name: "Jacquie Maples",
  },
  {
    name: "Mary Sekunda",
  },
  {
    name: "Cassie Torp",
  },
  {
    name: "Tye Irvin-Watkins",
  },
];

// Leadership Academy Classes Data - Clean Vue structure (previous years only)
const leadershipClasses = [
  {
    year: "2024",
    image: "/images/leadership-academy/2024 LA Class.jpg",
    graduates: [
      "Tiffany Bright",
      "Barbi DeLozier",
      "Brea Hunter",
      "Tanner Robertson",
      "Rob Seiner",
      "Ben Shelton",
      "Jennifer Stracke",
    ],
  },
  {
    year: "2023",
    image: "/images/leadership-academy/2023 LA Class.jpg",
    graduates: [
      "Morgan Boyd",
      "Chris Bryant",
      "Alan Evans",
      "Maria Galgano",
      "David Jacquez",
      "Rebekah Jones",
      "Mackenzie Serrano",
      "Bryan VanDyne",
    ],
  },
  {
    year: "2022",
    image: "/images/leadership-academy/2022 LA Class.jpg",
    graduates: [
      "Mal Bailey",
      "Boston Buecker",
      "Ashley Burton",
      "Betty Knowles",
      "Bryan Lenox",
      "Michelle Lewis",
      "Austin Plummer",
      "Loren Winter",
    ],
  },
  {
    year: "2021",
    image: "/images/leadership-academy/2021 LA Class.JPG",
    graduates: [
      "Kate Andrews",
      "Joy Bray",
      "Laura Lea Duckworth",
      "Brittany Haik",
      "Elaine Montgomery",
      "Paulina Najbar",
      "Justin Sturdefant",
    ],
  },
  {
    year: "2020",
    image: "/images/leadership-academy/2020 LA Class.jpg",
    graduates: [
      "Joe Bex",
      "Bonnie Harmon",
      "Ryan Maddox",
      "Cary Prater",
      "Andy Simmons",
      "Lisa Tantone",
      "Chelsea Thomas-Zwikelmaier",
      "Mary Jo Williams",
    ],
  },
  {
    year: "2019",
    image: "/images/leadership-academy/2019 LA Class.jpg",
    graduates: [
      "Sara Brodersen",
      "Yvonne Burdette-VanCamp",
      "Doug Collins",
      "Blake Cook",
      "Kelley Jacobson",
      "Liz Lawyer",
      "Darin Peterson",
    ],
  },
  {
    year: "2018",
    image: "/images/leadership-academy/2018 LA Class.jpg",
    graduates: [
      "Tara Cook",
      "Laura Daly",
      "Joel Gaisford",
      "Laura MacDonald",
      "Steve Phillips",
      "Lina Robertson",
      "Christy Serrano",
      "Tami Smith",
    ],
  },
];

// Accordion state management
const openClasses = ref<Set<string>>(new Set());

// Toggle class open/closed
const toggleClass = (year: string) => {
  if (openClasses.value.has(year)) {
    openClasses.value.delete(year);
  } else {
    openClasses.value.clear(); // Only allow one open at a time
    openClasses.value.add(year);
  }
};

// Check if class is open
const isClassOpen = (year: string) => openClasses.value.has(year);

// Animation methods for custom accordion
const onEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = "0";
  element.offsetHeight; // force reflow
  element.style.height = element.scrollHeight + "px";
};

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = "auto";
};

const onLeave = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = element.scrollHeight + "px";
  element.offsetHeight; // force reflow
  element.style.height = "0";
};

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = "auto";
};
</script>

<style scoped>
/* Custom accordion animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0;
}

/* Accordion item hover effects */
.accordion-item:hover {
  transform: translateY(-1px);
}

/* Content styling */
.accordion-content {
  overflow: hidden;
}

/* Focus styles */
.accordion-header:focus {
  outline: none;
}
</style>
