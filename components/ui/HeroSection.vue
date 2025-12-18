<script setup lang="ts">
interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  showSteps?: boolean;
  ctaButtons?: Array<{
    text: string;
    link: string;
    variant: "primary" | "secondary" | "outline";
    color?: string;
  }>;
  variant?: "default" | "compact" | "large";
  showFloatingCard?: boolean;
  floatingCardContent?: {
    icon?: string;
    label?: string;
    title?: string;
  };
}

const props = withDefaults(defineProps<HeroProps>(), {
  variant: "default",
  showSteps: false,
  showFloatingCard: false,
  backgroundImage: undefined,
});

// List of suitable background images from header-images directory
const backgroundImages = [
  '/images/header-images/header-bg-1.png',
];

// Randomly select a background image if none provided (only once on mount)
const selectedBackgroundImage = ref<string>('');

onMounted(() => {
  if (props.backgroundImage) {
    selectedBackgroundImage.value = props.backgroundImage;
  } else {
    // Randomly select from available images
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    selectedBackgroundImage.value = backgroundImages[randomIndex];
  }
});

// Dynamic classes based on variant
const sectionClasses = computed(() => {
  const base = "hero-section relative overflow-hidden";
  const variants = {
    default: "py-16",
    compact: "py-14",
    large: "py-20",
  };
  return `${base} ${variants[props.variant]}`;
});

// Background style for the section
const sectionStyle = computed(() => {
  if (!selectedBackgroundImage.value) return {};
  
  return {
    backgroundImage: `url(${selectedBackgroundImage.value})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
  };
});

const titleClasses = computed(() => {
  const base = "font-bold mb-3 leading-tight relative";
  // Always use white text when we have a background image
  const colorClass = selectedBackgroundImage.value ? "text-white" : "text-primary-900";
  const variants = {
    default: "text-3xl md:text-4xl",
    compact: "text-2xl md:text-3xl",
    large: "text-4xl md:text-5xl",
  };
  return `${base} ${colorClass} ${variants[props.variant]}`;
});
</script>

<template>
  <section :class="sectionClasses" :style="sectionStyle">
    <!-- Overlay for text readability when image is present -->
    <div
      v-if="selectedBackgroundImage"
      class="absolute inset-0 bg-gradient-to-r from-[#0f2a3f]/95 via-[#1a3f5f]/85 to-[#214f75]/65 z-[1]"
    ></div>

    <!-- Default gradient background (only when no image) -->
    <div
      v-if="!selectedBackgroundImage"
      class="absolute inset-0 bg-gradient-to-b from-slate-300 to-gray-200 z-0"
    ></div>
    <div
      v-if="!selectedBackgroundImage"
      class="absolute inset-0 bg-white/10 z-0"
    ></div>

    <!-- Subtle Patterns -->
    <div class="absolute inset-0 opacity-5 pattern-grid z-0"></div>

    <!-- Content Container -->
    <div class="container mx-auto px-6 relative z-10">
      <div :class="['grid items-center', showFloatingCard || $slots.visual ? 'grid-cols-1 lg:grid-cols-2 gap-12' : 'grid-cols-1']">
        <!-- Left Column: Text Content -->
        <div :class="['relative', showFloatingCard || $slots.visual ? 'order-2 lg:order-1' : '']">
          <div class="relative">
            <!-- Title - Always first -->
            <h1 :class="titleClasses" v-html="title"></h1>

            <!-- Subtitle - Always after h1 -->
            <p v-if="subtitle" :class="['text-lg mb-2', selectedBackgroundImage ? 'text-white' : 'text-primary-600']">
              {{ subtitle }}
            </p>

            <!-- Description -->
            <p
              v-if="description"
              :class="['text-xl mb-8 relative', selectedBackgroundImage ? 'text-white/90' : 'text-primary-700']"
            >
              {{ description }}
            </p>

            <!-- CTA Buttons -->
            <div
              v-if="ctaButtons?.length"
              class="flex flex-wrap gap-4 relative"
            >
              <Button
                v-for="(button, index) in ctaButtons"
                :key="index"
                :to="button.link"
                :variant="button.variant"
                :color="button.color || 'primary'"
                class="px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                :class="{
                  'text-white': button.variant === 'primary',
                }"
              >
                {{ button.text }}
              </Button>
            </div>

            <!-- Step Indicator Slot -->
            <div v-if="showSteps" class="mt-12">
              <slot name="steps" />
            </div>
          </div>
        </div>

        <!-- Right Column: Visual Content (only shows if slot is provided or floating card) -->
        <div v-if="showFloatingCard || $slots.visual" class="order-1 lg:order-2 relative">
          <slot name="visual">
            <!-- Floating Card -->
            <div
              v-if="showFloatingCard && floatingCardContent"
              class="relative z-20 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-md mx-auto"
            >
              <div class="flex items-center space-x-2 mb-2">
                <Icon
                  v-if="floatingCardContent.icon"
                  :name="floatingCardContent.icon"
                  class="w-5 h-5 text-primary-600"
                />
                <span class="text-sm text-primary-700">
                  {{ floatingCardContent.label }}
                </span>
              </div>
              <h3 class="text-lg text-primary-900">
                {{ floatingCardContent.title }}
              </h3>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pattern-grid {
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(29, 53, 87, 0.15) 1px,
    transparent 0
  );
  background-size: 20px 20px;
}
</style>
