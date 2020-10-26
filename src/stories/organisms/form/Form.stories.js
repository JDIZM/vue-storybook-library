import FormInput from '../../molecules/FormInput.vue'
import Button from '../../atoms/Button.vue'
import Form from './Form.vue'

export default {
  title: 'organisms/Form',
  component: Form, FormInput, Button,
  argTypes: {
    onSubmit: { action: "submit" },
    update: { action: "update" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, FormInput, Button },
  template: '<Form v-bind="$props" @onSubmit="onSubmit" @update="update"/>',
});

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