import Form from './Form.vue'

export default {
  title: 'organisms/Form',
  component: Form,
  // TODO set background colour and theme controls.
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
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
  primary: true
}