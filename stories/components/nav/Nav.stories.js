import NavMain from "./NavMain.vue";
import NavDrawer from "./NavDrawer";
import NavDropdown from "./NavDropdown";
import logoFile from "../../assets/logo.png";

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Alias `NuxtLink` to `RouterLink`
Vue.component("NuxtLink", Vue.component("RouterLink"));

export default {
  title: "components/Nav",
  components: { NavMain, NavDrawer, NavDropdown },
  argTypes: {
    onEnquire: { action: "onEnquire" },
    onShowDrawer: { action: "onShowDrawer" },
    onCloseDrawer: { action: "onCloseDrawer" },
    onDropdown: { action: "onDropdown" },
    onRouteChange: { action: "onRouteChange" }
  },
  // create a decorator for vue router
  // https://github.com/storybookjs/storybook/issues/2683#issuecomment-841110043
  decorators: [
    (story) => ({
      components: { story },
      template: `<story />`,
      // Without a router instance, RouterLink will fail
      router: new VueRouter()
    })
  ]
};

const Logo = {
  src: logoFile,
  alt: "logo"
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavMain },
  template:
    '<NavMain v-bind="$props" @onEnquire="onEnquire" @onCloseDrawer="onCloseDrawer" @onShowDrawer="onShowDrawer" @onDropdown="onDropdown" />'
});

const defaultProps = {
  logoSrc: Logo.src,
  phone: "0161 123 4567",
  showEnquire: true,
  links: [
    { name: "Item", path: "/" },
    { name: "Item", path: "/about/" },
    { name: "Dropdown" },
    { name: "Item", path: "/contact/" }
  ],
  dropdownItems: [
    { name: "Dropdown One", path: "/dropdown-one/" },
    { name: "Dropdown Two", path: "/dropdown-two/" },
    { name: "Dropdown Three", path: "/dropdown-three/" }
  ]
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultProps
};

export const ShowDrawer = Template.bind({});
ShowDrawer.args = {
  showDrawer: true,
  ...defaultProps
};

export const ShowDropdown = Template.bind({});
ShowDropdown.args = {
  showDropdown: true,
  ...defaultProps,
  dropdownItems: [
    {
      name: "Dropdown Item",
      path: "/dropdown-one/",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sodales metus non efficitur. Donec risus dolor, bibendum a magna sit amet, lacinia vehicula diam."
    },
    {
      name: "Dropdown Item",
      path: "/dropdown-two/",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sodales metus non efficitur. Donec risus dolor, bibendum a magna sit amet, lacinia vehicula diam."
    },
    {
      name: "Dropdown Item",
      path: "/dropdown-three/",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt sodales metus non efficitur. Donec risus dolor, bibendum a magna sit amet, lacinia vehicula diam."
    }
  ]
};
