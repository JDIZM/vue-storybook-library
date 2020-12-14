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
  placeholder: "Enter some text",
  type: "text",
  showError: false,
  // value: ''
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  name: "InputWithError",
  placeholder: "Enter your phone number",
  type: "text",
  showError: true,
  // value: ''
};
