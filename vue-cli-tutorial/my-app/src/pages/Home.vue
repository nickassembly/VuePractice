<template>
    <Form summary v-model="formValid">
      <template v-slot:summary="{ errors }">
        <h3>Custom Summary</h3>
        <div>
          <ul>
            <li v-for="error in errors" :key="`error-${error}`">{{error}}</li>
          </ul>
        </div>
      </template>
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

      <button v-if="formValid">Submit</button>
      <span v-else>Please fill out the form</span>
    </Form>
</template>

<script>
import Form from "../components/Form";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import TextAreaField from "../components/TextAreaField";

export default {
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
      formValid: false,
    };
  },

  components: {
    TextField,
    SelectField,
    TextAreaField,
    Form,
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
}
</script>

<style lang="stylus" scoped>

</style>
