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
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !email.isValid}">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model.trim="email.val"
        @blur="clearValidity('email')"
      />
      <p v-if="!email.isValid">Email must not be empty and should have correct format.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
import {EMAIL_REGEX} from "@/constants/regex";
export default {
  emits: ['sign-up'],
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
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      email: {
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
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === '' || !this.email.val.toLowerCase().match(EMAIL_REGEX)) {
        this.email.isValid = false;
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
        first_name: this.firstName.val,
        last_name: this.lastName.val,
        email: this.email.val,
      };

      this.$emit('sign-up', formData);
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
