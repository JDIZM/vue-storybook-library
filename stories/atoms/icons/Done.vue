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
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
</template>

<script>
export default {
  props: {
    small: Boolean,
    medium: Boolean,
    large: Boolean,
  },
  computed: {
    classes() {
      return {
        "icon--md": this.medium,
        "icon--lg": this.large,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./Icons.scss";
</style>
