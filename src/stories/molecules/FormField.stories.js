import FormField from './FormField.vue'

export default {
  title: 'molecules/FormField',
  component: FormField,
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormField },
  template: '<FormField v-bind="$props" v-model="value" />',
});

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  name: 'TextInput',
  label: 'Input',
  hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  showInput: true,
  // value: 'phone'
}

export const TextAreaWithIcon = Template.bind({});
TextAreaWithIcon.args = {
  name: 'TextAreaInput',
  label: 'Input',
  hideLabel: false, // FIXME css issue
  icon: 'message',
  placeholder: 'Enter a message',
  type: 'text',
  showInput: false,
  // value: 'message'
}