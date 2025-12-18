<template>
  <div
    class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group"
  >
    <!-- Icon removed -->
    <h3 class="text-xl text-gray-900 mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-600 mb-6">
      {{ description }}
    </p>
    <NuxtLink
      :to="link"
      :external="external"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noopener noreferrer' : undefined"
      :class="[
        buttonColor,
        'inline-flex items-center px-6 py-3 text-white rounded-lg hover:opacity-90 transition-colors cursor-pointer',
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
  description: string;
  icon: string;
  link: string;
  ctaText: string;
  external?: boolean;
  variant?: "emerald" | "blue" | "orange" | "purple" | "green" | "red";
}

const props = withDefaults(defineProps<Props>(), {
  external: false,
  variant: "emerald",
});

const iconBgColor = computed(() => {
  const variants = {
    emerald: "bg-emerald-100 group-hover:bg-emerald-200",
    blue: "bg-blue-100 group-hover:bg-blue-200",
    orange: "bg-orange-100 group-hover:bg-orange-200",
    purple: "bg-purple-100 group-hover:bg-purple-200",
    green: "bg-green-100 group-hover:bg-green-200",
    red: "bg-red-100 group-hover:bg-red-200",
  };
  return variants[props.variant];
});

const iconColor = computed(() => {
  const variants = {
    emerald: "text-emerald-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
    green: "text-green-600",
    red: "text-red-600",
  };
  return variants[props.variant];
});

const buttonColor = computed(() => {
  const variants = {
    emerald: "bg-emerald-600 hover:bg-emerald-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };
  return variants[props.variant];
});
</script>
