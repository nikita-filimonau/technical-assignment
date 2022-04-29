<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ JSON.stringify(error) }}</p>
    </base-dialog>
    <base-dialog :show="!!isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
  <section>
    <base-card>
      <h2>Sign In</h2>
      <sign-in-form @sign-in="signIn"></sign-in-form>
    </base-card>
  </section>
  </div>
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
    isAuthenticated(curValue, oldValue){
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/suppliers');
      }
    }
  },
  methods: {
    ...mapActions('users', ['loginUser', 'clearError']),
    signIn(data) {
      this.loginUser(data);
    },
    handleError(){
      this.clearError();
    }
  }
};
</script>
