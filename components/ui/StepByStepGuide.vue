<script setup lang="ts">
interface StepGuideItem {
  number: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface StepByStepGuideProps {
  title: string;
  subtitle?: string;
  steps: StepGuideItem[];
  variant?: "default" | "compact" | "detailed";
  showNumbers?: boolean;
  showIcons?: boolean;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<StepByStepGuideProps>(), {
  variant: "default",
  showNumbers: true,
  showIcons: true,
  backgroundColor: "bg-primary-600",
});

// Dynamic classes
const containerClasses = computed(() => {
  const base = "step-by-step-guide";
  const variants = {
    default: "py-0",
    compact: "py-16",
    detailed: "py-24",
  };
  return `${base} ${variants[props.variant]}`;
});

const stepClasses = computed(() => {
  const base = "step-item relative";
  const variants = {
    default: "mb-12 last:mb-0",
    compact: "mb-8 last:mb-0",
    detailed: "mb-16 last:mb-0",
  };
  return `${base} ${variants[props.variant]}`;
});
</script>

<template>
  <section :class="containerClasses">
    <!-- Header Section with Background -->
    <div :class="backgroundColor" class="relative overflow-hidden">
      <div class="container mx-auto px-6 py-16 text-center">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"
          ></div>
          <div
            class="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/15"
          ></div>
          <div
            class="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"
          ></div>
        </div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-light text-white mb-6">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="text-xl text-white/90 max-w-3xl mx-auto">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </div>

    <!-- Steps Section -->
    <div class="bg-white py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div
            v-for="(step, index) in steps"
            :key="index"
            :class="stepClasses"
            class="group"
          >
            <div
              class="flex flex-col lg:flex-row items-start lg:items-center gap-8"
            >
              <!-- Step Number and Icon -->
              <div class="flex-shrink-0 relative">
                <!-- Large Step Number -->
                <div class="relative">
                  <div
                    v-if="showNumbers"
                    class="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg transition-all duration-300"
                  >
                    <span class="text-2xl text-white">{{ step.number }}</span>
                  </div>

                  <!-- Icon Overlay -->
                  <div
                    v-if="step.icon && showIcons"
                    class="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary-100"
                  >
                    <Icon :name="step.icon" class="w-5 h-5 text-primary-600" />
                  </div>
                </div>

                <!-- Connector Line (except for last item) -->
                <div
                  v-if="index < steps.length - 1"
                  class="absolute top-24 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary-300 to-transparent hidden lg:block"
                ></div>
              </div>

              <!-- Step Content -->
              <div class="flex-1">
                <div class="bg-gray-50 rounded-2xl p-8">
                  <!-- Step Header -->
                  <div class="mb-4">
                    <h3 class="text-2xl text-primary-900 mb-2">
                      {{ step.title }}
                    </h3>
                    <p class="text-lg text-primary-700 leading-relaxed">
                      {{ step.description }}
                    </p>
                  </div>

                  <!-- Additional Details -->
                  <div v-if="step.details" class="mb-6">
                    <p class="text-primary-600 leading-relaxed">
                      {{ step.details }}
                    </p>
                  </div>

                  <!-- CTA Button -->
                  <div v-if="step.ctaText && step.ctaLink" class="mt-6">
                    <Button
                      :to="step.ctaLink"
                      variant="outline"
                      color="primary"
                      class="px-6 py-3 rounded-lg hover:bg-primary-50 transition-all"
                    >
                      {{ step.ctaText }}
                      <Icon
                        name="i-lucide-chevron-right"
                        class="w-4 h-4 ml-2"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.step-by-step-guide {
  /* Component-specific styles */
}

.step-item {
  /* Individual step styling */
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .step-item .flex-row {
    flex-direction: column;
  }

  .step-item .gap-8 {
    gap: 1.5rem;
  }
}
</style>
