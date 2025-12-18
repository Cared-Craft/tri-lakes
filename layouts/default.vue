<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <!-- Spacer to prevent content jump when header becomes fixed -->
    <div class="h-[72px]"></div>
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "~/components/layout/AppHeader.vue";
import TheFooter from "~/components/layout/AppFooter.vue";
</script>
