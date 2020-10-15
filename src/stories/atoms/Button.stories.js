//  TODO button story
//  different button states.
import Button from './Button.vue'
// 

export default {
  title: 'atoms/Button',
  components: { Button},
  argTypes: { 
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @onClick="onClick" />',
});

export const Primary = Template.bind({});
Primary.args = {
  //
  label: 'Button',
  primary: true
}
export const Secondary = Template.bind({});
Secondary.args = {
  //
  label: 'Button',
  primary: false
}