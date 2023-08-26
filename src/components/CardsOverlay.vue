<template>
<!-- Container for demo purpose -->
<div class="container mx-auto w-100vw">
    <!-- Section: Design Block -->
    <section class="">
     
      <div class="text-center text-black lg:h-[400px] h-[300px] pt-24 ">
        <h2 class="mb-12 text-center text-3xl font-bold">Pricing</h2>
      </div>
  
      <div class="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32 gap-3" style="margin-top: -200px">
        <div class="p-0 py-12">
          <div
            class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none size-change">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Basic</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>$ 129</strong>
                <small class="text-base text-neutral-500 dark:text-neutral-300">/year</small>
              </h3>
  
              <Button label="buy" class="w-full"></Button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Sales Mode and Web Proposal
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Standard Roles
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Design Mode
                </li>
              </ol>
            </div>
          </div>
        </div>
  
        <div>
          <div
            class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 size-change"
            style="z-index: 1">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Enterprise</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>$ 499</strong>
                <small class="text-base text-neutral-500 dark:text-neutral-300">/year</small>
              </h3>
  
              <Button label="buy" class="w-full"></Button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Sales Mode and Web Proposal
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Standard Roles
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Design Mode
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Standard Expert Designs
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Expedited Expert Designs
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium
                  support
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Drag&amp;Drop
                  builder
                </li>
              </ol>
            </div>
          </div>
        </div>
  
        <div class="py-12">
          <div
            class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none size-change">
            <div class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
              <p class="mb-4 text-sm uppercase">
                <strong>Advanced</strong>
              </p>
              <h3 class="mb-6 text-3xl">
                <strong>$ 299</strong>
                <small class="text-base text-neutral-500 dark:text-neutral-300">/year</small>
              </h3>
  
              <Button label="buy" class="w-full z-1"></Button>
            </div>
            <div class="p-6">
              <ol class="list-inside">
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Standard Roles
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Design Mode
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Standard Expert Designs
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Expedited Expert Designs
                </li>
                <li class="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium
                  support
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
  
</template>

<script setup>

</script>

<style>
.size-change:hover {
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}



</style>