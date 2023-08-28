<template>
    <div class="flex">
        <Sidebar @open-sidebar="openSidebar($event)"/>
        <router-view :class="paddingClass"/>
    </div>
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
      return this.isOpened == true ? 'ps-0' : 'ps-[78px]' ;
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

<style scoped>
.flex {
  display: flex;
}

/* Asegúrate de que tu barra lateral tiene un ancho fijo */
Sidebar {
  width: 200px; /* Ajusta este valor según tus necesidades */
}

/* Asegúrate de que tu vista de enrutador se expande para llenar el espacio restante */
router-view {
  flex-grow: 1;
}
</style>

