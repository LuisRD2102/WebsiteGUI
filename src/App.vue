<template>
  <Navbar class="fixed top-0 left-0 right-0 z-10" />
  <LandingPage class="h-screen bg-red-500" />
</template>


<script>
import Navbar from './components/Navbar.vue';
import LandingPage from './pages/LandingPage.vue';

export default {
  components: {
    Navbar,
    LandingPage
},
};
</script>

<style lang="scss" scoped></style>
