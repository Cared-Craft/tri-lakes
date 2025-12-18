<script setup lang="ts">
interface FlipbookProps {
  /**
   * PDF file path or URL
   */
  pdfPath?: string;
  /**
   * Array of image paths/URLs for flipbook pages
   */
  images?: string[];
  /**
   * Title of the flipbook
   */
  title?: string;
  /**
   * Width of the flipbook container
   */
  width?: string;
  /**
   * Height of the flipbook container
   */
  height?: string;
}

const props = withDefaults(defineProps<FlipbookProps>(), {
  width: "100%",
  height: "600px",
});

const currentPage = ref(0);
const isFlipping = ref(false);

// If PDF is provided, render as PDF viewer
// If images are provided, render as image flipbook
const hasImages = computed(() => props.images && props.images.length > 0);
const hasPdf = computed(() => !!props.pdfPath);
const totalPages = computed(() => {
  if (hasImages.value) return props.images!.length;
  return 0; // PDF pages would need PDF.js library
});

const nextPage = () => {
  if (isFlipping.value) return;
  if (currentPage.value < totalPages.value - 1) {
    isFlipping.value = true;
    currentPage.value++;
    setTimeout(() => {
      isFlipping.value = false;
    }, 300);
  }
};

const prevPage = () => {
  if (isFlipping.value) return;
  if (currentPage.value > 0) {
    isFlipping.value = true;
    currentPage.value--;
    setTimeout(() => {
      isFlipping.value = false;
    }, 300);
  }
};

const goToPage = (page: number) => {
  if (isFlipping.value) return;
  if (page >= 0 && page < totalPages.value) {
    isFlipping.value = true;
    currentPage.value = page;
    setTimeout(() => {
      isFlipping.value = false;
    }, 300);
  }
};

// Keyboard navigation
onMounted(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevPage();
    if (e.key === "ArrowRight") nextPage();
  };
  window.addEventListener("keydown", handleKeyPress);
  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });
});
</script>

<template>
  <div class="flipbook-container" :style="{ width, height }">
    <!-- Title -->
    <h3 v-if="title" class="text-xl font-semibold text-gray-900 mb-4">
      {{ title }}
    </h3>

    <!-- PDF Viewer -->
    <div v-if="hasPdf" class="w-full h-full">
      <iframe
        :src="pdfPath"
        class="w-full h-full border rounded-lg"
        frameborder="0"
      ></iframe>
    </div>

    <!-- Image Flipbook -->
    <div v-else-if="hasImages" class="relative w-full h-full">
      <!-- Flipbook Viewer -->
      <div
        class="flipbook-viewer relative w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg"
      >
        <!-- Page Image -->
        <div
          class="flipbook-page-wrapper w-full h-full flex items-center justify-center"
        >
          <img
            :src="images![currentPage]"
            :alt="`Page ${currentPage + 1} of ${totalPages}`"
            class="max-w-full max-h-full object-contain transition-opacity duration-300"
            :class="{ 'opacity-50': isFlipping }"
          />
        </div>

        <!-- Navigation Overlay -->
        <div class="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <!-- Previous Button -->
          <button
            @click="prevPage"
            :disabled="currentPage === 0 || isFlipping"
            class="flipbook-nav-btn pointer-events-auto bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <Icon name="i-lucide-chevron-left" class="w-6 h-6 text-gray-900" />
          </button>

          <!-- Next Button -->
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages - 1 || isFlipping"
            class="flipbook-nav-btn pointer-events-auto bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <Icon name="i-lucide-chevron-right" class="w-6 h-6 text-gray-900" />
          </button>
        </div>

        <!-- Page Indicator -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        >
          <div
            class="bg-white/90 rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
          >
            <span class="text-sm text-gray-700">
              Page {{ currentPage + 1 }} of {{ totalPages }}
            </span>
          </div>
        </div>

        <!-- Page Thumbnails (Optional) -->
        <div
          v-if="totalPages > 1"
          class="absolute bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        >
          <div class="flex gap-2 bg-white/90 rounded-lg p-2 shadow-lg">
            <button
              v-for="(image, index) in images"
              :key="index"
              @click="goToPage(index)"
              class="thumbnail-btn w-12 h-16 rounded overflow-hidden border-2 transition-all"
              :class="
                index === currentPage
                  ? 'border-primary-600 shadow-md'
                  : 'border-gray-300 hover:border-gray-400'
              "
            >
              <img
                :src="image"
                :alt="`Thumbnail page ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="mt-4 flex items-center justify-center gap-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 0"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <span class="text-sm text-gray-600">
          {{ currentPage + 1 }} / {{ totalPages }}
        </span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages - 1"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>

    <!-- No Content Message -->
    <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <p class="text-gray-500">No content available for flipbook</p>
    </div>
  </div>
</template>

<style scoped>
.flipbook-container {
  position: relative;
}

.flipbook-viewer {
  min-height: 500px;
}

.flipbook-nav-btn {
  transition: transform 0.2s ease;
}

.flipbook-nav-btn:hover:not(:disabled) {
  transform: scale(1.1);
}

.flipbook-nav-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.thumbnail-btn {
  transition: transform 0.2s ease;
}

.thumbnail-btn:hover {
  transform: scale(1.1);
}
</style>


