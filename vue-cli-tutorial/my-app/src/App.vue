<template>
  <div id="app">
    <TextField label="First Name" v-model="firstName" :textLimit="15"></TextField>
    <TextField :label="'Last Name'" v-model="lastName" :textLimit="15"></TextField>
    <div>{{fullName}}</div>
  </div>
</template>

<script>
import TextField from "./components/TextField"

export default {
  name: "App",
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  components: {
  TextField
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>

<style lang="stylus">
#app
  margin-top 60px

  .text-input
    label
      display block
      width 100%
    
    input 
      display block
    
    input.valid
      border 1px solid green

    input.invalid
      border 1px solid red

    .validation
      text-align right
      font-size 12px
</style>
