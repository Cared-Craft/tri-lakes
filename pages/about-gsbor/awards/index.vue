<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Achievements and Awards"
      subtitle="Recognizing excellence in our REALTORS® is important to GSBOR. View past leadership and award recipients."
      variant="default"
      class="bg-gradient-to-r from-amber-900 to-amber-700"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Award Categories -->
      <section class="mb-20">
        <h2 class="text-3xl text-gray-900 mb-8">Award Recipients</h2>

        <!-- REALTOR® Broker of the Year -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-800 mb-4">
            REALTOR® Broker of the Year
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            REALTOR® Broker of the Year is one of the highest honors that this
            Board can bestow upon one of its members. This award is presented
            annually to a REALTOR® nominated by their peers and selected by past
            recipients of the award. The member's involvement in civic affairs
            and participation in local, state and national committees are taken
            into consideration, as well as their REALTOR® spirit and business
            accomplishments.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="recipient in brokerOfYear.slice(
                0,
                showAllBroker ? brokerOfYear.length : 6
              )"
              :key="`${recipient.year}-${recipient.name}`"
              class="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-600"
            >
              <div class="text-lg text-gray-900">
                {{ recipient.year }}
              </div>
              <div class="text-gray-700">{{ recipient.name }}</div>
            </div>
          </div>
          <button
            v-if="brokerOfYear.length > 6"
            @click="showAllBroker = !showAllBroker"
            class="mt-4 text-primary-600 hover:text-primary-700 cursor-pointer"
          >
            {{
              showAllBroker
                ? "Show Less"
                : `Show All ${brokerOfYear.length} Recipients`
            }}
          </button>
        </div>

        <!-- Salesperson of the Year -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-800 mb-4">Salesperson of the Year</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            The Salesperson of the Year Award is based on an evaluation of the
            nominee's outstanding contribution to the real estate industry in
            terms of overall achievement. This award is independent of the top
            producer awards given out by individual companies. The award
            recipient will be chosen based on involvement with GSBOR, Missouri
            REALTORS® (MR), and the National Association of REALTORS® (NAR),
            along with the nominee's spirit of cooperation, personal production,
            and educational achievements.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="recipient in salespersonOfYear.slice(
                0,
                showAllSalesperson ? salespersonOfYear.length : 6
              )"
              :key="`${recipient.year}-${recipient.name}`"
              class="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-600"
            >
              <div class="text-lg text-gray-900">
                {{ recipient.year }}
              </div>
              <div class="text-gray-700">{{ recipient.name }}</div>
            </div>
          </div>
          <button
            v-if="salespersonOfYear.length > 6"
            @click="showAllSalesperson = !showAllSalesperson"
            class="mt-4 text-primary-600 hover:text-primary-700 cursor-pointer"
          >
            {{
              showAllSalesperson
                ? "Show Less"
                : `Show All ${salespersonOfYear.length} Recipients`
            }}
          </button>
        </div>

        <!-- Rookie of the Year -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-800 mb-4">Rookie of the Year</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            This award gives recognition to the REALTOR® who has proven their
            commitment by selling, leasing, and/or listing a minimum of ten
            sides of property in the previous calendar year, the first full year
            calendar year after the Rookie is licensed. The following is
            considered in the application process as well: participation in
            local board activities, professionalism/ethics, community service,
            education, and achievement.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="recipient in rookieOfYear.slice(
                0,
                showAllRookie ? rookieOfYear.length : 6
              )"
              :key="`${recipient.year}-${recipient.name}`"
              class="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-600"
            >
              <div class="text-lg text-gray-900">
                {{ recipient.year }}
              </div>
              <div class="text-gray-700">{{ recipient.name }}</div>
            </div>
          </div>
          <button
            v-if="rookieOfYear.length > 6"
            @click="showAllRookie = !showAllRookie"
            class="mt-4 text-primary-600 hover:text-primary-700 cursor-pointer"
          >
            {{
              showAllRookie
                ? "Show Less"
                : `Show All ${rookieOfYear.length} Recipients`
            }}
          </button>
        </div>

        <!-- Margaret Martin Award -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-800 mb-4">Margaret Martin Award</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Margaret Martin epitomized professionalism and cooperative spirit in
            her practice of real estate. She was a great believer in education
            and the responsibility of citizens to be involved in the community.
            She was always willing to help her fellow REALTORS® succeed in their
            profession.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="recipient in margaretMartin.slice(
                0,
                showAllMargaret ? margaretMartin.length : 6
              )"
              :key="`${recipient.year}-${recipient.name}`"
              class="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-600"
            >
              <div class="text-lg text-gray-900">
                {{ recipient.year }}
              </div>
              <div class="text-gray-700">{{ recipient.name }}</div>
            </div>
          </div>
          <button
            v-if="margaretMartin.length > 6"
            @click="showAllMargaret = !showAllMargaret"
            class="mt-4 text-primary-600 hover:text-primary-700 cursor-pointer"
          >
            {{
              showAllMargaret
                ? "Show Less"
                : `Show All ${margaretMartin.length} Recipients`
            }}
          </button>
        </div>

        <!-- Kirk Hewitt Community Champion Award -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-800 mb-4">Kirk Hewitt Community Champion Award</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Kirk Hewitt's longstanding commitment to REALTORS® Helping People led to the 2018 establishment of the "Kirk Hewitt Community Champion" Award. This award recognizes REALTOR® and/or Affiliate members that demonstrate a passion for involvement in helping those in need in our community.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="recipient in kirkHewitt.slice(
                0,
                showAllKirk ? kirkHewitt.length : 6
              )"
              :key="`${recipient.year}-${recipient.name}`"
              class="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-600"
            >
              <div class="text-lg text-gray-900">
                {{ recipient.year }}
              </div>
              <div class="text-gray-700">{{ recipient.name }}</div>
            </div>
          </div>
          <button
            v-if="kirkHewitt.length > 6"
            @click="showAllKirk = !showAllKirk"
            class="mt-4 text-primary-600 hover:text-primary-700 cursor-pointer"
          >
            {{
              showAllKirk
                ? "Show Less"
                : `Show All ${kirkHewitt.length} Recipients`
            }}
          </button>
        </div>

        <!-- Affiliate of the Year Award -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-800 mb-4">Affiliate of the Year Award</h3>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            First presented in 2002, this award recognizes the Greater Springfield Board of REALTORS® Affiliate member who has been active in promoting good relations among REALTORS, affiliate members, and the public. Affiliates will be graded on volunteerism, ethics in business, promotion of REALTOR endorsed programs and policies, and community involvement.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="recipient in affiliateOfYear.slice(
                0,
                showAllAffiliate ? affiliateOfYear.length : 6
              )"
              :key="`${recipient.year}-${recipient.name}`"
              class="bg-white rounded-lg shadow-md p-4 border-l-4 border-primary-600"
            >
              <div class="text-lg text-gray-900">
                {{ recipient.year }}
              </div>
              <div class="text-gray-700">{{ recipient.name }}</div>
            </div>
          </div>
          <button
            v-if="affiliateOfYear.length > 6"
            @click="showAllAffiliate = !showAllAffiliate"
            class="mt-4 text-primary-600 hover:text-primary-700 cursor-pointer"
          >
            {{
              showAllAffiliate
                ? "Show Less"
                : `Show All ${affiliateOfYear.length} Recipients`
            }}
          </button>
        </div>
      </section>

      <!-- Contact Section -->
      <SupportSection
        title="Learn More About Our Awards"
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
import { ref } from "vue";

