<template>
  <Form v-model="formValid">
    <TextField
      label="Username"
      v-model="form.username"
      :textLimit="15"
    ></TextField>
    <TextField
      label="Password"
      v-model="form.password"
      :textLimit="15"
    ></TextField>

    <button>Login</button>
  </Form>
</template>

<script>
import Form from "../components/Form";
import TextField from "../components/TextField";
//import SelectField from "../components/SelectField";
//import TextAreaField from "../components/TextField";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      formValid: true,
    };
  },
  components: {
    TextField,
  //  SelectField,
  //  TextAreaField,
    Form
  },
};
</script>

<style lang="stylus" scoped></style>
