<template>
  <Navbar class="absolute top-0 left-0 right-0 z-10" colorClass="text-white" />

  <div class="relative h-[200px] blue-gradient flex items-center min-w-[100vw] justify-center">

  </div>

  <div class="flex flex-col md:flex-row gap-12 px-6 -translate-y-20 ">

    <div class="w-full md:w-9/12 rounded-lg bg-white shadow px-3 h-full" >

      <div class="flex justify-between pt-3 pb-3 ps-1">
        <h4 class="text-lg font-semibold text-start ps-4">Solar Design</h4>
        <button data-tooltip-target="tedit" class="pe-3">
          <i class="material-icons-outlined text-2xl text-gray-600">edit</i>
        </button>
        <Tooltip label="Edit" id="tedit"/>

      </div>
      
    <div class="flex flex-wrap pb-4">
      <div class="w-full md:w-6/12 px-6 h-fit pb-4">
        <p class="text-md font-semibold">Modules</p>  
        <p class="text-md">Solarever USA SE-166*83-455M-144 (x13)</p>  
      </div>
      <div class="w-full md:w-6/12 px-6 h-fit">
        <p class="text-md font-semibold">Inverter</p>  
        <p class="text-md">Hoymiles HM-1500NT (x4)</p>  
      </div>

      <div class="w-full md:w-6/12 px-6 h-fit">
        <p class="text-md font-semibold">Sistem Size</p>  
        <p class="text-md">5.915 kW</p> 
      </div>
      <div class="w-full md:w-6/12 px-6 h-fit">
        <p class="text-md font-semibold">Estimated Yearly Production</p>  
        <p class="text-md">7,155 kW</p> 
      </div>
  </div> 

      <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                class="left-0 top-0 h-full w-full rounded-lg lg:rounded-tr-none lg:rounded-bl-lg pb-3" style="height: 400px;" frameborder="0"
                allowfullscreen></iframe>
    </div>
  
    <!-- Details -->
    <div class="w-full md:w-3/12 flex-shrink-0">
      <div class="rounded-lg bg-white shadow px-6 h-fit mb-4">
        <h4 class="text-lg font-semibold text-start pt-3 pb-3 ps-1">Details</h4>
    
        <div class="flex items-center gap-4 pb-4">
          <i class="material-icons-outlined c-primary flex justify-center">account_circle</i>
          <h3 class="text-md font-semibold flex justify-center">Jessica R. Grove</h3>
        </div>
    
        <div class="flex items-center gap-4 pb-4">
          <i class="material-icons-outlined c-primary flex justify-center">location_on</i>
          <p class="text-md font-semibold flex justify-center">1952 campbell, Kermit, TX 79745</p>        
        </div>
    
        <div class="flex items-center gap-4 pb-4">
          <i class="material-icons-outlined c-primary flex justify-center">call</i>
          <p class="text-md font-semibold flex justify-center">(575) 484-4607</p>
        </div>
    
        <div class="flex items-center gap-4 pb-6">
          <i class="material-icons-outlined c-primary flex justify-center">email</i>
          <p class="text-md font-semibold flex justify-center">jessicargrove@email.com</p>
        </div>
      </div>
      
      <BarChart class="w-full m-0"></BarChart>
      <!-- <div class="rounded-lg bg-white shadow px-6 h-fit">
       
      </div> -->
    
    </div>
    

  
  </div>


  
</template>

<script >
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Navbar

  },

};

</script>

<style></style>