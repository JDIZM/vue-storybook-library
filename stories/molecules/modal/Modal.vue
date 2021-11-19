<template>
  <div v-if="show">
    <div class="modal bg--white text--black">
      <div class="modal__content">
        <slot />
      </div>
      <div class="modal__footer">
        <Button
          left
          label="CONFIRM"
          outline
          :disabled="disableConfirm"
          @click="
            $emit('confirm');
            show = false;
          "
        />
        <Button
          left
          label="CLOSE"
          primary
          :disabled="disableCancel"
          @click="show = false"
        />
      </div>
    </div>
    <div class="modal__overlay" @click.self="show = false" />
  </div>
</template>

<script>
import Button from "../../atoms/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    disableConfirm: Boolean,
    disableCancel: Boolean,
    value: Boolean,
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Modal.scss";
</style>
