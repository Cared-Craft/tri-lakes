<script setup lang="ts">
interface PersonCardProps {
  name: string;
  title?: string;
  photo?: string;
  email?: string;
  phone?: string;
  bio?: string;
  linkedIn?: string;
  website?: string;
  showContact?: boolean;
  showPhoto?: boolean;
  variant?: "default" | "compact" | "detailed" | "card";
  size?: "small" | "medium" | "large";
  layout?: "vertical" | "horizontal";
  imagePosition?: string;
  transformX?: number;
  transformY?: number;
}

const props = withDefaults(defineProps<PersonCardProps>(), {
  showContact: true,
  showPhoto: true,
  variant: "default",
  size: "medium",
  layout: "vertical",
  title: "",
});

// Dynamic classes
const containerClasses = computed(() => {
  const base = "person-card group transition-all duration-300";

  const variants = {
    default: "bg-white rounded-xl shadow-sm border border-gray-100",
    compact: "bg-white rounded-lg shadow-sm p-4",
    detailed: "bg-white rounded-2xl shadow-lg border border-gray-100",
    card: "bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-200",
  };

  const layouts = {
    vertical: "flex flex-col",
    horizontal: "flex flex-row items-center space-x-6",
  };

  return `${base} ${variants[props.variant]} ${layouts[props.layout]}`;
});

const photoClasses = computed(() => {
  const base = "transition-all duration-300";

  const sizes = {
    small: "w-20 h-20", // Increased from w-16 h-16
    medium: "w-28 h-28", // Increased from w-24 h-24
    large: "w-36 h-36", // Increased from w-32 h-32
  };

  const layouts = {
    vertical: "rounded-lg mx-auto",
    horizontal: "rounded-lg flex-shrink-0",
  };

  return `${base} ${sizes[props.size]} ${layouts[props.layout]}`;
});

const photoImageClasses = computed(() => {
  // Use object-fit: cover with custom object-position for better face visibility
  return "w-full h-full object-cover";
});

const photoImageStyle = computed(() => {
  const style: Record<string, string> = {};
  
  // Apply custom object-position if provided
  if (props.imagePosition) {
    style.objectPosition = props.imagePosition;
  }
  
  // Build transform string combining scale, translateX, and translateY
  const transforms: string[] = ["scale(1.6)"];
  
  if (props.transformX !== undefined || props.transformY !== undefined) {
    const x = props.transformX ?? 0;
    const y = props.transformY ?? 0;
    transforms.push(`translate(${x}px, ${y}px)`);
  }
  
  if (transforms.length > 1) {
    style.transform = transforms.join(" ");
  }
  
  return style;
});

const contentClasses = computed(() => {
  const layouts = {
    vertical: "text-center p-6",
    horizontal: "flex-1",
  };

  return `person-content ${layouts[props.layout]}`;
});

const nameClasses = computed(() => {
  const sizes = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  return ` text-primary-900 mb-1 ${sizes[props.size]}`;
});

const titleClasses = computed(() => {
  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return `text-primary-600 mb-3 ${sizes[props.size]}`;
});

const bioClasses = computed(() => {
  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return `text-gray-700 leading-relaxed mb-4 ${sizes[props.size]}`;
});

// Contact methods
const handleEmailClick = () => {
  if (props.email) {
    window.location.href = `mailto:${props.email}`;
  }
};

const handlePhoneClick = () => {
  if (props.phone) {
    window.location.href = `tel:${props.phone}`;
  }
};

const handleLinkedInClick = () => {
  if (props.linkedIn) {
    window.open(props.linkedIn, "_blank");
  }
};

const handleWebsiteClick = () => {
  if (props.website) {
    window.open(props.website, "_blank");
  }
};

// Format phone number for display
const formattedPhone = computed(() => {
  if (!props.phone) return "";

  // Simple phone formatting (adjust as needed)
  const cleaned = props.phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }
  return props.phone;
});
</script>

