import Button from "./Button.vue";

export default {
  title: "atoms/Button",
  components: { Button },
  argTypes: {
    click: { action: "click" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @click="click" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "PRIMARY",
  primary: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: "SECONDARY",
  primary: false,
};
export const Outline = Template.bind({});
Outline.args = {
  label: "OUTLINE",
  outline: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "DISABLED",
  disabled: true,
  primary: true,
};

export const Destruct = Template.bind({});
Destruct.args = {
  label: "DELETE",
  destruct: true,
};

export const Block = Template.bind({});
Block.args = {
  label: "BLOCK",
  primary: true,
  block: true,
};
