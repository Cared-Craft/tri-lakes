<template>
 <section class="py-16" :class="sectionClasses">
  <div class="container mx-auto px-6">
   <div
    class="rounded-3xl overflow-hidden p-12 text-center relative max-w-4xl mx-auto"
    :class="bannerClasses"
   >
    <!-- Background styling elements -->
    <div class="absolute inset-0">
     <!-- Gradient overlay -->
     <div class="absolute inset-0" :class="gradientClasses"></div>

     <!-- Subtle pattern -->
     <div
      v-if="showPattern"
      class="absolute inset-0 opacity-5 pattern-grid"
     ></div>

     <!-- Decorative elements -->
     <div
      v-if="showDecorative"
      class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"
      :class="decorativeClasses.primary"
     ></div>
     <div
      v-if="showDecorative"
      class="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"
      :class="decorativeClasses.secondary"
     ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
     <h3
      class="text-3xl md:text-4xl font-light mb-4"
      :class="titleClasses"
     >
      <slot name="title">{{ title }}</slot>
     </h3>
     <div class="mb-8 max-w-2xl mx-auto text-lg" :class="contentClasses">
      <slot name="content">
       <p>{{ content }}</p>
      </slot>
     </div>
     <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <slot name="actions">
       <Button
        v-if="primaryAction"
        :to="primaryAction.to"
        :color="primaryButtonColor"
        :variant="primaryButtonVariant"
        size="lg"
        class="px-10 py-3"
        :class="primaryButtonClasses"
       >
        {{ primaryAction.text }}
       </Button>
       <Button
        v-if="secondaryAction"
        :to="secondaryAction.to"
        :variant="secondaryButtonVariant"
        :color="secondaryButtonColor"
        size="lg"
        class="px-8 py-3"
        :class="secondaryButtonClasses"
       >
        {{ secondaryAction.text }}
       </Button>
      </slot>
     </div>
    </div>
   </div>
  </div>
 </section>
</template>

<script setup lang="ts">
interface Action {
 to: string;
 text: string;
 color?: string;
 variant?: string;
 external?: boolean;
}

interface Props {
 title?: string;
 content?: string;
 primaryAction?: Action;
 secondaryAction?: Action;
 theme?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger";
 textTheme?: "light" | "dark";
 showPattern?: boolean;
 showDecorative?: boolean;
 sectionBackground?: "white" | "gray" | "transparent";
}

const props = withDefaults(defineProps<Props>(), {
 theme: "success",
 textTheme: "light",
 showPattern: true,
 showDecorative: true,
 sectionBackground: "white",
});

const sectionClasses = computed(() => {
 switch (props.sectionBackground) {
  case "white":
   return "bg-white";
  case "gray":
   return "bg-gray-50";
  case "transparent":
   return "";
  default:
   return "bg-white";
 }
});

const bannerClasses = computed(() => {
 switch (props.theme) {
  case "primary":
   return "bg-primary-600 text-white";
  case "secondary":
   return "bg-secondary-600 text-white";
  case "tertiary":
   return "bg-tertiary-600 text-white";
  case "success":
   return "bg-[#139E78] text-white";
  case "warning":
   return "bg-yellow-500 text-white";
  case "danger":
   return "bg-red-600 text-white";
  default:
   return "bg-[#139E78] text-white";
 }
});

const gradientClasses = computed(() => {
 switch (props.theme) {
  case "primary":
   return "bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800";
  case "secondary":
   return "bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800";
  case "tertiary":
   return "bg-gradient-to-br from-tertiary-600 via-tertiary-700 to-tertiary-800";
  case "success":
   return "bg-gradient-to-br from-[#139E78] via-[#17B48C] to-[#1FCBA0]";
  case "warning":
   return "bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700";
  case "danger":
   return "bg-gradient-to-br from-red-600 via-red-700 to-red-800";
  default:
   return "bg-gradient-to-br from-[#139E78] via-[#17B48C] to-[#1FCBA0]";
 }
});

const titleClasses = computed(() => {
 return props.textTheme === "light" ? "text-white" : "text-gray-900";
});

const contentClasses = computed(() => {
 return props.textTheme === "light" ? "text-white" : "text-gray-700";
});

// Primary button configuration
const primaryButtonColor = computed(() => {
 if (props.primaryAction?.color) {
  return props.primaryAction.color;
 }
 return props.textTheme === "light" ? "white" : "primary";
});

const primaryButtonVariant = computed(() => {
 if (props.primaryAction?.variant) {
  return props.primaryAction.variant;
 }
 return "solid";
});

const primaryButtonClasses = computed(() => {
 return "rounded-full shadow-lg";
});

// Secondary button configuration
const secondaryButtonColor = computed(() => {
 if (props.secondaryAction?.color) {
  return props.secondaryAction.color;
 }
 return props.textTheme === "light" ? "white" : "primary";
});

const secondaryButtonVariant = computed(() => {
 if (props.secondaryAction?.variant) {
  return props.secondaryAction.variant;
 }
 return "outline";
});

const secondaryButtonClasses = computed(() => {
 return "rounded-full ";
});

const decorativeClasses = computed(() => {
 switch (props.theme) {
  case "primary":
   return {
    primary: "bg-primary-800",
    secondary: "bg-primary-400",
   };
  case "secondary":
   return {
    primary: "bg-secondary-800",
    secondary: "bg-secondary-400",
   };
  case "tertiary":
   return {
    primary: "bg-tertiary-800",
    secondary: "bg-tertiary-400",
   };
  case "success":
   return {
    primary: "bg-[#0D7C5F]",
    secondary: "bg-[#2AD9AC]",
   };
  case "warning":
   return {
    primary: "bg-yellow-700",
    secondary: "bg-yellow-300",
   };
  case "danger":
   return {
    primary: "bg-red-800",
    secondary: "bg-red-400",
   };
  default:
   return {
    primary: "bg-[#0D7C5F]",
    secondary: "bg-[#2AD9AC]",
   };
 }
});
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
