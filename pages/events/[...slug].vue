<script setup lang="ts">
const route = useRoute();
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join("/")
  : route.params.slug;

// Fetch the event
const { data: event } = await useAsyncData(`event-${slug}`, () =>
  queryCollection("events").path(`/events/${slug}`).first()
);

// Handle 404 if event not found
if (!event.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Event not found",
  });
}

// Set SEO metadata
useHead({
  title: `${event.value.title} | GSBOR Events`,
  meta: [
    {
      name: "description",
      content: event.value.description,
    },
    {
      property: "og:title",
      content: event.value.title,
    },
    {
      property: "og:description",
      content: event.value.description,
    },
    {
      property: "og:image",
      content: event.value.image?.src || "",
    },
  ],
});

// Get related events
const { data: relatedEvents } = await useAsyncData(
  `related-events-${slug}`,
  () =>
    queryCollection("events")
      .where("path", "<>", `/events/${slug}`)
      .order("date", "DESC")
      .limit(3)
      .all()
);

// Helper functions
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

const getCostDisplay = (cost?: any) => {
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

const eventTypeColors = {
  meeting: "bg-blue-100 text-blue-800",
  training: "bg-green-100 text-green-800",
  networking: "bg-purple-100 text-purple-800",
  conference: "bg-orange-100 text-orange-800",
  webinar: "bg-cyan-100 text-cyan-800",
  social: "bg-pink-100 text-pink-800",
};
</script>

<template>
  <div>
    <main>
      <!-- Breadcrumb -->
      <section class="bg-gray-50 py-3">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <nav class="flex items-center space-x-2 text-sm text-gray-600">
              <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
              <Icon name="i-lucide-chevron-right" class="w-4 h-4" />
              <NuxtLink to="/news-events" class="hover:text-primary-600"
                >News & Events</NuxtLink
              >
              <Icon name="i-lucide-chevron-right" class="w-4 h-4" />
              <span class="text-gray-900">{{ event.title }}</span>
            </nav>
          </div>
        </div>
      </section>

      <!-- Event Content -->
      <article class="py-10">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <!-- Event Header -->
            <header class="mb-8">
              <!-- Event Type & Status -->
              <div class="flex items-center gap-4 mb-6">
                <span
                  v-if="event.eventType"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium',
                    eventTypeColors[event.eventType] ||
                      'bg-gray-100 text-gray-800',
                  ]"
                >
                  {{ getEventTypeLabel(event.eventType) }}
                </span>
                <span
                  v-if="!isUpcoming(event.date)"
                  class="px-3 py-1 bg-gray-600 text-white rounded-full text-sm font-medium"
                >
                  Past Event
                </span>
                <span
                  v-if="event.featured"
                  class="px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium"
                >
                  Featured
                </span>
              </div>

              <!-- Title -->
              <h1 class="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                {{ event.title }}
              </h1>

              <!-- Description -->
              <p
                v-if="event.description"
                class="text-xl text-gray-700 leading-relaxed mb-8"
              >
                {{ event.description }}
              </p>

              <!-- Featured Image -->
              <div v-if="event.image" class="mb-8">
                <img
                  :src="event.image.src"
                  :alt="event.image.alt"
                  class="w-full h-64 md:h-80 object-cover rounded-xl"
                />
              </div>
            </header>

            <!-- Event Details -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <!-- Date & Time -->
              <div class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-medium mb-4 flex items-center gap-2">
                  <Icon
                    name="i-lucide-calendar"
                    class="w-5 h-5 text-primary-600"
                  />
                  Date & Time
                </h3>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <Icon
                      name="i-lucide-calendar-days"
                      class="w-4 h-4 text-gray-500"
                    />
                    <span>{{ formatDate(event.date) }}</span>
                  </div>
                  <div v-if="event.startTime" class="flex items-center gap-2">
                    <Icon name="i-lucide-clock" class="w-4 h-4 text-gray-500" />
                    <span>
                      {{ formatTime(event.startTime) }}
                      <span v-if="event.endTime">
                        - {{ formatTime(event.endTime) }}</span
                      >
                    </span>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-medium mb-4 flex items-center gap-2">
                  <Icon
                    name="i-lucide-map-pin"
                    class="w-5 h-5 text-primary-600"
                  />
                  Location
                </h3>
                <div class="space-y-2">
                  <div class="font-medium">{{ event.location.name }}</div>
                  <div v-if="event.location.address" class="text-gray-600">
                    {{ event.location.address }}
                    <span v-if="event.location.city"
                      >, {{ event.location.city }}</span
                    >
                    <span v-if="event.location.state"
                      >, {{ event.location.state }}</span
                    >
                    <span v-if="event.location.zip">
                      {{ event.location.zip }}</span
                    >
                  </div>
                  <div v-if="event.location.url" class="mt-2">
                    <a
                      :href="event.location.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                    >
                      View Location
                      <Icon name="i-lucide-external-link" class="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Cost -->
              <div v-if="event.cost" class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-medium mb-4 flex items-center gap-2">
                  <Icon
                    name="i-lucide-dollar-sign"
                    class="w-5 h-5 text-primary-600"
                  />
                  Cost
                </h3>
                <div class="text-lg font-medium">
                  {{ getCostDisplay(event.cost) }}
                </div>
              </div>

              <!-- Registration -->
              <div v-if="event.registration" class="bg-gray-50 rounded-xl p-6">
                <h3 class="text-lg font-medium mb-4 flex items-center gap-2">
                  <Icon
                    name="i-lucide-user-check"
                    class="w-5 h-5 text-primary-600"
                  />
                  Registration
                </h3>
                <div class="space-y-2">
                  <div
                    v-if="event.registration.required"
                    class="text-orange-600 font-medium"
                  >
                    Registration Required
                  </div>
                  <div v-if="event.registration.deadline" class="text-gray-600">
                    Deadline: {{ formatDate(event.registration.deadline) }}
                  </div>
                  <div v-if="event.registration.url" class="mt-3">
                    <Button
                      :to="event.registration.url"
                      color="primary"
                      external
                    >
                      Register Now
                      <Icon
                        name="i-lucide-external-link"
                        class="w-4 h-4 ml-2"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Event Body -->
            <div class="prose prose-lg max-w-none mb-8">
              <ContentRenderer :value="event" />
            </div>

            <!-- Contact Information -->
            <div v-if="event.contact" class="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 class="text-lg font-medium mb-4 flex items-center gap-2">
                <Icon name="i-lucide-phone" class="w-5 h-5 text-blue-600" />
                Contact Information
              </h3>
              <div class="space-y-2">
                <div v-if="event.contact.name" class="font-medium">
                  {{ event.contact.name }}
                </div>
                <div v-if="event.contact.email" class="flex items-center gap-2">
                  <Icon name="i-lucide-mail" class="w-4 h-4 text-gray-500" />
                  <a
                    :href="`mailto:${event.contact.email}`"
                    class="text-blue-600 hover:text-blue-700"
                  >
                    {{ event.contact.email }}
                  </a>
                </div>
                <div v-if="event.contact.phone" class="flex items-center gap-2">
                  <Icon name="i-lucide-phone" class="w-4 h-4 text-gray-500" />
                  <a
                    :href="`tel:${event.contact.phone}`"
                    class="text-blue-600 hover:text-blue-700"
                  >
                    {{ event.contact.phone }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div
              v-if="event.tags && event.tags.length > 0"
              class="mt-8 pt-8 border-t border-gray-200"
            >
              <h3 class="text-lg font-medium mb-4">Tags</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in event.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Share & Actions -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <span class="text-gray-600">Share this event:</span>
                  <div class="flex gap-2">
                    <a
                      :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        event.title
                      )}&url=${encodeURIComponent($route.fullPath)}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <Icon name="i-lucide-twitter" class="w-4 h-4" />
                    </a>
                    <a
                      :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        $route.fullPath
                      )}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Icon name="i-lucide-facebook" class="w-4 h-4" />
                    </a>
                    <a
                      :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        $route.fullPath
                      )}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <Icon name="i-lucide-linkedin" class="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <NuxtLink
                  to="/news-events"
                  class="btn inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white bg-white hover:shadow-lg focus:ring-primary-500 transform hover:scale-105 px-4 py-2 text-sm rounded-md"
                >
                  <Icon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" />
                  Back to Events
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Related Events -->
      <section
        v-if="relatedEvents && relatedEvents.length > 0"
        class="py-12 bg-gray-50"
      >
        <div class="container mx-auto px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-2xl font-light mb-8 text-gray-900">
              Related <span>Events</span>
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <EventCard
                v-for="relatedEvent in relatedEvents"
                :key="relatedEvent.path"
                :event="relatedEvent"
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
