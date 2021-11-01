<template>
  <div>
    <h1 v-if="name === ''">Your Profile</h1>
    <h1 v-else>{{ name }} Profile</h1>

    <div>
      <router-view></router-view>
    </div>
    <div>
      <p v-for="p in profiles" :key="p.id">
        {{ p.firstName }}
      </p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: "",
      profiles: [],
    };
  },
  created() {
    let name = this.$route.params.name;
    this.name = name === undefined ? "" : name;
    this.$api.get(`http://localhost:3000/Profile`).then((res) => {
      this.profiles = res.data;
    });
  },
};
</script>

<style lang="stylus" scoped></style>
