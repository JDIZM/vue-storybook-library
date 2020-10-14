//  TODO button story
//  different button states.
import Button from './Button.vue'
// 

export default {
  title: 'atoms/Button',
  components: { Button},
  // FIXME actions not working!
  argTypes: { onClick: { action: 'clicked' } },
  // subcomponents: [NavDrawer, NavDropdown]
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  //
  primary: true
}
export const Secondary = Template.bind({});
Secondary.args = {
  //
  primary: false
}