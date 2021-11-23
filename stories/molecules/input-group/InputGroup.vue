<template>
  <div :class="classes" class="form__field">
    <label v-if="!hideLabel" :for="name">{{ label }}</label>
    <span v-if="showSuccess" class="material-icons">check</span>
    <span v-if="showError" class="material-icons text--error">error</span>
    <span v-else-if="showIcon && !showSuccess" class="material-icons">
      {{ icon }}
    </span>
    <textarea
      v-if="type === 'textarea'"
      :id="name"
      rows="4"
      cols="50"
      class="bg--primary-100"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('update', $event.target.value)"
    />
    <input
      v-else
      :id="name"
      class="bg--primary-100"
      :value="value"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
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
    showIcon: {
      type: Boolean,
      required: true,
    },
    showError: {
      type: Boolean,
      default: false,
    },
    showSuccess: {
      type: Boolean,
      default: false,
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
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
  methods: {
    onSubmit() {
      this.$emit("onSubmit");
    },
  },
};
</script>

<style lang="scss">
@import "./InputGroup.scss";
</style>
