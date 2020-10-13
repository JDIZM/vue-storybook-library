//  TODO button story
//  different button states.
import Button from './Button.vue'
// 

export default {
  title: 'atoms/Button',
  components: { Button},
  // FIXME actions not working!
  argTypes: { onClick: { action: 'clicked' } },
  // subcomponents: [NavDrawer, NavDropdown]
  // argTypes: {
  //   // backgroundColor: { control: 'color' },
  //   // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template:
  // didnt even need to add sub components into the markup.
  '<Button :primary="primary" />',
    // '<NavMain :links="links" :showDrawer="showDrawer" :showDropdown="showDropdown" :dropdownItems="dropdownItems"><NavDrawer @close="showDrawer = false" :links="links" :showDrawer="showDrawer" :dropdownItems="dropdownItems" /><NavDropdown :items="dropdownItems" :showDropdown="showDropdown" /></NavMain>',
});

export const Primary = Template.bind({});
Primary.args = {
  //
  primary: true
}