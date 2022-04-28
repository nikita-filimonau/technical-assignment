<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !username.isValid}">
      <label for="username">User Name</label>
      <input
        type="text"
        id="username"
        v-model.trim="username.val"
        @blur="clearValidity('username')"
      />
      <p v-if="!username.isValid">Username must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !password.isValid}">
      <label for="password">Password</label>
      <input
        type="text"
        id="password"
        v-model.trim="password.val"
        @blur="clearValidity('password')"
      />
      <p v-if="!password.isValid">Password must not be empty.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Sign In</base-button>
  </form>
</template>

<script>
export default {
  emits: ['sign-in'],
  data() {
    return {
      username: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.username.val === '') {
        this.username.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        username: this.username.val,
        password: this.password.val,
      };

      this.$emit('sign-in', formData);
    },
  },
};
</script>

<style scoped lang="scss">
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: $denim;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: $denim solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: $orange-peel;
}

.invalid input,
.invalid textarea {
  border: 1px solid $orange-peel;
}
</style>
