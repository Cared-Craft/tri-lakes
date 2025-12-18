<template>
 <Teleport to="body">
  <transition name="fade-scale">
   <div
    v-if="modelValue"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
    @keydown.esc="close"
    @click="onOverlayClick"
   >
    <div
     class="bg-primary-50 dark:bg-primary-900 rounded-xl shadow-xl max-w-lg w-full mx-4 p-6 relative"
     @click.stop
    >
     <button
      type="button"
      class="absolute top-3 right-3 text-secondary-400 hover:text-secondary-700 focus:outline-none"
      aria-label="Close modal"
      @click="close"
     >
      <span aria-hidden="true">&times;</span>
     </button>
     <slot />
    </div>
    <span class="sr-only">Modal overlay</span>
   </div>
  </transition>
 </Teleport>
</template>

<script setup lang="ts">
import { watch, onMounted, onBeforeUnmount } from 'vue';

interface Props {
 modelValue: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

function close() {
 emit('update:modelValue', false);
}

function onOverlayClick(e: MouseEvent) {
 if (e.target === e.currentTarget) close();
}

function onEscape(e: KeyboardEvent) {
 if (e.key === 'Escape') close();
}

watch(
 () => props.modelValue,
 (open) => {
  if (open) {
   document.body.style.overflow = 'hidden';
   window.addEventListener('keydown', onEscape);
  } else {
   document.body.style.overflow = '';
   window.removeEventListener('keydown', onEscape);
  }
 }
);

onMounted(() => {
 if (props.modelValue) {
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscape);
 }
});

onBeforeUnmount(() => {
 document.body.style.overflow = '';
 window.removeEventListener('keydown', onEscape);
});
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
 transition: opacity 0.2s, transform 0.2s;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
 opacity: 0;
 transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
 opacity: 1;
 transform: scale(1);
}
</style>
