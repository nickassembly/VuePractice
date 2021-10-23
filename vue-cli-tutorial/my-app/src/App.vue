<template>
  <div id="app">
    <div>
      <a @click="page = 'home'">Home</a>
      <a @click="page = 'login'">Login</a>
    </div>

    <component :is="component"></component>
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
    Home,
    Login,
  },
  computed: {
    component() {
     return this.page === "home" ? Home : this.page === "login" ? Login : "";
    }
  }
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
