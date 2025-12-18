<template>
 <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
  <div class="text-center mb-8">
   <h2 class="text-2xl text-gray-900 mb-4">
    Membership Dues Calculator
   </h2>
   <p class="text-gray-600">
    Calculate your annual membership dues based on your membership type and
    options.
   </p>
  </div>

  <form @submit.prevent="calculateDues" class="space-y-6">
   <!-- Membership Type -->
   <div>
    <label class="block text-sm text-gray-700 mb-3">
     Membership Type
    </label>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
     <label
      class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      :class="
       membershipType === 'primary'
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200'
      "
     >
      <input
       type="radio"
       v-model="membershipType"
       value="primary"
       class="sr-only"
      />
      <div class="flex items-center">
       <div
        class="w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center"
        :class="
         membershipType === 'primary'
          ? 'border-blue-500'
          : 'border-gray-300'
        "
       >
        <div
         v-if="membershipType === 'primary'"
         class="w-2 h-2 bg-blue-500 rounded-full"
        ></div>
       </div>
       <div>
        <div class="text-gray-900">Primary Membership</div>
        <div class="text-sm text-gray-500">
         Full GSBOR membership with all benefits
        </div>
       </div>
      </div>
     </label>

     <label
      class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      :class="
       membershipType === 'secondary'
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200'
      "
     >
      <input
       type="radio"
       v-model="membershipType"
       value="secondary"
       class="sr-only"
      />
      <div class="flex items-center">
       <div
        class="w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center"
        :class="
         membershipType === 'secondary'
          ? 'border-blue-500'
          : 'border-gray-300'
        "
       >
        <div
         v-if="membershipType === 'secondary'"
         class="w-2 h-2 bg-blue-500 rounded-full"
        ></div>
       </div>
       <div>
        <div class="text-gray-900">
         Secondary Membership
        </div>
        <div class="text-sm text-gray-500">
         Additional association membership
        </div>
       </div>
      </div>
     </label>

     <label
      class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      :class="
       membershipType === 'mls-only'
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200'
      "
     >
      <input
       type="radio"
       v-model="membershipType"
       value="mls-only"
       class="sr-only"
      />
      <div class="flex items-center">
       <div
        class="w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center"
        :class="
         membershipType === 'mls-only'
          ? 'border-blue-500'
          : 'border-gray-300'
        "
       >
        <div
         v-if="membershipType === 'mls-only'"
         class="w-2 h-2 bg-blue-500 rounded-full"
        ></div>
       </div>
       <div>
        <div class="text-gray-900">MLS Only</div>
        <div class="text-sm text-gray-500">
         MLS access without full membership
        </div>
       </div>
      </div>
     </label>

     <label
      class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      :class="
       membershipType === 'affiliate'
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200'
      "
     >
      <input
       type="radio"
       v-model="membershipType"
       value="affiliate"
       class="sr-only"
      />
      <div class="flex items-center">
       <div
        class="w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center"
        :class="
         membershipType === 'affiliate'
          ? 'border-blue-500'
          : 'border-gray-300'
        "
       >
        <div
         v-if="membershipType === 'affiliate'"
         class="w-2 h-2 bg-blue-500 rounded-full"
        ></div>
       </div>
       <div>
        <div class="text-gray-900">
         Affiliate Membership
        </div>
        <div class="text-sm text-gray-500">
         For real estate industry professionals
        </div>
       </div>
      </div>
     </label>
    </div>
   </div>

   <!-- Member Status -->
   <div v-if="membershipType !== 'affiliate'">
    <label class="block text-sm text-gray-700 mb-3">
     Member Status
    </label>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
     <label
      class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      :class="
       memberStatus === 'new'
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200'
      "
     >
      <input
       type="radio"
       v-model="memberStatus"
       value="new"
       class="sr-only"
      />
      <div class="flex items-center">
       <div
        class="w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center"
        :class="
         memberStatus === 'new' ? 'border-blue-500' : 'border-gray-300'
        "
       >
        <div
         v-if="memberStatus === 'new'"
         class="w-2 h-2 bg-blue-500 rounded-full"
        ></div>
       </div>
       <div>
        <div class="text-gray-900">New Member</div>
        <div class="text-sm text-gray-500">First-time GSBOR member</div>
       </div>
      </div>
     </label>

     <label
      class="relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
      :class="
       memberStatus === 'returning'
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200'
      "
     >
      <input
       type="radio"
       v-model="memberStatus"
       value="returning"
       class="sr-only"
      />
      <div class="flex items-center">
       <div
        class="w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center"
        :class="
         memberStatus === 'returning'
          ? 'border-blue-500'
          : 'border-gray-300'
        "
       >
        <div
         v-if="memberStatus === 'returning'"
         class="w-2 h-2 bg-blue-500 rounded-full"
        ></div>
       </div>
       <div>
        <div class="text-gray-900">Returning Member</div>
        <div class="text-sm text-gray-500">Previous GSBOR member</div>
       </div>
      </div>
     </label>
    </div>
   </div>

   <!-- Additional Options -->
   <div
    v-if="membershipType === 'primary' || membershipType === 'secondary'"
   >
    <label class="block text-sm text-gray-700 mb-3">
     Additional Services
    </label>
    <div class="space-y-3">
     <label class="flex items-center">
      <input
       type="checkbox"
       v-model="includeSupra"
       class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <span class="ml-3 text-gray-700">Supra Key Access</span>
     </label>
     <label class="flex items-center">
      <input
       type="checkbox"
       v-model="includeTechSuite"
       class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <span class="ml-3 text-gray-700">MLS NXT Tech Suite</span>
     </label>
    </div>
   </div>

   <!-- Calculate Button -->
   <div class="pt-6">
    <Button
     type="submit"
     color="primary"
     class="w-full py-3"
     :disabled="!membershipType"
    >
     Calculate Dues
    </Button>
   </div>
  </form>

  <!-- Results -->
  <div
   v-if="showResults"
   class="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
  >
   <h3 class="text-lg text-gray-900 mb-4">
    Your Estimated Annual Dues
   </h3>

   <div class="space-y-3">
    <div class="flex justify-between items-center">
     <span class="text-gray-600">Base Membership:</span>
     <span >${{ baseDues.toFixed(2) }}</span>
    </div>

    <div
     v-if="applicationFee > 0"
     class="flex justify-between items-center"
    >
     <span class="text-gray-600">Application Fee:</span>
     <span >${{ applicationFee.toFixed(2) }}</span>
    </div>

    <div v-if="supraCost > 0" class="flex justify-between items-center">
     <span class="text-gray-600">Supra Key Access:</span>
     <span >${{ supraCost.toFixed(2) }}</span>
    </div>

    <div v-if="techSuiteCost > 0" class="flex justify-between items-center">
     <span class="text-gray-600">Tech Suite:</span>
     <span >${{ techSuiteCost.toFixed(2) }}</span>
    </div>

    <div class="border-t border-gray-300 pt-3">
     <div class="flex justify-between items-center text-lg ">
      <span class="text-gray-900">Total Annual Cost:</span>
      <span class="text-blue-600">${{ totalDues.toFixed(2) }}</span>
     </div>
    </div>
   </div>

   <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
    <div class="flex items-start">
     <Icon
      name="i-lucide-info"
      class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
     />
     <div class="text-blue-800 text-sm">
      <p class="mb-1">Important Notes:</p>
      <ul class="space-y-1 text-blue-700">
       <li>• Dues are payable annually by January 31st</li>
       <li>• Late fees apply after February 1st</li>
       <li>• Previous members may have different rates</li>
       <li>• Contact support@gsbor.com for specific questions</li>
      </ul>
     </div>
    </div>
   </div>

   <div class="mt-6 flex flex-col sm:flex-row gap-3">
    <Button
     to="/new-members/become-a-member"
     color="primary"
     class="flex-1"
    >
     Apply for Membership
    </Button>
    <Button
     to="/contact-us"
     color="primary"
     variant="outline"
     class="flex-1"
    >
     Contact Us
    </Button>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

