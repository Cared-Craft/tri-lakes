<!-- components/ui/Card.vue -->
<template>
 <div class="overflow-hidden rounded-lg bg-white shadow-md">
  <div v-if="$slots.header" class="border-b border-gray-200 px-6 py-4">
   <slot name="header" />
  </div>
  <div class="p-6">
   <slot />
  </div>
  <div
   v-if="$slots.footer"
   class="border-t border-gray-200 bg-gray-50 px-6 py-4"
  >
   <slot name="footer" />
  </div>
 </div>
</template>

<script setup lang="ts">
defineOptions({
 name: 'Card',
 inheritAttrs: false
});
</script>
