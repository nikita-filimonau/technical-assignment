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
      <h2>Sign Up</h2>
      <sign-up-form @sign-up="signUp"></sign-up-form>
    </base-card>
  </section>
    </div>
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
    isAuthenticated(curValue, oldValue){
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/suppliers');
      }
    },
  },
  methods: {
    ...mapActions('users', ['createUser', 'clearError']),
    async signUp(data) {
      await this.createUser(data);
    },
    handleError(){
      this.clearError();
    }
  }
};
</script>
