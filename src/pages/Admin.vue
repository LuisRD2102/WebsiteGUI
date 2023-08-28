<template>
    <Sidebar @open-sidebar="openSidebar($event)"/>
    <router-view :class="paddingClass"/>
</template>
  
<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      isOpened: false
    }
  },
  computed: {
    paddingClass() {
      return this.isOpened == false ? 'ps-0' : 'ps-[78px]' ;
    }
  },
  methods: {
    openSidebar($event){
      console.log($event);
      this.isOpened = $event
    }
  }
};
</script>
