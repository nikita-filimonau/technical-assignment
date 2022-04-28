<template>
  <div>
    <section>
      <base-card>
        <h3>{{ supplier?.name }}</h3>
        <p>{{ supplier?.description }}</p>
        <base-button @click="backButton">Back</base-button>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: ['id'],
  created() {
    this.loadSupplier(this.id);
  },
  computed: {
    ...mapGetters('suppliers', ['supplier']),
  },
  methods: {
    ...mapActions('suppliers', ['loadSupplier']),
    backButton(){
      this.$router.back();
    },
  },
};
</script>
