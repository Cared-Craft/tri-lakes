<template>
 <nav class="w-full" aria-label="Breadcrumb">
  <ol class="flex flex-wrap items-center space-x-2 text-sm">
   <li v-for="(item, idx) in items" :key="idx" class="flex items-center">
    <NuxtLink
     v-if="item.to && idx !== items.length - 1"
     :to="item.to"
     class="text-secondary-500 hover:text-primary-600 transition-colors"
    >
     {{ item.label }}
    </NuxtLink>
    <span v-else class="text-secondary-900 ">{{
     item.label
    }}</span>
    <span
     v-if="idx < items.length - 1"
     class="mx-2 text-secondary-300 select-none"
     aria-hidden="true"
    >
     /
    </span>
   </li>
  </ol>
 </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
 label: string;
 to?: string;
}

defineProps<{ items: BreadcrumbItem[] }>();
</script>
