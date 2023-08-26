<template>
    <Navbar class="absolute top-0 left-0 right-0 z-10" />

    <div class="relative h-screen overflow-hidden bg-contain bg-[50%] bg-no-repeat bg-light">
        <img
        src="../assets/img/LandingSM.png"
        class="h-screen m-0 w-full lg:hidden"
        />
        <img
          src="../assets/img/Landing4.png"
          class="h-screen m-0 w-full hidden lg:block"
        />

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: {
    Navbar
  },
};
</script>

<style>

</style>