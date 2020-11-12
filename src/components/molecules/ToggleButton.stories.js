//  TODO ToggleButton story
//  different button states.
import ToggleButton from './ToggleButton.vue'
// 

export default {
  title: 'molecules/ToggleButton',
  components: { ToggleButton },
  argTypes: { 
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ToggleButton },
  template: '<ToggleButton v-bind="$props" @onClick="onClick" />',
});

export const Primary = Template.bind({});
Primary.args = {
  //
  label: 'PRIMARY',
  primary: true,
}
export const Outline = Template.bind({});
Outline.args = {
  //
  label: 'OUTLINE',
  outline: true,
}
export const Disabled = Template.bind({});
Disabled.args = {
  //
  label: 'DISABLED',
  disabled: true,
}

export const Destruct = Template.bind({});
Destruct.args = {
  //
  label: 'DELETE',
  destruct: true,
}