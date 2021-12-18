import NavMain from "./NavMain.vue";
import NavDrawer from "./NavDrawer";
import NavDropdown from "./NavDropdown";
// import logo from static files
import logoFile from "../../assets/logo.png";

// decorator for vue router
// https://github.com/storybookjs/storybook/issues/2683#issuecomment-841110043
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// Alias `NuxtLink` to `RouterLink`
Vue.component("NuxtLink", Vue.component("RouterLink"));

export default {
  title: "organisms/Nav",
  components: { NavMain, NavDrawer, NavDropdown },
  argTypes: {
    onEnquire: { action: "onEnquire" },
    onShowDrawer: { action: "onShowDrawer" },
    onCloseDrawer: { action: "onCloseDrawer" },
    onDropdown: { action: "onDropdown" },
    onRouteChange: { action: "onRouteChange" },
  },
  // create a decorator for vue router
  // https://github.com/storybookjs/storybook/issues/2683#issuecomment-841110043
  decorators: [
    (story) => ({
      components: { story },
      template: `<story />`,
      // Without a router instance, RouterLink will fail
      router: new VueRouter(),
    }),
  ],
};

// create an image object for the logo
const Logo = {
  src: logoFile,
  alt: "logo",
};

// create template
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavMain },
  template:
    '<NavMain v-bind="$props" @onEnquire="onEnquire" @onCloseDrawer="onCloseDrawer" @onShowDrawer="onShowDrawer" @onDropdown="onDropdown" />',
});
//  primary nav
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  logoSrc: Logo.src,
  phone: "0161 123 4567",
  links: [
    { name: "Item", path: "/" },
    { name: "Item", path: "/about/" },
    { name: "Dropdown" },
    { name: "Item", path: "/contact/" },
  ],
  showDrawer: false,
  showDropdown: false, // desktop only
  dropdownItems: [
    { name: "Dropdown One", path: "/dropdown-one/" },
    { name: "Dropdown Two", path: "/dropdown-two/" },
    { name: "Dropdown Three", path: "/dropdown-three/" },
  ],
};

// active drawer
export const showDrawer = Template.bind({});
showDrawer.args = {
  primary: true,
  logoSrc: Logo.src,
  phone: "0161 123 4567",
  links: [
    { name: "Item", path: "/" },
    { name: "Item", path: "/about/" },
    { name: "Dropdown" },
    { name: "Item", path: "/contact/" },
  ],
  showDrawer: true,
  showDropdown: false, // desktop only
  dropdownItems: [
    { name: "Dropdown Item", path: "/dropdown-one/" },
    { name: "Dropdown Item", path: "/dropdown-two/" },
    { name: "Dropdown Item", path: "/dropdown-three/" },
  ],
};

// active dropdown
export const showDropdown = Template.bind({});
showDropdown.args = {
  primary: true,
  logoSrc: Logo.src,
  phone: "0161 123 4567",
  links: [
    { name: "Item", path: "/" },
    { name: "Item", path: "/about/" },
    { name: "Dropdown" },
    { name: "Item", path: "/contact/" },
  ],
  showDrawer: false,
  showDropdown: true,
  dropdownItems: [
    {
      name: "Dropdown Item",
      path: "/dropdown-one/",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sodales metus non efficitur. Donec risus dolor, bibendum a magna sit amet, lacinia vehicula diam.",
    },
    {
      name: "Dropdown Item",
      path: "/dropdown-two/",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sodales metus non efficitur. Donec risus dolor, bibendum a magna sit amet, lacinia vehicula diam.",
    },
    {
      name: "Dropdown Item",
      path: "/dropdown-three/",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sodales metus non efficitur. Donec risus dolor, bibendum a magna sit amet, lacinia vehicula diam.",
    },
  ],
};
