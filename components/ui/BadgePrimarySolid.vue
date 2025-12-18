<!-- components/ui/BadgePrimarySolid.vue -->
<template>
 <span class="badge-primary-solid" v-bind="$attrs">
  <slot />
 </span>
</template>

<script setup>
defineOptions({
 name: 'BadgePrimarySolid',
 inheritAttrs: false
});
</script>
