import EmailSubscribe from "./EmailSubscribe.vue";
// Instead of importing the FormInput, we import its stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import FormInput from "../../molecules/FormInput.stories";
import Button from "../../atoms/Button.stories";

export default {
  title: "organisms/Email Subscribe",
  component: EmailSubscribe,
  subcomponents: { FormInput, Button },
  argTypes: {
    submit: { action: "submit" },
    update: { action: "update" },
    error: { action: "error" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EmailSubscribe, FormInput, Button },
  template:
    '<EmailSubscribe v-bind="$props" @submit="submit" @update="update" @error="error" />',
});

export const SingleEmailField = Template.bind({});
SingleEmailField.args = {
  showError: false,
  showSuccess: false,
  label: "Subscribe to our newsletter",
};
export const formWithError = Template.bind({});
formWithError.args = {
  showError: true,
  showSuccess: false,
  label: "Subscribe to our newsletter",
};
export const formWithSuccess = Template.bind({});
formWithSuccess.args = {
  showSuccess: true,
  showError: false,
  label: "Subscribe to our newsletter",
};
