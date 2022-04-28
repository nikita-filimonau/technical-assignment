<template>
  <li>
    <h3>{{ title }}</h3>
    <p>Amount: {{ amount }}</p>
    <p>Created: {{ created }}</p>
    <div class="actions">
      <base-button @click="goToSupplier">Check Supplier</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'amount', 'created', 'supplier_id'],
  methods: {
    goToSupplier(){
      this.$router.push(`/suppliers/${this.supplier_id}`)
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
