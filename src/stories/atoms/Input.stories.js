import Input from './Input.vue'

export default {
  title: 'atoms/Input',
  component: Input,
  // TODO set background colour and theme controls.
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { Input },
//   template: '<Input v-bind="$props"/>',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   //
//   label: 'Input',
//   placeholder: 'Placeholder',
//   type: 'tel',
//   primary: true
// }

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props" v-model="value" />',
});

export const TextField = Template.bind({});
TextField.args = {
  name: 'TextField',
  label: 'Input',
  // hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter some text',
  type: 'text',
  showIcon: false,
  showError: false,
  value: ''
}

export const TextFieldWithIcon = Template.bind({});
TextFieldWithIcon.args = {
  name: 'TextFieldWithIcon',
  label: 'Input',
  // hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  showIcon: true,
  showError: false,
  value: ''
}

export const TextFieldWithError = Template.bind({});
TextFieldWithError.args = {
  name: 'TextFieldWithError',
  label: 'Input',
  // hideLabel: false, // FIXME css issue
  icon: 'phone',
  placeholder: 'Enter your phone number',
  type: 'tel',
  showIcon: true,
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
//   showInput: false,
//   showError: false,
//   value: 'message'
// }