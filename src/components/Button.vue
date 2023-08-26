<template>
    <button
      type="button"
      class="flex gap-2 items-center inline-block rounded bg-primary p-2 text-xs h-9 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
      @click="navigateToUrl">
      <i class="material-icons-outlined text-lg text-white">{{ icon }}</i>
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
  });

  const navigateToUrl = () => {
    router.push(url);
  };  
  </script>
  
  <style></style>
  
