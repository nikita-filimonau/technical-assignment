<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Technical Assignment</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/suppliers" v-if="login">Suppliers</router-link>
          <router-link to="/signin" v-else>Sign In</router-link>
        </li>
        <li>
         <router-link to="/quotes" v-if="login">Quotes</router-link>
         <router-link to="/signup" v-else>Sign Up</router-link>
        </li>
        <li>
          <base-button v-show="login" @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['logout'],
  methods: {
    logout(){
      this.$emit('logout');
    },
  },
  props: {
    login: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 5rem;
  background-color: $denim;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: $orange-peel;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid $orange-peel;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
