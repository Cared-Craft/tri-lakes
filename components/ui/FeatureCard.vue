<template>
  <div
    class="bg-white rounded-xl p-8 shadow-lg"
    :class="{ 'hover:shadow-xl transition-shadow': link }"
  >
    <!-- Main icon removed -->
    <h3 class="text-xl text-gray-900 mb-4 text-center">
      {{ title }}
    </h3>
    <p class="text-gray-600 text-center">
      {{ description }}
    </p>
    <div v-if="features && features.length > 0" class="mt-6">
      <ul class="space-y-2">
        <li v-for="feature in features" :key="feature" class="flex items-start">
          <Icon
            name="i-lucide-check-circle"
            :class="['w-5 h-5 mt-0.5 mr-3 flex-shrink-0', iconColor]"
          />
          <span class="text-gray-600 text-sm">{{ feature }}</span>
        </li>
      </ul>
    </div>
    <div v-if="link" class="mt-6 text-center">
      <NuxtLink
        :to="link"
        :external="external"
        :class="[linkColor, ' text-sm hover:opacity-80 transition-colors']"
      >
        {{ ctaText }} →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  link?: string;
  ctaText?: string;
  external?: boolean;
  variant?:
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "red"
    | "indigo"
    | "emerald";
}

const props = withDefaults(defineProps<Props>(), {
  ctaText: "Learn More",
  external: false,
  variant: "blue",
});

const iconColor = computed(() => {
  const variants = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    red: "text-red-600",
    indigo: "text-indigo-600",
    emerald: "text-emerald-600",
  };
  return variants[props.variant];
});

const linkColor = computed(() => {
  const variants = {
    blue: "text-blue-600 hover:text-blue-700",
    green: "text-green-600 hover:text-green-700",
    purple: "text-purple-600 hover:text-purple-700",
    orange: "text-orange-600 hover:text-orange-700",
    red: "text-red-600 hover:text-red-700",
    indigo: "text-indigo-600 hover:text-indigo-700",
    emerald: "text-emerald-600 hover:text-emerald-700",
  };
  return variants[props.variant];
});
</script>
