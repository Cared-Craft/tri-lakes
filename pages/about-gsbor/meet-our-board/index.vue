<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Meet Our Board"
      subtitle="Our GSBOR and Springfield MLS boards work hard to empower members to excel in professionalism and ethical standards in real estate."
      variant="default"
      class="bg-gradient-to-r from-primary-800 to-primary-700"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Introduction -->
      <div class="prose prose-lg max-w-none mb-16"></div>

      <!-- GSBOR Board of Directors -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-6">GSBOR Board of Directors</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          The GSBOR Board of Directors governs the Association's affairs, sets
          policy, and approves the annual budget, ensuring alignment with the
          mission and vision that guide the organization's work.
        </p>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <PersonCard
            v-for="member in gsborBoard"
            :key="member.name"
            :name="member.name"
            :title="member.title"
            :photo="member.image"
            :image-position="getImagePosition(member.name)"
            :transform-x="getImageTransformX(member.name)"
            :transform-y="getImageTransformY(member.name)"
            :show-contact="false"
            size="large"
            class="bg-white rounded-xl shadow-lg pt-8 pb-4"
          />
        </div>
      </section>

      <!-- Springfield MLS Board of Directors -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-6">
          Springfield MLS Board of Directors
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          The Board of Directors of the Multilist Service of Springfield
          REALTORS® works closely with the Southern Missouri Regional MLS Board
          to establish policies that safeguard the integrity of member data and
          approves the MLS's annual operating budget.
        </p>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <PersonCard
            v-for="member in mlsBoard"
            :key="member.name"
            :name="member.name"
            :title="member.title"
            :photo="member.image"
            :image-position="getImagePosition(member.name)"
            :transform-x="getImageTransformX(member.name)"
            :transform-y="getImageTransformY(member.name)"
            :show-contact="false"
            size="large"
            class="bg-white rounded-xl shadow-lg pt-8 pb-4"
          />
        </div>
      </section>

      <!-- Past Board Presidents -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-6">Past Board Presidents</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          For nearly a century, GSBOR has been guided by dedicated leaders who
          have shaped the organization through growth and change, building the
          foundation for today's REALTORS®.
        </p>

        <div class="bg-gray-50 rounded-lg p-8">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm"
          >
            <div
              v-for="president in pastPresidents"
              :key="`${president.year}-${president.name}`"
              class="flex justify-between items-center py-2 px-3 bg-white rounded border-l-4 border-primary-600"
            >
              <span class="text-gray-800">{{ president.name }}</span>
              <span class="font-semibold text-blue-900">{{
                president.year
              }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <SupportSection
        title="Have a question?"
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
  title: "Board of Directors - Greater Springfield Board of Realtors",
  description:
    "Meet the GSBOR and Springfield MLS Board of Directors who advocate for our members and communities.",
  ogTitle: "Board of Directors - Greater Springfield Board of Realtors",
  ogDescription:
    "Meet the GSBOR and Springfield MLS Board of Directors who advocate for our members and communities.",
  ogType: "website",
});

// Image positioning configuration - easily adjust face positioning here
//
// Vertical positioning options:
// - "center top" - default, shows head and upper body (no need to add)
// - "center center" - centers the face vertically
// - "center 30%" - shows more face, less body
// - "center 20%" - focuses heavily on the face
// - "center 40%" - shows more body, less face
//
// Horizontal translation (transformX):
// - Positive values move image right (e.g., 10, 20, 30)
// - Negative values move image left (e.g., -10, -20, -30)
// - Units are in pixels
//
// Vertical translation (transformY):
// - Positive values move image down (e.g., 10, 20, 30)
// - Negative values move image up (e.g., -10, -20, -30)
// - Units are in pixels
//
interface ImageConfig {
  position?: string;
  transformX?: number;
  transformY?: number;
}

const imageConfigs: Record<string, ImageConfig> = {
  "Jeff Parker": { position: "center top", transformX: -10 },
  // Examples:
  "Loren Winter": { position: "center center", transformY: 11 },
  "Joe Bex": { position: "center top", transformY: 20 },
  "Blake Cantrell": { position: "center top", transformY: 20 },
  "Tanner Robertson": { position: "center top", transformX: 10 },
  "Doug Andrews": { position: "center top", transformX: -10 },
};

// Helper functions to get image configuration for a member
function getImagePosition(memberName: string): string | undefined {
  return imageConfigs[memberName]?.position;
}

function getImageTransformX(memberName: string): number | undefined {
  return imageConfigs[memberName]?.transformX;
}

function getImageTransformY(memberName: string): number | undefined {
  return imageConfigs[memberName]?.transformY;
}

