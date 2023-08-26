<template>
  <router-view/>
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

<style lang="scss" scoped>
</style>
