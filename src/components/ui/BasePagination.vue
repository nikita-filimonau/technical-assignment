<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page!= 1" @click="pageStep(-1)"> Previous </button>
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
          <button type="button" @click="pageStep(1)" v-if="page < this.pages" class="page-link"> Next </button>
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
    pageStep(step) {
      const newPage = this.page + step;
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

.page-link {
    font-size: 20px;
    color: $denim;
    border: 1px solid $denim;
    background-color: $white;
    font-weight: 500;
}
.current{
  background-color: $orange-peel;
}
</style>
