import ExpansionPanels from "./ExpansionPanels.vue";
import ExpansionPanel from "./ExpansionPanel.vue";

// an example expansion panel using v-model to control the active panels
export default {
  title: "Components/Expansion Panel",
  component: ExpansionPanels
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExpansionPanels, ExpansionPanel },
  template: `
    <div>
      <button @click="reset">Reset</button>
      <button @click="allPanels">All Panels</button>
      <ExpansionPanels v-bind="$props" v-model="activePanels" />
    </div>
  `,
  data: () => ({
    activePanels: [1, 2]
  }),
  methods: {
    allPanels() {
      this.activePanels = [...Array(this.panels.length).fill().keys()];
    },
    reset() {
      this.activePanels = [];
    }
  }
});

export const Closed = Template.bind({});
Closed.args = {
  panels: [
    {
      title: "Panel 1",
      content: "Panel one content"
    }
  ]
};
export const Open = Template.bind({});
Open.args = {
  panels: [
    {
      title: "Panel 1",
      content: "Panel one content",
      value: "A"
    },
    {
      title: "Panel 2",
      content: "Panel two content"
    },
    {
      title: "Panel 3",
      content: "Panel three content"
    }
  ]
};
