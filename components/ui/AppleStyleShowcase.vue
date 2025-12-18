<template>
 <section class="py-24 relative bg-white">
  <div
   class="absolute inset-0 h-[400px] w-full"
   :class="backgroundGradientClasses"
  ></div>
  <div class="container mx-auto px-6 max-w-[1920px] relative z-10">
   <div class="text-center mb-12">
    <h2
     class="text-4xl md:text-5xl mb-4"
     :class="titleClasses"
    >
     <slot name="title">{{ title }}</slot>
    </h2>
    <div class="max-w-2xl mx-auto text-lg" :class="subtitleClasses">
     <slot name="subtitle">
      <p>{{ subtitle }}</p>
     </slot>
    </div>
   </div>

   <!-- Product showcase grid -->
   <div class="mb-24" :class="gridClasses">
    <div
     v-for="(item, index) in items"
     :key="index"
     class="flex flex-col items-center text-center p-8 rounded-[2rem]"
     :class="cardClasses"
    >
     <h3 class="text-2xl mb-3" :class="cardTitleClasses">
      {{ item.title }}
     </h3>
     <p class="mb-6 text-lg max-w-sm" :class="cardSubtitleClasses">
      {{ item.description }}
     </p>
     <div
      class="relative mb-10 w-full h-80 overflow-hidden rounded-[2rem]"
      :class="imageContainerClasses"
     >
      <img
       :src="item.image.src"
       :alt="item.image.alt"
       class="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
      />
     </div>

     <!-- Features list (optional) -->
     <div
      v-if="item.features && item.features.length > 0"
      class="space-y-3 mb-6"
      :class="featuresClasses"
     >
      <div
       v-for="(feature, featureIndex) in item.features"
       :key="featureIndex"
       class="flex items-center justify-center"
      >
       <Icon name="i-lucide-check" class="w-5 h-5 text-green-500 mr-2" />
       <span>{{ feature }}</span>
      </div>
     </div>

     <!-- Action buttons -->
     <div class="flex items-center justify-center space-x-4">
      <Button
       v-if="item.primaryAction"
       :to="item.primaryAction.to"
       :color="item.primaryAction.color || 'primary'"
       class="px-4 py-1.5 rounded-full text-sm "
       :class="primaryButtonClasses"
      >
       {{ item.primaryAction.text }}
      </Button>
      <NuxtLink
       v-if="item.secondaryAction"
       :to="item.secondaryAction.to"
       class="text-sm flex items-center"
       :class="secondaryLinkClasses"
      >
       {{ item.secondaryAction.text }}
       <Icon name="i-lucide-chevron-right" class="w-3.5 h-3.5 ml-1" />
      </NuxtLink>
     </div>
    </div>
   </div>

   <!-- CTA Banner -->
   <div
    v-if="showCtaBanner"
    class="rounded-3xl overflow-hidden p-12 text-center text-white relative max-w-4xl mx-auto"
    :class="ctaBannerClasses"
   >
    <!-- Background styling elements -->
    <div class="absolute inset-0">
     <!-- Gradient overlay -->
     <div class="absolute inset-0" :class="ctaGradientClasses"></div>

     <!-- Subtle pattern -->
     <div class="absolute inset-0 opacity-5 pattern-grid"></div>

     <!-- Decorative elements -->
     <div
      class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"
      :class="ctaDecorative1Classes"
     ></div>
     <div
      class="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"
      :class="ctaDecorative2Classes"
     ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
     <h3 class="text-3xl md:text-4xl font-light mb-4">
      <slot name="cta-title">{{ ctaTitle }}</slot>
     </h3>
     <div class="text-white mb-8 max-w-2xl mx-auto text-lg">
      <slot name="cta-content">
       <p>{{ ctaContent }}</p>
      </slot>
     </div>
     <slot name="cta-button">
      <Button
       v-if="ctaButton"
       :to="ctaButton.to"
       :color="ctaButton.color || 'primary'"
       class="px-10 py-3 rounded-full shadow-lg"
       :class="ctaButtonClasses"
      >
       {{ ctaButton.text }}
      </Button>
     </slot>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
interface Image {
 src: string;
 alt: string;
}

interface Action {
 to: string;
 text: string;
 color?: string;
}

interface ShowcaseItem {
 title: string;
 description: string;
 image: Image;
 features?: string[];
 primaryAction?: Action;
 secondaryAction?: Action;
}

