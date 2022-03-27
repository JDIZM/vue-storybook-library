<template>
  <div :class="classes" class="form__field">
    <label>
      <slot />
      <span class="icons">
        <slot name="icon" />
      </span>
      <textarea
        v-if="type === 'textarea'"
        v-model="model"
        v-bind="$attrs"
        :type="type"
        @focus.prevent="$emit('focus')"
      />
      <input
        v-else
        v-model="model"
        v-bind="$attrs"
        :type="type"
        @focus.prevent="$emit('focus')"
      />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    data: "value",
    event: "input",
  },
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    showError: Boolean,
    showSuccess: Boolean,
  },
  computed: {
    classes() {
      return {
        "--error": this.showError,
        "--success": this.showSuccess,
      };
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.form__field {
  label {
    height: 100%;
  }
  .icons {
    top: 38px;
    left: 0.5rem;
  }
  textarea {
    height: 150px;
    padding: 1rem 1.5rem 1.5rem 2.5rem;
    &:focus {
      border-bottom: 2px solid var(--input-highlight);
    }
  }
}
</style>
