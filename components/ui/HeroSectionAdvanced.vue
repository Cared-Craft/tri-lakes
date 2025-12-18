<template>
 <section
  class="hero-section relative overflow-hidden"
  :class="sectionClasses"
 >
  <!-- Layered Background -->
  <div class="absolute inset-0 z-0">
   <!-- Light blue-grey to light grey gradient background -->
   <div
    class="absolute inset-0 bg-gradient-to-b from-slate-300 to-gray-200"
   ></div>
   <!-- Subtle overlay for texture -->
   <div class="absolute inset-0 bg-white/10"></div>
  </div>

  <!-- Subtle Patterns -->
  <div
   class="absolute inset-0 opacity-5 pattern-grid"
   v-if="showPattern"
  ></div>

  <!-- Content Container -->
  <div class="container mx-auto px-6 relative z-10" :class="paddingClasses">
   <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <!-- Text Content -->
    <div :class="textColumnClasses">
     <div class="relative">
      <span
       v-if="showDecorative"
       class="absolute -top-6 -left-6 w-20 h-20 rounded-full opacity-50 blur-xl"
       :class="decorativeClasses"
      ></span>
      <h1
       class="text-5xl md:text-6xl font-light mb-6 leading-tight relative"
       :class="titleClasses"
      >
       <slot name="title">{{ title }}</slot>
      </h1>
      <p class="text-xl mb-10 relative" :class="subtitleClasses">
       <slot name="subtitle">{{ subtitle }}</slot>
      </p>
      <div class="flex flex-wrap gap-4 relative">
       <slot name="actions">
        <Button
         v-if="primaryAction"
         :to="primaryAction.to"
         :color="primaryAction.color || 'primary'"
         class="px-8 py-3 rounded-full text-white shadow-md hover:shadow-lg transition-all"
        >
         {{ primaryAction.text }}
        </Button>
        <Button
         v-if="secondaryAction"
         :to="secondaryAction.to"
         :variant="secondaryAction.variant || 'outline'"
         :color="secondaryAction.color || 'secondary'"
         class="px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
        >
         {{ secondaryAction.text }}
        </Button>
       </slot>
      </div>
     </div>
    </div>

    <!-- Image Content -->
    <div :class="imageColumnClasses">
     <div class="relative">
      <!-- Main Image -->
      <div
       class="relative z-20 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 mx-auto max-w-md"
      >
       <img
        :src="mainImage"
        :alt="mainImageAlt"
        class="w-full h-[350px] object-cover"
       />
       <div
        class="absolute inset-0 bg-gradient-to-t from-[#0f2a3f]/40 to-transparent"
       ></div>
       <div
        v-if="imageOverlay"
        class="absolute bottom-0 left-0 right-0 p-6"
       >
        <div
         class="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg"
        >
         <div class="flex items-center space-x-2 mb-2">
          <Icon
           :name="imageOverlay.icon"
           class="w-5 h-5 text-primary-600"
          />
          <span class="text-sm text-primary-700">
           {{ imageOverlay.badge }}
          </span>
         </div>
         <h3 class="text-lg text-primary-900">
          {{ imageOverlay.title }}
         </h3>
        </div>
       </div>
      </div>

      <!-- Floating Elements -->
      <div
       v-if="floatingImages && floatingImages.length > 0"
       v-for="(floatingImg, index) in floatingImages"
       :key="index"
       class="absolute z-10 rounded-xl overflow-hidden shadow-lg opacity-90 hidden lg:block"
       :class="floatingImg.classes"
      >
       <img
        :src="floatingImg.src"
        :alt="floatingImg.alt"
        class="w-full h-full object-cover"
       />
       <div
        class="absolute inset-0"
        :class="floatingImg.overlayClasses"
       ></div>
      </div>

      <!-- Decorative Elements -->
      <div
       v-if="showDecorative"
       class="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full opacity-50 blur-3xl"
      ></div>
      <div
       v-if="showDecorative"
       class="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary-100 rounded-full opacity-50 blur-3xl"
      ></div>
     </div>
    </div>
   </div>

   <!-- Stats Bar -->
   <div
    v-if="stats && stats.length > 0"
    class="mt-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-5xl mx-auto"
   >
    <div class="grid gap-8" :class="statsGridClasses">
     <div v-for="(stat, index) in stats" :key="index" class="text-center">
      <div class="text-4xl text-primary-700 mb-2">
       {{ stat.value }}
      </div>
      <div class="text-primary-600">{{ stat.label }}</div>
     </div>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
