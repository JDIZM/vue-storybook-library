// import the main component
import Form from "./ContactForm.vue";
// instead of importing the sub components, we import their stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import Button from "../button/Button.stories";
import InputGroup from "../../components/input-group/InputGroup.vue";
import Phone from "../../atoms/icons/Phone.vue";
import Person from "../../atoms/icons/Person.vue";
import Message from "../../atoms/icons/Message.vue";
import Email from "../../atoms/icons/Email.vue";
import BaseInput from "../../components/base-input/BaseInput.vue";

export default {
  title: "organisms/Contact Form",
  component: { Form, InputGroup },
  subcomponents: { Button },
  argTypes: {
    submit: { action: "submit" },
    update: { action: "update" },
    focus: { action: "focus" },
    input: { action: "input" }
  }
};

export const ContactForm = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, InputGroup, Button, Person, Phone, Email, Message },
  template: `
    <Form 
      v-bind="$props" 
      @submit="submit" 
    >
      <input-group
        type="text"
        name="name"
        label="What's your name?"
        placeholder="James"
        @update="update($event, 0)"
      >
        <person medium />
      </input-group>
      <input-group
        type="tel"
        name="phone"
        label="What's your phone?"
        placeholder="0161 123 4567"
        @update="update($event, 1)"
      >
        <phone medium />
      </input-group>
      <input-group
        type="email"
        name="email"
        label="What's your email?"
        placeholder="hello@jamesdonnelly.dev"
        @update="update($event, 2)"
      >
        <email medium />
      </input-group>
      <input-group
        type="textarea"
        name="message"
        label="Leave us a message"
        placeholder="Type something.."
        @update="update($event, 3)"
      >
        <message medium />
      </input-group>
    </Form>
  `
});

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, BaseInput, Button, Person, Phone, Email, Message },
  template: `
    <Form 
      v-bind="$props" 
      @submit="submit"
    >
      <base-input
        v-bind="$props"
        v-model="name"
        @focus="focus"
        @input="input"
        type="text"
        name="name"
        placeholder="James"
      >
      Enter a name
      <template #icon>
        <person medium />
      </template>
    </base-input>
    <base-input
        v-bind="$props"
        v-model="phone"
        @focus="focus"
        @input="input"
        name="phone"
        type="tel"
        placeholder="0161 123 4567"
      >
      Enter a phone number
      <template #icon>
        <phone medium />
      </template>
    </base-input>
    </Form>
  `,
  data: () => ({
    name: "",
    phone: ""
  })
});

export const FormWithBaseInputs = Template.bind({});

FormWithBaseInputs.args = {
  disableSubmit: false,
  label: "SEND"
};

export const FormWithDisabledSubmit = Template.bind({});

FormWithDisabledSubmit.args = {
  disableSubmit: true,
  label: "SEND"
};

export const FormWithHiddenSubmit = Template.bind({});

FormWithHiddenSubmit.args = {
  hideSubmit: true,
  label: "SEND"
};
