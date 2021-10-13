<template>
  <div id="app">
<div class="text-input">
  <label>First Name</label>
  <input v-model="firstName">
</div>
<div>
  {{firstName}}
</div>
  </div>
</template>

<script>


export default {
  name: "App",
  data() {
return {
  firstName: ""
}
  },
  components: {
  
  },
};
</script>

<style lang="stylus">
#app
  margin-top 60px

  .text-input
    label
      display block
</style>
