<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <HeroSection
      title="Become A Member"
      description="Joining the Greater Springfield Board Of REALTORS® is the first step to real estate brokerage success. Your local GSBOR membership provides access to industry trend information, local statistics, MLS, technology, training and important legislative updates, in addition to membership in the Missouri Association of REALTORS® (MR) and the National Association of REALTORS® (NAR)."
      variant="compact"
      :show-floating-card="true"
      :floating-card-content="{
        icon: 'i-lucide-users',
        label: 'Join Our Community',
        title: '2,900+ Active Members',
      }"
    >
      <template #visual>
        <div
          class="relative z-20 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
            alt="Real Estate Professionals"
            class="w-full h-[320px] object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0f2a3f]/40 to-transparent"
          ></div>

          <!-- Floating membership card -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
              <div class="flex items-center space-x-2 mb-2">
                <Icon name="i-lucide-users" class="w-5 h-5 text-primary-600" />
                <span class="text-sm text-primary-700">Join Our Community</span>
              </div>
              <h3 class="text-lg text-primary-900">2,900+ Active Members</h3>
            </div>
          </div>
        </div>
      </template>
    </HeroSection>

    <!-- How to Join Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            How to Join
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Membership Application - Take the first step towards joining the
            Greater Springfield Board of REALTORS®
          </p>
          <div class="mt-8">
            <Button
              to="https://form.jotform.com/243164896458168"
              external
              color="primary"
              variant="solid"
              size="lg"
              class="px-8 py-3"
            >
              Fill out our Form
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="py-0">
      <!-- New Member Packet -->
      <section class="py-20 relative overflow-hidden">
        <!-- Rich background with subtle patterns and gradients -->
        <div class="absolute inset-0 z-0">
          <!-- Base gradient background -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-[#0f2a3f] via-[#214f75] to-[#214f75]"
          ></div>

          <!-- Subtle pattern overlay -->
          <div class="absolute inset-0 opacity-5 pattern-grid"></div>

          <!-- Decorative blurred circles -->
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-tertiary-500/10 rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 rounded-full opacity-15 blur-3xl transform -translate-x-1/3 translate-y-1/3"
          ></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center mb-16">
            <h2
              class="text-3xl md:text-4xl font-light mb-6 leading-tight text-white relative"
            >
              New <span>Member Application</span>
            </h2>
            <p class="text-white/90 text-center mb-6 max-w-2xl mx-auto">
              Newly licensed and reinstating Salespersons and Brokers should
              complete the New Member Application. This application includes:
            </p>
          </div>

          <div class="max-w-2xl mx-auto text-center">
            <div class="mb-8">
              <div class="space-y-6 mb-8 text-left">
                <div class="flex items-start">
                  <Icon
                    name="i-lucide-star"
                    class="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0"
                  />
                  <p class="text-white/90 text-lg">
                    An application for Greater Springfield Board of REALTORS®
                    and SOMO MLS (the Regional Multiple Listing Service vendor)
                  </p>
                </div>
                <div class="flex items-start">
                  <Icon
                    name="i-lucide-star"
                    class="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0"
                  />
                  <p class="text-white/90 text-lg">
                    New Designated Broker (DR) MLS Participant Application
                  </p>
                </div>
              </div>
              <Button
                to="https://form.jotform.com/243164896458168"
                external
                color="white"
                variant="solid"
                size="lg"
              >
                Fill out Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Membership Requirements -->
      <div class="container mx-auto pt-20 px-6">
        <div class="mb-20">
          <h2 class="text-3xl text-center mb-12 text-gray-900">
            Membership Requirements
          </h2>
          <div class="max-w-4xl mx-auto mb-8">
            <p class="text-xl text-gray-600 leading-relaxed mb-8 text-center">
              Membership is granted to all applicants for REALTOR® membership
              upon submission of the following paperwork (subject to final
              approval by the Board of Directors of the Greater Springfield
              Board of REALTORS®):
            </p>
          </div>

          <!-- Timeline Steps -->
          <div class="max-w-4xl mx-auto">
            <div class="relative">
              <!-- Timeline line -->
              <div
                class="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-200"
              ></div>

              <!-- Step 1: Designated Broker -->
              <div class="relative flex items-start mb-12">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full relative z-10 text-2xl font-bold"
                >
                  1
                </div>
                <div class="ml-8 flex-1">
                  <div>
                    <h3 class="text-xl text-gray-800 mb-3">
                      Ensure your Designated Broker is a member of the
                      Association.
                    </h3>
                    <p class="text-gray-600">
                      Your designated broker must already be a member of GSBOR
                      to sponsor your membership application.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 2: License Documentation -->
              <div class="relative flex items-start mb-12">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full relative z-10 text-2xl font-bold"
                >
                  2
                </div>
                <div class="ml-8 flex-1">
                  <div>
                    <h3 class="text-xl text-gray-800 mb-3">
                      Copy of license/or work permit from the Missouri Real
                      Estate Commission (MREC) and copy of Driver's License.
                    </h3>
                    <p class="text-gray-600 mb-4">
                      Provide documentation of your active real estate license
                      and valid driver's license.
                    </p>
                    <p class="text-gray-500 text-sm italic">
                      <Icon name="i-lucide-clock" class="w-4 h-4 inline mr-2" />
                      *If your license is active at the Missouri Real Estate
                      Commission, under a qualifying broker that holds
                      membership at GSBOR, you have up to 30 days to join from
                      your license active date.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 3: Application Form -->
              <div class="relative flex items-start mb-12">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full relative z-10 text-2xl font-bold"
                >
                  3
                </div>
                <div class="ml-8 flex-1">
                  <div>
                    <h3 class="text-xl text-gray-800 mb-3">
                      Complete the correct application form below.
                    </h3>
                    <p class="text-gray-600">
                      Fill out the appropriate membership application form based
                      on your membership type and situation.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Step 4: Contact -->
              <div class="relative flex items-start">
                <div
                  class="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full relative z-10 text-2xl font-bold"
                >
                  4
                </div>
                <div class="ml-8 flex-1">
                  <div>
                    <h3 class="text-xl text-gray-800 mb-3">
                      You will be contacted by the Membership Team for next
                      steps.
                    </h3>
                    <p class="text-gray-600">
                      Our membership team will review your application and guide
                      you through the final steps of the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- New Member Applications -->
      <div class="container mx-auto px-6">
        <div class="mb-20">
          <h2 class="text-3xl text-center mb-12 text-gray-900">
            New Member Applications
          </h2>

          <div class="max-w-4xl mx-auto">
            <AccordionComponent
              :items="membershipApplications"
              variant="default"
              :default-open="0"
            />
          </div>
        </div>
      </div>

      <!-- Orientation and Training -->
      <section class="py-12 bg-gray-100">
        <div class="container mx-auto px-6">
          <div class="text-center mb-8">
            <h2
              class="text-2xl md:text-3xl font-light mb-4 leading-tight text-gray-900 relative"
            >
              Orientation and New Member
              <span>Code of Ethics Training</span>
            </h2>
          </div>

          <div class="max-w-3xl mx-auto text-center">
            <p class="text-gray-900 leading-relaxed">
              You are required to take an Orientation Class along with New
              Member Code of Ethics Training which are provided free of charge,
              and must be taken within 60 days of joining the Association. You
              will receive all necessary registration details for orientation
              training via email after your application has been processed.
            </p>
          </div>
        </div>
      </section>

      <!-- Dues Calculator Section -->
      <div id="dues-calculator" class="container mx-auto py-10 px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl mb-6 text-gray-900">
            Calculate Your Membership Dues
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Use our calculator to estimate your annual membership dues based on
            your membership type and selected services.
          </p>
        </div>
        <div class="max-w-3xl mx-auto">
          <DuesCalculator />
        </div>
      </div>

      <!-- Contact Section -->
      <div class="container mx-auto py-10 px-6">
        <div class="text-center">
          <h2 class="text-2xl mb-4 text-gray-900">
            Have a Question About the Application Process?
          </h2>
          <Button to="/contact-us" color="primary" size="lg" class="px-8 py-3">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: "Become A Member - Greater Springfield Board of REALTORS®",
  meta: [
    {
      name: "description",
      content:
        "Join the Greater Springfield Board of REALTORS® and take the first step towards real estate success. Learn about membership types, application process, and benefits including SOMO MLS access and Supra keys.",
    },
  ],
});

