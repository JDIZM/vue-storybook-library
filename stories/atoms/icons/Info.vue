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
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
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
