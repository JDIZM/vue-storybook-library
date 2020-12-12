// import FormInput from '../../molecules/FormInput.vue'
// import Button from '../../atoms/Button.vue'
import Form from './Mailchimp.vue'
// Instead of importing the FormInput, we import its stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import FormInput from '../../molecules/FormInput.stories';
import Button from '../../atoms/Button.stories'

export default {
  title: 'organisms/Mailchimp',
  component: Form,
  subcomponents: { FormInput, Button },
  argTypes: {
    onSubmit: { action: "onSubmit" },
    onUpdate: { action: "onUpdate" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, FormInput, Button },
  template: '<Form v-bind="$props" @onSubmit="onSubmit" @onUpdate="onUpdate" />',
});

// const Template = (args) => <Form {...args} />;
// export const Empty = (args) => <Form {...args} />;

export const SingleEmailField = Template.bind({});
SingleEmailField.args = {
  showError: false,
  showSuccess: false,
  label: 'Subscribe to our newsletter'
  // label: 'What\'s your email?',
  // placeholder: "Enter your email",
  // showIcon: true,
  // icon: 'email'
}
export const formWithError = Template.bind({});
formWithError.args = {
  showError: true,
  showSuccess: false,
  label: 'Subscribe to our newsletter'
}
export const formWithSuccess = Template.bind({});
formWithSuccess.args = {
  showSuccess: true,
  showError: false,
  label: 'Subscribe to our newsletter'
}