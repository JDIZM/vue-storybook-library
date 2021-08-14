<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    @click.prevent="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    //
    primary: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    outline: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    destruct: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: " ",
    },
    left: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  computed: {
    // class binding method 1
    isPrimary() {
      if (this.primary) {
        return ["btn", "btn--primary"];
      } else return ["btn", "btn--secondary"];
    },
    // class binding method 2
    classes() {
      return {
        btn: true,
        "btn--primary": this.primary,
        "btn--outline": this.outline,
        "btn--disabled bg--disabled text--dark": this.disabled,
        "btn--destruct bg--destruct text--light": this.destruct,
        "btn--left": this.left,
      };
    },
    // inline style binding
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>