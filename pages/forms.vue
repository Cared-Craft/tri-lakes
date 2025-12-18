<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <HeroSection
      title="Forms & Resources"
      subtitle="Access all GSBOR member forms, applications, MLS resources, and essential documents"
      :cta-button="{
        text: 'Contact Support',
        link: 'mailto:support@gsbor.com',
        variant: 'primary',
      }"
      variant="compact"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-12">
      <!-- Two Column Layout for Forms and Resources -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left Column: Current and New Member Forms -->
          <div class="space-y-6">
            <div class="bg-primary-600 text-white rounded-t-lg p-6">
              <h2 class="text-xl mb-4">Current and New Member Forms</h2>
              <p class="text-primary-100 leading-relaxed text-sm">
                Submit completed form to
                <a
                  href="mailto:support@gsbor.com"
                  class="text-blue-400 hover:text-white underline"
                  >support@gsbor.com</a
                >
                or to
                <NuxtLink
                  to="/contact-us"
                  class="text-blue-400 hover:text-white underline"
                  >contact us page</NuxtLink
                >.
              </p>
            </div>
            <AccordionComponent
              :items="memberFormSections"
              variant="bordered"
            />
          </div>

          <!-- Right Column: MLS Resources -->
          <div class="space-y-6">
            <div class="bg-primary-600 text-white rounded-t-lg p-6">
              <h2 class="text-xl mb-4">MLS Resources</h2>
              <p class="text-primary-100 leading-relaxed text-sm">
                Answers to your MLS and listing questions, troubleshooting, and
                guidebooks.
              </p>
            </div>
            <AccordionComponent
              :items="mlsResourceSections"
              variant="bordered"
            />
          </div>
        </div>
      </div>

      <!-- Important Notice -->
      <div class="max-w-4xl mx-auto mb-20">
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div class="flex items-start space-x-3">
            <Icon
              name="i-lucide-alert-circle"
              class="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0"
            />
            <div>
              <h3 class="text-lg text-yellow-900 mb-2">
                Membership Changes or Deactivations
              </h3>
              <p class="text-yellow-800 mb-4">
                Please email a staff member at
                <a
                  href="mailto:support@gsbor.com"
                  class="text-yellow-700 hover:text-yellow-900 underline"
                  >support@gsbor.com</a
                >
                for further help if you are changing brokers or canceling your
                membership.
              </p>
              <p class="text-sm text-yellow-700 italic">
                *Note: If canceling membership, your license must be held by a
                referral/holding company, a broker who does not hold Board/MLS
                membership, or back to the MREC.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Still Looking for a Form Section -->
      <section class="mb-16">
        <div
          class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
        >
          <h2 class="text-3xl mb-4">Still Looking for a Form?</h2>
          <p class="text-xl mb-6 text-primary-100">
            Contact us for assistance or visit Missouri Realtors for additional
            forms.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact-us" variant="outline" color="white" size="lg">
              Contact Us
            </Button>
            <Button
              href="https://www.missourirealtor.org/risk-management/forms-index"
              variant="solid"
              color="white"
              size="lg"
              :external="true"
            >
              Missouri Realtors Forms
            </Button>
          </div>
        </div>
      </section>

      <!-- Copyright -->
      <div class="text-center mt-16 pt-8 border-t border-gray-200">
        <p class="text-gray-500">
          © Copyright {{ new Date().getFullYear() }}. Greater Springfield Board of Realtors®, Inc.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: "Forms & Resources - Greater Springfield Board of REALTORS®",
  meta: [
    {
      name: "description",
      content:
        "Access all GSBOR member forms, applications, MLS resources, and essential documents. Find membership forms, transaction documents, and regulatory materials.",
    },
  ],
});

// Helper function to format form links
function formatFormLink(
  title: string,
  description: string,
  url: string,
  isExternal: boolean
) {
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  const externalIcon = isExternal
    ? ' <Icon name="i-lucide-external-link" class="w-4 h-4 inline ml-1" />'
    : "";
  return `<div class="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
  <div class="flex-1">
   <h4 class="text-gray-900 mb-1">${title}</h4>
   <p class="text-sm text-gray-600 mb-3">${description}</p>
   <a href="${url}" class="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"${target}>
    Download/View Form${externalIcon}
   </a>
  </div>
  <Icon name="i-lucide-file-text" class="w-5 h-5 text-gray-400 mt-1 flex-shrink-0 ml-4" />
 </div>`;
}

