import FormInput from "./FormInput.vue";

export default {
  title: "molecules/FormInput",
  component: FormInput,
  argTypes: {
    update: { action: "update" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormInput },
  template: '<FormInput v-bind="$props" @update="update" />'
});

export const TextInput = Template.bind({});
TextInput.args = {
  name: "TextInput",
  label: "label",
  icon: "phone",
  placeholder: "Enter some text",
  type: "text",
  showIcon: false,
  showError: false,
  // value: ''
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  name: "InputWithIcon",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "tel",
  showIcon: true,
  showError: false,
  value: ''
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  name: "InputWithError",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "text",
  showIcon: true,
  showError: true,
  value: ''
};
