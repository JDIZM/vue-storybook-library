import NavMain from './NavMain.vue'
import NavDrawer from './NavDrawer'
import NavDropdown from './NavDropdown'
// import NavMain from './NavMain'
// import logo from static files
// import logoFile from '../assets/flow.svg'

export default {
  title: 'organisms/Nav',
  components: { NavMain, NavDrawer, NavDropdown },
  argTypes: { onEnquire: { action: 'clicked' } }
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
  components: { NavMain, NavDrawer, NavDropdown },
  template: '<NavMain :showDrawer="showDrawer" :showDropdown="showDropdown"><NavDrawer @close="showDrawer = false" :links="links" :showDrawer="showDrawer" :dropdownItems="dropdownItems" /><NavDropdown :items="dropdownItems" :showDropdown="showDropdown" /></NavMain>',
});

export const Nav = Template.bind({});
Nav.args = {
  primary: true,
  links: [
    'one',
    'two'
  ],
  showDrawer: false,
  showDropdown: false,
  dropdownItems: [
    'dropdown one',
    'dropdown two'
  ]
}


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