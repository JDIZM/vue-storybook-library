import BaseInput from "./BaseInput.vue";
import Phone from "../../atoms/icons/Phone.vue";
import Person from "../../atoms/icons/Person.vue";
import Message from "../../atoms/icons/Message.vue";

export default {
  title: "molecules/Base Input",
  component: BaseInput,
  argTypes: {
    input: { action: "input" },
    focus: { action: "focus" }
  }
};

// v-model already sets a value and listens for input event
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput, Phone },
  template: `
    <base-input
        v-bind="$props"
        v-model="inputValue"
        @focus="focus"
        @input="input"
    >
      label text
    <template #icon>
      <phone medium />
    </template>
    </base-input>
  `,
  data: () => ({
    inputValue: ""
  })
});

export const TextInput = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput, Person },
  template: `
    <base-input
        v-bind="$props"
        v-model="inputValue"
        @focus="focus"
        @input="input"
    >
      label text
    <template #icon>
      <person medium />
    </template>
    </base-input>
  `,
  data: () => ({
    inputValue: ""
  })
});

TextInput.args = {
  placeholder: "John Smith",
  type: "text"
};

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  placeholder: "0161 123 4567",
  type: "tel"
};

export const TextArea = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput, Message },
  template: `
    <base-input
        v-bind="$props"
        v-model="inputValue"
        @focus="focus"
        @input="input"
    >
      label text
    <template #icon>
      <message medium />
    </template>
    </base-input>
  `,
  data: () => ({
    inputValue: ""
  })
});

TextArea.args = {
  placeholder: "John Smith",
  type: "textarea"
};

export const InputError = Template.bind({});
InputError.args = {
  placeholder: "Please enter a phone number",
  type: "tel",
  showError: true
};
