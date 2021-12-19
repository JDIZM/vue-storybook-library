<template>
  <div :class="classes" class="form__field">
    <label v-if="!hideLabel" :for="name">{{ label }}</label>
    <span v-if="showSuccess" class="icons">
      <done medium />
    </span>
    <span v-if="showError" class="icons">
      <warning medium />
    </span>
    <span v-if="!showSuccess && !showError" class="icons">
      <slot name="icon" />
    </span>
    <textarea
      v-if="type === 'textarea'"
      :id="name"
      rows="4"
      cols="50"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('update', $event.target.value)"
    />
    <input
      v-else
      :id="name"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
import Done from "../../atoms/icons/Done.vue";
import Warning from "../../atoms/icons/Warning.vue";

export default {
  components: {
    Done,
    Warning,
  },
  model: {
    data: "value",
    event: "update",
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    showError: Boolean,
    showSuccess: Boolean,
    hideLabel: Boolean,
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    classes() {
      return {
        "--error": this.showError,
        "--success": this.showSuccess,
        "form__field--no-label": this.hideLabel,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./InputGroup.scss";
</style>
