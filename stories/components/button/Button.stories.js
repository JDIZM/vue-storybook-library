import Button from "./Button.vue";

export default {
  title: "components/Button",
  components: { Button },
  argTypes: {
    click: { action: "click" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @click="click" />'
});

export const Primary = Template.bind({});
Primary.args = {
  label: "PRIMARY",
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "SECONDARY",
  secondary: true
};

export const Outline = Template.bind({});
Outline.args = {
  label: "OUTLINE",
  outline: true
};

export const Disabled = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @click="click" disabled />'
});
Disabled.args = {
  label: "DISABLED",
  primary: true
};

export const Destruct = Template.bind({});
Destruct.args = {
  label: "DELETE",
  destruct: true
};

export const Block = Template.bind({});
Block.args = {
  label: "BLOCK",
  primary: true,
  block: true
};

export const Text = Template.bind({});
Text.args = {
  label: "TEXT",
  text: true
};
