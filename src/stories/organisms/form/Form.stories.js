import Form from './Form.vue'

export default {
  title: 'organisms/Form',
  component: Form,
  argTypes: {
    onSubmit: { action: "submit" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form },
  template: '<Form v-bind="$props" @onSubmit="onSubmit"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  //
  // label: 'Form',
  // TODO props and input component
  placeholder: "Enter your phone number",
  primary: true
}