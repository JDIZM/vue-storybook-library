import PaginationComponent from "./Pagination.vue";

export default {
  title: "molecules/Pagination",
  component: PaginationComponent,
  argTypes: {
    click: { action: "click" },
    next: { action: "next" },
    prev: { action: "prev" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PaginationComponent },
  template: '<pagination-component v-bind="$props" @click="click" @next="next" @prev="prev" />'
});

const defaultProps = {
  totalPages: 20,
  rangeLength: 10
};

export const Pagination = Template.bind({});

Pagination.args = {
  currentPage: 16,
  ...defaultProps
};

export const PaginationStart = Template.bind({});
PaginationStart.args = {
  currentPage: 1,
  ...defaultProps
};

export const PaginationMiddle = Template.bind({});
PaginationMiddle.args = {
  currentPage: 7,
  ...defaultProps
};

export const PaginationEnd = Template.bind({});
PaginationEnd.args = {
  currentPage: 20,
  ...defaultProps
};
