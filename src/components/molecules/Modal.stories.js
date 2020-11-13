import Modal from './Modal.vue'

export default {
  title: "molecules/Modal",
  component: Modal,
  argTypes: {
    confirm: { action: "confirm" },
    close: { action: "close" },
  }
};

// create template
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: '<Modal v-bind="$props" @confirm="confirm" @close="close" />'
});

//
export const Hidden = Template.bind({});
Hidden.args = {
  show: false,
  title: 'Modal Title',
  msg: 'This is the message'
};

export const ShowModal = Template.bind({});
ShowModal.args = {
  show: true,
  title: 'Modal Title',
  msg: 'This is the message'
};