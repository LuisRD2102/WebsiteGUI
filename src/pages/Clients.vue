<template>
  <div>
    <div class="p-4 max-h-[75vh]">
      <DataTable :items="items" :headers="headers" @add-new="addNew()">
        <template v-slot:custom-button>
          <!-- Aquí defines tu botón personalizado con su icono y función -->
          <router-link to="/proposal">
            <button @click="redireccionar" data-tooltip-target="tsell" >
              <i class="material-icons-outlined text-lg text-gray-600">sell</i>
            </button>
            <Tooltip label="Proposal" id="tsell"/>
          </router-link>
        </template>
      </DataTable>
      <ClientsForm ref="clientsForm" />
    </div>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue';
import ClientsForm from './ClientsForm.vue';

export default {
  components: {
    DataTable,
    ClientsForm,
  },
  methods: {
    addNew() {
      this.$refs.clientsForm.openModal()
    }
  },
  data() {
    return {
      headers: ["Id", "First name", "Last Name", "Phone", "Email", "Status"],
      items: []
    };
  },
  created() {
    fetch('https://randomuser.me/api/?results=50&nat=us')
      .then(response => response.json())
      .then(data => {
        this.items = data.results.map(user => ({
          Id: user.id.value,
          "First name": user.name.first,
          "Last Name": user.name.last,
          Phone: user.phone,
          Email: user.email,
          Status: Math.round(Math.random())
        }))
      });
  }
};
</script>
