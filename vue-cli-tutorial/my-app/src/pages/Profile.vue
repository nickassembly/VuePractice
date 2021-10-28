<template>
  <div>
    <h1 v-if="name === ''">Your Profile</h1>
    <h1 v-else>{{ name }} Profile</h1>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    let name = this.$route.params.name;
    this.name = name === undefined ? "" : name;
  },
};
</script>

<style lang="stylus" scoped></style>
