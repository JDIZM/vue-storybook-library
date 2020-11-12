import NavMain from './NavMain.vue';
import NavDrawer from './NavDrawer';
import NavDropdown from './NavDropdown';
// import NavMain from './NavMain'
// import logo from static files
// import logoFile from '../assets/flow.svg'

export default {
  title: 'organisms/Nav',
  components: { NavMain, NavDrawer, NavDropdown },
  // FIXME actions not working!
  argTypes: { onEnquire: { action: 'clicked' } },
  // subcomponents: [NavDrawer, NavDropdown]
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

// const Template = (args) => <NavMain {...args} >
// <NavDrawer {...args} />
// <NavDropdown {...args} />
// </NavMain>;

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  // didnt even need to import the sub components.
  // components: { NavMain, NavDrawer, NavDropdown },
  components: { NavMain },
  template:
  // didnt even need to add sub components into the markup.
  '<NavMain :links="links" :showDrawer="showDrawer" :showDropdown="showDropdown" :dropdownItems="dropdownItems" />',
    // '<NavMain :links="links" :showDrawer="showDrawer" :showDropdown="showDropdown" :dropdownItems="dropdownItems"><NavDrawer @close="showDrawer = false" :links="links" :showDrawer="showDrawer" :dropdownItems="dropdownItems" /><NavDropdown :items="dropdownItems" :showDropdown="showDropdown" /></NavMain>',
});
//  primary nav
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  links: [
    { name: 'Item', path: '/' },
    { name: 'Item', path: '/about/' },
    { name: 'Dropdown' },
    { name: 'Item', path: '/contact/' }
  ],
  showDrawer: false,
  showDropdown: false,
  dropdownItems: [
    { name: 'Domestic', path: '/domestic-scaffolding/' },
    { name: 'Commercial', path: '/commercial-scaffolding/' },
    { name: 'Industrial', path: '/industrial-scaffolding/' }
  ]
};

// active drawer
export const showDrawer= Template.bind({});
showDrawer.args = {
  primary: true,
  links: [
    { name: 'Item', path: '/' },
    { name: 'Item', path: '/about/' },
    { name: 'Dropdown' },
    { name: 'Item', path: '/contact/' }
  ],
  showDrawer: true,
  showDropdown: false,
  dropdownItems: [
    { name: 'Domestic', path: '/domestic-scaffolding/' },
    { name: 'Commercial', path: '/commercial-scaffolding/' },
    { name: 'Industrial', path: '/industrial-scaffolding/' }
  ]
};

// active dropdown
export const showDropdown = Template.bind({});
showDropdown.args = {
  primary: true,
  links: [
    { name: 'Item', path: '/' },
    { name: 'Item', path: '/about/' },
    { name: 'Dropdown' },
    { name: 'Item', path: '/contact/' }
  ],
  showDrawer: false,
  showDropdown: true,
  dropdownItems: [
    { name: 'Domestic', path: '/domestic-scaffolding/' },
    { name: 'Commercial', path: '/commercial-scaffolding/' },
    { name: 'Industrial', path: '/industrial-scaffolding/' }
  ]
};

// :links="links"
// :showDrawer="showDrawer"
// :dropdownItems="dropdownItems"
// @close="showDrawer = false"

// :items="dropdownItems"
// :showDropdown="showDropdown"

// We create a “template” of how args map to rendering
// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { Nav },
//   template: '<Nav />',
// });

// // create an image object for the logo
// const Logo = {
//   src: logoFile,
//   alt: 'logo'
// }
// const facebook = icon({ prefix: 'fab', iconName: 'facebookSquare' })
// const linkedin = icon({ prefix: 'fab', iconName: 'linkedin' })
// export const withAnImage = () => (
//   <img src={image.src} alt={image.alt} />
// );
// Each story then reuses that template
// export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   name: 'Company Name',
//   address: [
//     '349 Manchester Road',
//     'Manchester',
//     'M12 ABC'
//   ],
//   companyNo: '12345678',
//   privacy: '/privacy.pdf',
//   logoSrc: Logo.src
// };
