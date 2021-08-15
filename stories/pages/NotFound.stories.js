import NotFoundComponent from "./NotFoundComponent.vue";
import imgSrc from "../assets/lionel-richie.jpg";

export default {
  title: "pages/Not Found Component",
  component: NotFoundComponent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NotFoundComponent },
  template: '<NotFoundComponent :imgSrc="imgSrc" />',
});

export const notFoundComponent = Template.bind({});

notFoundComponent.args = {
  imgSrc: imgSrc,
};
