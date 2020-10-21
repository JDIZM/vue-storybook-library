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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  //
  label: 'Input',
  placeholder: 'Placeholder',
  type: 'tel',
  primary: true
}