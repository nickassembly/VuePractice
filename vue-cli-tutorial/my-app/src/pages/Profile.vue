<template>
  <div>
    <div v-if="profile">
    <h1>{{ profile.firstName }} - {{ profile.lastName }} Profile</h1>

    <div>
      <router-view></router-view>
    </div>
    <div>{{ profile.age }} {{ profile.gender }} {{ profile.bio }}</div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: {},
    };
  },
  watch: {
    "$route.params.name": {
      immediate: true,
      handler(name) {
        this.loadProfile(name);
      },
    },
  },
  methods: {
    loadProfile(name) {
      name === undefined ? "" : name;
      this.$api.get("Profile/" + name).then((res) => {
        this.profile = res.data;
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