// Current and New Member Forms sections
const memberFormSections = [
  {
    id: "current-member-forms",
    title: "Current Member Forms",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Forms for existing members to update information and make changes</p>
   ${formatFormLink(
     "New Office",
     "New office registration form for brokers",
     "/documents/BROKER.pdf",
     true
   )}
   ${formatFormLink(
     "New Admin",
     "MLS Admin application form",
     "/documents/2024-MLS-Admin-Application-Editable-2.pdf",
     true
   )}
   ${formatFormLink(
     "Community Reinvestment Grant Application",
     "Application for community reinvestment grants",
     "/documents/CRC-Application-Packet-Rev.-April-2024.pdf",
     true
   )}
   ${formatFormLink(
     "2022 Code of Ethics and Standards of Practice",
     "NAR Code of Ethics and standards",
     "/documents/NAR-Code-of-Ethics-2022-1.pdf",
     true
   )}
   ${formatFormLink(
     "Classroom Reservation Request",
     "Reserve classroom space for events",
     "/documents/Classroom-Reservation-and-Agreement_2022.pdf",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
  {
    id: "new-member-forms",
    title: "New Member Forms",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Application forms for new members joining GSBOR</p>
   ${formatFormLink(
     "GSBOR Application",
     "New member application form",
     "https://form.jotform.com/243164896458168",
     true
   )}
   ${formatFormLink(
     "Affiliate Application",
     "Application for affiliate membership",
     "/documents/2022-Affiliate-Application.pdf",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
];

// MLS Resources sections
const mlsResourceSections = [
  {
    id: "faqs",
    title: "FAQs",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Frequently asked questions about MLS and membership</p>
   ${formatFormLink(
     "MLS FAQ",
     "Frequently asked questions about MLS",
     "/member-faq",
     false
   )}
   ${formatFormLink(
     "IDX FAQ",
     "Frequently asked questions about IDX",
     "/documents/SOMO-IDX-FAQ.pdf",
     true
   )}
   ${formatFormLink(
     "MLS Fine Coupon FAQ",
     "Frequently asked questions about fines",
     "https://drive.google.com/file/d/11cd1SSdCETFduYY-mSqJt4XcdTFvZCh2/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Fair Housing and Equal Opportunity For All",
     "Fair housing guidelines and requirements",
     "https://drive.google.com/file/d/1PWHZqagdBiF3s96ZTOd52V-k7G8inq3C/view?usp=share_link",
     true
   )}
   ${formatFormLink(
     "For Your Protection Get a Home Inspection",
     "Information about home inspection importance",
     "https://drive.google.com/file/d/1eMeBbyBMiTchHeW82Fwm1LTbO-tHoQ5H/view?usp=share_link",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
  {
    id: "guides-how-to",
    title: "Guides and How-To Resources",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Step-by-step guides and best practices for MLS usage</p>
   ${formatFormLink(
     "MLS Top Ten Tips",
     "Essential tips for using the MLS effectively",
     "/documents/MLS-Top-10.pdf",
     true
   )}
   ${formatFormLink(
     "Active With Contingency",
     "Guidelines for active contingency listings",
     "https://drive.google.com/file/d/1DmGwqVR7uSy3lcC-61jgjec1AmsX1VjO/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Adding Off-Market Sales to MLS",
     "Process for adding off-market sales",
     "https://drive.google.com/file/d/1EJHgEm9ec3KOSXYo4STOgtqUq0DBaGhs/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "MLS Branding Guidelines",
     "Official branding requirements for MLS",
     "https://drive.google.com/file/d/13QpIcFBi6SlYXg1m0cVCXxbdLnElDhXb/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Clear Cooperation Policy",
     "Guidelines for clear cooperation requirements",
     "https://drive.google.com/file/d/1E-_kPpbrBk5gGT8dz0xmFJ-FN9Bj_aL4/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Most Common Rule Violations",
     "Guide to avoiding common MLS violations",
     "https://drive.google.com/file/d/1I8f2GSyxbxnwDVuuywoflnSp2bqxm6_E/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Parent/Child Listing Guidelines",
     "Rules for parent/child listing relationships",
     "https://drive.google.com/file/d/1EZu7X8qVgls5dDto2cMLE4xs7W-Oei-S/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Team Guidelines",
     "MLS guidelines for real estate teams",
     "https://drive.google.com/file/d/1EaPvhgBHKG0qJJjS7tkYIHQOp0XWLJmy/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "MLS in Action",
     "Best practices guide for MLS usage",
     "/documents/2021-04-14-MLS-in-Action-1.pdf",
     true
   )}
   ${formatFormLink(
     "MLS Service Area",
     "Information about MLS service boundaries",
     "https://drive.google.com/file/d/1CSqurmrrK77myTNdxLtnwZGlWciDxxoX/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Not Receiving MLS Data Checker Emails?",
     "Troubleshooting guide for email issues",
     "https://drive.google.com/file/d/1CdfL1MwMdo3lduc0g0yLBHhyhUFjPvFC/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "HOME Team Accessible Checklist",
     "Accessibility checklist for properties",
     "/documents/2022-01_HOME-Team-Accessible-Checklist-FINAL-12PT.pdf",
     true
   )}
   ${formatFormLink(
     "Appraiser Tips for Government Loans",
     "Guidelines for appraisers on government loans",
     "https://drive.google.com/file/d/1y7hSvgJF_AA2P5NoVkBT4qnaq9REWbtv/view?usp=sharing",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
  {
    id: "listing-forms",
    title: "Listing Forms",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Forms for listing properties and managing listings</p>
   ${formatFormLink(
     "Listing Change Addendum (Revised July 2024)",
     "Form for making changes to existing listings",
     "https://drive.google.com/file/d/1Xn5i9Mw_J8sbwbC_AP149R8a7idrNU_u/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "SOMO Coming Soon Addendum",
     "Addendum for coming soon listings",
     "https://drive.google.com/file/d/100HAb14eT9-3BkWyU2x7XsW2Rqw-5Gaa/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Authorization to Show Property (Revised July 2024)",
     "Authorization form for property showings",
     "https://drive.google.com/file/d/1XjaROXl6hEKa9rcN4Lj-4TpB14WEEpS7/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "SOMO Withhold Listing From MLS",
     "Form to withhold listings from MLS",
     "https://drive.google.com/file/d/1fuaQP1bzSd196HVCJZb7BdL-yblf_FbB/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Authorization To Rent Or Lease Property (Revised July 2024)",
     "Authorization for rental/lease properties",
     "https://drive.google.com/file/d/1XfkDTb0drkxFEUO8RpJfZFuh4TLIerMs/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Estimated Sellers' Proceeds (Revised July 2024)",
     "Form for calculating seller proceeds",
     "https://drive.google.com/file/d/1Xo6WcnwMin0kQZmKA-sZz8XVmYxmTApa/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Employment Agreement Addendum (Revised July 2024)",
     "Addendum for employment agreements",
     "https://drive.google.com/file/d/1Xf_9NlOvs0Owiy1gfFAGWtg0qA9dOMs2/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Estimated Buyers' Expenses (Revised July 2024)",
     "Form for calculating buyer expenses",
     "https://drive.google.com/file/d/1XeFQAOXCFqN2aXZemxphqOk4u5YxBXgy/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Broker's Appointment of Designated Agent",
     "Form for designated agent appointments",
     "https://drive.google.com/file/d/1cYGYWkAd3ODWoT5huN04XC93D2IVUNVq/view?usp=sharing",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
  {
    id: "rules-regulations",
    title: "MLS Rules and Regulations",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Official bylaws, rules, and regulatory documents</p>
   ${formatFormLink(
     "MLS of Springfield Rules & Regulations",
     "Complete MLS rules and regulations",
     "https://drive.google.com/file/d/178rmXNP_-NeMkw0yF8D48-8K682wFbZT/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "GSBOR Bylaws",
     "Official GSBOR organizational bylaws",
     "https://drive.google.com/file/d/14VpGOHjiIO87dCHmmrItQd34IHhihL9B/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "MLS of Springfield Bylaws",
     "MLS organizational bylaws",
     "https://drive.google.com/file/d/12vghIJQfF8TPRRakDw2cPr5oJZ1lVrRg/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "Violations & Fines",
     "Information about MLS violations and fines",
     "https://drive.google.com/file/d/1HxV8JpGRKV1zMistt3K9e1loAWTVChO-/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "MR Forms Revisions",
     "Missouri Realtors form revisions",
     "https://www.missourirealtor.org/missourirealtors/risk-management/forms-index/2023-forms",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
  {
    id: "bylaws",
    title: "Organizational Bylaws",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Organizational bylaws and governance documents</p>
   ${formatFormLink(
     "GSBOR Bylaws",
     "Official GSBOR organizational bylaws",
     "https://drive.google.com/file/d/14VpGOHjiIO87dCHmmrItQd34IHhihL9B/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "MLS of Springfield Bylaws",
     "MLS organizational bylaws",
     "https://drive.google.com/file/d/12vghIJQfF8TPRRakDw2cPr5oJZ1lVrRg/view?usp=sharing",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
  {
    id: "idx",
    title: "IDX Resources",
    content: `<div class="space-y-4">
   <p class="text-gray-600 mb-6">Internet Data Exchange resources and agreements</p>
   ${formatFormLink(
     "IDX Rules & Regulations",
     "Internet Data Exchange rules and regulations",
     "https://drive.google.com/file/d/178rmXNP_-NeMkw0yF8D48-8K682wFbZT/view?usp=sharing",
     true
   )}
   ${formatFormLink(
     "IDX Agreement",
     "IDX participation agreement form",
     "/documents/IDX-Agreement-2020-fillable.pdf",
     true
   )}
   ${formatFormLink(
     "IDX FAQ",
     "Frequently asked questions about IDX",
     "/documents/SOMO-IDX-FAQ.pdf",
     true
   )}
   ${formatFormLink(
     "MLS Grid Developer Resources",
     "Technical resources for MLS Grid developers",
     "https://www.mlsgrid.com/resources",
     true
   )}
  </div>`,
    defaultOpen: false,
  },
];
</script>

<style scoped>
/* Custom styles for form links */
:deep(.space-y-4 > div + div) {
  margin-top: 1rem;
}
</style>
