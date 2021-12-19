import InputGroup from "./InputGroup.vue";
import Phone from "../../atoms/icons/Phone.vue";
import Message from "../../atoms/icons/Message.vue";

export default {
  title: "molecules/Form Input",
  component: InputGroup,
  argTypes: {
    update: { action: "update" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputGroup },
  template: '<InputGroup v-bind="$props" @update="update" />',
});

export const TextInputWithoutIcon = Template.bind({});
TextInputWithoutIcon.args = {
  name: "name",
  label: "Enter a name",
  placeholder: "John Smith",
  type: "text",
  showIcon: false,
  showError: false,
  showSuccess: false,
};

export const TextArea = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputGroup, Message },
  template: `
    <input-group v-bind="$props" @update="update" >
      <template #icon>
        <message medium />
      </template>
    </input-group>
    `,
});
// export const TextArea = Template.bind({});
TextArea.args = {
  name: "message",
  label: "Leave us a message",
  icon: "message",
  placeholder: "Type something..",
  type: "textarea",
};

export const InputWithIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputGroup, Phone },
  template: `
    <input-group v-bind="$props" @update="update" >
      <template #icon>
        <phone medium />
      </template>
    </input-group>
    `,
});
InputWithIcon.args = {
  name: "phone",
  label: "Phone",
  placeholder: "Enter your phone number",
  type: "phone",
};

export const InputWithError = InputWithIcon.bind({});
InputWithError.args = {
  name: "phone",
  label: "Phone",
  placeholder: "Enter your phone number",
  type: "phone",
  showError: true,
};

export const InputWithSuccess = InputWithIcon.bind({});
InputWithSuccess.args = {
  name: "phone",
  label: "Phone",
  placeholder: "Enter your phone number",
  type: "phone",
  showSuccess: true,
};

export const InputWithNoLabel = InputWithIcon.bind({});
InputWithNoLabel.args = {
  name: "phone",
  label: "Phone",
  placeholder: "Enter your phone number",
  type: "phone",
  hideLabel: true,
};
