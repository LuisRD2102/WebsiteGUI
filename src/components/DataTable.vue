<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="flex justify-between px-2 mb-2">
        <div class="flex">
          <div class="relative max-w-xs mr-2">
            <input type="text" name="search" v-model="search"
              class="h-9 block w-full p-3 pl-10 text-sm border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search by ID..." />
            <div class="h-9 absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div class="h-9 flex items-center space-x-2">
            <div class="relative">
              <button
                class="relative z-0 inline-flex text-sm rounded-md shadow-sm hover:bg-gray-50">
                <span
                  class="h-9 relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <div class="hidden sm:block">Filters</div>
                </span>
              </button>
            </div>
          </div>
        </div>
        <Button label="Add new" icon="add" @click="addNew()" class="pe-3 text-sm"/>
      </div>
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-auto border rounded-lg max-h-[75vh]">
          <table class="min-w-full divide-y">
            <thead class="bg-gray-100 sticky top-0">
              <tr>
                <th scope="col"
                  class="px-6 py-3 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
                  Actions
                </th>
                <th v-for="(header, index) in headers" :key="'header-' + index" scope="col" @click="sortTable(index)"
                  class="px-6 py-3 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
                  <div class='flex items-center'>
                    {{ header }}
                    <!-- Up arrow -->
                    <svg v-if="sortOrder === index && sortAsc" xmlns="http://www.w3.org/2000/svg"
                      class='w-[18px] h-[18px] ml-[5px]' fill='none' viewBox='0 0 24 24' stroke='currentColor'
                      stroke-width='2'>
                      <path stroke-linecap='round' stroke-linejoin='round' d='M7 11l5-5m0 0l5 5m-5-5v12' />
                    </svg>
                    <!-- Down arrow -->
                    <svg v-if="sortOrder === index && !sortAsc" xmlns="http://www.w3.org/2000/svg"
                      class='w-[18px] h-[18px] ml-[5px]' fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                    <!-- Both arrows (no specific order) -->
                    <div class="flex">
                      <svg v-if="sortOrder != index" xmlns="http://www.w3.org/2000/svg" class='w-[18px] h-[18px]'
                        fill='none' viewBox='0 0 10 24' stroke='currentColor' stroke-width='2'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M7 11l5-5m0 0l5 5m-5-5v12' />
                      </svg>
                      <svg v-if="sortOrder != index" xmlns="http://www.w3.org/2000/svg" class='w-[18px] h-[18px]'
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                      </svg>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in filteredItems" :key="'item-' + index">
                <td class="px-6 py-3 whitespace-nowrap flex items-center justify-center">
                  <button class="mr-2">
                    <i class="material-icons-outlined text-lg text-gray-600" @click="editItem(item)">visibility</i>
                  </button>
                  <button class="mr-2">
                    <i class="material-icons-outlined text-lg text-gray-600" @click="editItem(item)">edit</i>
                  </button>
                  <button @click="deleteItem(item)">
                    <i class="material-icons-outlined text-lg text-red-500">delete</i>
                  </button>
                </td>
                <td v-for="(value, key) in item" :key="'value-' + key" class="px-6 py-3 whitespace-nowrap">
                  <div v-if="key === 'Status'">
                    <span v-if="value === 1"
                      class="inline-block w-20 px-2 py-1 text-center text-green-800 bg-green-200 rounded-full">Active</span>
                    <span v-if="value === 0"
                      class="inline-block w-20 px-2 py-1 text-center text-red-800 bg-red-200 rounded-full">Inactive</span>
                  </div>
                  <div v-else>
                    {{ value }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Paginator :total-pages="totalPages" :current-page="currentPage" :items-per-page="itemsPerPage"
          @prev-page="prevPage" @next-page="nextPage" @go-to-page="goToPage" @update:itemsPerPage="updateEntries" />
      </div>
    </div>
  </div>
</template>

<script>
import Paginator from '../components/Paginator.vue';

export default {
  components: {
    Paginator,
},
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: '',
      sortOrder: null,
      sortAsc: false,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    filteredItems() {
      let items = this.items;

      if (this.search) {
        items = items.filter(item => item.Id.includes(this.search));
      }

      // Divide los elementos en páginas
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;

      return items.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  methods: {
    addNew(){
      this.$emit('add-new');
    },
    sortTable(index) {
      if (this.sortOrder === index) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortOrder = index;
        this.sortAsc = true;
      }

      const key = this.headers[index];
      this.items.sort((a, b) => {
        if (a[key] < b[key]) return this.sortAsc ? -1 : 1;
        if (a[key] > b[key]) return this.sortAsc ? 1 : -1;
        return 0;
      });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      const totalPages = Math.ceil(this.items.length / this.itemsPerPage);

      if (this.currentPage < totalPages) {
        this.currentPage++;
      }
    },
    updateEntries(newItemsPerPage) {
      this.itemsPerPage = parseInt(newItemsPerPage); // actualiza itemsPerPage con el nuevo valor
      this.currentPage = 1; // resetea la página actual a la primera
    },
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped></style>