// GSBOR Board Members
const gsborBoard = [
  {
    name: "Justin Sturdefant",
    title: "President",
    image: "/images/directors/Justin-Sturdefant---President.jpg",
  },
  {
    name: "Ethan Ives",
    title: "1st Vice President",
    image: "/images/directors/Ethan-Ives--1st-Vice-President.jpg",
  },
  {
    name: "Jeff Parker",
    title: "2nd Vice President",
    image: "/images/directors/Jeff-Parker--2nd-Vice-President.jpg",
  },
  {
    name: "Loren Winter",
    title: "Secretary/Treasurer",
    image: "/images/directors/Loren-Winter--Board-Secretary-Treasurer.jpg",
  },
  {
    name: "Laura Daly",
    title: "Director",
    image: "/images/directors/Laura-Daily--Director.jpg",
  },
  {
    name: "Mackenzie Serrano",
    title: "Director",
    image: "/images/directors/Mackenzie-Serrano--Director.jpg",
  },
  {
    name: "Brian VanDyne",
    title: "Director",
    image: "/images/directors/Brian-VanDyne--Director.webp",
  },
  {
    name: "Blake Cook",
    title: "Director",
    image: "/images/directors/Blake-Cook--Director.webp",
  },
  {
    name: "David Jacquez",
    title: "Director",
    image: "/images/directors/David-Jacquez--Director.jpg",
  },
  {
    name: "Doug Andrews",
    title: "Director",
    image: "/images/directors/Doug-Andrews--Director.jpg",
  },
  {
    name: "Rob Seiner",
    title: "Director",
    image: "/images/directors/Rob-Seiner--Director.jpg",
  },
  {
    name: "Chelsea Rae",
    title: "MLS President",
    image: "/images/directors/Chelsea-Rae--MLS-President.jpg",
  },
  {
    name: "Sara Brodersen",
    title: "Immediate Past President",
    image: "/images/directors/Sara-Brodersen-Immediate-Past-President.jpg",
  },
];

// Springfield MLS Board Members
const mlsBoard = [
  {
    name: "Chelsea Rae",
    title: "President",
    image: "/images/directors/Chelsea-Rae--MLS-President.jpg",
  },
  {
    name: "Yvonne VanCamp",
    title: "1st Vice President",
    image: "/images/directors/Yvonne Van Camp- 1st Vice President.jpg",
  },
  {
    name: "Bud Jones",
    title: "2nd Vice President",
    image: "/images/directors/Bud Jones- 2nd Vice President.jpg",
  },
  {
    name: "Joe Bex",
    title: "Secretary/Treasurer",
    image: "/images/directors/Joe-Bex--MLS-Secretary-Treasurer.jpg",
  },
  {
    name: "Betty Knowles",
    title: "Director",
    image: "/images/directors/Betty Knowles- Director.jpg",
  },
  {
    name: "Jeanna Callahan",
    title: "Director",
    image: "/images/directors/Jeanna Callahan- Director.jpg",
  },
  {
    name: "Alan Evans",
    title: "Director",
    image: "/images/directors/Alan Evans- Director.jpg",
  },
  {
    name: "Tammie Tucker",
    title: "Director",
    image: "/images/directors/Tammie Tucker- Director.jpg",
  },
  {
    name: "Marius Lupescu",
    title: "Director",
    image: "/images/directors/Marius Lupescu- Director.jpg",
  },
  {
    name: "Tanner Robertson",
    title: "Director",
    image: "/images/directors/Tanner Robertson- Director.jpg",
  },
  {
    name: "Justin Sturdefant",
    title: "GSBOR Board President",
    image: "/images/directors/Justin-Sturdefant---President.jpg",
  },
  {
    name: "Blake Cantrell",
    title: "Immediate Past President",
    image: "/images/directors/Blake-Cantrell--MLS-Past-President.jpg",
  },
];

