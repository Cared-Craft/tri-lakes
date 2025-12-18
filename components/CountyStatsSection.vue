<template>
 <div class="bg-gray-50 rounded-2xl p-8 mb-8">
  <div class="mb-6">
   <h2 class="text-2xl text-gray-900 mb-2">
    {{ countyName }} County Market Statistics
   </h2>
   <p class="text-gray-600">{{ currentPeriod }}</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   <MarketStatCard
    label="Total Units Sold"
    :current-value="currentData.total_units_sold"
    :previous-value="previousData?.total_units_sold"
    :current-period="currentPeriod"
    :previous-period="previousPeriod"
    format-type="number"
   />

   <MarketStatCard
    label="Total Volume"
    :current-value="currentData.total_volume"
    :previous-value="previousData?.total_volume"
    :current-period="currentPeriod"
    :previous-period="previousPeriod"
    format-type="currency"
   />

   <MarketStatCard
    label="Average Sale Price"
    :current-value="currentData.average_sale_price"
    :previous-value="previousData?.average_sale_price"
    :current-period="currentPeriod"
    :previous-period="previousPeriod"
    format-type="currency"
   />

   <MarketStatCard
    label="Median Sale Price"
    :current-value="currentData.median_sale_price"
    :previous-value="previousData?.median_sale_price"
    :current-period="currentPeriod"
    :previous-period="previousPeriod"
    format-type="currency"
   />

   <MarketStatCard
    label="Average Days on Market"
    :current-value="currentData.average_days_on_market"
    :previous-value="previousData?.average_days_on_market"
    :current-period="currentPeriod"
    :previous-period="previousPeriod"
    format-type="number"
   />

   <MarketStatCard
    label="Cumulative Days on Market"
    :current-value="currentData.cumulative_days_on_market"
    :previous-value="previousData?.cumulative_days_on_market"
    :current-period="currentPeriod"
    :previous-period="previousPeriod"
    format-type="number"
   />
  </div>
 </div>
</template>

<script setup lang="ts">
interface CountyData {
 total_units_sold: number;
 total_volume: number;
 average_sale_price: number;
 median_sale_price: number;
 average_days_on_market: number;
 cumulative_days_on_market: number;
}

interface Props {
 countyName: string;
 currentData: CountyData;
 previousData?: CountyData | null;
 currentPeriod: string;
 previousPeriod?: string;
}

const props = withDefaults(defineProps<Props>(), {
 previousData: null,
 previousPeriod: "",
});
</script>
