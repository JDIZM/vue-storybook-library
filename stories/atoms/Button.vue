<template>
  <button
    type="button"
    :class="classes"
    :style="styles"
    @click.prevent="onClick($event)"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    outline: Boolean,
    disabled: Boolean,
    destruct: Boolean,
    left: Boolean,
    block: Boolean,
    label: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: " ",
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
        "btn--secondary": !this.primary,
        "btn--outline": this.outline,
        "btn--disabled bg--disabled text--dark": this.disabled,
        "btn--destruct bg--destruct text--light": this.destruct,
        "btn--left": this.left,
        "btn--block": this.block,
      };
    },
    // inline style binding
    styles() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
  methods: {
    onClick($event) {
      if (this.disabled) return;
      this.$emit("click", $event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
