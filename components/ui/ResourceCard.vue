<template>
  <NuxtLink
    :to="link"
    :external="external"
    class="block bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
  >
    <!-- Icon removed -->
    <h3 class="text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600 mb-4">
      {{ description }}
    </p>
    <span
      :class="[linkColor, ' text-sm group-hover:opacity-80 transition-colors inline-block']"
    >
      {{ ctaText }} →
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  icon: string;
  link: string;
  ctaText?: string;
  external?: boolean;
  variant?:
    | "blue"
    | "purple"
    | "green"
    | "indigo"
    | "orange"
    | "red"
    | "emerald";
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: "Learn More",
  external: false,
  variant: "blue",
});

const iconBgColor = computed(() => {
  const variants = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    green: "bg-green-100",
    indigo: "bg-indigo-100",
    orange: "bg-orange-100",
    red: "bg-red-100",
    emerald: "bg-emerald-100",
  };
  return variants[props.variant];
});

const iconColor = computed(() => {
  const variants = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
    indigo: "text-indigo-600",
    orange: "text-orange-600",
    red: "text-red-600",
    emerald: "text-emerald-600",
  };
  return variants[props.variant];
});

const linkColor = computed(() => {
  const variants = {
    blue: "text-blue-600 hover:text-blue-700",
    purple: "text-purple-600 hover:text-purple-700",
    green: "text-green-600 hover:text-green-700",
    indigo: "text-indigo-600 hover:text-indigo-700",
    orange: "text-orange-600 hover:text-orange-700",
    red: "text-red-600 hover:text-red-700",
    emerald: "text-emerald-600 hover:text-emerald-700",
  };
  return variants[props.variant];
});
</script>
