<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      title="MLS NXT Tech Suite"
      subtitle="Innovative technology tools and exclusive member discounts to elevate your business"
      :show-steps="false"
      :cta-button="{
        text: 'Explore Tools',
        link: '#member-discounts',
        variant: 'primary',
      }"
      class="bg-primary-600"
    />

    <!-- Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl text-gray-900 mb-6">GSBOR Tech Suite</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              The GSBOR Tech Suite is a toolkit of innovative and impactful
              products, curated to provide a unique advantage to our members.
              Valuable discounts on these products are extended to members
              through their GSBOR affiliation, empowering them to elevate their
              business operations.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl text-gray-900 mb-6">
                Exclusive Member Benefits
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <Icon
                    name="i-lucide-check-circle"
                    class="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-600"
                    >Exclusive discounts on premium technology tools</span
                  >
                </div>
                <div class="flex items-start">
                  <Icon
                    name="i-lucide-check-circle"
                    class="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-600"
                    >Curated selection of industry-leading solutions</span
                  >
                </div>
                <div class="flex items-start">
                  <Icon
                    name="i-lucide-check-circle"
                    class="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-600"
                    >Free access to essential business tools</span
                  >
                </div>
                <div class="flex items-start">
                  <Icon
                    name="i-lucide-check-circle"
                    class="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                  />
                  <span class="text-gray-600"
                    >Ongoing support and training resources</span
                  >
                </div>
              </div>
            </div>
            <div class="text-center">
              <img
                src="/images/mls-nxt-tech-suite_tech-suite-logo-no-background-crop_3.jpg"
                alt="Tech Suite Logo"
                class="rounded-xl shadow-lg max-w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Member Discounts -->
    <section id="member-discounts" class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl text-gray-900 mb-4">
            Exclusive Member Discounts
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of special pricing and offers available only to GSBOR
            members
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Back at You -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Back at You</h3>
                <span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Social Media</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/BAY-removebg-preview.png" alt="Back at You" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Back At You is an easy, reliable, and powerful social media marketing solution focused on developing the best real estate software for brokerages and agents.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                Exclusive NAR SocialBAY Starter Plan, includes discount on the one-time activation fee
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://info.backatyou.com/nar" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">info.backatyou.com/nar</a>
              </p>
              <p>
                📞
                <a href="tel:8332225288" class="text-blue-600 hover:underline">(833) 222-5288</a>
              </p>
              <p>✉️ MemberOffer@BackAtYou.com</p>
            </div>
          </div>

          <!-- BombBomb -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">BombBomb</h3>
                <span class="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Video Marketing</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/BombBomb-Transparent.png" alt="BombBomb" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              BombBomb's software lets you record and send videos directly to anyone from your computer or smartphone (iOS and Android). No special software or cameras required. If you know how to send an email, you can send a video with BombBomb.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">10% discount on annual plans</p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                📞
                <a href="tel:7192836494" class="text-blue-600 hover:underline">(719) 283-6494</a>
              </p>
              <p>👤 Jamie Leffler, Inside Sales Manager</p>
              <p>✉️ jamie.leffler@bombbomb.com</p>
            </div>
          </div>

          <!-- BOSSCAT -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">BOSSCAT</h3>
                <span class="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Property Data</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/bcat-removebg-preview.png" alt="BOSSCAT" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              BOSSCAT is a real estate data platform that provides prioritized online repair estimates and full-scale repair, renovation, and maintenance services. Upload your inspection report PDF, and receive an estimate in your email within a day.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">Free online repair estimates</p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://www.bosscathome.com/nar" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">bosscathome.com/nar</a>
              </p>
              <p>
                📞
                <a href="tel:8888878624" class="text-blue-600 hover:underline">(888) 887-8624</a>
              </p>
            </div>
          </div>

          <!-- Dell -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Dell</h3>
                <span class="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Hardware</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/dell-removebg-preview.png" alt="Dell" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Dell provides innovative business class computing and software solutions for home or home office.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                Exclusive member savings: Stackable 5%-10% coupon
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                📞
                <a href="tel:8007578442" class="text-blue-600 hover:underline">(800) 757-8442</a>
              </p>
              <p>
                🌐
                <a href="http://dell.com/NAR" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">dell.com/NAR</a>
              </p>
              <p>🆔 Provide Member ID number 8569483</p>
            </div>
          </div>

          <!-- Instacard -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Instacard</h3>
                <span class="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Digital Cards</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/insta.png" alt="Instacard" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Instacard is the digital business card being used by thousands of agents around the country. Easy and simple to set up. Share your info with clients instantly!
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                Complimentary Version Available
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://www.realgrader.com/gsbor" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">realgrader.com/gsbor</a>
              </p>
            </div>
          </div>

          <!-- Lenovo -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Lenovo</h3>
                <span class="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Hardware</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/lenovo.png" alt="Lenovo" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Lenovo is a global technology leader, engineering innovative business class computing and software solutions for home or home office.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                Get up to 45% off PCs, laptops, and more
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐 To redeem, navigate to
                <a href="http://www.lenovo.com/NAR" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">www.lenovo.com/NAR</a>
                and create a Lenovo account
              </p>
            </div>
          </div>

          <!-- Pivo -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Pivo</h3>
                <span class="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Photography</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/pivo-real-estate-1.png" alt="Pivo" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Pivo Pod for real estate professionals is a hands-free smartphone (iOS or Android) mount that brings any commercial or residential space to life by providing 360° capturing, live streaming, and 3D touring.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                $100.00 discount with code GSBORPIVO
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://pivorealestate.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">pivorealestate.com</a>
              </p>
              <p>✉️ support@pivorealestate.com</p>
            </div>
          </div>

          <!-- Placester -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Placester</h3>
                <span class="inline-block bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Websites</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/placester-removebg-preview.png" alt="Placester" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Placester is a real estate website platform, designed to help real estate professionals take control of their online presence. Placester's expertly-designed websites are easy to set up, personalize, and stock with great content.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                20% off starter or advanced website subscription
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://placester.com/use-cases/nar" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">placester.com/use-cases/nar</a>
              </p>
              <p>✉️ support-NAR@placester.com</p>
            </div>
          </div>

          <!-- Real Grader -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Real Grader</h3>
                <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Digital Identity</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/rglogo-removebg-preview.png" alt="Real Grader" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Raise your grade with RealGrader, a platform empowering professionals to measure, manage and maximize their digital identity on Google, Social Media & Professional Marketing Sites.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                $300 off Optimization service
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://www.realgrader.com/gsbor" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">realgrader.com/gsbor</a>
              </p>
            </div>
          </div>

          <!-- Rental Beast -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Rental Beast</h3>
                <span class="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Rentals</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/RB-removebg-preview.png" alt="Rental Beast" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Rental Beast provides REALTORS® with rental-centric tools simplifying every aspect of the rental process—from lead to lease. Get free access to Apply Now, a lightning fast rental application and tenant screening service, and Rental Beast University, a digital education platform for rentals.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                Free access to Apply Now & Rental Beast University
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://rentalbeast.com/partners/realtor-benefits" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">rentalbeast.com/partners/realtor-benefits</a>
              </p>
              <p>
                📞
                <a href="tel:6176235700" class="text-blue-600 hover:underline">(617) 623-5700</a>
              </p>
              <p>✉️ info@rentalbeast.com</p>
            </div>
          </div>

          <!-- RESAAS -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">RESAAS</h3>
                <span class="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Networking</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/resas.png" alt="RESAAS" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              RESAAS enables real-time industry communication, delivers new agent-to-agent referral business opportunities, and promotes agent listings to a global network of real estate professionals.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">Save 50% for 3 months</p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                📞
                <a href="tel:6045582929" class="text-blue-600 hover:underline">(604) 558-2929</a>
              </p>
              <p>✉️ support@resaas.com</p>
              <p>
                🌐
                <a href="https://get.resaas.com/nar-member-discount/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">get.resaas.com/nar-member-discount/</a>
              </p>
            </div>
          </div>

          <!-- Securus ID -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Securus ID</h3>
                <span class="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Security</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/securusid-removebg-preview.png" alt="Securus ID" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Powered by Experian, Securus ID provides industry-leading identity theft protection plans which include fully managed restoration services.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                40% discount on Comprehensive and Elite identity theft protection plans
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                📞
                <a href="tel:8772673752" class="text-blue-600 hover:underline">(877) 267-3752</a>
              </p>
              <p>✉️ sales@sasid.com</p>
              <p>
                🌐
                <a href="https://nar.securusid.com/plan-options" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">nar.securusid.com/plan-options</a>
              </p>
            </div>
          </div>

          <!-- Supra -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Supra</h3>
                <span class="inline-block bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Access Control</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/supralogo-removebg-preview.png" alt="Supra" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              The Supra eKEY System makes it easy for showing agents to access properties and for listing agents to track activity at client properties. The latest Supra® keybox, iBox BT LE, adds Bluetooth® Low Energy technology, and communicates with newer smartphones without any additional hardware.
            </p>
            <div class="bg-blue-50 rounded-lg p-3 mb-4 border border-blue-200">
              <p class="text-blue-800 text-sm font-medium">Available to GSBOR Members</p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐 Learn more at
                <a href="https://gsbor.com/supra/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">gsbor.com/supra/</a>
              </p>
            </div>
          </div>

          <!-- Xara -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Xara</h3>
                <span class="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded mb-3">Marketing</span>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/Xara-logo-color-full.png" alt="Xara" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed">
              Create marketing content with your brand's look and feel in just a few clicks using data automatically imported from your MLS listings using API. Share your results to social media, print out copies for an open house, or include the link in your next email campaign.
            </p>
            <div class="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <p class="text-green-800 text-sm font-medium">
                40% discount on Year 1 of Pro and Team plans
              </p>
            </div>
            <div class="space-y-2 text-xs text-gray-600">
              <p>
                🌐
                <a href="https://www.xara.com/mls" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">xara.com/mls</a>
              </p>
              <p>📞 Contact Xara</p>
              <p>🎫 Use Coupon Code: GSBOR</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Included Services -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl text-gray-900 mb-4">
            Services Included With Your Membership
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Essential tools and services provided at no additional cost to GSBOR
            members
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- BrokerBay -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">BrokerBay</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/Broker-Bay-Transparent.png" alt="BrokerBay" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              GSBOR brokers and agents can impress clients with the BrokerBay booking dashboard that allows you to easily manage, confirm, deny and suggest new showings from mobile, web, or SMS text. BrokerBay is fully integrated with Flexmls listings, and accessible from the Flexmls Menu or BrokerBay mobile app.
            </p>
            <Button
              to="https://brokerbay.zendesk.com/hc/en-us"
              external
              color="primary"
              variant="solid"
              size="sm"
              class="w-full cursor-pointer"
            >
              Learn More
              <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
            </Button>
          </div>

          <!-- CRS MLS Tax Suite -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">CRS MLS Tax Suite</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/crs-logo-transparent.png" alt="CRS MLS Tax Suite" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              MLS Tax Suite by CRS Data integrates seamlessly into our MLS and gives MLS members current tax data, detailed maps, and robust features on all browsers and devices. Find comparables including FSBOs quickly, evaluate them effectively, and give clients professional presentations.
            </p>
            <div class="mb-4">
              <p class="text-xs text-gray-500 text-left">Accessible within Flexmls</p>
            </div>
          </div>

          <!-- FOREWARN -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">FOREWARN</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/Forewarn-logo-redviolet-tagline-large-e1737053785311.jpg" alt="FOREWARN" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              The FOREWARN application enables real estate professionals to gain real-time knowledge, for purposes such as verifying identity, searching for criminal histories, and validating information provided by potential clients such as financial and asset information – all from just a phone number or name.
            </p>
          </div>

          <!-- Form Simplicity -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Form Simplicity</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/FS_logo-removebg-preview.png" alt="Form Simplicity" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              Enjoy using the Ultimate Edition of Form Simplicity to manage your paperless transactions, obtain digital signatures quickly and to protect your transactions with Form Simplicity's stringent security measures.
            </p>
            <div class="mb-4 space-y-1 text-xs text-gray-600 text-left">
              <p>
                📞
                <a href="tel:8666108911" class="text-blue-600 hover:underline">(866) 610-8911</a>
              </p>
              <p>✉️ support@formsimplicity.com</p>
            </div>
          </div>

          <!-- Flexmls -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Flexmls</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/flexmls-logo.png" alt="Flexmls" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              Not only does FBS bring innovative MLS software and technology to real estate on its Flexmls platform, they boast one of the highest customer service performance ratings in any industry.
            </p>
            <Button
              to="https://help.flexmls.com/index.html?lang=en"
              external
              color="primary"
              variant="solid"
              size="sm"
              class="w-full cursor-pointer"
            >
              Learn More
              <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
            </Button>
          </div>

          <!-- RentSpree -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">RentSpree</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/rentspree-logo.png" alt="RentSpree" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              Quickly and securely send requests to your transaction tenants for them to submit rental applications and complete background checks.
            </p>
            <div class="mb-4">
              <p class="text-xs text-gray-500 text-left">Accessible within Form Simplicity</p>
            </div>
          </div>

          <!-- RPR -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">RPR (Realtors Property Resource)</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/rpr-logo-transparent.png" alt="RPR" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              RPR is the largest property database in the nation, representing over 160 million residential and commercial parcels nationwide. RPR provides data, tools, estimated values, market trends, demographics, professional reports and much more.
            </p>
            <div class="mb-4 space-y-1 text-xs text-gray-600 text-left">
              <p>
                🌐 Visit
                <a href="http://narrpr.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">narrpr.com</a>
                and click Create a New Account
              </p>
              <p>
                📞 For assistance, call
                <a href="tel:8779777576" class="text-blue-600 hover:underline">(877) 977-7576</a>
              </p>
            </div>
            <Button
              to="http://narrpr.com"
              external
              color="primary"
              variant="solid"
              size="sm"
              class="w-full cursor-pointer"
            >
              Visit Site
              <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
            </Button>
          </div>

          <!-- Sellers Shield -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Sellers Shield</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/Sellers_Shield_Logo-removebg.png" alt="Sellers Shield" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              The Seller Shield integration with Form Simplicity provides agents with the ability to invite their clients to complete and sign Real Estate property disclosure forms in a guided format that provides expert tips, examples, definitions and guidance.
            </p>
            <div class="mb-4">
              <p class="text-xs text-gray-500 text-left">Accessible within Form Simplicity</p>
            </div>
          </div>

          <!-- TechHelpline -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-3">TechHelpline</h3>
              </div>
              <div class="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                <img src="/images/tech-suite/tech-helpline-logo-transparent.png" alt="TechHelpline" class="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4 leading-relaxed text-left">
              Your free tech support team! Contact Tech Helpline's friendly and skillful tech support analysts by phone, email, live chat, or from the TechHelpline mobile app for help with nearly any computer or technical device.
            </p>
            <div class="mb-4 space-y-1 text-xs text-gray-600 text-left">
              <p>
                💬 Live chat:
                <a href="http://chat.techhelpline.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">chat.techhelpline.com</a>
              </p>
              <p>✉️ support@techhelpline.com</p>
              <p>
                📞
                <a href="tel:8666108911" class="text-blue-600 hover:underline">(866) 610-8911</a>
              </p>
            </div>
            <Button
              to="http://chat.techhelpline.com"
              external
              color="primary"
              variant="solid"
              size="sm"
              class="w-full cursor-pointer"
            >
              Get Support
              <Icon name="i-lucide-external-link" class="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Section -->
    <SupportSection
      title="Need Help with Tech Suite?"
      variant="gray"
      :buttons="[
        { text: 'Contact Us', link: '/contact-us', variant: 'primary' },
      ]"
    />
  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: "MLS NXT Tech Suite - Greater Springfield Board of Realtors",
  description:
    "Exclusive technology tools and member discounts for GSBOR members. Access innovative solutions to elevate your real estate business.",
  ogTitle: "MLS NXT Tech Suite - GSBOR",
  ogDescription:
    "Discover exclusive technology tools and discounts available to GSBOR members through the Tech Suite program.",
  ogImage:
    "/images/mls-nxt-tech-suite_tech-suite-logo-no-background-crop_3.jpg",
  twitterCard: "summary_large_image",
});
</script>
