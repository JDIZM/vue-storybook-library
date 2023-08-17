import Alarm from "./Alarm.vue";
import Close from "./Close.vue";
import Done from "./Done.vue";
import Email from "./Email.vue";
import Info from "./Info.vue";
import List from "./List.vue";
import Menu from "./Menu.vue";
import Message from "./Message.vue";
import Person from "./Person.vue";
import Phone from "./Phone.vue";
import Warning from "./Warning.vue";
import Twitter from "./Twitter.vue";
import LinkedIn from "./LinkedIn.vue";
import Instagram from "./Instagram.vue";
import Github from "./Github.vue";
import ChevronRight from "./ChevronRight.vue";

export default {
  title: "components/Icons",
  argTypes: {
    color: { control: "color" }
  }
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Alarm,
    Close,
    Done,
    Email,
    Info,
    List,
    Menu,
    Message,
    Person,
    Phone,
    Warning,
    Twitter,
    LinkedIn,
    Instagram,
    Github,
    ChevronRight
  },
  template: `
      <div>
        <alarm v-bind="$props" :color="color" />
        <close v-bind="$props" :color="color" />
        <done v-bind="$props" :color="color" />
        <email v-bind="$props" :color="color" />
        <info v-bind="$props" :color="color" />
        <list v-bind="$props" :color="color" />
        <Menu v-bind="$props" :color="color" />
        <message v-bind="$props" :color="color" />
        <person v-bind="$props" :color="color" />
        <phone v-bind="$props" :color="color" />
        <warning v-bind="$props" :color="color" />
        <twitter v-bind="$props" :color="color" />
        <linked-in v-bind="$props" :color="color" />
        <instagram v-bind="$props" :color="color" />
        <github v-bind="$props" :color="color" />
        <chevron-right v-bind="$props" :color="color" />
      </div>
    `
});

export const Small = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
  medium: true
};

export const Large = Template.bind({});
Large.args = {
  large: true
};
