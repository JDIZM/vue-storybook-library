import Input from "./Input.vue";

export default {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    update: { action: "update" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" @update="update" />'
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
