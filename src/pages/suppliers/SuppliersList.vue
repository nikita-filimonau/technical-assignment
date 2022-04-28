<template>
  <div>
    <section>
      <base-card>
        <div class="controls">
          <base-button @click="loadPage">Refresh</base-button>
          <base-pagination
              :page="page"
              :pages="pages"
              @change-page="changePage"
          ></base-pagination>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasSuppliers">
          <supplier-item
            v-for="supplier in suppliers"
            :key="supplier.id"
            :id="supplier.id"
            :name="supplier.name"
          ></supplier-item>
        </ul>
        <h3 v-else>No Suppliers found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import SupplierItem from './SupplierItem';
import { mapActions, mapGetters } from 'vuex';
import BasePagination from "@/components/ui/BasePagination";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    BasePagination,
    SupplierItem,
  },
  watch: {
    page(curValue, oldValue){
      if (curValue && curValue !== oldValue) {
        this.loadPage();
      }
    },
  },
  created() {
    this.loadPage();
  },
  computed: {
    ...mapGetters('suppliers', ['suppliers', 'isLoading', 'hasSuppliers', 'count']),
    pages(){
      return Math.ceil(this.count / 10);
    }
  },
  methods: {
    ...mapActions('suppliers', ['loadSuppliers']),
    changePage(page){
      this.page = page;
    },
    loadPage() {
      this.loadSuppliers({ page: this.page });
    }
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  position: sticky;
  top: 0;
  background-color: $picton-blue-light;
  border: 1px solid $denim;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
}
</style>
