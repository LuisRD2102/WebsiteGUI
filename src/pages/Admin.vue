<template>
  <Sidebar @open-sidebar="openSidebar($event)" />
  <router-view id="routerView" class="ps-[78px]"/>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      isOpened: false,
    };
  },
  watch: {
    isOpened(newValue) {
      console.log(newValue);
      const routerView = document.getElementById("routerView");
      if (routerView) {
        if (newValue == false || newValue == true ) {
          routerView.classList.remove("ps-[78px]");
        } 
      }
    },
  },
  methods: {
    openSidebar($event) {
      // console.log($event);
      this.isOpened = $event;
    },
  },
};
</script>
