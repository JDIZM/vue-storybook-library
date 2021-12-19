<template>
  <button :class="classes" @click="$emit('click')">
    <slot />
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    secondary: Boolean,
    outline: Boolean,
    destruct: Boolean,
    left: Boolean,
    block: Boolean,
    text: Boolean,
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        btn: true,
        "btn--primary": this.primary,
        "btn--secondary": this.secondary,
        "btn--outline": this.outline,
        "btn--disabled": this.disabled,
        "btn--destruct": this.destruct,
        "btn--left": this.left,
        "btn--block": this.block,
        "btn--text": this.text,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
