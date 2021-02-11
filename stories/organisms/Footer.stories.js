import Footer from './Footer.vue'
// import logo from static files
import logoFile from '../assets/logo.png'

export default {
  title: 'organisms/Footer',
  component: Footer,
};

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer :social="social" :name="name" :companyNo="companyNo" :privacy="privacy" :logoSrc="logoSrc" :address="address"/>',
});

// create an image object for the logo
const Logo = {
  src: logoFile,
  alt: 'logo'
}

// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  name: 'Company Name',
  address: [
    '349 Manchester Road',
    'Manchester',
    'M12 ABC'
  ],
  companyNo: '12345678',
  privacy: '/privacy.pdf',
  logoSrc: Logo.src,
  social: [
    { name: "linkedin", path: 'https://linkedin.com', aria: 'Find us on LinkedIn', iconClass: 'fab fa-linkedin'},
    { name: "facebook", path: 'https://facebook.com', aria: 'Find us on Facebook', iconClass: 'fab fa-facebook-square'},
    { name: "twitter", path: 'https://twitter.com', aria: 'Find us on Twitter', iconClass: 'fab fa-twitter'},
    { name: "github", path: 'https://github.com', aria: 'Find us on Github', iconClass: 'fab fa-github'}
  ]
};