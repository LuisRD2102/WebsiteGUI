<template>
    <div
    class="relative h-screen overflow-hidden bg-contain bg-[50%] bg-no-repeat">
    <img
        src="../assets/img/Landing4.png"
        class="h-screen m-0 w-full" />
    <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        >
        <div class="flex h-full items-center justify-center px-5 w-11/12 mx-auto gap-16">
            <div class="md:w-1/3 padding-inline-start mx-auto transform -translate-y-10">
              <h1 class="mb-2 mt-0 text-5xl font-medium leading-tight text-black md:text-start ">
                Solar Panel
              </h1>
              <p class="text-gray-700 text-justify text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure
                voluptatibus nihil quas voluptas illo eveniet recusandae sequi. Ut neque
                expedita ipsa sapiente praesentium, recusandae repudiandae similique animi!
                Sed, recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias iure voluptatibus nihil quas voluptas illo eveniet recusandae sequi.
                Ut neque expedita ipsa sapiente praesentium, recusandae repudiandae similique
                animi! Sed, recusandae.
              </p>
              <div class="mt-5">
                <Button label="Saber más" class="bg-primary " />
              </div>

              
            </div>
            <div class="w-1/2 hidden md:block pe-3">
              <img src="../assets/img/isometric.png" class="move" />
            </div>
        </div>
    </div>
</div>

<div class="w-full h-screen relative h-screen overflow-hidden bg-contain bg-no-repeat" style="height: 100vh; width: 100vw;">
    <img
    src="../assets/img/SecondPage.png"
    class="h-screen m-0 w-full" />

    <div class="flex h-full items-center justify-center ">
        
            <img
            src="../assets/img/space.jpg"
            style="transform: translateY(-1000px);"
            class="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt="" />
       
        <!-- <CardsOverlay style="transform: translateY(-800px)"/> -->
    </div>

</div>


</template>

<script >
import CardsOverlay from '../components/CardsOverlay.vue';
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar,
    CardsOverlay
},
};


</script>

<style>
@keyframes move {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  .move {
    animation: move 2s ease-in-out infinite;
  }
</style>
