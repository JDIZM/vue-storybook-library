<template>
  <form class="form" @submit.prevent>
    <slot />
    <Button type="submit" left label="SUBMIT" primary @click="onSubmit" />
  </form>
</template>

<script>
import Button from "../../atoms/button/Button.vue";

export default {
  components: {
    Button,
  },
  methods: {
    onSubmit() {
      this.$emit("submit");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ContactForm.scss";
</style>
