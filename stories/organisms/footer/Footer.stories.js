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
    <template v-slot:social>
      <a href="https://github.com" class="m--1">
        <github medium /> 
      </a>
      <a href="https://twitter.com" class="m--1">
        <twitter medium /> 
      </a>
      <a href="https://linkedin.com" class="m--1">
        <linked-in medium />  
      </a>
    </template>
  </VFooter>
  `,
});

const Logo = {
  src: logoFile,
  alt: "logo",
};

// export const Primary = Template.bind({});

Footer.args = {
  name: "Company Name",
  address: ["349 Manchester Road", "Manchester", "M12 ABC"],
  companyNo: "12345678",
  privacy: "/privacy.pdf",
  logoSrc: Logo.src,
};
