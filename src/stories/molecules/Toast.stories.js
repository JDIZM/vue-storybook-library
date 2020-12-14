import Toast from './Toast.vue'

export default {
  title: "molecules/Toast",
  component: Toast,
  argTypes: {
    onTimeout: { action: "onTimeout" },
    // close: { action: "close" },
  }
};

// create template
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast },
  template: '<Toast v-bind="$props" @onTimeout="onTimeout" />'
});

//
export const Hidden = Template.bind({});
Hidden.args = {
  show: false,
  duration: 1000,
  // icon: 'alarm',
  msg: 'This is the toast message'
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  show: true,
  duration: 1000,
  // icon: 'alarm',
  msg: 'This is the toast message'
};

export const AlarmIcon = Template.bind({});
AlarmIcon.args = {
  show: true,
  duration: 1000,
  icon: 'alarm',
  msg: 'This is the toast message'
};
