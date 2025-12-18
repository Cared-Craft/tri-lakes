<script setup lang="ts">
// SEO metadata
useHead({
  title: "Political Advocacy - Greater Springfield Board of Realtors",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the REALTOR® Political Action Committee (RPAC) page. RPAC is designed to help promote the election of pro-REALTOR® candidates across the U.S.",
    },
  ],
});

// Handle iframe loading
onMounted(() => {
  // Handle contribution iframe
  const contributionIframe = document.querySelector(
    'iframe[title="RPAC Contribution Portal"]'
  );
  const contributionLoadingOverlay = document.getElementById(
    "contribution-iframe-loading"
  );

  if (contributionIframe && contributionLoadingOverlay) {
    contributionLoadingOverlay.style.display = "flex";

    contributionIframe.addEventListener("load", () => {
      contributionLoadingOverlay.style.display = "none";
    });

    contributionIframe.addEventListener("error", () => {
      contributionLoadingOverlay.innerHTML = `
        <div class="text-center">
          <div class="text-purple-500 mb-4">
            <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="text-gray-600 mb-4">Unable to load the RPAC contribution portal.</p>
          <a 
            href="https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2fpac%2fhistory.aspx%3fselmenid%3dmen5&selmenid=men5" 
            target="_blank"
            class="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Open in New Window
          </a>
        </div>
      `;
    });
  }
});
</script>

<template>
  <div>
    <main>
      <!-- Hero Section -->
      <HeroSection
        title="Political Advocacy"
        subtitle="REALTOR® Political Action Committee"
        description="Welcome to the REALTOR® Political Action Committee (RPAC) page. RPAC is designed to help promote the election of pro-REALTOR® candidates across the U.S."
        variant="compact"
      >
        <template #visual>
          <div
            class="relative z-20 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md"
          >
            <img
              src="/images/political-advocacy_rpac-logo_3.png"
              alt="RPAC Logo"
              class="w-full h-[320px] object-contain bg-white p-8"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0f2a3f]/10 to-transparent"
            ></div>
          </div>
        </template>
      </HeroSection>

      <!-- Realtor Party Section -->
      <ContentSection
        title="Realtor Party"
        content="Our advocacy efforts represent GSBOR and the Missouri REALTOR® Party. We are the voice for real estate in our area and in partnership with the state association; working to protect REALTORS®, their business and the American Dream of homeownership. Our goal is to encourage property ownership, support small business and foster a vibrant real estate sector."
        theme="light"
        layout="default"
        :image="{
          src: '/images/political-advocacy_RealtorParty_4.svg',
          alt: 'Realtor Party Logo',
        }"
        cardTitle="Missouri REALTOR® Party"
        cardContent="Working together to protect REALTORS®, their business, and the American Dream of homeownership."
        :ctaLink="{
          to: 'https://www.missourirealtor.org/advocacy',
          text: 'Learn More About Missouri REALTOR® Party',
        }"
      />

      <!-- RPAC Contribution Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Make Your RPAC Investment
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Login to make your annual RPAC investment and support pro-REALTOR®
              candidates and legislation.
            </p>
          </div>

          <!-- RPAC Contribution Portal Container -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-4 bg-gray-50 border-b">
              <h3 class="text-xl font-semibold text-gray-900">
                RPAC Investment Portal
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                Login with your member credentials to access your RPAC
                contribution portal and make your annual investment.
              </p>
            </div>

            <!-- Iframe Container -->
            <div class="relative" style="height: 800px">
              <iframe
                src="https://gsborportal.ramcoams.net/Login.aspx?ReturnUrl=%2fpac%2fhistory.aspx%3fselmenid%3dmen5&selmenid=men5"
                class="w-full h-full border-0"
                title="RPAC Contribution Portal"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-top-navigation"
              />

              <!-- Loading overlay -->
              <div
                id="contribution-iframe-loading"
                class="absolute inset-0 bg-gray-100 flex items-center justify-center"
                style="display: none"
              >
                <div class="text-center">
                  <div
                    class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                  ></div>
                  <p class="text-gray-600">
                    Loading RPAC contribution portal...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RPAC Disclaimer Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <div class="bg-gray-50 rounded-xl p-8 border-l-4 border-purple-600">
              <h2 class="text-2xl text-gray-900 mb-6 font-semibold">RPAC Disclaimer</h2>
              <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Contributions to RPAC are not deductible for federal income tax purposes. Contributions are voluntary and are used for political purposes. The amounts indicated are merely guidelines and you may contribute more or less than the suggested amounts. The National Association of REALTORS® and its state and local associations will not favor or disadvantage any member because of the amount contributed or a decision not to contribute. You may refuse to contribute without reprisal. Your contribution is split between National RPAC and the State PAC in your state. Contact your State Association or PAC for information about the percentages of your contribution provided to National RPAC and to the State PAC. The National RPAC portion is used to support federal candidates and is charged against your limits under 52 U.S.C. 30116.
                </p>
                <p>
                  Missouri REALTORS® PAC, Inc. may not accept contributions from corporations, associations or partnerships formed outside of chapters 347 to 360, RSMo, natural persons who are not United States citizens, foreign governments, foreign corporations other than foreign LLCs registered to do business in Missouri, other state political action committees, candidate committees, political party committees, campaign committees, exploratory committees, or debt service committees. Article VIII, Section 23.3(12) & (16).
                </p>
                <p>
                  If you are investing in RPAC with a contribution account owned by from an LLC, that LLC must be registered with the Missouri Ethics Commission. Please go to <a href="https://mec.mo.gov/LLC/Registration" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-800">mec.mo.gov/LLC/Registration</a> to create an account and register before contributing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.pattern-grid {
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(29, 53, 87, 0.15) 1px,
    transparent 0
  );
  background-size: 20px 20px;
}
</style>
