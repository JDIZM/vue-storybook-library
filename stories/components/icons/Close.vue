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
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
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
