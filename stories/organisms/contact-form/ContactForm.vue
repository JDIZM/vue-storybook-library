<template>
  <form class="form" @submit.prevent>
    <slot />
    <Button
      v-show="!hideSubmit"
      type="submit"
      left
      :label="label"
      primary
      :disabled="disableSubmit"
      @click="onSubmit"
    />
  </form>
</template>

<script>
import Button from "../../atoms/button/Button.vue";

export default {
  components: {
    Button
  },
  props: {
    disableSubmit: Boolean,
    hideSubmit: Boolean,
    label: {
      type: String,
      required: false,
      default: "SUBMIT"
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./ContactForm.scss";
</style>
