<template>
  <div class="expansion-panel">
    <div class="expansion-panel-title" @click="selectPanel">
      <slot name="title">Panel title</slot>
    </div>
    <div v-show="isActive" class="expansion-panel-content" :class="classes">
      <slot name="content">Panel content</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "--active": this.isActive
      };
    }
  },
  methods: {
    selectPanel() {
      this.$emit("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.expansion-panel {
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
}
.expansion-panel-title {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.expansion-panel-content {
  padding: 1rem;
}
</style>