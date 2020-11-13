import Dropdown from './Dropdown.vue'

export default {
  title: "molecules/Dropdown",
  component: Dropdown,
  argTypes: {
    onClick: { action: "onClick" }
  }
};

// create template
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dropdown },
  template: '<Dropdown v-bind="$props" @onClick="onClick" />'
});

//
export const Primary = Template.bind({});
Primary.args = {
  name: "Dropdown",
  dropdowns: [
    { title: 'ONE TITLE', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, dignissimos asperiores ipsum aliquam expedita porro enim ipsam sequi? Numquam esse incidunt quam nihil nam fugiat dignissimos dolorum reiciendis tempora', isActive: true },
    { title: 'TWO TITLE', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, dignissimos asperiores ipsum aliquam expedita porro enim ipsam sequi? Numquam esse incidunt quam nihil nam fugiat dignissimos dolorum reiciendis tempora', isActive: false }
  ]
};
