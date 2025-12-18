<template>
  <component
    :is="to ? (isExternal ? 'a' : NuxtLink) : 'button'"
    :to="to && !isExternal ? to : undefined"
    :href="isExternal ? to : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="[
      'btn',
      'inline-flex items-center justify-center',
      ' transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'cursor-pointer',
      variantClasses,
      sizeClasses,
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className,
    ]"
    :disabled="disabled && !to"
    :type="!to ? type : undefined"
    @click="handleClick"
  >
    <!-- Leading and trailing icons removed -->
    <slot />
  </component>
</template>

<script setup>
import { computed, useSlots, resolveComponent } from "vue";

// Ensure NuxtLink is available for dynamic component rendering
const NuxtLink = resolveComponent("NuxtLink");

const props = defineProps({
  variant: {
    type: String,
    default: "solid",
    validator: (value) =>
      ["solid", "outline", "soft", "ghost", "link"].includes(value),
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) =>
      [
        "primary",
        "secondary",
        "tertiary",
        "neutral",
        "white",
        "gray",
        "blue",
        "emerald",
        "purple",
        "amber",
        "indigo",
      ].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["xs", "sm", "md", "lg", "xl"].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    default: null,
  },
  external: {
    type: Boolean,
    default: false,
  },
  leadingIcon: {
    type: String,
    default: null,
  },
  trailingIcon: {
    type: String,
    default: null,
  },
  leadingIconClass: {
    type: String,
    default: "w-4 h-4",
  },
  trailingIconClass: {
    type: String,
    default: "w-4 h-4",
  },
  className: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["click"]);
const slots = useSlots();

// Check if the link is external
const isExternal = computed(() => {
  if (!props.to) return false;
  return (
    props.external ||
    props.to.startsWith("http") ||
    props.to.startsWith("mailto:") ||
    props.to.startsWith("tel:")
  );
});

