<template>
 <section class="py-16" :class="sectionClasses">
  <div class="container mx-auto px-6">
   <div class="text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-light mb-4" :class="titleClasses">
     <slot name="title">{{ title }}</slot>
    </h2>
    <div class="max-w-2xl mx-auto" :class="subtitleClasses">
     <slot name="subtitle">
      <p>{{ subtitle }}</p>
     </slot>
    </div>
   </div>

   <div class="max-w-6xl mx-auto" :class="gridClasses">
    <!-- Event Cards -->
    <div
     v-for="(event, index) in events"
     :key="index"
     class="rounded-xl overflow-hidden shadow-sm card-hover"
     :class="cardClasses"
    >
     <div class="h-48 relative" :class="imageContainerClasses">
      <img
       v-if="event.imageUrl"
       :src="event.imageUrl"
       :alt="event.title"
       class="w-full h-full object-cover"
      />
      <div
       class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
      ></div>
     </div>
     <div class="p-6">
      <div class="text-sm mb-2" :class="dateClasses">
       {{ event.date }}
      </div>
      <h3 class="text-xl mb-3" :class="eventTitleClasses">
       {{ event.title }}
      </h3>
      <p class="mb-4" :class="descriptionClasses">
       {{ event.description }}
      </p>
      <Button
       :to="event.detailsUrl"
       variant="link"
       :color="buttonColor"
       class="inline-flex items-center hover:text-opacity-80"
       :class="buttonClasses"
       trailing-icon="i-lucide-chevron-right"
       trailing-icon-class="ml-1 w-4 h-4"
      >
       Details
      </Button>
     </div>
    </div>
   </div>

   <div v-if="showViewAll" class="text-center mt-12">
    <slot name="view-all-button">
     <Button
      :to="viewAllLink"
      :color="buttonColor"
      class="px-6 py-3 rounded-full "
      :class="viewAllButtonClasses"
      trailing-icon="i-lucide-chevron-right"
      trailing-icon-class="ml-2 w-4 h-4"
     >
      {{ viewAllText }}
     </Button>
    </slot>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
interface Event {
 date: string;
 title: string;
 description: string;
 imageUrl?: string;
 detailsUrl: string;
}

interface Props {
 title?: string;
 subtitle?: string;
 events: Event[];
 theme?: "light" | "dark" | "primary" | "secondary";
 columns?: 1 | 2 | 3 | 4;
 showViewAll?: boolean;
 viewAllLink?: string;
 viewAllText?: string;
 buttonColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
 theme: "light",
 columns: 3,
 showViewAll: true,
 viewAllText: "See all upcoming events",
 buttonColor: "primary",
});

const sectionClasses = computed(() => {
 switch (props.theme) {
  case "light":
   return "bg-white";
  case "dark":
   return "bg-primary-900";
  case "primary":
   return "bg-primary-50";
  case "secondary":
   return "bg-secondary-50";
  default:
   return "bg-white";
 }
});

const titleClasses = computed(() => {
 return props.theme === "light" ||
  props.theme === "primary" ||
  props.theme === "secondary"
  ? "text-gray-900"
  : "text-white";
});

const subtitleClasses = computed(() => {
 return props.theme === "light" ||
  props.theme === "primary" ||
  props.theme === "secondary"
  ? "text-gray-700"
  : "text-white/90";
});

const gridClasses = computed(() => {
 const baseClasses = "grid gap-8";

 switch (props.columns) {
  case 1:
   return `${baseClasses} grid-cols-1`;
  case 2:
   return `${baseClasses} grid-cols-1 md:grid-cols-2`;
  case 3:
   return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
  case 4:
   return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-4`;
  default:
   return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
 }
});

const cardClasses = computed(() => {
 switch (props.theme) {
  case "light":
   return "bg-white";
  case "dark":
   return "bg-primary-800/50 backdrop-blur-sm border border-primary-700/30";
  case "primary":
   return "bg-white border border-primary-200/50";
  case "secondary":
   return "bg-white border border-secondary-200/50";
  default:
   return "bg-white";
 }
});

const imageContainerClasses = computed(() => {
 switch (props.theme) {
  case "light":
   return "bg-primary-200";
  case "dark":
   return "bg-primary-700";
  case "primary":
   return "bg-primary-100";
  case "secondary":
   return "bg-secondary-100";
  default:
   return "bg-primary-200";
 }
});

const dateClasses = computed(() => {
 return props.theme === "light" ||
  props.theme === "primary" ||
  props.theme === "secondary"
  ? "text-gray-600"
  : "text-white/70";
});

const eventTitleClasses = computed(() => {
 return props.theme === "light" ||
  props.theme === "primary" ||
  props.theme === "secondary"
  ? "text-gray-900"
  : "text-white";
});

const descriptionClasses = computed(() => {
 return props.theme === "light" ||
  props.theme === "primary" ||
  props.theme === "secondary"
  ? "text-gray-700"
  : "text-white/85";
});

const buttonClasses = computed(() => {
 return props.theme === "light" ||
  props.theme === "primary" ||
  props.theme === "secondary"
  ? "text-primary-700 hover:text-primary-900"
  : "text-white hover:text-white/80";
});

const viewAllButtonClasses = computed(() => {
 switch (props.theme) {
  case "light":
   return "text-white bg-primary-700 hover:bg-primary-800";
  case "dark":
   return "text-primary-900 bg-white hover:bg-gray-100";
  case "primary":
   return "text-white bg-primary-700 hover:bg-primary-800";
  case "secondary":
   return "text-white bg-secondary-700 hover:bg-secondary-800";
  default:
   return "text-white bg-primary-700 hover:bg-primary-800";
 }
});
</script>

<style scoped>
.card-hover {
 transition: all 0.3s ease;
}

.card-hover:hover {
 transform: translateY(-4px);
 box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
