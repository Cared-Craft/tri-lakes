<script setup lang="ts">
interface AccordionItem {
 title: string;
 content: string;
 id: string;
 defaultOpen?: boolean;
 icon?: string;
}

interface AccordionProps {
 items: AccordionItem[];
 allowMultiple?: boolean;
 variant?: "default" | "bordered" | "minimal" | "card";
 size?: "small" | "medium" | "large";
 showIcons?: boolean;
}

const props = withDefaults(defineProps<AccordionProps>(), {
 allowMultiple: false,
 variant: "default",
 size: "medium",
 showIcons: true,
});

// Track open items
const openItems = ref<Set<string>>(new Set());

// Initialize default open items
onMounted(() => {
 props.items.forEach((item) => {
  if (item.defaultOpen) {
   openItems.value.add(item.id);
  }
 });
});

// Toggle item open/closed
const toggleItem = (itemId: string) => {
 if (openItems.value.has(itemId)) {
  openItems.value.delete(itemId);
 } else {
  if (!props.allowMultiple) {
   openItems.value.clear();
  }
  openItems.value.add(itemId);
 }
};

// Check if item is open
const isOpen = (itemId: string) => openItems.value.has(itemId);

// Dynamic classes
const containerClasses = computed(() => {
 const base = "accordion-container";
 const variants = {
  default: "space-y-2",
  bordered: "border border-gray-200 rounded-lg overflow-hidden",
  minimal: "space-y-1",
  card: "space-y-4",
 };
 return `${base} ${variants[props.variant]}`;
});

const itemClasses = computed(() => {
 const base = "accordion-item transition-all duration-200";
 const variants = {
  default: "border border-gray-200 rounded-lg overflow-hidden",
  bordered: "border-b border-gray-200 last:border-b-0",
  minimal: "",
  card: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
 };
 return `${base} ${variants[props.variant]}`;
});

const headerClasses = computed(() => {
 const base =
  "accordion-header w-full text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer";

 const sizes = {
  small: "px-4 py-3 text-sm",
  medium: "px-6 py-4 text-base",
  large: "px-8 py-6 text-lg",
 };

 const variants = {
  default: "bg-gray-50 hover:bg-gray-100",
  bordered: "bg-white hover:bg-gray-50",
  minimal: "py-3 hover:text-primary-700",
  card: "bg-white hover:bg-gray-50",
 };

 return `${base} ${sizes[props.size]} ${variants[props.variant]}`;
});

const contentClasses = computed(() => {
 const sizes = {
  small: "px-4 py-3 text-sm",
  medium: "px-6 py-4 text-base",
  large: "px-8 py-6 text-lg",
 };

 const variants = {
  default: "bg-white border-t border-gray-200",
  bordered: "bg-white border-t border-gray-200",
  minimal: "py-3",
  card: "bg-gray-50",
 };

 return `accordion-content ${sizes[props.size]} ${
  variants[props.variant]
 } text-gray-700 leading-relaxed`;
});

const iconClasses = computed(() => {
 const sizes = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
 };
 return `transition-transform duration-200 ${sizes[props.size]}`;
});
</script>

<template>
 <div :class="containerClasses">
  <div
   v-for="item in items"
   :key="item.id"
   :class="itemClasses"
   class="group"
  >
   <!-- Accordion Header -->
   <button
    :class="headerClasses"
    @click="toggleItem(item.id)"
    :aria-expanded="isOpen(item.id)"
    :aria-controls="`content-${item.id}`"
    class="flex items-center justify-between w-full"
   >
    <div class="flex items-center space-x-3">
     <!-- Custom Icon -->
     <Icon
      v-if="item.icon && showIcons"
      :name="item.icon"
      class="text-primary-600"
      :class="iconClasses"
     />

     <!-- Title -->
     <span class="text-primary-900 text-left">
      {{ item.title }}
     </span>
    </div>

    <!-- Chevron Icon -->
    <Icon
     name="i-lucide-chevron-down"
     :class="[
      iconClasses,
      'text-primary-600 flex-shrink-0 ml-4',
      { 'rotate-180': isOpen(item.id) },
     ]"
    />
   </button>

   <!-- Accordion Content -->
   <Transition
    name="accordion"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
   >
    <div
     v-show="isOpen(item.id)"
     :id="`content-${item.id}`"
     :class="contentClasses"
     class="accordion-content-wrapper"
    >
     <div v-html="item.content"></div>
    </div>
   </Transition>
  </div>
 </div>
</template>

<script lang="ts">
// Animation methods
const onEnter = (el) => {
 el.style.height = "0";
 el.offsetHeight; // force reflow
 el.style.height = el.scrollHeight + "px";
};

const onAfterEnter = (el) => {
 el.style.height = "auto";
};

const onLeave = (el) => {
 el.style.height = el.scrollHeight + "px";
 el.offsetHeight; // force reflow
 el.style.height = "0";
};

const onAfterLeave = (el) => {
 el.style.height = "auto";
};
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
 transition: height 0.3s ease;
 overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
 height: 0;
}

/* Focus styles */
.accordion-header:focus {
 outline: none;
}

/* Smooth transitions */
.accordion-item {
 transition: all 0.2s ease;
}

.accordion-item:hover {
 transform: translateY(-1px);
}

/* Content styling */
.accordion-content-wrapper {
 overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 768px) {
 .accordion-header {
  padding: 1rem;
 }

 .accordion-content {
  padding: 1rem;
 }
}
</style>
