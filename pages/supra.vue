<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="Supra® Key Management"
      subtitle="Secure, convenient lockbox systems for real estate professionals"
      :show-steps="false"
      :cta-buttons="[
        {
          text: 'Download eKEY App',
          link: '#download-app',
          variant: 'primary',
        },
      ]"
      variant="compact"
      class="bg-primary-600"
    />

    <!-- About Supra -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Support Information - Moved Higher -->
          <div class="bg-primary-50 border-l-4 border-primary-600 rounded-xl p-8 mb-16">
            <h2 class="text-2xl text-primary-900 mb-4 font-semibold">Supra Support</h2>
            <p class="text-gray-700 mb-4">
              Members who have Supra related questions or concerns should contact Supra support:
            </p>
            <div class="space-y-2">
              <p class="text-gray-700">
                <strong>Phone:</strong>
                <a
                  href="tel:1-877-699-6787"
                  class="text-primary-600 hover:text-primary-800 ml-2"
                  >1-877-699-6787</a
                >
              </p>
              <p class="text-gray-700">
                <strong>Email:</strong>
                <a
                  href="mailto:suprasupport@fs.utc.com"
                  class="text-primary-600 hover:text-primary-800 ml-2"
                  >suprasupport@fs.utc.com</a
                >
              </p>
              <p class="text-gray-700">
                <strong>GSBOR Support:</strong>
                <a
                  href="mailto:support@gsbor.com"
                  class="text-primary-600 hover:text-primary-800 ml-2"
                  >support@gsbor.com</a
                >
              </p>
            </div>
          </div>

          <div class="text-center mb-16">
            <h2 class="text-4xl text-gray-900 mb-6">About Supra®</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Supra is the leading global provider of key management solutions.
              REALTORS® across the country utilize SUPRA lockboxes for
              convenient, secure house showings.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-2xl text-gray-900 mb-6">
                Industry Leader Since 1955
              </h3>
              <p class="text-gray-600 mb-6">
                Supra released its first lockbox system in 1955 for the real
                estate industry. The Supra real estate lockbox system is managed
                today by real estate associations and Multiple Listing Services
                for real estate agents to efficiently market and show listed
                homes.
              </p>
              <p class="text-gray-600 mb-6">
                The Supra System makes it easy for showing agents to access
                properties and for listing agents to track activity at client
                properties. The latest Supra® keybox, iBox BT LE, adds
                Bluetooth® Low Energy technology, and communicates with newer
                smartphones without any additional hardware.
              </p>
              <p class="text-gray-600">
                A data record is created each time a keybox is opened, and
                Supra's wireless keys transmit the showing information
                immediately so real estate agents can obtain real-time
                information about showings. Based in Salem, Oregon, USA, Supra
                is part of UTC Climate, Controls & Security, a unit of United
                Technologies Corporation.
              </p>
            </div>
            <div class="text-center">
              <img
                src="/images/supra_key_box_square_4.jpg"
                alt="Supra Lockbox"
                class="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <FeatureCardsSection
      title="Supra System Features"
      subtitle="Advanced technology for secure property access and real-time tracking"
      :features="[
        {
          title: 'Electronic Keys',
          description:
            'Supra electronic keys can be a proprietary electronic device or an eKEY® application running on popular smartphones. All the Supra keys include PIN-code security. The keys record events each time a keybox is opened.',
          icon: 'i-lucide-key',
        },
        {
          title: 'Key Boxes',
          description:
            'Supra electronic keyboxes have been used on millions of homes. Current models of keyboxes can be opened using Bluetooth® or infrared signals. Supra\'s system records events each time a keybox is opened.',
          icon: 'i-lucide-lock',
        },
        {
          title: 'Real-Time Tracking',
          description:
            'A data record is created each time a keybox is opened, and wireless keys transmit showing information immediately for real-time updates.',
          icon: 'i-lucide-activity',
        },
      ]"
      theme="light"
      :columns="3"
    />

    <!-- Download App Section -->
    <section id="download-app" class="py-20 bg-primary-700 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl mb-6">Download Supra® eKEY App</h2>
          <p class="text-xl text-primary-100 mb-12">
            Access properties securely with the Supra eKEY app on your
            smartphone
          </p>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left">
              <img
                src="/images/supra_app-images_3.jpg"
                alt="Supra eKEY App Screenshots"
                class="rounded-xl shadow-2xl max-w-full h-auto mx-auto lg:mx-0"
              />
            </div>
            <div>
              <h3 class="text-2xl mb-6">Get Started Today</h3>
              <p class="text-primary-100 mb-8">
                The refreshed eKEY app requires Android™ OS 5 or greater or
                Apple® iOS 10 or greater. Download from your device's app store.
              </p>
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://apps.apple.com/us/app/supra-ekey/id379909266"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="/images/supra_app-store_6.svg"
                    alt="Download on App Store"
                    class="h-8"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.utc.fs.ekey&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src="/images/supra_google-play_7.svg"
                    alt="Get it on Google Play"
                    class="h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing & Access -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-900 mb-4">Access & Pricing</h2>
            <p class="text-lg text-gray-600">
              Get started with Supra key management services
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Key Access -->
            <FeatureCard
              title="Key Access Requirements"
              description="Eligibility requirements for obtaining Supra keys"
              variant="green"
              :features="[
                'MLS membership through GSBOR required',
                'Affiliate Keyholder membership accepted',
                'Unlicensed Assistants not eligible',
                'Only one key per member',
              ]"
            />

            <!-- Pricing -->
            <div class="bg-primary-50 rounded-xl p-8">
              <h3 class="text-xl text-primary-900 mb-6">Activation Fees</h3>
              <div class="space-y-4">
                <div
                  class="flex justify-between items-center py-3 border-b border-primary-200"
                >
                  <span class="text-primary-900">Supra eKEY</span>
                  <span class="text-blue-600">$50.00 + tax</span>
                </div>
                <div
                  class="flex justify-between items-center py-3 border-b border-primary-200"
                >
                  <span class="text-primary-900">Supra XpressKey®</span>
                  <span class="text-blue-600">$70.00 + tax</span>
                </div>
                <div class="flex justify-between items-center py-3">
                  <span class="text-primary-900">New Lockbox</span>
                  <span class="text-blue-600">$105.00 + tax</span>
                </div>
              </div>
              <p class="text-sm text-primary-600 mt-4">
                Cancel anytime by contacting support@gsbor.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-lg text-gray-600">
              Common questions about Supra key management
            </p>
          </div>

          <AccordionComponent
            :items="faqItems"
            :allow-multiple="false"
            variant="default"
          />
        </div>
      </div>
    </section>

    <!-- Disclaimer Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl text-gray-900 mb-6">Important Information</h2>
          <div class="bg-gray-50 rounded-xl p-8 mb-8">
            <p class="text-gray-700 mb-4">
              New Members are given the opportunity to get set up with a Supra
              Key/Lockbox during their new member appointment.
            </p>
          </div>

          <!-- Brochures and Resources -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Supra System Brochure -->
            <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="flex-grow">
                <h3 class="text-xl text-gray-900 mb-3 font-semibold text-center">Supra System Brochure</h3>
                <p class="text-gray-600 text-sm mb-6 text-center">
                  Complete overview of the Supra system
                </p>
              </div>
              <Button
                to="/documents/Supra-Systems-Brochure.pdf"
                external
                color="blue"
                variant="solid"
                class="w-full cursor-pointer"
              >
                Download PDF
                <Icon name="i-lucide-download" class="ml-2 w-4 h-4" />
              </Button>
            </div>

            <!-- eKEY Brochure -->
            <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="flex-grow">
                <h3 class="text-xl text-gray-900 mb-3 font-semibold text-center">eKEY Brochure</h3>
                <p class="text-gray-600 text-sm mb-6 text-center">
                  Learn about the eKEY mobile application
                </p>
              </div>
              <Button
                to="/documents/Supra-eKEY-brochure.pdf"
                external
                color="emerald"
                variant="solid"
                class="w-full cursor-pointer"
              >
                Download PDF
                <Icon name="i-lucide-download" class="ml-2 w-4 h-4" />
              </Button>
            </div>

            <!-- Lockbox Transfer Form -->
            <div class="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="flex-grow">
                <h3 class="text-xl text-gray-900 mb-3 font-semibold text-center">Lockbox Transfer Form</h3>
                <p class="text-gray-600 text-sm mb-6 text-center">
                  Transfer lockbox ownership form
                </p>
              </div>
              <Button
                to="/documents/iBox-BT-LE-TRANSFER-AGREEMENT-editable.pdf"
                external
                color="purple"
                variant="solid"
                class="w-full cursor-pointer"
              >
                Download PDF
                <Icon name="i-lucide-download" class="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <SupportSection
      title="Need Support?"
      description="Get help with Supra key management and technical support"
      variant="gray"
      email="support@gsbor.com"
      email-text="GSBOR Support"
    />
  </div>