// Form data
const membershipType = ref("");
const memberStatus = ref("new");
const includeSupra = ref(false);
const includeTechSuite = ref(false);
const showResults = ref(false);

// Dues structure (example rates - should be updated with actual GSBOR rates)
const duesStructure = {
 primary: {
  new: 450,
  returning: 450,
  applicationFee: 150,
 },
 secondary: {
  new: 275,
  returning: 275,
  applicationFee: 100,
 },
 "mls-only": {
  new: 200,
  returning: 200,
  applicationFee: 75,
 },
 affiliate: {
  new: 325,
  returning: 325,
  applicationFee: 125,
 },
};

const additionalCosts = {
 supra: 85,
 techSuite: 120,
};

// Computed values
const baseDues = computed(() => {
 if (!membershipType.value) return 0;
 return duesStructure[membershipType.value as keyof typeof duesStructure][
  memberStatus.value as "new" | "returning"
 ];
});

const applicationFee = computed(() => {
 if (!membershipType.value || memberStatus.value === "returning") return 0;
 return duesStructure[membershipType.value as keyof typeof duesStructure]
  .applicationFee;
});

const supraCost = computed(() => {
 return includeSupra.value ? additionalCosts.supra : 0;
});

const techSuiteCost = computed(() => {
 return includeTechSuite.value ? additionalCosts.techSuite : 0;
});

const totalDues = computed(() => {
 return (
  baseDues.value +
  applicationFee.value +
  supraCost.value +
  techSuiteCost.value
 );
});

// Methods
function calculateDues() {
 showResults.value = true;

 // Scroll to results
 setTimeout(() => {
  const resultsElement = document.querySelector(".mt-8.p-6.bg-gray-50");
  if (resultsElement) {
   resultsElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
 }, 100);
}

// Reset form when membership type changes
watch(membershipType, () => {
 showResults.value = false;
 memberStatus.value = "new";
 includeSupra.value = false;
 includeTechSuite.value = false;
});
</script>
