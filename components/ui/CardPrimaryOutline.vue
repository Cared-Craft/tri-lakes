<!-- components/ui/CardPrimaryOutline.vue -->
<template>
 <div class="card-primary-outline" v-bind="$attrs">
  <div class="p-6">
   <slot name="header">
    <h3 v-if="title" class="text-lg ">{{ title }}</h3>
   </slot>

   <div class="mt-2">
    <slot />
   </div>

   <slot name="footer" />
  </div>
 </div>
</template>

<script setup>
defineOptions({
 name: 'CardPrimaryOutline',
 inheritAttrs: false
});

defineProps({
 title: {
  type: String,
  default: ''
 }
});
</script>
