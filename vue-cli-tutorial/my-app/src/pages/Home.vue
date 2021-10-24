<template>
    <a-form summary v-model="formValid">
      <template v-slot:summary="{ errors }">
        <h3>Custom Summary</h3>
        <div>
          <ul>
            <li v-for="error in errors" :key="`error-${error}`">{{error}}</li>
          </ul>
        </div>
      </template>
      <a-input
        label="First Name"
        v-model="form.firstName"
        :rules="firstNameRules"
        :textLimit="15"
      />
      <a-input
        :label="'Last Name'"
        v-model="form.lastName"
        :rules="lastNameRules"
        :textLimit="15"
      />

      <a-select
        label="Gender"
        v-model="form.gender"
        placeholder="Select your Gender"
        :options="genderList"
      />
      
      <a-select
        label="Age"
        v-model="form.age"
        placeholder="Select your Age"
        :options="ageList"
      />

      <a-textarea
        label="Bio"
        v-model="form.bio"
        :textLimit="255"
        resize="vertical"
        autoResize
      />
      
      <div>{{ form }}</div>

      <button v-if="formValid">Submit</button>
      <span v-else>Please fill out the form</span>
    </a-form>
</template>

<script>
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