// SEO Meta
useSeoMeta({
  title: "Achievements & Awards - Greater Springfield Board of Realtors",
  description:
    "Celebrating excellence and recognizing outstanding REALTORS® and affiliate members who have made significant contributions to our industry.",
  ogTitle: "Achievements & Awards - Greater Springfield Board of Realtors",
  ogDescription:
    "Celebrating excellence and recognizing outstanding REALTORS® and affiliate members who have made significant contributions to our industry.",
  ogType: "website",
});

// Show/hide state for award lists
const showAllBroker = ref(false);
const showAllSalesperson = ref(false);
const showAllRookie = ref(false);
const showAllMargaret = ref(false);
const showAllKirk = ref(false);
const showAllAffiliate = ref(false);

// Award Recipients
const brokerOfYear = [
  { year: "2024", name: "Tammie Tucker" },
  { year: "2023", name: "Chris Bryant" },
  { year: "2022", name: "Alisa Maxwell" },
  { year: "2021", name: "Todd Thomas" },
  { year: "2020", name: "Jim Hutcheson & Don Jacques" },
  { year: "2019", name: "Bud Jones" },
  { year: "2018", name: "Doug Collins" },
  { year: "2017", name: "Tonya Murfin" },
  { year: "2016", name: "Sherre Lane" },
  { year: "2015", name: "Art Maxwell" },
  { year: "2014", name: "Angie Mullings" },
  { year: "2013", name: "Antonio Serrano" },
  { year: "2012", name: "Jeff Kester" },
  { year: "2011", name: "Harry Chalfant" },
  { year: "2010", name: "Doug Andrews" },
];

