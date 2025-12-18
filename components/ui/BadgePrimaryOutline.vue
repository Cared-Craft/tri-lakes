<!-- components/ui/BadgePrimaryOutline.vue -->
<template>
 <span class="badge-primary-outline" v-bind="$attrs">
  <slot />
 </span>
</template>

<script setup>
defineOptions({
 name: 'BadgePrimaryOutline',
 inheritAttrs: false
});
</script>
