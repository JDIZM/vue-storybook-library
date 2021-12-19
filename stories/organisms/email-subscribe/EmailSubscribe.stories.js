import EmailSubscribe from "./EmailSubscribe.vue";
// Instead of importing the FormInput, we import its stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import FormInput from "../../molecules/input-group/InputGroup.stories";
import Button from "../../atoms/button/Button.stories";
import Email from "../../atoms/icons/Email.vue";

export default {
  title: "organisms/Email Subscribe",
  component: EmailSubscribe,
  subcomponents: { FormInput, Button, Email },
  argTypes: {
    submit: { action: "submit" },
    error: { action: "error" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EmailSubscribe, FormInput, Button },
  template:
    '<EmailSubscribe v-bind="$props" @submit="submit" @error="error" />',
});

export const SingleEmailField = Template.bind({});
SingleEmailField.args = {
  showError: false,
  showSuccess: false,
  label: "Subscribe to our newsletter",
};
export const FormWithError = Template.bind({});
FormWithError.args = {
  showError: true,
  showSuccess: false,
  label: "Subscribe to our newsletter",
};
export const FormWithSuccess = Template.bind({});
FormWithSuccess.args = {
  showSuccess: true,
  showError: false,
  label: "Subscribe to our newsletter",
};
