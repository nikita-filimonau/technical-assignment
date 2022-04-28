<template>
  <section>
    <base-card>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <h2>Sign Up</h2>
      <sign-up-form @sign-up="signUp"></sign-up-form>
    </base-card>
  </section>
</template>

<script>
import SignUpForm from './SignUpForm';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    SignUpForm,
  },
  computed: {
    ...mapGetters('users', ['error', 'isAuthenticated', 'isLoading']),
  },
  watch: {
    error(curValue){
      // TODO create modal for better error
      if (curValue) alert(curValue);
    },
    isAuthenticated(curValue, oldValue){
      console.log('isAuthenticated');
      console.log(curValue);
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/suppliers');
      }
    },
  },
  methods: {
    ...mapActions('users', ['createUser']),
    async signUp(data) {
      await this.createUser(data);
    }
  }
};
</script>
