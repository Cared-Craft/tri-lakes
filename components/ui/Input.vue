<!-- eslint-disable vue/html-self-closing -->
<!-- components/ui/Input.vue -->
<template>
 <div class="w-full">
  <label
   v-if="label"
   :for="id"
   class="mb-1 block text-sm text-secondary-900"
   :aria-label="label"
  >
   {{ label }}
  </label>
  <input
   :id="id"
   v-model="inputValue"
   :type="type"
   :placeholder="placeholder"
   :aria-invalid="hasError ? 'true' : 'false'"
   :aria-describedby="hasError ? errorId : undefined"
   class="w-full rounded-lg border border-secondary-300 bg-primary-50 px-3 py-2 text-secondary-900 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-60"
   :class="{
    'border-error-500 focus:ring-error-500 focus:border-error-500': hasError
   }"
   :disabled="disabled"
   @input="emit('update:modelValue', inputValue)"
  />
  <p
   v-if="hasError"
   :id="errorId"
   class="text-error-600 mt-1 text-xs"
   role="alert"
  >
   {{ error }}
  </p>
 </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface Props {
 modelValue?: string | number;
 label?: string;
 type?: string;
 placeholder?: string;
 error?: string;
 id?: string;
 disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
 modelValue: '',
 label: '',
 type: 'text',
 placeholder: '',
 error: '',
 id: '',
 disabled: false
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue ?? '');

watch(
 () => props.modelValue,
 (val) => {
  inputValue.value = val ?? '';
 }
);

const hasError = computed(() => !!props.error);
const errorId = computed(() => `${props.id || 'input'}-error`);
</script>
