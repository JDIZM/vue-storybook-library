<template>
  <label class="radio" :class="classes">
    <input v-model="model" :value="value" v-bind="$attrs" :disabled="disabled" type="radio" class="radio__input" />
    <slot />
  </label>
</template>

<script>
export default {
  components: {},
  inheritAttrs: false,
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    disabled: Boolean,
    checked: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    classes() {
      return {
        "--disabled": this.disabled
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.radio {
  height: 1rem;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: 1rem;
  margin-right: 2rem;
  &__input {
    border-radius: 50%;
    padding: 0;
    margin-right: 0.5rem;
    appearance: none;
    height: 1rem;
    width: 1rem;
    border: 1px solid var(--secondary);
    background-color: var(--color-light);
    vertical-align: middle;
    &:focus {
      border: 1px solid var(--secondary);
    }
    &:disabled[type="radio"] {
      opacity: 0.4;
      cursor: not-allowed;
    }
    &:checked[type="radio"] {
      background-color: var(--secondary);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    }
  }
  &.--disabled {
    opacity: 0.6;
  }
}
</style>
