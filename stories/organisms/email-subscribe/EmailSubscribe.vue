<template>
  <form ref="form" class="form" @submit.prevent>
    <FormInput
      name="email"
      type="email"
      placeholder="Enter your email"
      icon="email"
      :label="label"
      :show-error="showError"
      :show-success="showSuccess"
    >
      <Email medium />
    </FormInput>
    <Button
      type="submit"
      left
      label="SUBMIT"
      primary
      @click="$emit('submit')"
    />
  </form>
</template>

<script>
import FormInput from "../../molecules/input-group/InputGroup.vue";
import Button from "../../atoms/button/Button.vue";
import Email from "../../atoms/icons/Email.vue";

export default {
  components: {
    FormInput,
    Button,
    Email,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    showSuccess: Boolean,
    showError: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "./EmailSubscribe.scss";
</style>
