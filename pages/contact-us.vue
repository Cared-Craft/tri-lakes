<template>
  <NuxtLayout name="default">
    <div class="container-custom py-12">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl mb-8 text-gray-900">Contact Us</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl mb-4">Get In Touch</h2>
            <p class="text-gray-600 mb-6">
              Have questions or feedback? We'd love to hear from you. Fill out
              the form and we'll get back to you as soon as possible.
            </p>

            <div class="space-y-4 mt-8">
              <div class="flex items-start">
                <div class="text-primary text-xl mr-4">📍</div>
                <div>
                  <h3 class="font-semibold text-gray-900">Address</h3>
                  <p class="text-gray-600">
                    1310 E Primrose St.<br />
                    Springfield, MO 65804
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-primary text-xl mr-4">📱</div>
                <div>
                  <h3 class="font-semibold text-gray-900">Phone</h3>
                  <p class="text-gray-600">
                    <a
                      href="tel:4178831226"
                      class="hover:text-primary-600 transition-colors"
                    >
                      (417) 883-1226
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-primary text-xl mr-4">📠</div>
                <div>
                  <h3 class="font-semibold text-gray-900">Fax</h3>
                  <p class="text-gray-600">
                    <a
                      href="tel:4175200977"
                      class="hover:text-primary-600 transition-colors"
                    >
                      (417) 520-0977
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-primary text-xl mr-4">📧</div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email</h3>
                  <p class="text-gray-600">
                    <a
                      href="mailto:support@gsbor.com"
                      class="hover:text-primary-600 transition-colors"
                    >
                      support@gsbor.com
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-primary text-xl mr-4">🕒</div>
                <div>
                  <h3 class="font-semibold text-gray-900">Hours</h3>
                  <p class="text-gray-600">
                    8:30am-5pm<br />
                    Monday - Friday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl mb-4">Send a Message</h2>
            <form class="space-y-4" @submit.prevent="submitForm">
              <div>
                <label for="name" class="block text-sm text-gray-700 mb-1"
                  >Name</label
                >
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-sm text-gray-700 mb-1"
                  >Email</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label for="subject" class="block text-sm text-gray-700 mb-1"
                  >Subject</label
                >
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-sm text-gray-700 mb-1"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <div class="mt-6">
                <Button
                  type="submit"
                  :disabled="isSubmitting"
                  full-width
                  color="emerald"
                >
                  {{ isSubmitting ? "Sending..." : "Send Message" }}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";

definePageMeta({
  title: "Contact Us",
  description: "Get in touch with our team",
});

// Scroll to top on page load/mount and handle anchor links
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  
  const handleAnchorClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    if (link && link.hash && link.pathname === window.location.pathname) {
      // Same page anchor - scroll to top first, then to target
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        const targetEl = document.querySelector(link.hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  document.addEventListener('click', handleAnchorClick);
  
  onUnmounted(() => {
    document.removeEventListener('click', handleAnchorClick);
  });
});

// Handle route changes (back navigation)
watch(() => useRoute().path, () => {
  nextTick(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
});

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would send the form data to your API here
    console.log("Form submitted:", form.value);

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    alert("Thank you for your message! We will get back to you soon.");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error sending your message. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
