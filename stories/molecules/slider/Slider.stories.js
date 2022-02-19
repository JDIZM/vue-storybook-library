import SliderComponent from "./Slider.vue";

export default {
  title: "molecules/Slider",
  component: SliderComponent,
  argTypes: {
    slide: { action: "slide" },
  },
};

const slides = [
  {
    title: "slide name",
    src: "https://source.unsplash.com/600x300/?sunset",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/600x300/?river",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/random/600x300/",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/600x300/?nature",
  },
];

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SliderComponent },
  template: '<slider-component v-bind="$props" @slide="slide"/>',
});

export const Slider = Template.bind({});
Slider.args = {
  show: false,
  slides,
  height: "300px",
  width: "90vw",
  maxWidth: "600px",
  maxHeight: "300px",
};