<template>
  <div :class="containerClasses">
    <!-- Photo Section -->
    <div v-if="showPhoto && photo" class="person-photo-container">
      <div :class="['relative overflow-hidden', photoClasses]">
        <img
          :src="photo"
          :alt="`${name} - ${title}`"
          :class="photoImageClasses"
          :style="photoImageStyle"
        />
      </div>
    </div>

    <!-- Placeholder if no photo but showPhoto is true -->
    <div v-else-if="showPhoto && !photo" class="person-photo-placeholder">
      <div
        :class="[
          'relative overflow-hidden flex items-center justify-center',
          photoClasses,
          'bg-gradient-to-br from-primary-100 to-primary-200',
        ]"
      >
        <Icon
          name="i-lucide-user"
          class="text-primary-600"
          :class="{
            'w-6 h-6': size === 'small',
            'w-8 h-8': size === 'medium',
            'w-10 h-10': size === 'large',
          }"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div :class="contentClasses">
      <!-- Name -->
      <h3 :class="nameClasses">{{ name }}</h3>

      <!-- Title -->
      <p v-if="title" :class="titleClasses">{{ title }}</p>

      <!-- Bio -->
      <p v-if="bio" :class="bioClasses">{{ bio }}</p>

      <!-- Contact Information -->
      <div
        v-if="showContact && (email || phone || linkedIn || website)"
        class="contact-info"
      >
        <div
          class="flex flex-wrap gap-3 justify-center"
          v-if="layout === 'vertical'"
        >
          <!-- Email -->
          <button
            v-if="email"
            @click="handleEmailClick"
            class="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors group/contact"
            :title="`Email ${name}`"
          >
            <Icon
              name="i-lucide-mail"
              class="w-4 h-4 group-hover/contact:scale-110 transition-transform"
            />
            <span class="text-sm">Email</span>
          </button>

          <!-- Phone -->
          <button
            v-if="phone"
            @click="handlePhoneClick"
            class="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors group/contact"
            :title="`Call ${name}`"
          >
            <Icon
              name="i-lucide-phone"
              class="w-4 h-4 group-hover/contact:scale-110 transition-transform"
            />
            <span class="text-sm">{{ formattedPhone }}</span>
          </button>

          <!-- LinkedIn -->
          <button
            v-if="linkedIn"
            @click="handleLinkedInClick"
            class="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors group/contact"
            :title="`${name} on LinkedIn`"
          >
            <Icon
              name="i-lucide-linkedin"
              class="w-4 h-4 group-hover/contact:scale-110 transition-transform"
            />
            <span class="text-sm">LinkedIn</span>
          </button>

          <!-- Website -->
          <button
            v-if="website"
            @click="handleWebsiteClick"
            class="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors group/contact"
            :title="`${name}'s Website`"
          >
            <Icon
              name="i-lucide-globe"
              class="w-4 h-4 group-hover/contact:scale-110 transition-transform"
            />
            <span class="text-sm">Website</span>
          </button>
        </div>

        <!-- Horizontal layout contact info -->
        <div v-else class="flex flex-col space-y-2">
          <div v-if="email" class="flex items-center space-x-2 text-gray-600">
            <Icon name="i-lucide-mail" class="w-4 h-4 text-primary-600" />
            <a
              :href="`mailto:${email}`"
              class="text-sm hover:text-primary-700 transition-colors"
            >
              {{ email }}
            </a>
          </div>

          <div v-if="phone" class="flex items-center space-x-2 text-gray-600">
            <Icon name="i-lucide-phone" class="w-4 h-4 text-primary-600" />
            <a
              :href="`tel:${phone}`"
              class="text-sm hover:text-primary-700 transition-colors"
            >
              {{ formattedPhone }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      v-if="variant === 'detailed'"
      class="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl"
    >
      <div
        class="absolute -top-10 -right-10 w-32 h-32 bg-primary-50 rounded-full blur-2xl opacity-50"
      ></div>
      <div
        class="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary-50 rounded-full blur-xl opacity-30"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.person-card {
  position: relative;
  overflow: hidden;
}

/* Enhanced photo styling with bigger circles and centered positioning */
.person-photo-container img {
  /* Center the image properly in the larger circle - default positioning */
  object-position: center top;
  /* Ensure smooth transitions */
  transition: transform 0.3s ease;
}

/* For horizontal layout, use standard centering */
.person-card.horizontal .person-photo-container img {
  object-position: center center;
}

/* Hover effect removed - only apply when cards have links */

/* Contact button animations */
.group\/contact:hover {
  transform: translateY(-1px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .person-card.horizontal {
    flex-direction: column;
    text-align: center;
  }

  .person-card.horizontal .person-content {
    margin-top: 1rem;
    margin-left: 0;
  }

  /* On mobile, maintain center positioning with larger circles */
  .person-photo-container img {
    object-position: center center;
  }
}
</style>
