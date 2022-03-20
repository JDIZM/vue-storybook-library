import { VRadioButton as RadioButton } from "../../../src/components";

export default {
  title: "atoms/Radio Button",
  component: RadioButton,
  argTypes: {
    input: { action: "input" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RadioButton },
  template: `
    <div>
      <radio-button v-model="selected" value="one" v-bind="$props" name="options" @input="input">
        option one
      </radio-button>
      <radio-button v-model="selected" value="two" v-bind="$props" name="options" @input="input">
        option two
      </radio-button>
      <div style="margin-top: 1rem;">Selected: <strong>{{ selected }}</strong></div>
    </div>
  `,
  data() {
    return {
      selected: "one",
    };
  },
});

export const MultipleOptions = Template.bind({});
RadioButton.args = {};

const options = [
  { value: "first", text: "first option", disabled: true },
  { value: "second", text: "second option" },
];

export const DisabledOption = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RadioButton },
  template: `
    <div>
      <radio-button
      v-for="({ value, text, disabled }, i) in options"
      v-model="selected"
      :disabled="disabled"
      :value="value"
      v-bind="$props"
      name="options"
      @input="input"
      >
        {{ text }}
      </radio-button>
      <div style="margin-top: 1rem;">Selected: <strong>{{ selected }}</strong></div>
    </div>
  `,
  data() {
    return {
      selected: "first",
      options,
    };
  },
});
