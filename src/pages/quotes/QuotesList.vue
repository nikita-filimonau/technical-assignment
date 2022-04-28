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
        <ul v-else-if="hasQuotes">
          <quote-item
            v-for="quote in quotes"
            :key="quote.id"
            :id="quote.id"
            :title="quote.title"
            :amount="quote.amount"
            :created="quote.created"
            :supplier_id="quote.supplier_id"
          ></quote-item>
        </ul>
        <h3 v-else>No Suppliers found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import QuoteItem from './QuoteItem';
import { mapActions, mapGetters } from 'vuex';
import BasePagination from "@/components/ui/BasePagination";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    QuoteItem,
    BasePagination,
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
    ...mapGetters('quotes', ['quotes', 'isLoading', 'hasQuotes', 'count']),
    pages(){
      return Math.ceil(this.count / 10);
    }
  },
  methods: {
    ...mapActions('quotes', ['loadQuotes']),
    changePage(page){
      this.page = page;
    },
    loadPage() {
      this.loadQuotes({ page: this.page });
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
