<template>
  <div>
    <!-- Compact Header -->
    <HeroSection
      title="About Us"
      subtitle="The leading voice for real estate professionals in the Tri-Lakes area"
      variant="compact"
      class="bg-gradient-to-r from-primary-800 to-primary-600"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="prose max-w-none mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Tri-Lakes Board of Realtors serves as the voice for real estate in the Tri-Lakes area. We provide REALTORS® the tools, advocacy, and education they need to serve clients with professionalism and integrity. Every member commits to the REALTOR® Code of Ethics, setting a standard of trust that benefits both our industry and the communities we call home.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            In addition to serving our members, Tri-Lakes Board of Realtors works to advance the real estate industry and strengthen the communities we represent. By equipping REALTORS® with the resources to succeed and supporting policies that strengthen property rights and homeownership, we help ensure that real estate remains a cornerstone of opportunity and growth in the Tri-Lakes area.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 class="text-2xl font-semibold text-blue-900 mb-4">
              The Vision
            </h2>
            <p class="text-blue-800 text-lg">
              To empower our members to excel in professionalism and ethical
              standards in real estate.
            </p>
          </div>

          <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-12">
            <h2 class="text-2xl font-semibold text-green-900 mb-4">
              The Mission
            </h2>
            <p class="text-green-800 text-lg">
              To be the trusted real estate voice advocating for the benefit of
              our members and our communities.
            </p>
          </div>
        </div>

        <!-- Executive Team -->
        <section class="mb-16">
          <h2 class="text-3xl text-gray-900 mb-8">Executive Team</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PersonCard
              v-for="member in executiveTeam"
              :key="member.name"
              :name="member.name"
              :title="member.title"
              :email="member.email"
              :photo="member.photo"
              :show-photo="true"
              variant="card"
              size="large"
              layout="vertical"
            />
          </div>
        </section>

        <!-- State Directors -->
        <section class="mb-16">
          <h2 class="text-3xl text-gray-900 mb-8">State Directors</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PersonCard
              v-for="director in stateDirectors"
              :key="director.name"
              :name="director.name"
              :email="director.email"
              :photo="director.photo"
              :show-photo="true"
              variant="card"
              size="large"
              layout="vertical"
            />
          </div>
        </section>

        <!-- SOMO Directors -->
        <section class="mb-16">
          <h2 class="text-3xl text-gray-900 mb-8">SOMO Directors</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PersonCard
              v-for="director in somoDirectors"
              :key="director.name"
              :name="director.name"
              :email="director.email"
              :photo="director.photo"
              :show-photo="true"
              variant="card"
              size="large"
              layout="vertical"
            />
          </div>
        </section>

        <!-- Board Members -->
        <section class="mb-16">
          <h2 class="text-3xl text-gray-900 mb-8">Board Members</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PersonCard
              v-for="member in boardMembers"
              :key="member.name"
              :name="member.name"
              :email="member.email"
              :photo="member.photo"
              :show-photo="true"
              variant="card"
              size="large"
              layout="vertical"
            />
          </div>
        </section>

        <!-- Staff -->
        <section class="mb-16">
          <h2 class="text-3xl text-gray-900 mb-8">Staff</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div
              v-for="member in staff"
              :key="member.name"
              class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-1">
                {{ member.name }}
              </h3>
              <p class="text-sm text-gray-600 mb-4">
                {{ member.title }}
              </p>
              <a
                :href="`mailto:${member.email}`"
                class="text-primary-600 hover:text-primary-800 text-sm transition-colors"
              >
                {{ member.email }}
              </a>
            </div>
          </div>
        </section>

        <div
          class="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center"
        >
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            Want to Learn More About Us?
          </h2>
          <NuxtLink
            to="/contact-us"
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PersonCard from "~/components/ui/PersonCard.vue";

// SEO Meta
useHead({
  title: "About Us - Tri-Lakes Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Learn about Tri-Lakes Board of Realtors, serving the Tri-Lakes area. Meet our executive team, board members, directors, and staff.",
    },
  ],
});