// Membership applications accordion items
const membershipApplications = [
  {
    id: "primary",
    title: "Primary Membership Application",
    content: `
   <p class="mb-4">If you are a new agent joining Greater Springfield Board of REALTORS® or you are changing Associations and Greater Springfield Board of REALTORS® is your ONLY Association, fill out a primary application. This applies for REALTORS® and Appraisers.</p>
   <p><a href="https://form.jotform.com/243164896458168" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors ">GSBOR Application</a></p>
  `,
    defaultOpen: true,
  },
  {
    id: "secondary",
    title: "Secondary Membership Application",
    content: `
   <p class="mb-4">If you are currently a member with another Association and want to participate in the same great benefits as a Greater Springfield Board of REALTORS® primary member, complete the secondary membership application.</p>
   <p class="mb-4"><a href="https://form.jotform.com/243164896458168" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors ">GSBOR Application</a></p>
   <p class="text-sm text-gray-600 italic">*Secondary membership requires a letter of good standing from your primary association</p>
  `,
  },
  {
    id: "transfer",
    title: "Transfer Membership Application",
    content: `
   <p class="mb-4">Transferring from another board of REALTORS®? Fill out an application for transfer here.</p>
   <p><a href="https://form.jotform.com/243164896458168" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors ">GSBOR Application</a></p>
  `,
  },
  {
    id: "appraiser",
    title: "Appraiser",
    content: `
   <p class="mb-4">Joining as a REALTOR® gives Appraisers access to SOMO MLS and Supra keys. This trade name sets you apart from non-members. Proudly display the REALTOR® logo on your marketing literature.</p>
   <p><a href="https://form.jotform.com/243164896458168" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">GSBOR Application</a></p>
  `,
  },
  {
    id: "rejoining",
    title: "Rejoining Members",
    content: `
   <p class="mb-4">Agents who have been a member with us or another Board of REALTORS® previously may have varying dues and application fees. Please email the Membership Department at: <a href="mailto:support@gsbor.com" class="text-blue-600 underline">support@gsbor.com</a> for additional information.</p>
   <p><a href="https://form.jotform.com/243164896458168" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ">GSBOR Application</a></p>
  `,
  },
  {
    id: "mls-only",
    title: "Multiple Listing Service Only Application",
    content: `
   <p class="mb-4">MLS Only gives you access to the Southern Missouri Regional® MLS and NO other membership benefits.</p>
   <p class="mb-4"><a href="https://form.jotform.com/222275844401149" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ">MLS Application</a></p>
   <p class="mb-4">If you are the Broker applying for MLS Only access, use the Broker Application.</p>
   <p class="mb-4"><a href="https://form.jotform.com/223136064494152" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ">Broker MLS Application</a></p>
   <p class="mb-4">*MLS Only requires a letter of good standing from your primary association.</p>
   <p class="text-sm text-gray-600 italic">(This option is only available to those brokers/agents who already hold Primary Board membership with another Board AND if you are not the Designated Broker, he or she must also be a member of the MLS)</p>
  `,
  },
  {
    id: "administration",
    title: "Administration-Office Application",
    content: `
   <p class="mb-4">Are you a real estate administrative or office assistant? You can apply for unlicensed access below.</p>
   <p class="mb-4 ">Be aware of the following:</p>
   <ul class="mb-4 space-y-2 text-gray-600">
    <li class="flex items-start"><span class="text-green-500 mr-2">•</span>Make sure the admin application is signed by the Broker.</li>
    <li class="flex items-start"><span class="text-green-500 mr-2">•</span>If an admin holds an active license that is not held with a holding/referral company, he/she will need to join as a REALTOR® member.</li>
    <li class="flex items-start"><span class="text-green-500 mr-2">•</span>Know the <a href="https://www.nar.realtor/being-a-realtor/personal-assistants/state-statutes-and-regulations-for-unlicensed-assistants" target="_blank" class="text-blue-600 underline">MREC rules</a> about what an unlicensed assistant can and cannot do when assisting with a real estate transaction.</li>
   </ul>
   <p><a href="https://form.jotform.com/223146891006150" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ">Administration Application</a></p>
  `,
  },
  {
    id: "affiliate",
    title: "Affiliate",
    content: `
   <p class="mb-4">Greater Springfield Board of REALTORS® Affiliate members are experts in all areas of the real estate industry. There are more than 100 Affiliate members within the Association. Our Affiliates are committed to strong ethical practices, have high professional standards, and provide quality customer satisfaction.</p>
   <p class="mb-4"><a href="https://gsborportal.ramcoams.net/Membership/Directory/MemberSearch.aspx" target="_blank" rel="noopener" class="inline-flex items-center px-3
   <p class="mb-4">Are you a prospective Affiliate member interested in connecting with more than 2,000 members? Download our Affiliate Application to build your network today</p>
   <p><a href="https://form.jotform.com/222005105666143" target="_blank" rel="noopener" class="inline-flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ">Affiliate Application</a></p>
  `,
  },
];
</script>

<style scoped>
.pattern-grid {
  background-image: linear-gradient(
      to right,
      rgba(33, 79, 117, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(33, 79, 117, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
