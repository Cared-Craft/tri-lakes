<template>
  <section class="py-20 relative overflow-hidden" :class="sectionClasses">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Gradient overlay -->
      <div class="absolute inset-0" :class="gradientClasses"></div>

      <!-- Pattern -->
      <div
        v-if="showPattern"
        class="absolute inset-0 opacity-5 pattern-grid"
      ></div>

      <!-- Decorative elements -->
      <div
        v-if="showDecorative"
        class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"
        :class="decorativeClasses.primary"
      ></div>
      <div
        v-if="showDecorative"
        class="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/4"
        :class="decorativeClasses.secondary"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <!-- Text Content -->
        <div :class="textColumnClasses">
          <div class="relative">
            <span
              v-if="showDecorative"
              class="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20 blur-xl"
              :class="decorativeAccentClasses"
            ></span>
            <h2
              class="text-3xl md:text-4xl font-light mb-6 leading-tight relative"
              :class="titleClasses"
            >
              <slot name="title">{{ title }}</slot>
            </h2>
            <div
              class="mb-8 leading-relaxed relative text-lg"
              :class="contentClasses"
            >
              <slot name="content">
                <p>{{ content }}</p>
              </slot>
            </div>
            <div v-if="showCta" class="relative">
              <slot name="cta">
                <NuxtLink
                  v-if="ctaLink"
                  :to="ctaLink.to"
                  class="inline-flex items-center group text-lg border-b border-transparent hover:border-current transition-colors duration-300"
                  :class="ctaClasses"
                >
                  <span>{{ ctaLink.text }}</span>
                  <Icon
                    name="i-lucide-chevron-right"
                    class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  />
                </NuxtLink>
              </slot>
            </div>
          </div>
        </div>

        <!-- Image/Media Content -->
        <div :class="imageColumnClasses">
          <div class="relative">
            <!-- Main content card -->
            <div
              class="backdrop-blur-sm rounded-2xl overflow-hidden border shadow-xl"
              :class="cardClasses"
            >
              <div
                v-if="image && !iconMode"
                class="aspect-w-16 aspect-h-9 relative overflow-hidden"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                  :class="imageClasses"
                />
                <div
                  class="absolute inset-0"
                  :class="imageOverlayClasses"
                ></div>
              </div>
              <div
                v-if="image && iconMode"
                class="h-32 flex items-center justify-center py-8"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-20 h-20 object-contain"
                  :class="imageClasses"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl mb-3" :class="cardTitleClasses">
                  <slot name="card-title">{{ cardTitle }}</slot>
                </h3>
                <div :class="cardContentClasses">
                  <slot name="card-content">
                    <p>{{ cardContent }}</p>
                  </slot>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div
              v-if="showDecorative"
              class="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl"
              :class="decorativeClasses.accent1"
            ></div>
            <div
              v-if="showDecorative"
              class="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl"
              :class="decorativeClasses.accent2"
            ></div>
          </div>
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

interface CtaLink {
  to: string;
  text: string;
}

interface Props {
  title?: string;
  content?: string;
  cardTitle?: string;
  cardContent?: string;
  image?: Image;
  ctaLink?: CtaLink;
  layout?: "default" | "reversed";
  theme?: "light" | "dark" | "primary" | "secondary" | "tertiary";
  showPattern?: boolean;
  showDecorative?: boolean;
  showCta?: boolean;
  iconMode?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  layout: "default",
  theme: "dark",
  showPattern: true,
  showDecorative: true,
  showCta: true,
  iconMode: false,
});

const sectionClasses = computed(() => {
  const classes = [];

  switch (props.theme) {
    case "light":
      classes.push("bg-white");
      break;
    case "dark":
      classes.push("bg-primary-900");
      break;
    case "primary":
      classes.push("bg-primary-700");
      break;
    case "secondary":
      classes.push("bg-secondary-700");
      break;
    case "tertiary":
      classes.push("bg-tertiary-700");
      break;
  }

  return classes;
});

const gradientClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return "bg-gradient-to-br from-gray-50 via-white to-gray-100";
    case "dark":
      return "bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#0f2a3f]";
    case "primary":
      return "bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800";
    case "secondary":
      return "bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-800";
    case "tertiary":
      return "bg-gradient-to-br from-tertiary-700 via-tertiary-600 to-tertiary-800";
    default:
      return "bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#0f2a3f]";
  }
});

const textColumnClasses = computed(() => {
  const baseClasses = "md:w-1/2 mb-10 md:mb-0";
  return props.layout === "reversed"
    ? `${baseClasses} md:pl-12 order-2 md:order-2`
    : `${baseClasses} md:pr-12 order-2 md:order-1`;
});

const imageColumnClasses = computed(() => {
  const baseClasses = "md:w-1/2";
  return props.layout === "reversed"
    ? `${baseClasses} order-1 md:order-1`
    : `${baseClasses} order-1 md:order-2`;
});

const titleClasses = computed(() => {
  return props.theme === "light" ? "text-gray-900" : "text-white";
});

const contentClasses = computed(() => {
  return props.theme === "light" ? "text-gray-700" : "text-white";
});

const ctaClasses = computed(() => {
  return props.theme === "light" ? "text-primary-700" : "text-white";
});

const cardClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return "bg-gray-50/50 border-gray-200/30";
    case "dark":
      return "bg-primary-800/50 border-primary-700/30";
    case "primary":
      return "bg-primary-600/50 border-primary-500/30";
    case "secondary":
      return "bg-secondary-600/50 border-secondary-500/30";
    case "tertiary":
      return "bg-tertiary-600/50 border-tertiary-500/30";
    default:
      return "bg-primary-800/50 border-primary-700/30";
  }
});

const cardTitleClasses = computed(() => {
  return props.theme === "light" ? "text-gray-900" : "text-white";
});

const cardContentClasses = computed(() => {
  return props.theme === "light" ? "text-gray-700" : "text-white/85";
});

const imageClasses = computed(() => {
  return props.theme === "light" ? "opacity-90" : "opacity-70";
});

const imageOverlayClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return "bg-gradient-to-t from-gray-900/20 to-transparent";
    case "dark":
      return "bg-gradient-to-t from-[#0f2a3f]/80 to-transparent";
    case "primary":
      return "bg-gradient-to-t from-[#0f2a3f]/60 to-transparent";
    case "secondary":
      return "bg-gradient-to-t from-secondary-900/60 to-transparent";
    case "tertiary":
      return "bg-gradient-to-t from-tertiary-900/60 to-transparent";
    default:
      return "bg-gradient-to-t from-[#0f2a3f]/80 to-transparent";
  }
});

const decorativeClasses = computed(() => {
  switch (props.theme) {
    case "light":
      return {
        primary: "bg-primary-200",
        secondary: "bg-secondary-200",
        accent1: "bg-tertiary-200/10",
        accent2: "bg-secondary-200/10",
      };
    case "dark":
      return {
        primary: "bg-primary-800",
        secondary: "bg-secondary-500",
        accent1: "bg-tertiary-500/10",
        accent2: "bg-secondary-500/10",
      };
    case "primary":
      return {
        primary: "bg-primary-600",
        secondary: "bg-secondary-500",
        accent1: "bg-tertiary-500/10",
        accent2: "bg-secondary-500/10",
      };
    case "secondary":
      return {
        primary: "bg-secondary-600",
        secondary: "bg-primary-500",
        accent1: "bg-tertiary-500/10",
        accent2: "bg-primary-500/10",
      };
    case "tertiary":
      return {
        primary: "bg-tertiary-600",
        secondary: "bg-primary-500",
        accent1: "bg-secondary-500/10",
        accent2: "bg-primary-500/10",
      };
    default:
      return {
        primary: "bg-primary-800",
        secondary: "bg-secondary-500",
        accent1: "bg-tertiary-500/10",
        accent2: "bg-secondary-500/10",
      };
  }
});

const decorativeAccentClasses = computed(() => {
  return props.theme === "light" ? "bg-tertiary-200" : "bg-tertiary-500";
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
