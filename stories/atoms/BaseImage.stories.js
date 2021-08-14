import BaseImage from "./BaseImage.vue";

export default {
  title: "atoms/Responsive Image",
  components: { BaseImage },
};

// create multiple src images to match the srcset sizes
// just using one size for example
import src from "../assets/lionel-richie.jpg";
const srcset = `${src} 300w, ${src} 600w, ${src} 900w`;
const alt = "lionel richie";
const sizes = "(max-width: 500px) 300px, (max-width: 800px) 600px, 100vw";

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImage },
  template: '<BaseImage v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  alt,
  src,
  srcset,
  sizes,
  style: "width: 400px; height: 400px",
};
