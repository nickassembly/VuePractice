<template>
  <div id="app">
    <TextField
      label="First Name"
      v-model="firstName"
      :textLimit="15"
    ></TextField>
    <TextField
      :label="'Last Name'"
      v-model="lastName"
      :textLimit="15"
    ></TextField>

    <SelectField
      label="Gender"
      v-model="gender"
      placeholder="Select your Gender"
      :options="genderList"
    ></SelectField>

    <SelectField
      label="Age"
      v-model="age"
      placeholder="Select your Age"
      :options="ageList"
    ></SelectField>

   <TextAreaField
   label="Bio"
   v-model="bio"
   :textLimit="255"
   resize="vertical"
   autoResize
   >

   </TextAreaField>

    <div>{{ fullName }} - {{ gender }} - {{ age }}</div>
    <div>
      {{ bio }}
    </div>
  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";
import TextAreaField from "./components/TextAreaField"

export default {
  name: "App",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      bio: "",
    };
  },

  components: {
    TextField,
    SelectField,
    TextAreaField
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    genderList() {
      return [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Other", text: "Other" },
      ];
    },
    ageList() {
      let result = [];
      for (let i = 16; i < 65; i++) result.push({ value: i, text: i });

      return result;
    },
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;

 
}
</style>
