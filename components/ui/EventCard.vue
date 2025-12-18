<script setup lang="ts">
interface EventItem {
  path: string;
  title: string;
  description: string;
  date: string;
  startTime?: string;
  endTime?: string;
  location: {
    name: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    url?: string;
  };
  eventType?:
    | "meeting"
    | "training"
    | "networking"
    | "conference"
    | "webinar"
    | "social";
  cost?: {
    member?: number;
    nonMember?: number;
    free?: boolean;
  };
  registration?: {
    required?: boolean;
    url?: string;
    deadline?: string;
  };
  contact?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  featured?: boolean;
  image?: {
    src: string;
    alt: string;
  };
  tags?: string[];
}

interface Props {
  event: EventItem;
  variant?: "default" | "featured" | "compact";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const eventTypeColors = {
  meeting: "bg-blue-100 text-blue-800",
  training: "bg-green-100 text-green-800",
  networking: "bg-purple-100 text-purple-800",
  conference: "bg-orange-100 text-orange-800",
  webinar: "bg-cyan-100 text-cyan-800",
  social: "bg-pink-100 text-pink-800",
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

const getEventTypeLabel = (type?: string) => {
  if (!type) return "";
  return type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

const getCostDisplay = (cost?: EventItem["cost"]) => {
  if (!cost) return "";
  if (cost.free) return "Free";
  if (cost.member && cost.nonMember) {
    return `$${cost.member} Members / $${cost.nonMember} Non-Members`;
  }
  if (cost.member) return `$${cost.member} Members`;
  if (cost.nonMember) return `$${cost.nonMember}`;
  return "";
};

const isUpcoming = (dateString: string) => {
  return new Date(dateString) >= new Date();
};
</script>

<template>
  <article
    :class="[
      'bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer',
      variant === 'featured' ? 'lg:col-span-2' : '',
      variant === 'compact' ? 'flex gap-4' : '',
      !isUpcoming(event.date) ? 'opacity-75' : '',
    ]"
  >
    <NuxtLink :to="event.path" class="block">
      <!-- Image -->
      <div
        v-if="event.image && variant !== 'compact'"
        :class="[
          'relative overflow-hidden',
          variant === 'featured' ? 'h-64 md:h-80' : 'h-48',
        ]"
      >
        <img
          :src="event.image.src"
          :alt="event.image.alt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute top-4 left-4 flex gap-2">
          <div
            v-if="event.featured"
            class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            Featured
          </div>
          <div
            v-if="!isUpcoming(event.date)"
            class="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            Past Event
          </div>
        </div>
      </div>

      <!-- Compact Image -->
      <div
        v-if="event.image && variant === 'compact'"
        class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden"
      >
        <img
          :src="event.image.src"
          :alt="event.image.alt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Content -->
      <div :class="['p-6', variant === 'compact' ? 'flex-1 py-2' : '']">
        <!-- Event Type & Status -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span
              v-if="event.eventType"
              :class="[
                'px-2 py-1 rounded-full text-xs font-medium',
                eventTypeColors[event.eventType] || 'bg-gray-100 text-gray-800',
              ]"
            >
              {{ getEventTypeLabel(event.eventType) }}
            </span>
            <span
              v-if="event.featured && variant === 'compact'"
              class="px-2 py-1 bg-primary-600 text-white rounded-full text-xs font-medium"
            >
              Featured
            </span>
            <span
              v-if="!isUpcoming(event.date) && variant === 'compact'"
              class="px-2 py-1 bg-gray-600 text-white rounded-full text-xs font-medium"
            >
              Past Event
            </span>
          </div>
          <div class="flex items-center gap-1 text-sm text-gray-500">
            <Icon name="i-lucide-calendar" class="w-4 h-4" />
            <time :datetime="event.date">
              {{ formatDate(event.date) }}
            </time>
          </div>
        </div>

        <!-- Title -->
        <h3
          :class="[
            'font-medium text-gray-900 group-hover:text-primary-600 transition-colors mb-2',
            variant === 'featured' ? 'text-2xl mb-3' : 'text-lg',
            variant === 'compact' ? 'text-base mb-1' : '',
          ]"
        >
          {{ event.title }}
        </h3>

        <!-- Time & Location -->
        <div
          :class="[
            'flex flex-wrap gap-4 mb-3',
            variant === 'compact' ? 'text-sm mb-2' : '',
          ]"
        >
          <div
            v-if="event.startTime"
            class="flex items-center gap-1 text-sm text-gray-600"
          >
            <Icon name="i-lucide-clock" class="w-4 h-4" />
            <span>
              {{ formatTime(event.startTime) }}
              <span v-if="event.endTime">
                - {{ formatTime(event.endTime) }}</span
              >
            </span>
          </div>
          <div class="flex items-center gap-1 text-sm text-gray-600">
            <Icon name="i-lucide-map-pin" class="w-4 h-4" />
            <span>{{ event.location.name }}</span>
          </div>
        </div>

        <!-- Description -->
        <p
          :class="[
            'text-gray-600 leading-relaxed mb-3',
            variant === 'featured' ? 'text-base' : 'text-sm',
            variant === 'compact' ? 'line-clamp-2' : 'line-clamp-3',
          ]"
        >
          {{ event.description }}
        </p>

        <!-- Cost & Registration -->
        <div
          v-if="event.cost || event.registration"
          class="flex items-center justify-between mb-3"
        >
          <div
            v-if="event.cost"
            class="flex items-center gap-1 text-sm text-gray-600"
          >
            <Icon name="i-lucide-dollar-sign" class="w-4 h-4" />
            <span>{{ getCostDisplay(event.cost) }}</span>
          </div>
          <div
            v-if="event.registration?.required"
            class="flex items-center gap-1 text-sm text-primary-600"
          >
            <Icon name="i-lucide-user-check" class="w-4 h-4" />
            <span>Registration Required</span>
          </div>
        </div>

        <!-- Tags -->
        <div v-if="event.tags && variant !== 'compact'" class="flex gap-1 mb-3">
          <span
            v-for="tag in event.tags.slice(0, 3)"
            :key="tag"
            class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Learn More Link -->
        <div v-if="variant === 'featured'" class="mt-4">
          <span
            class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Learn More
            <Icon name="i-lucide-arrow-right" class="ml-1 w-4 h-4" />
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
