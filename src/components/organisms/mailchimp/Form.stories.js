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
  //
  // label: 'What\'s your email?',
  // placeholder: "Enter your email",
  // showIcon: true,
  // icon: 'email'
}

// export const withError = Template.bind({});
// withError.args = {
//   //
//   // label: 'What\'s your email?',
//   // placeholder: "Enter your email",
//   // showIcon: true,
//   // FIXME can't change state because error is not a prop
//   // are you handling state within the component? or is it handled with vuex and passed as a prop/computed?
//   showError: true,
//   // icon: 'error'
// }