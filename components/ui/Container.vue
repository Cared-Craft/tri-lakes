<!-- components/ui/Container.vue -->
<template>
 <div class="container mx-auto px-4 sm:px-6 lg:px-8" :class="[className]">
  <slot />
 </div>
</template>

<script setup lang="ts">
interface Props {
 className?: string;
}

defineProps<Props>();
</script>
