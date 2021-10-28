<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}

a {
  padding: 0 5px;
}
</style>
