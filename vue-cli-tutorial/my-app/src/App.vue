<template>
  <div id="app">
    <div>
      <!-- <a @click="page = 'home'">Home</a>
      <a @click="page = 'login'">Login</a> -->
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>

    <router-view></router-view>
    <button @click="goToLogin">Go To Login</button>
  </div>
</template>

<script>
import Home from "./pages/Home";
import Login from "./pages/Login";

export default {
  name: "app",
  data() {
    return {
      page: "home",
    };
  },
  components: {
    // Home,
    // Login,
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
  computed: {
    component() {
      return this.page === "home" ? Home : this.page === "login" ? Login : "";
    },
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
