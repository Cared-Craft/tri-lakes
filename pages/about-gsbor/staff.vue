<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Meet the Staff"
      subtitle="Our dedicated team of professionals is here to serve our members and support the real estate community in Springfield, Missouri."
      variant="default"
      class="bg-gradient-to-r from-emerald-900 to-emerald-700"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Staff Directory -->
      <section class="mb-20">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <PersonCard
            v-for="member in staff"
            :key="member.name"
            :name="member.name"
            :title="member.title"
            :photo="member.image"
            :show-contact="false"
            size="large"
            class="bg-white rounded-xl shadow-lg pt-8 pb-4"
          />
        </div>
      </section>

      <!-- Contact Section -->
      <SupportSection
        title="Have A Question for Our Staff?"
        description="Don't hesitate to email, call or fill out a contact form. One of our staff members would be happy to help you."
        :buttons="[
          { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
          {
            text: 'Visit Our Office',
            link: 'https://www.google.com/maps/place/Greater+Springfield+Board+of+REALTORS/@37.1478114,-93.2746075,19.22z/data=!4m5!3m4!1s0x87cf64bf23c9eec7:0xbe06e9b1ae22b391!8m2!3d37.1474574!4d-93.2744227',
            variant: 'secondary',
          },
        ]"
        variant="emerald"
        class="mt-16"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Staff Directory - Greater Springfield Board of Realtors",
  description:
    "Meet the professional staff team at GSBOR who provide exceptional service and support to our realtor members.",
  ogTitle: "Staff Directory - Greater Springfield Board of Realtors",
  ogDescription:
    "Meet the professional staff team at GSBOR who provide exceptional service and support to our realtor members.",
  ogType: "website",
});

// Staff Members - Updated with correct titles and order
const staff = [
  {
    name: "Jeff Kester",
    title: "CEO",
    image: "/images/staff/staff-jeff-kester.jpg",
  },
  {
    name: "Barth Fraker",
    title: "Chief Operations Officer",
    image: "/images/staff/staff-barth-fraker.jpg",
  },
  {
    name: "Allyson Russell",
    title: "EVP, Education & Membership",
    image: "/images/staff/staff-allyson-russell.jpg",
  },
  {
    name: "Leah Ingalsble",
    title: "EVP, MLS & Technology",
    image: "/images/staff/staff-leah-ingalsble.jpg",
  },
  {
    name: "David Gubin",
    title: "Director of Strategic Initiatives",
    image: "/images/staff/staff-david-gubin.jpg",
  },
  {
    name: "Laurie Joecks",
    title: "VP Finance",
    image: "/images/staff/staff-laurie-joecks.jpg",
  },
  {
    name: "Kacie Evans",
    title: "Communication Director",
    image: "/images/staff/staff-kacie-evans.jpg",
  },
  {
    name: "Andy Huitt",
    title: "MLS Services Director",
    image: "/images/staff/staff-andy-huitt.jpg",
  },
  {
    name: "Cathy Booth",
    title: "MLS Engagement Specialist",
    image: "/images/staff/staff-cathy-booth.jpg",
  },
  {
    name: "Jacob Albrecht",
    title: "MLS Data Coordinator",
    image: "/images/staff/staff-jacob-albrecht.jpg",
  },
  {
    name: "Teresa Adams",
    title: "Member Services Director",
    image: "/images/staff/staff-teresa-adams.jpg",
  },
  {
    name: "Alannah Thomas",
    title: "Member Engagement Coordinator",
    image: "/images/staff/staff-alannah-thomas.jpg",
  },
  {
    name: "Skylar St. John",
    title: "Member Services",
    image: "/images/staff/staff-skylar.jpg",
  },
];
</script>

<style scoped>
/* Custom styles for the staff page */
</style>
