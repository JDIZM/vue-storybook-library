import BaseImage from "./BaseImage.vue";

export default {
  title: "atoms/Responsive Image",
  components: { BaseImage }
};

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#how_do_you_create_responsive_images

// original image 1200x1200
import src from "../../assets/lionel-richie.jpg";

// create images for specific breakpoints
import one from "../../assets/progressive-300.jpg";
import two from "../../assets/progressive-600.jpg";
import three from "../../assets/progressive-900.jpg";

// create custom srcset and sizes
const srcset = `${one} 300w, ${two} 600w, ${three} 900w, ${src}`;
const alt = "lionel richie";
const sizes = "(max-width: 500px) 300px, (max-width: 800px) 600px, (max-width: 1100px) 900px, 100vw";

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseImage },
  template: '<BaseImage v-bind="$props"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  alt,
  src,
  srcset,
  sizes
};
