import Vue from 'vue';
import Form from "./Form";
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextField";

[
    Form,
    TextField,
    SelectField,
    TextAreaField
].forEach(c => {
    Vue.component(c.name, c);
})

