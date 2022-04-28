<template>
  <section>
    <base-card>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <h2>Sign In</h2>
      <sign-in-form @sign-in="signIn"></sign-in-form>
    </base-card>
  </section>
</template>

<script>
import SignInForm from './SignInForm';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    SignInForm,
  },
  computed: {
    ...mapGetters('users', ['error', 'isAuthenticated', 'isLoading']),
  },
  watch: {
    error(curValue){
      // TODO create modal for better error
      console.log(curValue)
      if (curValue) alert(curValue);
    },
    isAuthenticated(curValue, oldValue){
      console.log('isAuthenticated');
      console.log(curValue);
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/suppliers');
      }
    }
  },
  methods: {
    ...mapActions('users', ['loginUser']),
    async signIn(data) {
      await this.loginUser(data);
    }
  }
};
</script>
