<template>
 <div
  class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
 >
  <div class="mb-6">
   <h3
    class="text-sm text-gray-600 uppercase tracking-wide text-center"
   >
    {{ label }}
   </h3>
  </div>

  <!-- Current Year Data -->
  <div class="mb-4 text-center">
   <div class="text-2xl text-blue-600 mb-1">
    {{ formattedCurrentValue }}
   </div>
   <div class="text-sm text-gray-600 ">
    {{ currentPeriod }}
   </div>
  </div>

  <!-- Previous Year Data & Comparison -->
  <div v-if="previousValue !== null" class="border-t pt-4">
   <div class="text-center mb-3">
    <div class="text-xl text-gray-700 mb-1">
     {{ formattedPreviousValue }}
    </div>
    <div class="text-sm text-gray-600 ">
     {{ previousPeriod }}
    </div>
   </div>

   <!-- Change Indicator -->
   <div class="flex items-center justify-center">
    <div class="flex items-center text-sm text-gray-500">
     <svg
      v-if="isPositiveChange"
      class="w-4 h-4 mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
     >
      <path
       fill-rule="evenodd"
       d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
       clip-rule="evenodd"
      />
     </svg>
     <svg
      v-else-if="isNegativeChange"
      class="w-4 h-4 mr-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
     >
      <path
       fill-rule="evenodd"
       d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
       clip-rule="evenodd"
      />
     </svg>
     {{ changeText }}
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
interface Props {
 label: string;
 currentValue: number;
 previousValue?: number | null;
 currentPeriod: string;
 previousPeriod?: string;
 formatType?: "currency" | "number";
}

const props = withDefaults(defineProps<Props>(), {
 previousValue: null,
 previousPeriod: "",
 formatType: "number",
});

// Format values based on type
const formattedCurrentValue = computed(() => {
 if (props.formatType === "currency") {
  return new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   minimumFractionDigits: 0,
   maximumFractionDigits: 0,
  }).format(props.currentValue);
 }
 return new Intl.NumberFormat("en-US").format(props.currentValue);
});

const formattedPreviousValue = computed(() => {
 if (props.previousValue === null) return "";

 if (props.formatType === "currency") {
  return new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   minimumFractionDigits: 0,
   maximumFractionDigits: 0,
  }).format(props.previousValue);
 }
 return new Intl.NumberFormat("en-US").format(props.previousValue);
});

// Calculate change percentage and direction
const changePercent = computed(() => {
 if (props.previousValue === null || props.previousValue === 0) return 0;
 return (
  ((props.currentValue - props.previousValue) / props.previousValue) * 100
 );
});

const isPositiveChange = computed(() => changePercent.value > 0);
const isNegativeChange = computed(() => changePercent.value < 0);

const changeText = computed(() => {
 if (props.previousValue === null) return "";

 const absChange = Math.abs(changePercent.value);
 const direction = isPositiveChange.value
  ? "increase"
  : isNegativeChange.value
  ? "decrease"
  : "no change";

 if (absChange === 0) return "No change";

 return `${absChange.toFixed(1)}% ${direction}`;
});
</script>
