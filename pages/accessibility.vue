<script setup lang="ts">
// SEO metadata
useHead({
  title: "Accessibility Policy | Tri-Lakes Board of Realtors",
 meta: [
  {
   name: "description",
   content:
        "Tri-Lakes Board of Realtors is committed to ensuring digital accessibility for people with disabilities.",
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
              Tri-Lakes Board of Realtors®, Inc. is committed to ensuring
              digital accessibility for people with disabilities.
      </p>
     </div>
    </div>
   </section>

   <!-- Content Section -->
      <section class="py-16 bg-white">
    <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto prose prose-lg">
            <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h2 class="text-2xl font-semibold text-blue-900 mb-4">
                Our Commitment
       </h2>
              <p class="text-blue-800 text-lg">
                Tri-Lakes Board of Realtors®, Inc. is committed to ensuring
                digital accessibility for people with disabilities. We are
                continually improving the user experience for everyone and
                applying relevant accessibility standards.
              </p>
            </div>

            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Conformance Status
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines
              requirements for designers and developers to improve accessibility
              for people with disabilities. It defines three levels of
              conformance: Level A, Level AA, and Level AAA. Tri-Lakes Board of
              Realtors® website is partially conformant with WCAG 2.1 level AA.
              Partially conformant means that some parts of the content do not
              fully conform to the accessibility standard.
            </p>

            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Feedback
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              We welcome your feedback on the accessibility of Tri-Lakes Board
              of Realtors® website. Please let us know if you encounter
              accessibility barriers:
            </p>

            <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
          <strong>Phone:</strong>
          <a
                  href="tel:4173384555"
                  class="text-primary-600 hover:text-primary-700"
                >
                  417-338-4555
                </a>
              </li>
              <li>
          <strong>Email:</strong>
          <a
                  href="mailto:elise@tlbor.com"
                  class="text-primary-600 hover:text-primary-700"
                >
                  elise@tlbor.com
                </a>
              </li>
              <li>
                <strong>Address:</strong> 2875 State Hwy. 265, Branson,
                Missouri 65616
              </li>
            </ul>

            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Limitations and Alternatives
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              Despite our best efforts to ensure accessibility of Tri-Lakes
              Board of Realtors® website, there may be some limitations. Below
              is a description of known limitations, and potential solutions.
              Please contact us if you observe an issue not listed below.
            </p>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Known Limitations
              </h3>
              <ul class="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Some third-party content may not be fully accessible. We are
                  working with our vendors to improve accessibility.
                </li>
                <li>
                  Some older PDF documents may not be fully accessible. We are
                  working to update these documents.
                </li>
                <li>
                  Some interactive features may require keyboard navigation
                  improvements. We are continuously working to enhance these
                  features.
                </li>
              </ul>
            </div>

            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Assessment Approach
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              Tri-Lakes Board of Realtors® assessed the accessibility of our
              website by the following approaches:
            </p>

            <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Self-evaluation</li>
              <li>External evaluation</li>
              <li>User testing with people with disabilities</li>
            </ul>

            <div class="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
              <h2 class="text-2xl font-semibold text-green-900 mb-4">
                Continuous Improvement
              </h2>
              <p class="text-green-800 text-lg">
                We are committed to continuously improving the accessibility of
                our website. This statement is reviewed and updated regularly to
                reflect our ongoing efforts.
              </p>
            </div>

            <div class="mt-12 pt-8 border-t border-gray-200">
              <p class="text-sm text-gray-500">
                This statement was last updated on
                {{ new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }) }}.
              </p>
      </div>
     </div>
    </div>
   </section>
  </main>
 </div>
</template>

