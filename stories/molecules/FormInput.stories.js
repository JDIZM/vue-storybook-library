import FormInput from "./FormInput.vue";

export default {
  title: "molecules/Form Input",
  component: FormInput,
  argTypes: {
    update: { action: "update" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormInput },
  template: '<FormInput v-bind="$props" @update="update" />',
});

export const TextInputWithoutIcon = Template.bind({});
TextInputWithoutIcon.args = {
  name: "name",
  label: "Enter a name",
  placeholder: "John Smith",
  type: "text",
  showIcon: false,
  showError: false,
  showSuccess: false,
};

export const TextArea = Template.bind({});
TextArea.args = {
  name: "message",
  label: "label",
  icon: "message",
  placeholder: "Enter a message",
  type: "textarea",
  showIcon: true,
  showError: false,
  showSuccess: false,
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  name: "phone",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "phone",
  showIcon: true,
  showError: false,
  showSuccess: false,
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  name: "phone",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "phone",
  showIcon: true,
  showError: true,
};

export const InputWithSuccess = Template.bind({});
InputWithSuccess.args = {
  name: "phone",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "phone",
  showIcon: true,
  showError: false,
  showSuccess: true,
};

export const InputWithNoLabel = Template.bind({});
InputWithNoLabel.args = {
  name: "phone",
  label: "Phone",
  icon: "phone",
  placeholder: "Enter your phone number",
  type: "phone",
  showIcon: true,
  showError: false,
  showSuccess: false,
  hideLabel: true,
};
