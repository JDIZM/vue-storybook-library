import NotFoundComponent from '../../components/NotFoundComponent.vue'

export default {
  title: 'pages/NotFoundComponent',
  component: NotFoundComponent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NotFoundComponent },
  template: '<NotFoundComponent v-bind="$props" />',
});

export const Primary = Template.bind({});

Primary.args = {
  // 
}