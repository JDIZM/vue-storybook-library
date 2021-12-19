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
    <path
      fill-rule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
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
