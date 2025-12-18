<script setup lang="ts">
interface Step {
 title: string;
 description: string;
 icon?: string;
 completed?: boolean;
 active?: boolean;
}

interface StepIndicatorProps {
 steps: Step[];
 currentStep: number;
 variant?: "horizontal" | "vertical";
 showNumbers?: boolean;
 showConnectors?: boolean;
 size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<StepIndicatorProps>(), {
 variant: "horizontal",
 showNumbers: true,
 showConnectors: true,
 size: "medium",
});

// Process steps with computed states
const processedSteps = computed(() => {
 return props.steps.map((step, index) => ({
  ...step,
  number: index + 1,
  completed: index < props.currentStep,
  active: index === props.currentStep,
  upcoming: index > props.currentStep,
 }));
});

// Dynamic classes
const containerClasses = computed(() => {
 const base = "step-indicator";
 const variants = {
  horizontal: "flex items-center justify-between",
  vertical: "flex flex-col space-y-8",
 };
 return `${base} ${variants[props.variant]}`;
});

const stepClasses = computed(() => (step: any) => {
 const base = "relative flex items-center transition-all duration-300";
 const variants = {
  horizontal: "flex-col text-center",
  vertical: "flex-row space-x-4",
 };

 const states = {
  completed: "text-primary-700",
  active: "text-primary-900",
  upcoming: "text-gray-500",
 };

 const state = step.completed
  ? "completed"
  : step.active
  ? "active"
  : "upcoming";

 return `${base} ${variants[props.variant]} ${states[state]}`;
});

const circleClasses = computed(() => (step: any) => {
 const base =
  "rounded-full flex items-center justify-center transition-all duration-300";

 const sizes = {
  small: "w-8 h-8 text-sm",
  medium: "w-12 h-12 text-base",
  large: "w-16 h-16 text-lg",
 };

 const states = {
  completed: "bg-primary-600 text-white shadow-lg",
  active: "bg-primary-100 text-primary-900 ring-4 ring-primary-200 shadow-lg",
  upcoming: "bg-gray-100 text-gray-500",
 };

 const state = step.completed
  ? "completed"
  : step.active
  ? "active"
  : "upcoming";

 return `${base} ${sizes[props.size]} ${states[state]}`;
});

const titleClasses = computed(() => {
 const sizes = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
 };
 return ` mb-1 ${sizes[props.size]}`;
});

const descriptionClasses = computed(() => {
 const sizes = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-base",
 };
 return `leading-relaxed ${sizes[props.size]}`;
});
</script>

<template>
 <div :class="containerClasses">
  <template v-for="(step, index) in processedSteps" :key="index">
   <!-- Step Item -->
   <div :class="stepClasses(step)" class="step-item">
    <!-- Step Circle/Icon -->
    <div :class="circleClasses(step)" class="step-circle">
     <!-- Completed Check Icon -->
     <Icon v-if="step.completed" name="i-lucide-check" class="w-5 h-5" />
     <!-- Custom Icon -->
     <Icon v-else-if="step.icon" :name="step.icon" class="w-5 h-5" />
     <!-- Step Number -->
     <span v-else-if="showNumbers">{{ step.number }}</span>
    </div>

    <!-- Step Content -->
    <div
     class="step-content"
     :class="{
      'mt-3': variant === 'horizontal',
      'ml-0': variant === 'vertical',
     }"
    >
     <h3 :class="titleClasses">{{ step.title }}</h3>
     <p :class="descriptionClasses">{{ step.description }}</p>
    </div>
   </div>

   <!-- Connector Line -->
   <div
    v-if="showConnectors && index < processedSteps.length - 1"
    class="step-connector"
    :class="{
     'flex-1 h-px mx-4': variant === 'horizontal',
     'w-px h-8 ml-6 -mt-4 mb-4': variant === 'vertical',
    }"
   >
    <div
     class="w-full h-full transition-all duration-500"
     :class="{
      'bg-primary-300': step.completed,
      'bg-gray-200': !step.completed,
     }"
    ></div>
   </div>
  </template>
 </div>
</template>

<style scoped>
.step-indicator {
 /* Custom styles for step indicator */
}

.step-item {
 /* Ensure proper spacing and alignment */
}

.step-circle {
 /* Ensure circles are properly centered */
 flex-shrink: 0;
}

.step-content {
 /* Content styling */
}

/* Responsive adjustments */
@media (max-width: 768px) {
 .step-indicator.horizontal {
  flex-direction: column;
  space-y: 1.5rem;
 }

 .step-connector.horizontal {
  width: 1px;
  height: 2rem;
  margin: 0.5rem 0;
  margin-left: 1.5rem;
 }
}
</style>
