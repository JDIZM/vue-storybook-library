import Footer from './Footer.vue'
import logoFile from '../assets/flow.svg'
export default {
  title: 'organisms/Footer',
  component: Footer,
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

// We create a “template” of how args map to rendering

// const Template = (args) => <Footer {...args} />;
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer :name="name" :companyNo="companyNo" :privacy="privacy" :logoSrc="Logo.src"/>',
});

const Logo = {
  src: logoFile,
  alt: 'logo'
}
// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  name: 'Company Name',
  companyNo: '12345678',
  privacy: '/privacy.pdf',
  logo: Logo
};