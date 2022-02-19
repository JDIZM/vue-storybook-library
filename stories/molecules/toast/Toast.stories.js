import Toast from "./Toast.vue";
import Warning from "../../atoms/icons/Warning.vue";
import Info from "../../atoms/icons/Info.vue";

export default {
  title: "molecules/Toast",
  component: Toast,
  argTypes: {
    timeout: { action: "timeout" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast },
  template: '<Toast v-bind="$props" @timeout="timeout" />',
});

export const Hidden = Template.bind({});
Hidden.args = {
  show: false,
  duration: 1000,
  msg: "This is the toast message",
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  show: true,
  duration: 1000,
  msg: "This is the toast message",
};

export const WarningIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast, Warning },
  template: `
    <Toast v-bind="$props" @timeout="timeout">
      <warning medium />
    </Toast>
  `,
});
WarningIcon.args = {
  show: true,
  duration: 1000,
  msg: "This is the toast message",
};

export const InfoIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast, Info },
  template: `
    <Toast v-bind="$props" @timeout="timeout">
      <info medium />
    </Toast>
  `,
});
InfoIcon.args = {
  show: true,
  duration: 1000,
  msg: "This is the toast message",
};

export const Success = InfoIcon.bind({});

Success.args = {
  show: true,
  duration: 1000,
  msg: "This is the toast message",
  success: true,
};

export const Destruct = InfoIcon.bind({});
Destruct.args = {
  show: true,
  duration: 1000,
  msg: "This is the toast message",
  destruct: true,
};
