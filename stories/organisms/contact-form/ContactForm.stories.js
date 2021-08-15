// import the main component
import Form from "./ContactForm.vue";
// instead of importing the sub components, we import their stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import InputWithIcon from "../../molecules/FormInput.stories";
import Button from "../../atoms/Button.stories";

export default {
  title: "organisms/Contact Form",
  component: Form,
  subcomponents: { InputWithIcon, Button },
  argTypes: {
    submit: { action: "submit" },
    update: { action: "update" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, InputWithIcon, Button },
  template: '<Form v-bind="$props" @submit="submit" @update="update"/>',
});

const inputs = [
  {
    name: "name",
    type: "text",
    label: "What's your name?",
    placeholder: "James",
    icon: "person",
    showIcon: true,
    showError: false,
  },
  {
    name: "email",
    type: "email",
    label: "What's your email?",
    placeholder: "hello@jamesdonnelly.dev",
    icon: "email",
    showIcon: true,
    showError: false,
    required: true,
  },
  {
    name: "phone",
    type: "phone",
    label: "What's your phone number?",
    placeholder: "0161 123 4567",
    icon: "phone",
    showIcon: true,
    showError: false,
  },
  {
    name: "message",
    type: "textarea",
    label: "Leave us a message",
    placeholder: "Enter a message",
    icon: "message",
    showIcon: true,
    showError: false,
  },
];

export const ContactFormWithIcons = Template.bind({});
ContactFormWithIcons.args = {
  inputs: inputs,
};

export const formWithError = Template.bind({});
formWithError.args = {
  inputs: inputs,
};

export const formWithSuccess = Template.bind({});
formWithSuccess.args = {
  inputs: inputs,
};
