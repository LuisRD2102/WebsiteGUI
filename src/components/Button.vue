<template>
  <button
    type="button"
    :class="['inline-block rounded-lg p-2 text-md h-9 leading-normal text-white shadow-[0_4px_9px_-4px_black] transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]', bgColorClass , icon ? 'flex gap-2 items-center pe-1' : '']"
  >
    <i v-if="icon" class="material-icons-outlined text-lg text-white">{{ icon }}</i>
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  bgColorClass: {
    type: String,
    default: 'bg-primary'
  }
});
</script>