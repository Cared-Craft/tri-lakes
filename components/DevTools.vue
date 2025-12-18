<script setup lang="ts">
// Define component interfaces
interface DevTool {
 title: string;
 description: string;
 icon: string;
 color: string;
 path: string;
 openInNewWindow?: boolean;
}

// Define props for customization, store result in 'props'
const props = defineProps({
 title: {
  type: String,
  default: "Developer Tools",
 },
 description: {
  type: String,
  default:
   "Access these development tools to help you build and customize your application.",
 },
 showOnlyInDev: {
  type: Boolean,
  default: true,
 },
 openInNewWindow: {
  type: Boolean,
  default: false,
 },
 tools: {
  type: Array as () => DevTool[],
  default: () => [
   {
    title: "Define The Brand",
    description:
     "Start up the new project by definig brand colors and typography.",
    icon: "i-lucide-layout-dashboard",
    color: "primary",
    path: "/branding/",
    openInNewWindow: false,
   },
   {
    title: "Deepsite Creator",
    description: "Page builder for quick starting your project.",
    icon: "i-lucide-mouse-pointer-click",
    color: "tertiary",
    path: "deepsite-creator",
    openInNewWindow: true,
   },
   {
    title: "Button Basic",
    description:
     "Basic button component examples and implementation guidelines.",
    icon: "i-lucide-square",
    color: "quaternary",
    path: "/previews/button-basic",
    openInNewWindow: false,
   },
  ],
 },
});

// Check if we're in development mode
const isDev = import.meta.env.DEV;

// Get the base URL for the project dynamically
const config = useRuntimeConfig();

// Method to handle clicking on a card
const openLink = (path: string, openNewWindow?: boolean) => {
 const shouldOpenInNewWindow =
  openNewWindow !== undefined ? openNewWindow : props.openInNewWindow;

 if (path === "deepsite-creator") {
  // Use the runtime config to get project root from Nuxt configuration
  const projectRoot =
   config.public.projectRoot || "/Users/Caleb/Documents/GitHub/fix-attempt";
  const destinationPath = `${projectRoot}/references`;
  const deepsiteUrl = `http://localhost:5173/?destination=${encodeURIComponent(
   destinationPath,
  )}&filename=index.html`;

  if (shouldOpenInNewWindow) {
   window.open(deepsiteUrl, "_blank");
  } else {
   navigateTo(deepsiteUrl);
  }
 } else {
  if (shouldOpenInNewWindow) {
   window.open(path, "_blank");
  } else {
   navigateTo(path);
  }
 }
};
</script>

<template>
 <!-- Developer Tools Section (only visible in dev mode if showOnlyInDev is true) -->
 <section v-if="!showOnlyInDev || isDev" class="bg-gray-50 py-16">
  <div class="container mx-auto px-6">
   <h2
    class="font-heading mb-6 text-center text-3xl text-black md:text-4xl"
   >
    {{ title }}
   </h2>
   <p class="text-neutral mx-auto mb-12 max-w-3xl text-center text-xl">
    {{ description }}
    <span v-if="showOnlyInDev" class="text-primary-600"
     >Only visible in development mode.</span
    >
   </p>

   <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    <div
     v-for="tool in tools"
     :key="tool.title"
     class="feature-card cursor-pointer rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-lg"
     @click="openLink(tool.path, tool.openInNewWindow)"
    >
     <div
      :class="`h-12 w-12 bg-${tool.color} mb-4 flex items-center justify-center rounded-lg`"
     >
      <Icon :name="tool.icon" class="text-white" />
     </div>
     <h3 class="font-heading mb-3 text-xl ">{{ tool.title }}</h3>
     <p class="text-neutral">{{ tool.description }}</p>
     <div class="mt-4 flex justify-end">
      <Icon
       v-if="
        tool.openInNewWindow !== undefined
         ? tool.openInNewWindow
         : openInNewWindow
       "
       name="i-lucide-external-link"
       class="text-gray-400"
      />
     </div>
    </div>
   </div>
  </div>
 </section>
</template>

<style scoped>
.feature-card {
 transition: all 0.3s ease;
 background-color: white;
 color: #1e2025;
}

.feature-card:hover {
 transform: translateY(-5px);
 box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
}

.text-neutral {
 color: #4b5563;
}

/* Ensure feature card icons have proper background colors */
.bg-primary {
 background-color: #5b45e0 !important;
}

.bg-secondary {
 background-color: #ff4a85 !important;
}

.bg-tertiary {
 background-color: #00a3ff !important;
}

.bg-quaternary {
 background-color: #ff7a30 !important;
}

.bg-info {
 background-color: #0ea5e9 !important; /* Example info color (Tailwind sky-500) */
}
</style>
