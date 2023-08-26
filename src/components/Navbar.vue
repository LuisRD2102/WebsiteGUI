<template>
    
<nav class="border-gray-200">
    <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4 px-8">
      <a class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap c-primary">LOGO</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto pe-3" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li class="border border-white rounded px-3 py-1">
              <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign In</a>
            </li>
          </ul>
          
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script setup>

// window.addEventListener('scroll', () => {
//   const nav = document.querySelector('nav');
//   const menuItems = document.querySelectorAll('nav ul li a');
//   if (window.scrollY > 0) {
//     nav.classList.add('bg-white-opacity-low');
//     menuItems.forEach(item => item.classList.add('text-black'));
//   } else {
//     nav.classList.remove('bg-white-opacity-low');
//     menuItems.forEach(item => item.classList.remove('text-black'));
//   }
// });



</script>



<style >

.pe-3{
  padding-right: 1.5rem;
}


.bg-white-opacity-low{
  background-color: white;
  opacity: 0.5;
}


</style>