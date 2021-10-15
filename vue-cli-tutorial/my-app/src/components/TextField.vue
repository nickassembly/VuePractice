<template>
    <div class="text-input" style="width: 200px">
  <div>
  <label>{{label}}</label>
  <input :class="validationClass" :value="value" @input="$emit('input', $event.target.value)">
  </div>
  <div v-if="textLimit > 0" class="validation">{{inputCount}} / {{textLimit}}</div>
  </div>
</template>

<script>
export default {
 props: {
  value: {
      required: true,
      type: String
  },
  textLimit: {
      required: false,
      type: Number
  },
    label: {
      required: false,
      type: String
  },
  },
  watch: {
    value: function(newValue, oldValue) {
      if (newValue.length > this.textLimit) this.$emit('input', oldValue)
    } 
  },
  computed: {
inputCount() {
  return this.value.length;
},
isEmpty() {
  return this.value.length === 0;
},
validationClass() {
  return this.isEmpty ? "invalid" : "valid";
}
  },
}
</script>

<style lang="stylus">

</style>