<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page!= 1" @click="pageBack"> Previous </button>
        </li>
        <li class="page-item">
          <button
              :key=pageNumber
              type="button"
              class="page-link"
              :class="{ current: page == pageNumber}"
              v-for="pageNumber in pagesArray" @click="changePage(pageNumber)"
          > {{pageNumber}} </button>
        </li>
        <li class="page-item">
          <button type="button" @click="pageNext" v-if="page < pagesArray.length" class="page-link"> Next </button>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  emits: ['change-page'],
  computed: {
    pagesArray(){
      return Array.from({length: 5}, (_, i) => i + this.page).filter(item => item <= this.pages);
    }
  },
  methods: {
    pageBack(){
      const newPage = this.page - 1;
      this.$emit('change-page', newPage);
    },
    pageNext(){
      const newPage = this.page + 1;
      this.$emit('change-page', newPage);
    },
    changePage(pageNumber){
      this.$emit('change-page', pageNumber);
    }
  },
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    perPage: {
      type: Number,
      required: true,
      default: 1
    },
    pages: {
      type: Number,
      required: true,
      default: 1
    },
  },
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.pagination {
}
.page-link {
	display: inline-block;
}

.page-link {
    font-size: 20px;
    color: $denim;
    font-weight: 500;
}
.current{
  background-color: $orange-peel;
}
</style>
