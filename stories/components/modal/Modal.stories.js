import Modal from "./Modal.vue";

export default {
  title: "components/Modal",
  component: Modal,
  argTypes: {
    confirm: { action: "confirm" },
    input: { action: "input" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: `
  <modal @confirm="confirm" @input="input" v-model="showModal" v-bind="$props">
    <h4>Modal Title</h4>
    <p>some message for the user action </p>
  </modal>
  `,
  data() {
    return {
      showModal: true
    };
  }
});

export const ShowModal = Template.bind({});
ShowModal.args = {};

export const ConfirmDisabled = Template.bind({});
ConfirmDisabled.args = {
  disableConfirm: true
};

export const CancelDisabled = Template.bind({});
CancelDisabled.args = {
  disableCancel: true
};
