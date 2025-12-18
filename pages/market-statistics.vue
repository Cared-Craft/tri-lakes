<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl mb-4">
            Greater Springfield Area Market Statistics
          </h1>
          <p class="text-xl text-gray-100 max-w-3xl mx-auto">
            Residential market statistics provided by SOMO MLS reflect listings
            located in Greene, Christian, & Webster Counties.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Current Month Overview -->
      <section v-if="currentStats" class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl text-gray-900 mb-4">
            {{ currentStats.month }} {{ currentStats.year }}
          </h2>
          <p v-if="currentStats.notes" class="text-gray-600 max-w-4xl mx-auto">
            {{ currentStats.notes }}
          </p>
        </div>

        <!-- Greater Springfield Area Stats -->
        <div class="mb-12">
          <h3 class="text-2xl text-gray-900 mb-8 text-center">
            Greater Springfield Area
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MarketStatCard
              label="Total Units Sold"
              :current-value="
                currentStats.greater_springfield_area.total_units_sold
              "
              :previous-value="
                previousStats?.greater_springfield_area.total_units_sold
              "
              :current-period="`${currentStats.month} ${currentStats.year}`"
              :previous-period="
                previousStats
                  ? `${previousStats.month} ${previousStats.year}`
                  : ''
              "
              format-type="number"
            />

            <MarketStatCard
              label="Total Volume"
              :current-value="
                currentStats.greater_springfield_area.total_volume
              "
              :previous-value="
                previousStats?.greater_springfield_area.total_volume
              "
              :current-period="`${currentStats.month} ${currentStats.year}`"
              :previous-period="
                previousStats
                  ? `${previousStats.month} ${previousStats.year}`
                  : ''
              "
              format-type="currency"
            />

            <MarketStatCard
              label="Average Sale Price"
              :current-value="
                currentStats.greater_springfield_area.average_sale_price
              "
              :previous-value="
                previousStats?.greater_springfield_area.average_sale_price
              "
              :current-period="`${currentStats.month} ${currentStats.year}`"
              :previous-period="
                previousStats
                  ? `${previousStats.month} ${previousStats.year}`
                  : ''
              "
              format-type="currency"
            />

            <MarketStatCard
              label="Median Sale Price"
              :current-value="
                currentStats.greater_springfield_area.median_sale_price
              "
              :previous-value="
                previousStats?.greater_springfield_area.median_sale_price
              "
              :current-period="`${currentStats.month} ${currentStats.year}`"
              :previous-period="
                previousStats
                  ? `${previousStats.month} ${previousStats.year}`
                  : ''
              "
              format-type="currency"
            />

            <MarketStatCard
              label="Average Days on Market"
              :current-value="
                currentStats.greater_springfield_area.average_days_on_market
              "
              :previous-value="
                previousStats?.greater_springfield_area.average_days_on_market
              "
              :current-period="`${currentStats.month} ${currentStats.year}`"
              :previous-period="
                previousStats
                  ? `${previousStats.month} ${previousStats.year}`
                  : ''
              "
              format-type="number"
            />

            <MarketStatCard
              label="Cumulative Days on Market"
              :current-value="
                currentStats.greater_springfield_area.cumulative_days_on_market
              "
              :previous-value="
                previousStats?.greater_springfield_area
                  .cumulative_days_on_market
              "
              :current-period="`${currentStats.month} ${currentStats.year}`"
              :previous-period="
                previousStats
                  ? `${previousStats.month} ${previousStats.year}`
                  : ''
              "
              format-type="number"
            />
          </div>
        </div>
      </section>

      <!-- County Breakdown -->
      <section v-if="currentStats" class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl text-gray-900 mb-4">
            Market Statistics by County
          </h2>
        </div>

        <CountyStatsSection
          county-name="Greene"
          :current-data="currentStats.counties.greene"
          :previous-data="previousStats?.counties.greene"
          :current-period="`${currentStats.month} ${currentStats.year}`"
          :previous-period="
            previousStats ? `${previousStats.month} ${previousStats.year}` : ''
          "
        />

        <CountyStatsSection
          county-name="Christian"
          :current-data="currentStats.counties.christian"
          :previous-data="previousStats?.counties.christian"
          :current-period="`${currentStats.month} ${currentStats.year}`"
          :previous-period="
            previousStats ? `${previousStats.month} ${previousStats.year}` : ''
          "
        />

        <CountyStatsSection
          county-name="Webster"
          :current-data="currentStats.counties.webster"
          :previous-data="previousStats?.counties.webster"
          :current-period="`${currentStats.month} ${currentStats.year}`"
          :previous-period="
            previousStats ? `${previousStats.month} ${previousStats.year}` : ''
          "
        />
      </section>

      <!-- Market Forecast Section -->
      <section class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl text-gray-900 mb-4">Market Forecast & Trends</h2>
          <p class="text-gray-600 max-w-4xl mx-auto">
            Based on current market data and historical trends, here's what
            we're seeing in the Greater Springfield Area real estate market.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Market Outlook -->
          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div class="mb-6">
              <h3 class="text-xl text-gray-900">Market Outlook</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <div>
                  <h4 class="text-gray-900 mb-1">Steady Growth Expected</h4>
                  <p class="text-sm text-gray-600">
                    Market indicators suggest continued moderate growth in home
                    values across all three counties.
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <div>
                  <h4 class="text-gray-900 mb-1">Inventory Levels</h4>
                  <p class="text-sm text-gray-600">
                    Housing inventory remains competitive with seasonal
                    fluctuations expected throughout the year.
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                  class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                ></div>
                <div>
                  <h4 class="text-gray-900 mb-1">Buyer Activity</h4>
                  <p class="text-sm text-gray-600">
                    Strong buyer demand continues, particularly in the mid-range
                    price segments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Indicators -->
          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div class="mb-6">
              <h3 class="text-xl text-gray-900">Key Indicators</h3>
            </div>
            <div class="space-y-4">
              <div
                class="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span class="text-sm text-gray-600">Market Balance</span>
                <span class="text-sm text-gray-900 font-medium">Balanced</span>
              </div>
              <div
                class="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span class="text-sm text-gray-600">Price Trend</span>
                <span class="text-sm text-green-600 font-medium"
                  >↗ Moderate Growth</span
                >
              </div>
              <div
                class="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span class="text-sm text-gray-600">Inventory Status</span>
                <span class="text-sm text-orange-600 font-medium"
                  >⚡ Competitive</span
                >
              </div>
              <div
                class="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span class="text-sm text-gray-600">Buyer Demand</span>
                <span class="text-sm text-gray-700 font-medium">🔥 Strong</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Insights -->
        <div
          class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200"
        >
          <h3 class="text-xl text-gray-900 mb-6 text-center">
            Market Insights & Analysis
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <h4 class="text-lg text-gray-900 mb-2">Seasonal Patterns</h4>
              <p class="text-sm text-gray-600">
                Spring and summer months typically see increased activity, with
                peak sales occurring May through August.
              </p>
            </div>
            <div class="text-center">
              <h4 class="text-lg text-gray-900 mb-2">Price Stability</h4>
              <p class="text-sm text-gray-600">
                The Greater Springfield market has shown consistent price
                appreciation with low volatility compared to national averages.
              </p>
            </div>
            <div class="text-center">
              <h4 class="text-lg text-gray-900 mb-2">Demographics</h4>
              <p class="text-sm text-gray-600">
                Growing population and job market diversification continue to
                support housing demand across all price ranges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 class="text-2xl text-gray-900 mb-6">
          Want to Learn More About Our Market Statistics?
        </h2>
        <NuxtLink
          to="/contact-us"
          class="inline-flex items-center px-6 py-3 bg-[#214f75] text-white rounded-lg hover:bg-[#1a3d5c] transition-colors cursor-pointer"
        >
          Contact Us
        </NuxtLink>
      </section>

      <!-- Disclaimer -->
      <div v-if="currentStats" class="mt-8 text-sm text-gray-500 text-center">
        <p class="mb-2">
          Prepared by {{ currentStats.prepared_by }} on
          {{ formatDate(currentStats.report_date) }}
        </p>
        <p>
          Information is deemed to be reliable, but is not guaranteed.
          Residential property subtypes include Single Family, Hobby Farm,
          C/D/T, Manufactured, Modular, Mobile, Multiple Residences, & Other.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Get Nuxt content v3 composables
const { data: allStats } = await useAsyncData("market-statistics", () => {
  return queryCollection("marketStatistics").all();
});

// Sort by year and month to get the latest statistics
const sortedStats = computed(() => {
  if (!allStats.value) return [];

  return [...allStats.value].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year; // Latest year first
    }
    // For same year, sort by month (assuming April for now, could be enhanced)
    return 0;
  });
});

// Get current and previous year statistics
const currentStats = computed(() => sortedStats.value[0] || null);
const previousStats = computed(() => {
  if (!currentStats.value) return null;

  // Find stats from same month in previous year
  return (
    sortedStats.value.find(
      (stat) =>
        stat.year === currentStats.value!.year - 1 &&
        stat.month === currentStats.value!.month
    ) || null
  );
});

// Format date for display
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// SEO Meta
useHead({
  title: "Market Statistics - Greater Springfield Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "View the latest residential market statistics for the Greater Springfield Area including Greene, Christian, and Webster Counties. Data provided by SOMO MLS.",
    },
  ],
});
</script>
