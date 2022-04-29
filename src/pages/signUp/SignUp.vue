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
  methods: {
    ...mapActions('users', ['createUser', 'clearError']),
    signUp(data) {
      this.createUser(data).then(() => {
        this.$router.replace('/suppliers');
      });
    },
    handleError(){
      this.clearError();
    }
  }
};
</script>
