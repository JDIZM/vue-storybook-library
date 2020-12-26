import NotFoundComponent from './NotFoundComponent.vue'
import imgSrc from '../assets/lionel-richie.jpg'

export default {
  title: 'pages/NotFoundComponent',
  component: NotFoundComponent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NotFoundComponent },
  template: '<NotFoundComponent :imgSrc="imgSrc" />',
});


export const Primary = Template.bind({});

Primary.args = {
  // 
  imgSrc: imgSrc
};