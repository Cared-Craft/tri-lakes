<template>
 <div
  :class="[
   cardBgColor,
   featured ? 'border-2' : '',
   featured ? borderColor : '',
   'rounded-xl p-8 text-center relative',
  ]"
 >
  <div
   v-if="featured"
   class="absolute -top-4 left-1/2 transform -translate-x-1/2"
  >
   <span
    :class="[
     badgeColor,
     'px-4 py-2 rounded-full text-sm text-white',
    ]"
   >
    {{ featuredText }}
   </span>
  </div>

  <div
   :class="[
    iconBgColor,
    'rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6',
   ]"
  >
   <Icon :name="icon" :class="['w-8 h-8', iconColor]" />
  </div>

  <h3 class="text-xl text-gray-900 mb-4">{{ title }}</h3>

  <p class="text-3xl text-gray-900 mb-4">{{ price }}</p>

  <p class="text-gray-600 mb-6">{{ description }}</p>

  <ul
   v-if="features && features.length > 0"
   class="text-sm text-gray-600 space-y-2 mb-8"
  >
   <li v-for="feature in features" :key="feature" class="flex items-start">
    <span class="mr-2">•</span>
    <span>{{ feature }}</span>
   </li>
  </ul>

  <NuxtLink
   v-if="ctaLink"
   :to="ctaLink"
   :external="external"
   :class="[
    buttonColor,
    'inline-flex items-center px-6 py-3 rounded-lg transition-colors w-full justify-center',
   ]"
  >
   {{ ctaText }}
   <Icon
    v-if="external"
    name="i-lucide-external-link"
    class="ml-2 w-4 h-4"
   />
  </NuxtLink>
 </div>
</template>

<script setup lang="ts">
interface Props {
 title: string;
 price: string;
 description: string;
 icon: string;
 features?: string[];
 ctaText?: string;
 ctaLink?: string;
 external?: boolean;
 featured?: boolean;
 featuredText?: string;
 variant?: "gray" | "yellow" | "blue" | "purple" | "green" | "red";
}

const props = withDefaults(defineProps<Props>(), {
 ctaText: "Get Started",
 external: false,
 featured: false,
 featuredText: "Most Popular",
 variant: "gray",
});

const cardBgColor = computed(() => {
 if (props.featured) {
  const variants = {
   gray: "bg-gray-50",
   yellow: "bg-yellow-50",
   blue: "bg-blue-50",
   purple: "bg-purple-50",
   green: "bg-green-50",
   red: "bg-red-50",
  };
  return variants[props.variant];
 }
 return "bg-gray-50";
});

const borderColor = computed(() => {
 const variants = {
  gray: "border-gray-200",
  yellow: "border-yellow-200",
  blue: "border-blue-200",
  purple: "border-purple-200",
  green: "border-green-200",
  red: "border-red-200",
 };
 return variants[props.variant];
});

const iconBgColor = computed(() => {
 const variants = {
  gray: "bg-gray-200",
  yellow: "bg-yellow-200",
  blue: "bg-blue-200",
  purple: "bg-purple-200",
  green: "bg-green-200",
  red: "bg-red-200",
 };
 return variants[props.variant];
});

const iconColor = computed(() => {
 const variants = {
  gray: "text-gray-600",
  yellow: "text-yellow-600",
  blue: "text-blue-600",
  purple: "text-purple-600",
  green: "text-green-600",
  red: "text-red-600",
 };
 return variants[props.variant];
});

const badgeColor = computed(() => {
 const variants = {
  gray: "bg-gray-600",
  yellow: "bg-yellow-600",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  green: "bg-green-600",
  red: "bg-red-600",
 };
 return variants[props.variant];
});

const buttonColor = computed(() => {
 const variants = {
  gray: "bg-gray-600 hover:bg-gray-700 text-white",
  yellow: "bg-yellow-600 hover:bg-yellow-700 text-white",
  blue: "bg-blue-600 hover:bg-blue-700 text-white",
  purple: "bg-purple-600 hover:bg-purple-700 text-white",
  green: "bg-green-600 hover:bg-green-700 text-white",
  red: "bg-red-600 hover:bg-red-700 text-white",
 };
 return variants[props.variant];
});
</script>
