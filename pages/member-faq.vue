<template>
 <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <HeroSection
   title="Member FAQ"
   subtitle="Find answers to frequently asked questions about GSBOR membership"
   :cta-button="{
    text: 'Contact Us',
    link: '/contact-us',
    variant: 'primary',
   }"
  />

  <!-- Main Content -->
  <div class="container mx-auto px-6 py-16">
   <!-- Introduction -->
   <div class="max-w-4xl mx-auto text-center mb-16">
    <p class="text-xl text-gray-600 leading-relaxed">
     Check out the list of frequently asked questions below. If you can't
     find the answer to your question, fill out the contact form and we'll
     get back with you as soon as possible.
    </p>
   </div>

   <!-- FAQ Sections -->
   <div class="max-w-4xl mx-auto mb-20">
    <h2 class="text-3xl text-center mb-12 text-gray-900">
     Membership FAQ
    </h2>

    <AccordionComponent :items="membershipFAQ" variant="bordered" />
   </div>

   <!-- Contact Section -->
   <div class="text-center">
    <h2 class="text-3xl mb-6 text-gray-900">
     Can't Find the Answer to Your Question?
    </h2>
    <p class="text-xl text-gray-600 mb-8">
     Fill out a contact form, email or call. One of our friendly staff
     members would be happy to answer your question.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
     <Button to="/contact-us" color="primary"> Contact Us </Button>
     <a
      href="mailto:support@gsbor.com"
      class="inline-flex items-center px-8 py-3 text-blue-600 hover:text-blue-800 "
     >
      <Icon name="i-lucide-mail" class="w-5 h-5 mr-2" />
      support@gsbor.com
     </a>
    </div>

    <div
     class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600"
    >
     <a
      href="tel:(417) 883-1226"
      class="inline-flex items-center hover:text-blue-600 transition-colors"
     >
      <Icon name="i-lucide-phone" class="w-5 h-5 mr-2" />
      (417) 883-1226
     </a>
     <span class="hidden sm:block">•</span>
     <span class="text-gray-500">
      1310 E Primrose St. Springfield, MO 65804
     </span>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
 title: "Member FAQ - Greater Springfield Board of REALTORS®",
 meta: [
  {
   name: "description",
   content:
    "Find answers to frequently asked questions about GSBOR membership, dues, applications, and member services. Get the help you need quickly and easily.",
  },
 ],
});

// FAQ items based on the content from member-faq.md
const membershipFAQ = [
 {
  id: "membership-fees",
  title: "What fees are associated with membership?",
  content:
   "There are three main types of fees associated with membership:<br><br>1. Board dues<br>2. MLS fees<br>3. Equipment fees (lockbox and key)<br><br>For a detailed breakdown of costs, please use our <a href='/new-members/become-a-member#dues-calculator' class='text-blue-600 hover:text-blue-800 underline'>Dues Calculator</a> to get an accurate estimate based on your specific situation.",
  defaultOpen: true,
 },
 {
  id: "cancel-membership",
  title: "How do I cancel my membership?",
  content:
   "Agents cannot cancel membership without written instruction from the broker. Your broker will need to send an email to support@gsbor.com and include a copy of the MREC form or written instruction to cancel.",
 },
 {
  id: "membership-hold",
  title: "Can I put my membership on hold?",
  content:
   "There is not an option to put a membership on hold. You can only join or cancel your membership. If you need to make changes to your membership status, please contact support@gsbor.com for assistance.",
 },
 {
  id: "broker-change",
  title: "How do I change my broker?",
  content:
   "Your broker will need to submit a copy of the MREC license change form to the Board AFTER it has been sent certified mail to MREC. MREC will charge a $50.00 license change fee that will need to accompany the license. The Board also charges a $50.00 transfer fee to update all your member/MLS records. Please make sure to notify the board of additional contact information changes such as name, address, phone or email address.",
 },
 {
  id: "pay-dues",
  title: "How do I pay my dues?",
  content:
   'You can pay your dues online through the "pay bill" option on the member portal. Please note: Payments must BE MADE by January 31st to avoid the $50.00 late fee. Renewal invoices are posted online to your GSBOR account. The first notice will go out in mid-December. Dues are payable as of January 1st and late as of February 1st.',
 },
 {
  id: "team-membership",
  title: "Is there a team membership option?",
  content:
   'Teams are created under the direction of your Designated Broker and do not factor into Board membership. This means there is not a "team" membership option; it is only on an individual basis. Each team member must have their own individual membership.',
 },
 {
  id: "sharing-login",
  title: "Can I share my login credentials with other team members?",
  content:
   "No, sharing of any login credentials between members is strictly prohibited. Each member must use their own individual login credentials for all GSBOR services and systems.",
 },
 {
  id: "refunds",
  title: "Are there refunds on dues and application fees?",
  content:
   "No, there are no refunds on Board dues and application fees once payment has been processed. Please ensure you understand all terms and conditions before submitting payment.",
 },
 {
  id: "late-fees",
  title: "What happens if I pay my dues late?",
  content:
   "A $50.00 late fee will be applied to your account if dues are not paid by January 31st. Dues become late as of February 1st. To avoid late fees, please ensure payment is submitted by the January 31st deadline.",
 },
 {
  id: "update-information",
  title: "How do I update my contact information?",
  content:
   "You can update your contact information by using the Update Information form on our website or by contacting the membership department at support@gsbor.com. Please notify us of any changes to your name, address, phone number, or email address.",
 },
 {
  id: "previous-member",
  title: "I was a member before. Do I pay the same dues?",
  content:
   "Agents who have been a member with us or another Board of REALTORS® previously may have varying dues and application fees. Please email the Membership Department at support@gsbor.com for additional information about your specific situation.",
 },
 {
  id: "orientation-required",
  title: "Do I need to attend orientation?",
  content:
   "Yes, you are required to take an Orientation Class along with New Member Code of Ethics Training which are provided free of charge, and must be taken within 60 days of joining the Association. You will receive all necessary registration details for orientation training via email after your application has been processed.",
 },
 {
  id: "mls-access",
  title: "When will I get MLS access?",
  content:
   "MLS access is typically activated within 1-2 business days after your membership application is approved and payment is processed. You will receive login credentials and instructions via email once your access is ready.",
 },
];
</script>