const salespersonOfYear = [
  { year: "2024", name: "Yvonne Van Camp" },
  { year: "2023", name: "Jeanna Callahan" },
  { year: "2022", name: "Steve Phillips" },
  { year: "2021", name: "Joel Gaisford" },
  { year: "2020", name: "Lina Robertson" },
  { year: "2019", name: "Laura MacDonald" },
  { year: "2018", name: "Andy Trussell" },
  { year: "2017", name: "Christy Serrano" },
  { year: "2016", name: "Michael Jacques" },
  { year: "2015", name: "Rob Bell" },
  { year: "2014", name: "Faunlee Harle" },
  { year: "2013", name: "Laura Daly" },
  { year: "2012", name: "Gary Wilson" },
  { year: "2011", name: "Ava Snyder" },
  { year: "2010", name: "Jessica Hickok" },
];

const rookieOfYear = [
  { year: "2024", name: "Kalli Peoples" },
  { year: "2023", name: "Hannah Ough" },
  { year: "2022", name: "Ryan Huff" },
  { year: "2021", name: "Mal Bailey" },
  { year: "2020", name: "Paulina Najbar" },
  { year: "2019", name: "Blake Cook" },
  { year: "2018", name: "Laura Duckworth" },
  { year: "2017", name: "Tami Smith" },
  { year: "2016", name: "Brandee Massey" },
  { year: "2015", name: "Melissa Davis" },
  { year: "2014", name: "Cary Prater" },
  { year: "2013", name: "Andy Trussell" },
  { year: "2012", name: "Melisa McGuire" },
];

const margaretMartin = [
  { year: "2024", name: "Doug Andrews" },
  { year: "2023", name: "Bryan Lenox" },
  { year: "2022", name: "Jeanna Callahan" },
  { year: "2021", name: "Laurel Bryant" },
  { year: "2020", name: "Michael Jacques" },
  { year: "2019", name: "Twila Hillme & Todd Thomas" },
  { year: "2018", name: "Pamela Long" },
  { year: "2017", name: "Brian Jared" },
  { year: "2016", name: "Angie Mullings" },
  { year: "2015", name: "Judy Huntsman" },
  { year: "2014", name: "Kari Wyrsch" },
  { year: "2013", name: "Linda K. Brown" },
  { year: "2012", name: "Isabelle Jimenez Walker" },
];

const kirkHewitt = [
  { year: "2024", name: "Nancy Caughlan Evans" },
  { year: "2024", name: "Eileen Perry" },
];

const affiliateOfYear = [
  { year: "2024", name: "Kate Wilson" },
];
</script>
