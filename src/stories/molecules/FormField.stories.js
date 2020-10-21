import FormField from './FormField.vue'

export default {
  title: 'molecules/FormField',
  component: FormField,
  // TODO set background colour and theme controls.
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormField },
  template: '<FormField v-bind="$props"/>',
});

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  label: 'Input',
  hideLabel: true,
  icon: 'phone',
  placeholder: 'Placeholder',
  type: 'tel',
  primary: true,
  input: true,
  value: 'phone'
}

export const TextAreaWithIcon = Template.bind({});
TextAreaWithIcon.args = {
  label: 'Input',
  hideLabel: true,
  icon: 'message',
  placeholder: 'Placeholder',
  type: 'tel',
  primary: true,
  input: false,
  value: 'message'
}