// Variant-based styling that matches UButton styles
const variantClasses = computed(() => {
  const { variant, color } = props;

  const colorMap = {
    primary: {
      solid:
        "bg-primary-700 hover:bg-primary-800 text-white shadow-md hover:shadow-lg focus:ring-primary-500 transform hover:scale-105",
      outline:
        "border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white bg-white hover:shadow-lg focus:ring-primary-500 transform hover:scale-105",
      soft: "bg-primary-100 text-primary-700 hover:bg-primary-200 focus:ring-primary-500 transform hover:scale-105",
      ghost:
        "text-primary-700 hover:bg-primary-100 focus:ring-primary-500 transform hover:scale-105",
      link: "text-primary-700 hover:text-primary-900 underline-offset-4 hover:underline focus:ring-primary-500",
    },
    secondary: {
      solid:
        "bg-secondary-700 hover:bg-secondary-800 text-white shadow-md hover:shadow-lg focus:ring-secondary-500 transform hover:scale-105",
      outline:
        "border-2 border-secondary-700 text-secondary-700 hover:bg-secondary-700 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-secondary-500 transform hover:scale-105",
      soft: "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-secondary-500 transform hover:scale-105",
      ghost:
        "text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 transform hover:scale-105",
      link: "text-secondary-700 hover:text-secondary-900 underline-offset-4 hover:underline focus:ring-secondary-500",
    },
    tertiary: {
      solid:
        "bg-[#214f75] hover:bg-[#1a3d5c] text-white shadow-md hover:shadow-lg focus:ring-[#214f75] transform hover:scale-105",
      outline:
        "border-2 border-[#214f75] text-[#214f75] hover:bg-[#214f75] hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-[#214f75] transform hover:scale-105",
      soft: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 transform hover:scale-105",
      ghost:
        "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 transform hover:scale-105",
      link: "text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline focus:ring-gray-500",
    },
    neutral: {
      solid:
        "bg-[#214f75] hover:bg-[#1a3d5c] text-white shadow-md hover:shadow-lg focus:ring-[#214f75] transform hover:scale-105",
      outline:
        "border-2 border-gray-400 text-gray-700 hover:bg-gray-100 bg-white shadow-md hover:shadow-lg focus:ring-gray-500 transform hover:scale-105",
      soft: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 transform hover:scale-105",
      ghost:
        "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 transform hover:scale-105",
      link: "text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline focus:ring-gray-500",
    },
    white: {
      solid:
        "bg-white hover:bg-gray-50 text-gray-900 shadow-md hover:shadow-lg border-2 border-gray-200 focus:ring-gray-500 transform hover:scale-105",
      outline:
        "border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-gray-900/20 backdrop-blur-sm shadow-md hover:shadow-lg focus:ring-white transform hover:scale-105",
      soft: "bg-white/90 text-gray-900 hover:bg-white border border-gray-200 focus:ring-gray-500 transform hover:scale-105",
      ghost:
        "text-white hover:bg-white/20 focus:ring-white transform hover:scale-105",
      link: "text-white hover:text-gray-200 underline-offset-4 hover:underline focus:ring-white",
    },
    // Header menu icon colors
    blue: {
      solid:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500 transform hover:scale-105",
      outline:
        "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-blue-500 transform hover:scale-105",
      soft: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-500 transform hover:scale-105",
      ghost:
        "text-blue-600 hover:bg-blue-100 focus:ring-blue-500 transform hover:scale-105",
      link: "text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline focus:ring-blue-500",
    },
    emerald: {
      solid:
        "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg focus:ring-emerald-500 transform hover:scale-105",
      outline:
        "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-emerald-500 transform hover:scale-105",
      soft: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:ring-emerald-500 transform hover:scale-105",
      ghost:
        "text-emerald-600 hover:bg-emerald-100 focus:ring-emerald-500 transform hover:scale-105",
      link: "text-emerald-600 hover:text-emerald-800 underline-offset-4 hover:underline focus:ring-emerald-500",
    },
    purple: {
      solid:
        "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg focus:ring-purple-500 transform hover:scale-105",
      outline:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-purple-500 transform hover:scale-105",
      soft: "bg-purple-100 text-purple-700 hover:bg-purple-200 focus:ring-purple-500 transform hover:scale-105",
      ghost:
        "text-purple-600 hover:bg-purple-100 focus:ring-purple-500 transform hover:scale-105",
      link: "text-purple-600 hover:text-purple-800 underline-offset-4 hover:underline focus:ring-purple-500",
    },
    amber: {
      solid:
        "bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg focus:ring-amber-500 transform hover:scale-105",
      outline:
        "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-amber-500 transform hover:scale-105",
      soft: "bg-amber-100 text-amber-700 hover:bg-amber-200 focus:ring-amber-500 transform hover:scale-105",
      ghost:
        "text-amber-600 hover:bg-amber-100 focus:ring-amber-500 transform hover:scale-105",
      link: "text-amber-600 hover:text-amber-800 underline-offset-4 hover:underline focus:ring-amber-500",
    },
    indigo: {
      solid:
        "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-indigo-500 transform hover:scale-105",
      outline:
        "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-indigo-500 transform hover:scale-105",
      soft: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring-indigo-500 transform hover:scale-105",
      ghost:
        "text-indigo-600 hover:bg-indigo-100 focus:ring-indigo-500 transform hover:scale-105",
      link: "text-indigo-600 hover:text-indigo-800 underline-offset-4 hover:underline focus:ring-indigo-500",
    },
    gray: {
      solid:
        "bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg focus:ring-gray-500 transform hover:scale-105",
      outline:
        "border-2 border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white bg-white shadow-md hover:shadow-lg focus:ring-gray-500 transform hover:scale-105",
      soft: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 transform hover:scale-105",
      ghost:
        "text-gray-600 hover:bg-gray-100 focus:ring-gray-500 transform hover:scale-105",
      link: "text-gray-600 hover:text-gray-800 underline-offset-4 hover:underline focus:ring-gray-500",
    },
  };

  return colorMap[color]?.[variant] || colorMap.primary.solid;
});

// Size-based styling
const sizeClasses = computed(() => {
  const sizeMap = {
    xs: "px-2 py-1 text-xs rounded",
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-md",
    lg: "px-6 py-3 text-base rounded-lg",
    xl: "px-8 py-4 text-lg rounded-xl",
  };

  return sizeMap[props.size] || sizeMap.md;
});

function handleClick(event) {
  if (!props.disabled) {
    emit("click", event);
  }
}
</script>
