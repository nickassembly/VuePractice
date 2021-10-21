<template>
  <div id="app">
    <TextField
      label="First Name"
      v-model="form.firstName"
      :rules="firstNameRules"
      :textLimit="15"
    ></TextField>
    <TextField
      :label="'Last Name'"
      v-model="form.lastName"
      :rules="lastNameRules"
      :textLimit="15"
    ></TextField>

    <SelectField
      label="Gender"
      v-model="form.gender"
      placeholder="Select your Gender"
      :options="genderList"
    ></SelectField>

    <SelectField
      label="Age"
      v-model="form.age"
      placeholder="Select your Age"
      :options="ageList"
    ></SelectField>

    <TextAreaField
      label="Bio"
      v-model="form.bio"
      :textLimit="255"
      resize="vertical"
      autoResize
    >
    </TextAreaField>

    <div>{{ form }}</div>
    <div>{{ formValid }}</div>
    <div>{{ errors }}</div>

    <button v-if="formValid">Submit</button>
  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";
import TextAreaField from "./components/TextAreaField";

export default {
  name: "App",
  data() {
    return {
      firstNameRules: [
        (v) => v.length > 0 || "First name is required",
        (v) => v.length < 10 || "First name has to be less than 10 characters",
      ],
      lastNameRules: [(v) => v.length > 0 || "Last name is required"],
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        bio: "",
      },
      errors: {},
    };
  },

  components: {
    TextField,
    SelectField,
    TextAreaField,
  },
  mounted() {
    this.$children
      .filter((c) => c.valid !== undefined)
      .forEach((c) => {
        c.$watch(
          "valid",
          (v) => {
            console.info("Custom watcher: ", c, v);
            this.$set(this.errors, c._uid, v);
          },
          { immediate: true }
        );
      });
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
    errorList() {
      return Object.values(this.errors).filter((v) => v !== true);
    },
    formValid(){
      return this.errorList.length === 0;
    }
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
