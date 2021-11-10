<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>

    <div class="app">
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="menu">
        <router-link
          v-for="p in profiles"
          :key="p.id"
          :to="`/profile/${p.firstName}`"
        >
          {{ p.firstName }} - {{ p.lastName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  created() {
    this.loadProfiles(this.$api);
  },
  methods: {
    ...mapActions('profiles', {
      loadProfiles: "LOAD_PROFILES",
    }),
  },
  computed: {
    ...mapState('profiles', {
      profiles: (state) => state.profiles,
    }),
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}

a {
  padding: 0 5px;
}

.app {
  display: flex;
  flex-direction: row;
}
</style>
