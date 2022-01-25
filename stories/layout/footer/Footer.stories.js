import VFooter from "./Footer.vue";
import logoFile from "../../assets/logo.png";
import Github from "../../atoms/icons/Github.vue";
import Twitter from "../../atoms/icons/Twitter.vue";
import LinkedIn from "../../atoms/icons/LinkedIn.vue";

export default {
  title: "organisms/Footer",
  component: VFooter,
};

export const Footer = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VFooter, Twitter, Github, LinkedIn },
  template: `
  <VFooter v-bind="$props">
    <template #social>
      ${args.socialSlot}
    </template>
    <template #address>
    ${args.addressSlot}
    </template>
  </VFooter>
  `,
});

const Logo = {
  src: logoFile,
  alt: "logo",
};

Footer.args = {
  companyName: "Company Name",
  companyNo: "12345678",
  privacy: "/privacy",
  logoSrc: Logo.src,
  socialSlot: `
    <h3>SOCIAL</h3>
    <a href="https://github.com" class="m--1">
      <github medium /> 
    </a>
    <a href="https://twitter.com" class="m--1">
      <twitter medium /> 
    </a>
    <a href="https://linkedin.com" class="m--1">
      <linked-in medium />  
    </a>
  `,
  addressSlot: `
    <h3>Location</h3>
    <p>Manchester - Remote</p>
  `,
};