// Past Board Presidents (2024-1933) - Newest to Oldest
const pastPresidents = [
  { year: "2024", name: "Mike Brown" },
  { year: "2023", name: "Christy Serrano" },
  { year: "2022", name: "Tonya Murfin" },
  { year: "2021", name: "Bud Jones" },
  { year: "2020", name: "Rob Bell" },
  { year: "2019", name: "Angie Mullings" },
  { year: "2018", name: "Michael Jacques" },
  { year: "2017", name: "Antonio Serrano" },
  { year: "2016", name: "Jeff Kester" },
  { year: "2015", name: "Paul Dizmang" },
  { year: "2014", name: "Brian Jared" },
  { year: "2013", name: "Ed Peterson" },
  { year: "2012", name: "Shirley Cofer" },
  { year: "2011", name: "Tamra Tucker" },
  { year: "2010", name: "Jeffrey Parker" },
  { year: "2009", name: "Miles Noennig" },
  { year: "2008", name: "Doug Andrews" },
  { year: "2007", name: "Scott Rose" },
  { year: "2006", name: "Stacey Clem" },
  { year: "2005", name: "Twila Hillme" },
  { year: "2004", name: "Charles Livieri" },
  { year: "2003", name: "Robert Fitzgerald" },
  { year: "2002", name: "Brenda Ellsworth" },
  { year: "2001", name: "Jeanne McFall" },
  { year: "2000", name: "Paul Dizmang" },
  { year: "1999", name: "A.R. Wilson" },
  { year: "1998", name: "Rick Gardner" },
  { year: "1997", name: "Max Perryman" },
  { year: "1996", name: "Barbara Herren" },
  { year: "1995", name: "David Mashburn" },
  { year: "1994", name: "Judi Samuel" },
  { year: "1993", name: "Kirk Hewitt" },
  { year: "1992", name: "Kirk Heyle" },
  { year: "1991", name: "Ron Bench" },
  { year: "1990", name: "Carol Jones" },
  { year: "1989", name: "Phyllis Miller" },
  { year: "1988", name: "Tom Barnett" },
  { year: "1987", name: "Cline Herren" },
  { year: "1986", name: "Don Jacques" },
  { year: "1985", name: "Glenda Unsell" },
  { year: "1984", name: "John Lilliedahl" },
  { year: "1983", name: "Bob Wills" },
  { year: "1982", name: "J.T. Brown" },
  { year: "1981", name: "Bill Hanks" },
  { year: "1980", name: "Rollie Langston" },
  { year: "1979", name: "Judy Huntsman" },
  { year: "1978", name: "Ivan Ellingsworth" },
  { year: "1977", name: "Nancy Hoflund-Reveal" },
  { year: "1976", name: "Dorrel T. Hanks" },
  { year: "1975", name: "Jim C. Jones" },
  { year: "1974", name: "John MacGowan" },
  { year: "1973", name: "Fred Wagner" },
  { year: "1972", name: "Norman I. Hoflund" },
  { year: "1971", name: "William H. Latimer" },
  { year: "1970", name: "D.R. Young" },
  { year: "1969", name: "Lawson A. Weaver" },
  { year: "1968", name: "Charles H. Tillman" },
  { year: "1967", name: "Robert T. Leonard" },
  { year: "1966", name: "Richard I. Langston" },
  { year: "1965", name: "Robert L. Carmack" },
  { year: "1964", name: "Jack Ellingsworth" },
  { year: "1963", name: "Fred Usery" },
  { year: "1962", name: "Virgil C. Pfieffer" },
  { year: "1961", name: "Hubert A. Riebold" },
  { year: "1960", name: "Harold E. Sperry" },
  { year: "1959", name: "Louis B. Hagerman" },
  { year: "1958", name: "Vernon Miles" },
  { year: "1957", name: "Hugh W. Heyle" },
  { year: "1956", name: "L.L. Weaver" },
  { year: "1955", name: "Dorrel T. Hanks" },
  { year: "1954", name: "A.H. Dennison" },
  { year: "1953", name: "J. Leo Orchard" },
  { year: "1952", name: "Al Westmoreland" },
  { year: "1951", name: "Herman A. Griffin" },
  { year: "1950", name: "C. Arch Bay" },
  { year: "1949", name: "O.L. Burger" },
  { year: "1948", name: "Mike Ruckle" },
  { year: "1947", name: "Ralph M. Mack" },
  { year: "1946", name: "Herb Tillman" },
  { year: "1945", name: "William J. Hunt" },
  { year: "1944", name: "V.A. Dobyns" },
  { year: "1943", name: "Fred Miles" },
  { year: "1942", name: "Walter Henderson" },
  { year: "1941", name: "Dwight Shultz" },
  { year: "1940", name: "Fred Miles" },
  { year: "1939", name: "A.T. Vanmatre" },
  { year: "1938", name: "Leon A. Hawkins" },
  { year: "1937", name: "C.O. Sperry" },
  { year: "1936", name: "John F. McKinney" },
  { year: "1935", name: "John F. McKinney" },
  { year: "1934", name: "Dwight Shultz" },
  { year: "1933", name: "Walter Henderson" },
];
</script>

<style scoped>
/* Increase photo container size by 10% (from w-36 h-36 to ~w-40 h-40) */
:deep(.person-photo-container > div) {
  width: 10rem !important; /* 160px - 10% larger than 144px */
  height: 10rem !important;
}

/* Keep image at natural size - no zoom to prevent head cutoff */
:deep(.person-photo-container img) {
  transform: scale(1.6);
  object-position: center top;
}

/* When translateX is applied via inline style, it will include scale in the transform */
/* The inline style from PersonCard will handle combining scale and translateX */

/* Ensure the container clips properly */
:deep(.person-photo-container) {
  overflow: hidden;
}
</style>
