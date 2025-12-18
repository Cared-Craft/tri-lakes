<script setup lang="ts">
// SEO metadata
useHead({
 title: "Terms of Use | GSBOR",
 meta: [
  {
   name: "description",
   content: "Read GSBOR's terms of use for our website and services.",
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
       Terms of <span>Use</span>
      </h1>
      <p class="text-xl text-white/90 leading-relaxed">
       Please read these terms and conditions carefully before using our
       website.
      </p>
     </div>
    </div>
   </section>

   <!-- Content Section -->
   <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
     <div class="max-w-4xl mx-auto">
      <div class="prose prose-lg max-w-none">
       <p class="text-sm text-gray-600 mb-8">
        Last updated: {{ new Date().toLocaleDateString() }}
       </p>

       <h2 class="text-3xl font-light mb-6">
        Acceptance of <span>Terms</span>
       </h2>

       <p class="text-gray-700 leading-relaxed mb-8">
        By accessing and using the Greater Springfield Board of
        REALTORS® (GSBOR) website, you accept and agree to be bound by
        the terms and provision of this agreement.
       </p>

       <h3 class="text-2xl mb-4">Use License</h3>

       <p class="text-gray-700 leading-relaxed mb-6">
        Permission is granted to temporarily download one copy of the
        materials on GSBOR's website for personal, non-commercial
        transitory viewing only. This is the grant of a license, not a
        transfer of title, and under this license you may not:
       </p>

       <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
        <li>modify or copy the materials</li>
        <li>
         use the materials for any commercial purpose or for any public
         display
        </li>
        <li>
         attempt to reverse engineer any software contained on the
         website
        </li>
        <li>
         remove any copyright or other proprietary notations from the
         materials
        </li>
       </ul>

       <h3 class="text-2xl mb-4">Disclaimer</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        The materials on GSBOR's website are provided on an 'as is'
        basis. GSBOR makes no warranties, expressed or implied, and
        hereby disclaims and negates all other warranties including
        without limitation, implied warranties or conditions of
        merchantability, fitness for a particular purpose, or
        non-infringement of intellectual property or other violation of
        rights.
       </p>

       <h3 class="text-2xl mb-4">Limitations</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        In no event shall GSBOR or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data
        or profit, or due to business interruption) arising out of the
        use or inability to use the materials on GSBOR's website, even
        if GSBOR or an authorized representative has been notified
        orally or in writing of the possibility of such damage.
       </p>

       <h3 class="text-2xl mb-4">Accuracy of Materials</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        The materials appearing on GSBOR's website could include
        technical, typographical, or photographic errors. GSBOR does not
        warrant that any of the materials on its website are accurate,
        complete, or current.
       </p>

       <h3 class="text-2xl mb-4">Links</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        GSBOR has not reviewed all of the sites linked to our website
        and is not responsible for the contents of any such linked site.
        The inclusion of any link does not imply endorsement by GSBOR of
        the site.
       </p>

       <h3 class="text-2xl mb-4">Modifications</h3>

       <p class="text-gray-700 leading-relaxed mb-8">
        GSBOR may revise these terms of service for its website at any
        time without notice. By using this website, you are agreeing to
        be bound by the then current version of these terms of service.
       </p>

       <h3 class="text-2xl mb-4">Contact Information</h3>

       <p class="text-gray-700 leading-relaxed mb-6">
        If you have any questions about these Terms of Use, please
        contact us:
       </p>

       <div class="bg-gray-50 rounded-xl p-8">
        <div class="space-y-3">
         <p>
          <strong>Phone:</strong>
          <a
           href="tel:+14178831655"
           class="text-primary-600 hover:text-primary-800"
           >(417) 883-1655</a
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
          <strong>Address:</strong> 2841 E. Battlefield Road,
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
