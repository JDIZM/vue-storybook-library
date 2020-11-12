// import FormInput from '../../molecules/FormInput.vue'
// import Button from '../../atoms/Button.vue'
import Form from './Form.vue'
// Instead of importing the FormInput, we import its stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import InputWithIcon from '../../molecules/FormInput.stories';
import Button from '../../atoms/Button.stories'

export default {
  title: 'organisms/Form',
  component: Form,
  subcomponents: { InputWithIcon, Button },
  argTypes: {
    onSubmit: { action: "submit" }
    // update: { action: "update" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, InputWithIcon, Button },
  template: '<Form v-bind="$props" @onSubmit="onSubmit" />',
});

// const Template = (args) => <Form {...args} />;
// export const Empty = (args) => <Form {...args} />;

export const SingleTextFieldWithIcon = Template.bind({});
SingleTextFieldWithIcon.args = {
  label: 'What\'s your name?',
  placeholder: "Enter your name",
  showIcon: true,
  icon: 'person'
}

export const SingleEmailField = Template.bind({});
SingleEmailField.args = {
  //
  label: 'What\'s your email?',
  placeholder: "Enter your email",
  showIcon: true,
  icon: 'email'
}