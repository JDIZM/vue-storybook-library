import Footer from "./Footer.vue";
import logoFile from "../../assets/logo.png";

export default {
  title: "organisms/Footer",
  component: Footer,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer v-bind="$props"/>',
});

const Logo = {
  src: logoFile,
  alt: "logo",
};

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  name: "Company Name",
  address: ["349 Manchester Road", "Manchester", "M12 ABC"],
  companyNo: "12345678",
  privacy: "/privacy.pdf",
  logoSrc: Logo.src,
  social: [
    {
      name: "linkedin",
      path: "https://linkedin.com",
      aria: "Find us on LinkedIn",
      iconClass: "fab fa-linkedin",
    },
    {
      name: "facebook",
      path: "https://facebook.com",
      aria: "Find us on Facebook",
      iconClass: "fab fa-facebook-square",
    },
    {
      name: "twitter",
      path: "https://twitter.com",
      aria: "Find us on Twitter",
      iconClass: "fab fa-twitter",
    },
    {
      name: "github",
      path: "https://github.com",
      aria: "Find us on Github",
      iconClass: "fab fa-github",
    },
  ],
};
