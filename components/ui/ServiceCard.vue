<script setup lang="ts">
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  link: string;
  variant?: "large" | "medium" | "small" | "featured";
  featured?: boolean;
  external?: boolean;
  showArrow?: boolean;
  color?: "primary" | "secondary" | "accent" | "neutral";
}

const props = withDefaults(defineProps<ServiceCardProps>(), {
  variant: "medium",
  featured: false,
  external: false,
  showArrow: true,
  color: "primary",
});

// Dynamic classes based on variant and props
const cardClasses = computed(() => {
  const base =
    "group relative overflow-hidden transition-all duration-500 cursor-pointer";

  const variants = {
    large: "bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8",
    medium: "bg-white rounded-xl shadow-sm hover:shadow-lg p-6",
    small: "bg-white rounded-lg shadow-sm hover:shadow-md p-4",
    featured:
      "bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl hover:shadow-2xl p-8 text-white",
  };

  const hoverEffects = {
    large: "hover:scale-[1.02] hover:-translate-y-1",
    medium: "hover:scale-[1.02]",
    small: "hover:scale-[1.01]",
    featured: "hover:scale-[1.02] hover:-translate-y-1",
  };

  return `${base} ${variants[props.variant]} ${hoverEffects[props.variant]}`;
});

const iconClasses = computed(() => {
  const base = "transition-all duration-300";

  const sizes = {
    large: "w-12 h-12",
    medium: "w-10 h-10",
    small: "w-8 h-8",
    featured: "w-12 h-12",
  };

  const colors = {
    primary: props.variant === "featured" ? "text-white" : "text-primary-600",
    secondary:
      props.variant === "featured" ? "text-white" : "text-secondary-600",
    accent: props.variant === "featured" ? "text-white" : "text-accent-600",
    neutral: props.variant === "featured" ? "text-white" : "text-gray-600",
  };

  return `${base} ${sizes[props.variant]} ${colors[props.color]}`;
});

const titleClasses = computed(() => {
  const base = " mb-3 group-hover:text-primary-700 transition-colors";

  const sizes = {
    large: "text-2xl",
    medium: "text-xl",
    small: "text-lg",
    featured: "text-2xl",
  };

  const colors =
    props.variant === "featured"
      ? "text-white group-hover:text-primary-100"
      : "text-primary-900";

  return `${base} ${sizes[props.variant]} ${colors}`;
});

const descriptionClasses = computed(() => {
  const base = "leading-relaxed";

  const sizes = {
    large: "text-lg",
    medium: "text-base",
    small: "text-sm",
    featured: "text-lg",
  };

  const colors =
    props.variant === "featured" ? "text-primary-100" : "text-primary-700";

  return `${base} ${sizes[props.variant]} ${colors}`;
});

// Handle click navigation
const handleClick = () => {
  if (props.external) {
    window.open(props.link, "_blank");
  } else {
    navigateTo(props.link);
  }
};
</script>

<template>
  <div :class="cardClasses" @click="handleClick">
    <!-- Image (if provided) -->
    <div v-if="image" class="mb-6 -mx-6 -mt-6 overflow-hidden relative">
      <div
        class="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden"
      >
        <img
          :src="image"
          :alt="title"
          class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
          style="width: auto; height: auto; max-width: 100%; max-height: 100%"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Icon removed -->

      <!-- Title -->
      <h3 :class="titleClasses">
        {{ title }}
      </h3>

      <!-- Description -->
      <p :class="descriptionClasses">
        {{ description }}
      </p>

      <!-- Arrow/Link Indicator -->
      <div v-if="showArrow" class="flex items-center mt-4 group">
        <span
          class="text-sm transition-colors"
          :class="
            variant === 'featured'
              ? 'text-primary-100'
              : 'text-primary-600 group-hover:text-primary-700'
          "
        >
          {{ external ? "Visit Site" : "Learn More" }}
        </span>
        <Icon
          :name="external ? 'i-lucide-external-link' : 'i-lucide-chevron-right'"
          class="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1"
          :class="
            variant === 'featured' ? 'text-primary-100' : 'text-primary-600'
          "
        />
      </div>
    </div>

    <!-- Decorative Elements for Featured Cards -->
    <div
      v-if="variant === 'featured'"
      class="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
      ></div>
      <div
        class="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"
      ></div>
    </div>

    <!-- Hover Glow Effect -->
    <div
      class="absolute inset-0 rounded-inherit bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    ></div>
  </div>
</template>

<style scoped>
.rounded-inherit {
  border-radius: inherit;
}
</style>