interface CtaButton {
 to: string;
 text: string;
 color?: string;
}

interface Props {
 title?: string;
 subtitle?: string;
 items: ShowcaseItem[];
 columns?: 2 | 3 | 4;
 theme?: "light" | "primary" | "secondary" | "tertiary";
 showCtaBanner?: boolean;
 ctaTitle?: string;
 ctaContent?: string;
 ctaButton?: CtaButton;
 ctaTheme?: "primary" | "secondary" | "tertiary" | "success";
}

const props = withDefaults(defineProps<Props>(), {
 columns: 2,
 theme: "light",
 showCtaBanner: false,
 ctaTheme: "success",
});

const backgroundGradientClasses = computed(() => {
 switch (props.theme) {
  case "light":
   return "bg-gradient-to-b from-[#F1F1F1] to-white";
  case "primary":
   return "bg-gradient-to-b from-primary-100 to-white";
  case "secondary":
   return "bg-gradient-to-b from-secondary-100 to-white";
  case "tertiary":
   return "bg-gradient-to-b from-tertiary-100 to-white";
  default:
   return "bg-gradient-to-b from-[#F1F1F1] to-white";
 }
});

const titleClasses = computed(() => {
 return "text-gray-900";
});

const subtitleClasses = computed(() => {
 return "text-gray-500";
});

const gridClasses = computed(() => {
 const baseClasses = "grid gap-3";

 switch (props.columns) {
  case 2:
   return `${baseClasses} grid-cols-1 md:grid-cols-2`;
  case 3:
   return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
  case 4:
   return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-4`;
  default:
   return `${baseClasses} grid-cols-1 md:grid-cols-2`;
 }
});

const cardClasses = computed(() => {
 return "bg-gradient-to-b from-gray-100 via-gray-50 to-white";
});

const cardTitleClasses = computed(() => {
 return "text-gray-900";
});

const cardSubtitleClasses = computed(() => {
 return "text-gray-500";
});

const imageContainerClasses = computed(() => {
 return "bg-gradient-to-b from-gray-100 to-gray-50";
});

const featuresClasses = computed(() => {
 return "text-gray-600";
});

const primaryButtonClasses = computed(() => {
 return "text-white bg-blue-600 hover:bg-blue-700";
});

const secondaryLinkClasses = computed(() => {
 return "text-blue-600 hover:text-blue-800";
});

const ctaBannerClasses = computed(() => {
 switch (props.ctaTheme) {
  case "primary":
   return "bg-primary-600";
  case "secondary":
   return "bg-secondary-600";
  case "tertiary":
   return "bg-tertiary-600";
  case "success":
   return "bg-[#139E78]";
  default:
   return "bg-[#139E78]";
 }
});

const ctaGradientClasses = computed(() => {
 switch (props.ctaTheme) {
  case "primary":
   return "bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800";
  case "secondary":
   return "bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800";
  case "tertiary":
   return "bg-gradient-to-br from-tertiary-600 via-tertiary-700 to-tertiary-800";
  case "success":
   return "bg-gradient-to-br from-[#139E78] via-[#17B48C] to-[#1FCBA0]";
  default:
   return "bg-gradient-to-br from-[#139E78] via-[#17B48C] to-[#1FCBA0]";
 }
});

const ctaDecorative1Classes = computed(() => {
 switch (props.ctaTheme) {
  case "primary":
   return "bg-primary-800";
  case "secondary":
   return "bg-secondary-800";
  case "tertiary":
   return "bg-tertiary-800";
  case "success":
   return "bg-[#0D7C5F]";
  default:
   return "bg-[#0D7C5F]";
 }
});

const ctaDecorative2Classes = computed(() => {
 switch (props.ctaTheme) {
  case "primary":
   return "bg-primary-400";
  case "secondary":
   return "bg-secondary-400";
  case "tertiary":
   return "bg-tertiary-400";
  case "success":
   return "bg-[#2AD9AC]";
  default:
   return "bg-[#2AD9AC]";
 }
});

const ctaButtonClasses = computed(() => {
 return "text-blue-700 bg-white hover:bg-gray-100";
});
</script>

<style scoped>
.pattern-grid {
 background-image: linear-gradient(
   to right,
   rgba(33, 79, 117, 0.05) 1px,
   transparent 1px
  ),
  linear-gradient(to bottom, rgba(33, 79, 117, 0.05) 1px, transparent 1px);
 background-size: 20px 20px;
}
</style>
