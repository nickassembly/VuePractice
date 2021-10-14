<template>
  <div id="app">
<div class="text-input" style="width: 200px">
  <div>
  <label>First Name</label>
  <input :class="validationClass" v-model="firstName">
  </div>
  <div class="validation">
{{inputCount}} / {{textLimit}}
  </div>
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
  firstName: "",
  textLimit: 15
};
  },
  watch: {
firstName: function(newValue, oldValue) {
  console.log(newValue, oldValue);
  if (newValue.length > this.textLimit) this.firstName = oldValue;
} 
  },
  computed: {
inputCount() {
  return this.firstName.length;
},
isEmpty() {
  return this.firstName.length === 0;
},
validationClass() {
  return this.isEmpty ? "invalid" : "valid";
}
  },
  components: {
  
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
