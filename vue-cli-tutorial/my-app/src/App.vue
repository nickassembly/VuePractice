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

    <div>{{ fullName }} - {{ gender }} - {{ age }}</div>
  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";

export default {
  name: "App",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
    };
  },
  components: {
    TextField,
    SelectField,
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
      for (let i = 16; i < 65; i++) result.push({value: i, text: i});

      return result;
    },
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;

  .text-input {
    label {
      display: block;
      width: 100%;
    }

    input {
      display: block;
    }

    input.valid {
      border: 1px solid green;
    }

    input.invalid {
      border: 1px solid red;
    }

    .validation {
      text-align: right;
      font-size: 12px;
    }
  }
}
</style>
