<template>
  <section class="py-20 relative overflow-hidden" :class="sectionClasses">
    <!-- Rich background with subtle patterns and gradients -->
    <div class="absolute inset-0 z-0">
      <!-- Base gradient background -->
      <div class="absolute inset-0" :class="gradientClasses"></div>

      <!-- Subtle pattern overlay -->
      <div
        v-if="showPattern"
        class="absolute inset-0 opacity-5 pattern-grid"
      ></div>

      <!-- Decorative blurred circles -->
      <div
        v-if="showDecorative"
        class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"
        :class="decorativeClasses.primary"
      ></div>
      <div
        v-if="showDecorative"
        class="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl transform -translate-x-1/3 translate-y-1/3"
        :class="decorativeClasses.secondary"
      ></div>
      <div
        v-if="showDecorative"
        class="absolute top-1/2 left-1/4 w-64 h-64 rounded-full opacity-10 blur-2xl"
        :class="decorativeClasses.accent"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-light mb-6 leading-tight relative"
          :class="titleClasses"
        >
          <slot name="title">{{ title }}</slot>
        </h2>
        <div class="max-w-2xl mx-auto" :class="subtitleClasses">
          <slot name="subtitle">
            <p>{{ subtitle }}</p>
          </slot>
        </div>
      </div>

      <div class="max-w-6xl mx-auto" :class="gridClasses">
        <div v-for="(feature, index) in features" :key="index">
          <div
            class="backdrop-blur-md rounded-2xl overflow-hidden border shadow-xl h-full"
            :class="cardClasses"
          >
            <div class="p-8 relative">
              <!-- Icon removed -->
              <h3 class="text-2xl mb-3" :class="featureTitleClasses">
                {{ feature.title }}
              </h3>
              <div class="leading-relaxed" :class="featureContentClasses">
                <slot :name="`feature-${index}`" :feature="feature">
                  <p>{{ feature.description }}</p>
                </slot>
              </div>

              <!-- Optional CTA -->
              <div v-if="feature.cta" class="mt-6">
                <Button
                  :to="feature.cta.to"
                  :variant="feature.cta.variant || 'link'"
                  :color="feature.cta.color || buttonColor"
                  class="inline-flex items-center"
                  :class="ctaClasses"
                >
                  {{ feature.cta.text }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FeatureCta {
  to: string;
  text: string;
  variant?: string;
  color?: string;
  icon?: string;
}

interface Feature {
  title: string;
  description: string;
  icon?: string;
  cta?: FeatureCta;
}

interface Props {
  title?: string;
  subtitle?: string;
  features: Feature[];
  theme?: "light" | "dark" | "primary" | "secondary" | "tertiary";
  columns?: 1 | 2 | 3 | 4;
  showPattern?: boolean;
  showDecorative?: boolean;
  buttonColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "dark",
  columns: 3,
  showPattern: true,
  showDecorative: true,
  buttonColor: "primary",
});

const sectionClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return "bg-gray-50";
    case "dark":
      return "bg-primary-900";
    case "primary":
      return "bg-primary-700";
    case "secondary":
      return "bg-secondary-700";
    case "tertiary":
      return "bg-tertiary-700";
    default:
      return "bg-primary-900";
  }
});

const gradientClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return "bg-gradient-to-br from-gray-50 via-white to-gray-100";
    case "dark":
      return "bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#214f75]";
    case "primary":
      return "bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800";
    case "secondary":
      return "bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-800";
    case "tertiary":
      return "bg-gradient-to-br from-tertiary-700 via-tertiary-600 to-tertiary-800";
    default:
      return "bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#214f75]";
  }
});

const titleClasses = computed(() => {
  return props.theme === "light" ? "text-gray-900" : "text-white";
});

const subtitleClasses = computed(() => {
  return props.theme === "light" ? "text-gray-700" : "text-white/90";
});

const gridClasses = computed(() => {
  const baseClasses = "grid gap-10";

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
      return "bg-white/80 border-gray-200/30";
    case "dark":
      return "bg-primary-800/40 border-primary-700/30";
    case "primary":
      return "bg-primary-600/40 border-primary-500/30";
    case "secondary":
      return "bg-secondary-600/40 border-secondary-500/30";
    case "tertiary":
      return "bg-tertiary-600/40 border-tertiary-500/30";
    default:
      return "bg-primary-800/40 border-primary-700/30";
  }
});


const featureTitleClasses = computed(() => {
  return props.theme === "light" ? "text-gray-900" : "text-white";
});

const featureContentClasses = computed(() => {
  return props.theme === "light" ? "text-gray-700" : "text-white/85";
});

const ctaClasses = computed(() => {
  return props.theme === "light"
    ? "text-primary-700 hover:text-primary-900"
    : "text-white hover:text-white/80";
});

const decorativeClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return {
        primary: "bg-primary-200/50",
        secondary: "bg-secondary-200/50",
        accent: "bg-tertiary-200/50",
      };
    case "dark":
      return {
        primary: "bg-tertiary-500/10",
        secondary: "bg-secondary-500/10",
        accent: "bg-quaternary-500/10",
      };
    case "primary":
      return {
        primary: "bg-primary-500/10",
        secondary: "bg-secondary-500/10",
        accent: "bg-tertiary-500/10",
      };
    case "secondary":
      return {
        primary: "bg-secondary-500/10",
        secondary: "bg-primary-500/10",
        accent: "bg-tertiary-500/10",
      };
    case "tertiary":
      return {
        primary: "bg-tertiary-500/10",
        secondary: "bg-primary-500/10",
        accent: "bg-secondary-500/10",
      };
    default:
      return {
        primary: "bg-tertiary-500/10",
        secondary: "bg-secondary-500/10",
        accent: "bg-quaternary-500/10",
      };
  }
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
