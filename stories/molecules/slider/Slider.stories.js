import Slider from "./Slider.vue";

export default {
  title: "molecules/Slider",
  component: Slider,
  argTypes: {
    slide: { action: "slide" },
  },
};

const slides = [
  {
    title: "slide name",
    src: "https://source.unsplash.com/random/800x600",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/1000x800/?nature,water",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/random/900x600",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/9000x800/?nature,water",
  },
];

// create template
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slider },
  template: '<Slider v-bind="$props" @slide="slide"/>',
});

//
export const Primary = Template.bind({});
Primary.args = {
  show: false,
  slides,
  // title: 'Modal Title',
  // msg: 'This is the message'
};
