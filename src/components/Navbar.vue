<template>
    
  <nav class="border-gray-200">
    <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4 px-8">
      <a class="flex items-center" href="/landing">
          <span class="self-center text-2xl font-semibold whitespace-nowrap c-primary">LOGO</span>
      </a>
       <div class="md:pe-3 flex justify-end" >
        <ul class="font-medium">
          <ul class="font-medium">
              <Button label="Sign in" class="w-full px-3 font-bold flex items-center px-6 py-1 shadow-none justify-center" :bgColorClass="$route.path === '/login' ? 'hidden' : 'bg-light c-primary'" @click="$router.push('/login')"></Button>          
          </ul>         
        </ul>
      </div>
    </div>
  </nav>


  
</template>

<script>
import Button from '../components/Button.vue'

export default {
  components: {
    Button
  },
};

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