// Executive Team
const executiveTeam = [
  {
    name: "Audrey Spratt",
    title: "Immediate Past President",
    email: "audrey@teamspratt.com",
    photo: "/images/leadership/executive-team-audrey-spratt.jpg",
  },
  {
    name: "Jim Robertson",
    title: "President",
    email: "jim@bransonlistings.com",
    photo: "/images/leadership/executive-team-jim-robertson.jpg",
  },
  {
    name: "Shannen White",
    title: "President-Elect",
    email: "Myagentwhite@gmail.com",
    photo: "/images/leadership/executive-team-shannen-white.jpg",
  },
  {
    name: "Jon Holloway",
    title: "Secretary-Treasurer",
    email: "Jon@ShowtimeProperties.com",
    photo: "/images/leadership/executive-team-jon-holloway.jpg",
  },
  {
    name: "Lisa Lister",
    title: "MLS Vice President",
    email: "lisalistermo@gmail.com",
    photo: "/images/leadership/executive-team-lisa-lister.jpg",
  },
];

// State Directors
const stateDirectors = [
  {
    name: "Rose Backlin",
    email: "backlinrealestate@gmail.com",
    photo: "/images/leadership/state-director-rose-backlin.webp",
  },
  {
    name: "Jon Holloway",
    email: "Jon@ShowtimeProperties.com",
    photo: "/images/leadership/executive-team-jon-holloway.jpg",
  },
  {
    name: "Deb Mundell",
    email: "debmundell@gmail.com",
    photo: "/images/leadership/state-director-deb-mundell.jpg",
  },
  {
    name: "Matthew Brock",
    email: "matthew@gerkenandassociates.com",
    photo: "/images/leadership/state-director-matthew-brock.png",
  },
  {
    name: "Thayne Robertson",
    email: "Thayne.kw@gmail.com",
    photo: "/images/leadership/state-director-thayne-robertson.jpg",
  },
  {
    name: "Jon Hulsizer",
    email: "c21jonh@gmail.com",
    photo: "/images/leadership/state-director-jon-hulsizer.jpg",
  },
  {
    name: "Audrey Spratt",
    email: "audrey@teamspratt.com",
    photo: "/images/leadership/executive-team-audrey-spratt.jpg",
  },
];

// SOMO Directors
const somoDirectors = [
  {
    name: "Lisa Lister",
    email: "lisalistermo@gmail.com",
    photo: "/images/leadership/somo-director-lisa-lister.jpg",
  },
  {
    name: "Jessica Brock",
    email: "Jessica@brocksells.com",
    photo: "/images/leadership/somo-director-jessica-brock.png",
  },
];

// Board Members
const boardMembers = [
  {
    name: "Shari Asher",
    email: "shari@reecenichols.com",
    photo: "/images/leadership/board-member-shari-asher.jpg",
  },
  {
    name: "Rose Backlin",
    email: "backlinrealestate@gmail.com",
    photo: "/images/leadership/board-member-rose-backlin.webp",
  },
  {
    name: "Shamron Baur",
    email: "shamronbaur417@gmail.com",
    photo: "/images/leadership/board-member-shamron-baur.jpg",
  },
  {
    name: "Scott Fraker",
    email: "ScottFrakerrealestate@gmail.com",
    photo: "/images/leadership/board-member-scott-fraker.jpg",
  },
  {
    name: "Jon Holloway",
    email: "Jon@ShowtimeProperties.com",
    photo: "/images/leadership/board-member-jon-holloway.jpg",
  },
  {
    name: "Chris Reasons",
    email: "reasons78@yahoo.com",
    photo: "/images/leadership/board-member-chris-reasons.png",
  },
  {
    name: "Rachel Barnett",
    email: "rachelbarnett@reecenichols.com",
    photo: "/images/leadership/board-member-rachel-barnett.jpg",
  },
  {
    name: "Kim Melcher",
    email: "kim.melcher@triplediamondre.co",
    photo: "/images/leadership/board-member-kim-melcher.jpeg",
  },
  {
    name: "Lisa Johnson",
    email: "Johnson.renee07@gmail.com",
    photo: "/images/leadership/board-member-lisa-johnson.jpeg",
  },
  {
    name: "Windy Burt",
    email: "windy@therealtitangroup.com",
    photo: "/images/leadership/board-member-windy-burt.jpeg",
  },
];

// Staff
const staff = [
  {
    name: "Sherri Cordell",
    title: "Association Executive/CEO",
    email: "sherri@tlbor.com",
  },
  {
    name: "Jake Lawrence",
    title: "Member Services/MLS Coordinator",
    email: "jake@tlbor.com",
  },
  {
    name: "Shay Mouser",
    title: "Communications/Social Media Coordinator",
    email: "shay@tlbor.com",
  },
];
</script>
