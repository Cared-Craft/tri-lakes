<script setup lang="ts">
// Redirect to main forms page
navigateTo("/forms");
</script>

<template>
 <div class="flex items-center justify-center min-h-screen">
  <div class="text-center">
   <h1 class="text-2xl mb-4">Redirecting to Forms...</h1>
   <p class="text-gray-600">
    If you are not redirected automatically,
    <NuxtLink to="/forms" class="text-primary-600 hover:underline"
     >click here</NuxtLink
    >.
   </p>
  </div>
 </div>
</template>