interface FloatingImage {
 src: string;
 alt: string;
 classes: string;
 overlayClasses: string;
}

interface ImageOverlay {
 icon: string;
 badge: string;
 title: string;
}

interface Action {
 to: string;
 text: string;
 color?: string;
 variant?: string;
}

interface Stat {
 value: string;
 label: string;
}

interface Props {
 title?: string;
 subtitle?: string;
 mainImage: string;
 mainImageAlt: string;
 backgroundImage?: string;
 backgroundImageAlt?: string;
 imageOverlay?: ImageOverlay;
 floatingImages?: FloatingImage[];
 stats?: Stat[];
 primaryAction?: Action;
 secondaryAction?: Action;
 layout?: "default" | "reversed";
 theme?: "light" | "dark" | "primary";
 showPattern?: boolean;
 showDecorative?: boolean;
 minHeight?: "default" | "full" | "screen";
}

const props = withDefaults(defineProps<Props>(), {
 layout: "default",
 theme: "light",
 showPattern: true,
 showDecorative: true,
 minHeight: "default",
});

const sectionClasses = computed(() => {
 const classes = [];

 if (props.theme === "light") {
  classes.push("bg-gray-50");
 } else if (props.theme === "dark") {
  classes.push("bg-primary-900");
 } else if (props.theme === "primary") {
  classes.push("bg-primary-700");
 }

 if (props.minHeight === "full") {
  classes.push("min-h-screen");
 } else if (props.minHeight === "screen") {
  classes.push("h-screen");
 }

 return classes;
});

const gradientClasses = computed(() => {
 if (props.theme === "light") {
  return "bg-gradient-to-br from-white via-white/95 to-primary-50/90";
 } else if (props.theme === "dark") {
  return "bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#0f2a3f]";
 } else {
  return "bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800";
 }
});

const overlayClasses = computed(() => {
 if (props.theme === "light") {
  return "bg-gray-50/80";
 } else {
  return "bg-[#0f2a3f]/80";
 }
});

const backgroundImageClasses = computed(() => {
 if (props.theme === "light") {
  return "opacity-10";
 } else {
  return "opacity-20";
 }
});

const paddingClasses = computed(() => {
 if (props.minHeight === "screen") {
  return "py-16";
 } else {
  return "py-20";
 }
});

const textColumnClasses = computed(() => {
 return props.layout === "reversed"
  ? "order-1 lg:order-2"
  : "order-2 lg:order-1";
});

const imageColumnClasses = computed(() => {
 return props.layout === "reversed"
  ? "order-2 lg:order-1"
  : "order-1 lg:order-2";
});

const titleClasses = computed(() => {
 if (props.theme === "light") {
  return "text-primary-900";
 } else {
  return "text-white";
 }
});

const subtitleClasses = computed(() => {
 if (props.theme === "light") {
  return "text-primary-700";
 } else {
  return "text-white/90";
 }
});

const decorativeClasses = computed(() => {
 return "bg-tertiary-100";
});

const statsGridClasses = computed(() => {
 if (!props.stats) return "";

 const count = props.stats.length;
 if (count === 1) return "grid-cols-1";
 if (count === 2) return "grid-cols-1 md:grid-cols-2";
 if (count === 3) return "grid-cols-1 md:grid-cols-3";
 if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
 return "grid-cols-1 md:grid-cols-3";
});
</script>

<style scoped>
.hero-section {
 position: relative;
 overflow: hidden;
}

.pattern-grid {
 background-image: linear-gradient(
   to right,
   rgba(33, 79, 117, 0.05) 1px,
   transparent 1px
  ),
  linear-gradient(to bottom, rgba(33, 79, 117, 0.05) 1px, transparent 1px);
 background-size: 20px 20px;
}

@media (min-width: 1024px) {
 .hero-section {
  min-height: 60vh;
 }
}
</style>
