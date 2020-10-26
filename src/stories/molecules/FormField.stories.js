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

export const Input = Template.bind({});
Input.args = {
  name: 'Input',
  label: 'Input',
  // hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  // showInput: true,
  showError: false,
  value: ''
}

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  name: 'InputWithIcon',
  label: 'Input',
  // hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  // showInput: true,
  showError: false,
  value: ''
}

export const InputWithError = Template.bind({});
InputWithError.args = {
  name: 'InputWithError',
  label: 'Input',
  // hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  // showInput: true,
  showError: true,
  value: ''
}

// export const TextAreaWithIcon = Template.bind({});
// TextAreaWithIcon.args = {
//   name: 'TextAreaInput',
//   label: 'Input',
//   // hideLabel: false, // FIXME css issue
//   icon: 'message',
//   placeholder: 'Enter a message',
//   type: 'text',
//   // showInput: false,
//   showError: false,
//   value: ''
// }