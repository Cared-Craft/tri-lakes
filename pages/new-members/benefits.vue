<script setup lang="ts">
// Redirect to benefits of membership page
navigateTo("/new-members/benefits-of-membership");
</script>

<template>
 <div class="flex items-center justify-center min-h-screen">
  <div class="text-center">
   <h1 class="text-2xl mb-4">
    Redirecting to Member Benefits...
   </h1>
   <p class="text-gray-600">
    If you are not redirected automatically,
    <NuxtLink
     to="/new-members/benefits-of-membership"
     class="text-primary-600 hover:underline"
     >click here</NuxtLink
    >.
   </p>
  </div>
 </div>
</template>
