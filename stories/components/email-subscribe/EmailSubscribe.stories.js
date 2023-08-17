import EmailSubscribe from "./EmailSubscribe.vue";
// Instead of importing the FormInput, we import its stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import FormInput from "../input-group/InputGroup.stories";
import Button from "../button/Button.stories";
import Email from "../icons/Email.vue";

export default {
  title: "components/Email Subscribe",
  component: EmailSubscribe,
  subcomponents: { FormInput, Button, Email },
  argTypes: {
    submit: { action: "submit" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EmailSubscribe, FormInput, Button },
  template: '<EmailSubscribe v-bind="$props" @submit="submit"/>'
});

export const SingleEmailField = Template.bind({});
SingleEmailField.args = {
  label: "Subscribe to our newsletter"
};
export const FormWithError = Template.bind({});
FormWithError.args = {
  showError: true,
  label: "Subscribe to our newsletter"
};
export const FormWithSuccess = Template.bind({});
FormWithSuccess.args = {
  showSuccess: true,
  label: "Subscribe to our newsletter"
};
