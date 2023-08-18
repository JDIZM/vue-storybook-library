<template>
  <div class="expansion-panels">
    <h2>panels</h2>
    <slot />
    <ExpansionPanel
      v-for="(panel, i) in panels"
      :key="i"
      :is-active="value.includes(getValue(panel, i))"
      data-testid="expansion-panel"
      @change="updatePanel(panel, i)"
    >
      <template #title>
        <div>{{ panel.title }}</div>
      </template>
      <template #content>
        <div>{{ panel.content }}</div>
      </template>
    </ExpansionPanel>
  </div>
</template>

<script>
import ExpansionPanel from "./ExpansionPanel.vue";

export default {
  components: {
    ExpansionPanel
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    panels: {
      type: Array,
      required: true
    }
  },
  methods: {
    getValue(item, index) {
      return item.value || index;
    },
    toggleMethod(value) {
      return this.value.filter((panel) => panel !== value);
    },
    updatePanel(item, index) {
      const value = this.getValue(item, index);

      if (this.value.includes(value)) {
        this.$emit("input", this.toggleMethod(value));
        return;
      }

      this.$emit("input", [...this.value, value]);
    }
  }
};
</script>

<style lang="scss" scoped>
.expansion-panels {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