</template>

<script setup>
// FAQ Data - Comprehensive list from JSON structure
const faqItems = [
  // Access Questions
  {
    id: "access-requirements",
    title: "Who can obtain a Supra key?",
    content:
      "Only members who hold MLS membership through our Association, or Affiliate Keyholder membership may obtain a key. Unlicensed Assistants will not be issued a key.",
  },
  {
    id: "activation-fees",
    title: "Are there activation fees?",
    content:
      "Yes, Supra eKEY activation fee is $50.00 plus tax, and Supra XpressKey® activation fee is $70.00 plus tax.",
  },
  {
    id: "cancellation",
    title: "Can I cancel my key service?",
    content: "Yes, you may cancel anytime by contacting support@gsbor.com.",
  },
  {
    id: "multiple-keys",
    title: "Can I have multiple keys?",
    content: "No, only one key may be issued per member.",
  },

  // Lockbox Questions
  {
    id: "lockbox-pricing",
    title: "How much do new lockboxes cost?",
    content:
      'New lockboxes are $105.00 plus tax. Credit, debit, or check are accepted. The Association occasionally has "used" boxes available at varying prices set by the previous leaseholder.',
  },
  {
    id: "lockbox-requirements",
    title: "When is a Supra lockbox required?",
    content:
      "If a lockbox is placed on a listing in Greene, Christian, and Webster county, it is required to be a Supra lockbox.",
  },
  {
    id: "lockbox-missing",
    title: "What if my lockbox is missing or stolen?",
    content: "Report it to the Association at support@gsbor.com.",
  },
  {
    id: "lockbox-malfunction",
    title: "What if my lockbox malfunctions?",
    content: "Return the box to the Association for replacement.",
  },
  {
    id: "unresponsive-lockbox",
    title: "What do I do if my lockbox is unresponsive?",
    content:
      'Visit the <a href="http://www.supraekey.com/CustomerSupport/Pages/Support/iBox/UnresponsiveKeybox.aspx" target="_blank" class="text-blue-600 hover:text-blue-800">Supra Unresponsive Keybox</a> page.',
  },

  // Device Compatibility
  {
    id: "device-compatibility",
    title: "What devices are compatible?",
    content:
      "The refreshed eKEY app requires Android™ OS 5 or greater or Apple® iOS 10 or greater. App stores will automatically show compatible versions for your device.",
  },
  {
    id: "old-devices",
    title: "What if I don't have the necessary operating system?",
    content:
      "App stores are smart enough to know which operating system you have and what is needed by the apps. Older devices that are not able to support the refreshed eKEY app will not be able to download the new app in the app store.",
  },

  // Apple Watch
  {
    id: "apple-watch",
    title: "Does the app work with Apple Watch?",
    content:
      'Yes, when "Only Require PIN Once Per Day" is enabled in the eKEY app settings. The Apple Watch must be within 30 feet of the iPhone and works as a remote for the iPhone.',
  },
  {
    id: "apple-watch-independent",
    title: "Can the Apple Watch work independently?",
    content:
      "No, the eKEY app on the Apple Watch can only be used if it's in proximity of an iPhone. The Apple Watch must be within 30 feet of the iPhone.",
  },

  // Android Watch
  {
    id: "android-watch",
    title: "Are Android watches supported?",
    content:
      "Not at this time. The team is reviewing the technical requirements.",
  },

  // Biometrics
  {
    id: "biometrics",
    title: "Can I use biometrics?",
    content:
      "The once per day PIN can only be enabled if your phone has a lock function turned on that requires a password, PIN, symbol, biometrics, etc. to access any apps on your phone.",
  },

  // Data at the Door
  {
    id: "data-at-door",
    title: "What information is available at the door?",
    content:
      "The information is composed of data supplied by the Association/MLS and the listing agent. You need an internet connection to load listing details.",
  },
  {
    id: "no-internet",
    title: "What happens without internet connection?",
    content:
      'The eKey app will display this message: "Unable to load listing details. Make sure you are connected to the Internet."',
  },

  // Messages
  {
    id: "message-management",
    title: "How do I manage messages in the app?",
    content:
      "Messages on iOS devices can be deleted from the list by swiping left. Messages for both iOS and Android can be deleted by viewing the message details and selecting delete.",
  },
];

// SEO Meta
useSeoMeta({
  title: "Supra® Key Management - Greater Springfield Board of Realtors",
  description:
    "Secure lockbox systems and eKEY apps for real estate professionals. Access properties safely with Supra key management technology.",
  ogTitle: "Supra® Key Management - GSBOR",
  ogDescription:
    "Leading key management solutions for real estate professionals with secure lockboxes and mobile apps.",
  ogImage: "/images/supra_supra-ekey_5.jpg",
  twitterCard: "summary_large_image",
});
</script>
