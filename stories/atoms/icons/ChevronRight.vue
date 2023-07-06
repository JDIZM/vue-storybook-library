<template>
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
    class="icon"
    :class="classes"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
</template>

<script>
export default {
  props: {
    small: Boolean,
    medium: Boolean,
    large: Boolean
  },
  computed: {
    classes() {
      return {
        "icon--md": this.medium,
        "icon--lg": this.large
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@use "./Icons.scss";
</style>
