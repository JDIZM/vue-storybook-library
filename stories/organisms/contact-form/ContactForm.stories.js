// import the main component
import Form from "./ContactForm.vue";
// instead of importing the sub components, we import their stories
// https://storybook.js.org/docs/react/workflows/stories-for-multiple-components
import Button from "../../atoms/button/Button.stories";
import InputGroup from "../../molecules/input-group/InputGroup.vue";
import Phone from "../../atoms/icons/Phone.vue";
import Person from "../../atoms/icons/Person.vue";
import Message from "../../atoms/icons/Message.vue";
import Email from "../../atoms/icons/Email.vue";

export default {
  title: "organisms/Contact Form",
  component: { Form, InputGroup },
  subcomponents: { Button },
  argTypes: {
    submit: { action: "submit" },
    update: { action: "update" },
    error: { action: "error" },
  },
};

export const ContactForm = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form, InputGroup, Button, Person, Phone, Email, Message },
  template: `
    <Form 
      v-bind="$props" 
      @submit="submit" 
      @update="update" 
      @error="error"
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
  `,
});
