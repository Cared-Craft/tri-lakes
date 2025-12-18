<script setup lang="ts">
// SEO metadata
useHead({
 title: "Web Accessibility | GSBOR",
 meta: [
  {
   name: "description",
   content:
    "Learn about GSBOR's commitment to web accessibility and how we ensure our website is usable by everyone.",
  },
 ],
});
</script>

<template>
 <div>
  <main>
   <!-- Hero Section -->
   <section class="relative bg-primary-900 py-20">
    <div class="container mx-auto px-6">
     <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-light mb-6 text-white">
       Web <span>Accessibility</span>
      </h1>
      <p class="text-xl text-white/90 leading-relaxed">
       GSBOR is committed to ensuring digital accessibility for people
       with disabilities.
      </p>
     </div>
    </div>
   </section>

   <!-- Content Section -->
   <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
     <div class="max-w-4xl mx-auto">
      <div class="prose prose-lg max-w-none">
       <h2 class="text-3xl font-light mb-6">
        Our <span>Commitment</span>
       </h2>

       <p class="text-gray-700 leading-relaxed mb-8">
        The Greater Springfield Board of REALTORS® (GSBOR) is committed
        to ensuring that our website is accessible to all users,
        including those with disabilities. We strive to comply with the
        Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
        standards.
       </p>

       <h3 class="text-2xl mb-4">Accessibility Features</h3>

       <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        <li>Alternative text for images</li>
        <li>Keyboard navigation support</li>
        <li>High contrast color schemes</li>
        <li>Descriptive link text</li>
        <li>Proper heading structure</li>
        <li>Form labels and instructions</li>
       </ul>

       <h3 class="text-2xl mb-4">Ongoing Efforts</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        We continuously work to improve the accessibility of our
        website. Our efforts include:
       </p>

       <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        <li>Regular accessibility audits and testing</li>
        <li>Staff training on accessibility best practices</li>
        <li>User feedback integration</li>
        <li>Technology updates to support accessibility features</li>
       </ul>

       <h3 class="text-2xl mb-4">Feedback</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        If you encounter any accessibility barriers while using our
        website, or if you have suggestions for improvement, please
        contact us. Your feedback helps us enhance the accessibility of
        our site for all users.
       </p>

       <div class="bg-gray-50 rounded-xl p-8">
        <h4 class="text-xl mb-4">Contact Information</h4>
        <div class="space-y-3">
         <p>
          <strong>Phone:</strong>
          <a
           href="tel:+14178831226"
           class="text-primary-600 hover:text-primary-800"
           >(417) 883-1226</a
          >
         </p>
         <p>
          <strong>Email:</strong>
          <a
           href="mailto:support@gsbor.com"
           class="text-primary-600 hover:text-primary-800"
           >support@gsbor.com</a
          >
         </p>
         <p>
          <strong>Address:</strong> 1310 E Primrose St.,
          Springfield, MO 65804
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </main>
 </div>
</template>
