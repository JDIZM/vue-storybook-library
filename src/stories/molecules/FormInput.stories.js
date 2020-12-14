import FormInput from "./FormInput.vue";

export default {
  title: "molecules/FormInput",
  component: FormInput,
  argTypes: {
    onUpdate: { action: "onUpdate" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormInput },
  template: '<FormInput v-bind="$props" @update="onUpdate" />'
});

export const TextInputWithoutIcon = Template.bind({});
TextInputWithoutIcon.args = {
  name: "TextInput",
  label: "label",
  icon: "phone",
  placeholder: "Enter some text",
  type: "text",
  showIcon: false,
  showError: false,
  showSuccess: false
  // value: ''
};

export const TextArea = Template.bind({});
TextArea.args = {
  name: "TextInput",
  label: "label",
  icon: "message",
  placeholder: "Enter a message",
  type: "textarea",
  showIcon: true,
  showError: false,
  showSuccess: false
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
  showSuccess: false,
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

export const InputWithSuccess = Template.bind({});
InputWithSuccess.args = {
  name: "InputWithSuccess",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "text",
  showIcon: true,
  showError: false,
  showSuccess: true,
  value: ''
};
