<template>
    
  <nav class="border-gray-200">
    <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4 px-8">
      <a class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap c-primary">LOGO</span>
      </a>
       <div class="md:pe-3 flex justify-end" >
        <ul class="font-medium">
          <ul class="font-medium">
            <li class="rounded px-3 md:py-1 bg-white">
              <a href="#" class="block py-2 pl-3 pr-4 c-primary rounded font-bold">Sign In</a>
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